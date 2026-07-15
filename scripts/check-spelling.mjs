import {readFile, readdir} from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const ignoredDirectories = new Set([".git", ".next", "node_modules", "coverage", "archive", "_copilot-staging"]);
const extensions = new Set([".md", ".mdx", ".ts", ".tsx", ".js", ".jsx", ".json", ".yaml", ".yml"]);
const excludedFiles = new Set(["package-lock.json"]);
const commonWords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "but", "by", "can", "check", "content", "data", "docs", "for", "from", "guidance",
  "has", "health", "home", "in", "into", "is", "it", "its", "json", "module", "must", "not", "of", "on", "or", "our", "page", "pages",
  "public", "review", "route", "routes", "schema", "source", "sources", "the", "this", "to", "url", "use", "using", "with", "workflow"
]);

async function walk(dir) {
  const entries = await readdir(dir, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...await walk(absolutePath));
      }
      continue;
    }
    if (extensions.has(path.extname(entry.name)) && !excludedFiles.has(entry.name)) {
      files.push(absolutePath);
    }
  }
  return files;
}

function tokenize(content) {
  return content
    .replace(/`([^`]+)`/g, " $1 ")
    .replace(/\[[^\]]+\]\([^)]*\)/g, " ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.toLowerCase());
}

async function findPotentialSpellingIssues() {
  const files = await walk(repoRoot);
  const issues = [];
  for (const file of files) {
    const content = await readFile(file, "utf8");
    const words = tokenize(content);
    for (const word of words) {
      if (word.length < 4 || commonWords.has(word)) continue;
      if (/^[0-9]+$/.test(word)) continue;
      if (!/^[a-z]+$/.test(word)) continue;
      if (!/[aeiou]/.test(word)) continue;
      if (word.endsWith("ing") || word.endsWith("ed") || word.endsWith("ly") || word.endsWith("er") || word.endsWith("est")) continue;
      if (word.includes("http") || word.includes("https") || word.includes("github") || word.includes("next") || word.includes("playwright")) continue;
      if (word[0] === word[0].toUpperCase()) continue;
      if (word.endsWith("s") && word.length > 4 && !word.endsWith("ss")) continue;
      if (word === "a11y") continue;
      issues.push({file: path.relative(repoRoot, file), word});
    }
  }
  return issues.filter((issue, index, arr) => arr.findIndex((other) => other.file === issue.file && other.word === issue.word) === index);
}

export {findPotentialSpellingIssues};

if (import.meta.url === `file://${process.argv[1]}`) {
  const issues = await findPotentialSpellingIssues();
  if (issues.length > 0) {
    console.error("Potential spelling issues detected:");
    for (const issue of issues.slice(0, 80)) {
      console.error(`- ${issue.file}: ${issue.word}`);
    }
    process.exitCode = 1;
  } else {
    console.log("Spelling check completed successfully.");
  }
}
