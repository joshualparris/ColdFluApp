import "server-only";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { ImportedPrototypeModule, ImportedSourceCandidate, PrototypeEvidence } from "./types";

const importedRoot = path.join(process.cwd(), "Chatgpt", "cold-flu-home-care-kb", "cold-flu-home-care-kb");
const labels = new Set<PrototypeEvidence>(["Strong", "Moderate", "Weak-or-mixed", "Traditional-but-untested"]);
const text = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

export function previewsEnabled(env = process.env): boolean {
  return env.NODE_ENV !== "production" || env.ENABLE_UNPUBLISHED_PREVIEWS === "true";
}

export function validateImportedSources(value: unknown): ImportedSourceCandidate[] {
  if (!Array.isArray(value) || value.length !== 39) throw new Error(`Expected 39 imported sources; found ${Array.isArray(value) ? value.length : "non-array"}.`);
  const ids = new Set<string>();
  for (const item of value as ImportedSourceCandidate[]) {
    if (![item.id, item.title, item.organisation, item.type, item.url, item.year, item.note].every(text)) throw new Error("Imported source has a missing required field.");
    if (ids.has(item.id)) throw new Error(`Duplicate imported source ID: ${item.id}`);
    ids.add(item.id);
    try { const url = new URL(item.url); if (!['http:', 'https:'].includes(url.protocol)) throw new Error(); } catch { throw new Error(`Invalid imported source URL: ${item.id}`); }
  }
  return value as ImportedSourceCandidate[];
}

export function validateImportedModules(value: unknown, sources: ImportedSourceCandidate[]): ImportedPrototypeModule[] {
  if (!Array.isArray(value) || value.length !== 28) throw new Error(`Expected 28 imported modules; found ${Array.isArray(value) ? value.length : "non-array"}.`);
  const ids = new Set<number>(), slugs = new Set<string>(), sourceIds = new Set(sources.map((s) => s.id));
  for (const item of value as ImportedPrototypeModule[]) {
    if (!Number.isInteger(item.id) || ![item.slug, item.section, item.title, item.summary, item.evidenceSnapshot, item.reviewDate].every(text)) throw new Error("Imported module has a missing required field.");
    if (ids.has(item.id) || slugs.has(item.slug)) throw new Error(`Duplicate imported module ID or slug: ${item.slug}`);
    ids.add(item.id); slugs.add(item.slug);
    for (const key of ["interventions", "practicalSteps", "avoidOrCare", "myths", "redFlags", "unsettled", "sourceIds"] as const) if (!Array.isArray(item[key])) throw new Error(`${item.slug}.${key} must be an array.`);
    for (const intervention of item.interventions) {
      if (!labels.has(intervention.evidence) || ![intervention.name, intervention.finding, intervention.practical, intervention.mechanism, intervention.cautions].every(text)) throw new Error(`Invalid intervention in ${item.slug}.`);
    }
    for (const id of item.sourceIds) if (!sourceIds.has(id)) throw new Error(`${item.slug} references missing imported source ${id}.`);
    for (const row of item.comparisonRows ?? []) for (const [key, cell] of Object.entries(row)) if (!text(key) || typeof cell !== "string") throw new Error(`Unsafe comparison row in ${item.slug}.`);
  }
  return [...value as ImportedPrototypeModule[]].sort((a, b) => a.id - b.id);
}

export async function getImportedSources() {
  return validateImportedSources(JSON.parse(await readFile(path.join(importedRoot, "src", "content", "sources.json"), "utf8")));
}
export async function getImportedModules() {
  const directory = path.join(importedRoot, "src", "content", "modules");
  const files = (await readdir(directory)).filter((file) => file.endsWith(".json")).sort();
  const modules = await Promise.all(files.map(async (file) => JSON.parse(await readFile(path.join(directory, file), "utf8"))));
  return validateImportedModules(modules, await getImportedSources());
}
