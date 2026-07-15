import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const requiredResearch = ["protocol.md", "search-log.md", "screening.md", "extraction.json", "claim-source-map.json", "excluded-studies.md"];
const supportedJurisdictions = new Set(["GLOBAL", "AU", "GB"]);
const placeholders = /\b(?:todo|tbd|fixme|placeholder|unresolved review)\b/i;

export async function validateRepository(root = process.cwd(), today = new Date().toISOString().slice(0, 10)) {
  const readJson = async file => JSON.parse(await readFile(file, "utf8"));
  const listJson = async directory => (await readdir(directory, { withFileTypes: true }))
    .filter(entry => entry.isFile() && entry.name.endsWith(".json")).map(entry => path.join(directory, entry.name));
  const ajv = new Ajv2020({ allErrors: true, strict: true }); addFormats(ajv);
  const validateModule = ajv.compile(await readJson(path.join(root, "schemas", "module.schema.json")));
  const validateSource = ajv.compile(await readJson(path.join(root, "schemas", "source.schema.json")));
  const sourceFiles = await listJson(path.join(root, "content", "sources"));
  const moduleFiles = await listJson(path.join(root, "content", "modules"));
  const errors = []; const sources = new Map(); const moduleIds = new Map(); const slugs = new Map();
  const fail = (file, message) => errors.push({ file, message });

  for (const file of sourceFiles) {
    let data; try { data = await readJson(file); } catch (error) { fail(file, `invalid JSON: ${error.message}`); continue; }
    if (!validateSource(data)) for (const error of validateSource.errors ?? []) fail(file, `${error.instancePath} ${error.message}`.trim());
    if (sources.has(data.id)) fail(file, `duplicate source id ${data.id}`); else sources.set(data.id, data);
    if (!supportedJurisdictions.has(data.jurisdiction)) fail(file, `unsupported jurisdiction ${data.jurisdiction}`);
  }
  const modules = [];
  for (const file of moduleFiles) {
    let data; try { data = await readJson(file); } catch (error) { fail(file, `invalid JSON: ${error.message}`); continue; }
    modules.push({ file, data });
    if (!validateModule(data)) for (const error of validateModule.errors ?? []) fail(file, `${error.instancePath} ${error.message}`.trim());
    if (moduleIds.has(data.id)) fail(file, `duplicate module id ${data.id}`); else moduleIds.set(data.id, file);
    if (slugs.has(data.slug)) fail(file, `duplicate module slug ${data.slug}`); else slugs.set(data.slug, file);
  }
  for (const { file, data } of modules) {
    const referenced = new Set([...(data.sourceIds ?? []), ...(data.claims ?? []).flatMap(x => x.sourceIds ?? []), ...(data.practicalGuidance ?? []).flatMap(x => x.sourceIds ?? []), ...(data.myths ?? []).flatMap(x => x.sourceIds ?? []), ...(data.jurisdictionNotes ?? []).flatMap(x => x.sourceIds ?? []), ...(data.safety?.redFlags ?? []).flatMap(x => x.sourceIds ?? []), ...(data.safety?.vulnerableGroups ?? []).flatMap(x => x.sourceIds ?? [])]);
    for (const id of referenced) if (!sources.has(id)) fail(file, `references missing source ${id}`);
    for (const jurisdiction of new Set([...(data.jurisdictions ?? []), ...(data.claims ?? []).flatMap(x => x.jurisdictions ?? []), ...(data.jurisdictionNotes ?? []).map(x => x.jurisdiction)])) if (!supportedJurisdictions.has(jurisdiction)) fail(file, `unsupported jurisdiction ${jurisdiction}`);
    const evidenceReviewer = data.review?.evidenceReviewer;
    const accountableEvidenceReviewer = evidenceReviewer && !/\b(?:ai|codex|chatgpt|claude|model|assistant)\b/i.test(evidenceReviewer);
    for (const claim of data.claims ?? []) {
      if (claim.reviewedAt && !accountableEvidenceReviewer) fail(file, `claim ${claim.id} has reviewedAt without an accountable evidence reviewer`);
      if (claim.reviewedAt && data.review?.lastClinicallyReviewed && claim.reviewedAt > data.review.lastClinicallyReviewed) fail(file, `claim ${claim.id} review date is after the module clinical review date`);
    }
    if (data.status === "published") {
      for (const field of ["evidenceReviewer", "clinicalReviewer", "editorialReviewer", "lastClinicallyReviewed", "nextReviewDue"]) if (!data.review?.[field]) fail(file, `published module requires review.${field}`);
      if (data.review?.nextReviewDue && data.review.nextReviewDue < today) fail(file, "published module review is overdue");
      for (const claim of data.claims ?? []) { if (!(claim.sourceIds?.length)) fail(file, `published material claim ${claim.id} has no sources`); if (!claim.reviewedAt) fail(file, `published claim ${claim.id} requires reviewedAt`); }
      for (const related of data.relatedModules ?? []) if (!moduleIds.has(related)) fail(file, `references missing related module ${related}`);
      if (placeholders.test(JSON.stringify(data))) fail(file, "published module contains placeholder or unresolved review text");
      for (const item of [...(data.safety?.redFlags ?? []), ...(data.safety?.vulnerableGroups ?? [])]) {
        if (["call_emergency", "urgent_assessment"].includes(item.action) && !item.sourceIds?.some(id => sources.get(id)?.jurisdiction === "AU")) fail(file, "emergency content lacks a supporting Australian source");
      }
    }
    const researchDir = path.join(root, "content", "research", data.slug);
    try {
      await access(researchDir);
      for (const name of requiredResearch) {
        const artefact = path.join(researchDir, name);
        try { await access(artefact); if (name.endsWith(".json")) await readJson(artefact); }
        catch (error) { fail(file, error?.name === "SyntaxError" ? `research package has malformed ${name}` : `research package missing ${name}`); }
      }
      try {
        const claimMap = await readJson(path.join(researchDir, "claim-source-map.json"));
        const claimIds = new Set((data.claims ?? []).map(claim => claim.id));
        if (claimMap.moduleId !== data.id) fail(file, "claim-source map moduleId does not match module");
        for (const mapping of claimMap.claims ?? []) {
          if (!claimIds.has(mapping.claimId)) fail(file, `claim-source map references missing claim ${mapping.claimId}`);
          for (const sourceId of mapping.sourceIds ?? []) if (!sources.has(sourceId)) fail(file, `claim-source map references missing source ${sourceId}`);
        }
      } catch (error) { if (error?.name !== "SyntaxError") fail(file, `cannot validate claim-source map: ${error.message}`); }
      try {
        const extraction = await readJson(path.join(researchDir, "extraction.json"));
        for (const record of extraction.records ?? []) if (!sources.has(record.sourceId)) fail(file, `extraction references missing source ${record.sourceId}`);
      } catch (error) { if (error?.name !== "SyntaxError") fail(file, `cannot validate extraction: ${error.message}`); }
    } catch { if (data.status !== "proposed" && data.status !== "researching") fail(file, "missing research package"); }
  }
  return { errors, moduleCount: moduleFiles.length, sourceCount: sourceFiles.length };
}

async function main() {
  const result = await validateRepository();
  if (result.errors.length) { for (const e of result.errors) console.error(`\n${path.relative(process.cwd(), e.file)}\n  ${e.message}`); process.exitCode = 1; }
  else console.log(`Validated ${result.moduleCount} module(s) and ${result.sourceCount} source(s).`);
}
if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
