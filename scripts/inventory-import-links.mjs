import { readFile, writeFile } from "node:fs/promises";

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
  console.error("Usage: node scripts/inventory-import-links.mjs <input.md> <output.json>");
  process.exit(2);
}

const text = await readFile(inputPath, "utf8");
const linkPattern = /\[([^\]]+)]\((https?:\/\/[^)]+)\)/g;
const occurrences = [];
for (const match of text.matchAll(linkPattern)) {
  const before = text.slice(0, match.index);
  occurrences.push({
    label: match[1].trim(),
    url: match[2].trim(),
    line: before.split(/\r?\n/).length,
  });
}

const grouped = new Map();
for (const occurrence of occurrences) {
  const key = occurrence.url.replace(/\/$/, "");
  const existing = grouped.get(key) ?? { ...occurrence, occurrences: [] };
  existing.occurrences.push({ line: occurrence.line, label: occurrence.label });
  grouped.set(key, existing);
}

async function resolve(entry) {
  let result;
  try {
    const response = await fetch(entry.url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
      headers: { "user-agent": "ColdFluResearch-link-inventory/0.1" },
    });
    const contentType = response.headers.get("content-type") ?? "";
    let title = null;
    if (contentType.includes("text/html")) {
      const body = await response.text();
      const titleMatch = body.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      title = titleMatch?.[1].replace(/\s+/g, " ").trim() ?? null;
    }
    result = {
      status: response.status,
      ok: response.ok,
      resolvedUrl: response.url,
      contentType,
      liveTitle: title,
    };
  } catch (error) {
    result = { status: null, ok: false, resolvedUrl: null, contentType: null, liveTitle: null, error: String(error) };
  }
  const hostname = new URL(entry.url).hostname.toLowerCase();
  return {
    url: entry.url,
    suppliedLabels: [...new Set(entry.occurrences.map((item) => item.label))],
    lines: entry.occurrences.map((item) => item.line),
    duplicateOccurrences: entry.occurrences.length,
    hostname,
    likelyAustralian: hostname.endsWith(".gov.au") || hostname.endsWith(".org.au") || hostname.endsWith(".edu.au"),
    ...result,
    verificationStatus: "resolution-check-only-not-evidence-verified",
  };
}

const entries = [];
for (const entry of grouped.values()) entries.push(await resolve(entry));

const report = {
  schemaVersion: 1,
  inputPath: inputPath.replaceAll("\\", "/"),
  generatedAt: new Date().toISOString(),
  warning: "A successful response verifies only that a URL resolved during this run. It does not verify authorship, date, evidence, applicability, funding, conflicts, corrections, retractions or any associated health claim.",
  occurrenceCount: occurrences.length,
  uniqueUrlCount: entries.length,
  resolvingCount: entries.filter((entry) => entry.ok).length,
  unresolvedCount: entries.filter((entry) => !entry.ok).length,
  entries,
};

await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Inventoried ${report.uniqueUrlCount} unique URLs (${report.resolvingCount} resolved, ${report.unresolvedCount} unresolved).`);
