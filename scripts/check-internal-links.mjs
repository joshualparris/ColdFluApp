import {readdir, readFile, stat} from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const ignoredDirectories = new Set([".git", ".next", "node_modules", "coverage", "archive", "_copilot-staging"]);
const sourceExtensions = new Set([".md", ".mdx", ".ts", ".tsx", ".js", ".jsx", ".json", ".yaml", ".yml"]);

async function walk(dir) {
  const entries = await readdir(dir, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }
    const absolutePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        files.push(...await walk(absolutePath));
      }
      continue;
    }
    if (sourceExtensions.has(path.extname(entry.name))) {
      files.push(absolutePath);
    }
  }
  return files;
}

function stripFragmentAndQuery(target) {
  const [pathname] = target.split("#");
  return pathname.split("?")[0];
}

function isExternalLink(target) {
  return /^(?:[a-z]+:)?\/\//i.test(target) || /^(?:mailto|tel|data|javascript):/i.test(target);
}

function getCandidatePaths(target, sourceFile) {
  const relativeTarget = stripFragmentAndQuery(target.trim());
  if (!relativeTarget || isExternalLink(relativeTarget)) {
    return [];
  }

  const candidates = [];
  const sourceDir = path.dirname(sourceFile);
  if (relativeTarget.startsWith("/")) {
    const rootRelative = relativeTarget.replace(/^\/+/, "");
    candidates.push(path.join(repoRoot, rootRelative));
    if (!path.extname(rootRelative)) {
      candidates.push(path.join(repoRoot, rootRelative, "index.md"));
      candidates.push(path.join(repoRoot, rootRelative, "index.mdx"));
      candidates.push(path.join(repoRoot, "src", "app", rootRelative, "page.tsx"));
      candidates.push(path.join(repoRoot, "src", "app", rootRelative, "page.ts"));
      candidates.push(path.join(repoRoot, "src", "app", rootRelative, "page.jsx"));
    }
  } else {
    candidates.push(path.resolve(sourceDir, relativeTarget));
    if (!path.extname(relativeTarget)) {
      candidates.push(path.resolve(sourceDir, `${relativeTarget}.md`));
      candidates.push(path.resolve(sourceDir, `${relativeTarget}.mdx`));
      candidates.push(path.resolve(sourceDir, `${relativeTarget}/index.md`));
      candidates.push(path.resolve(sourceDir, `${relativeTarget}/index.mdx`));
    }
  }

  return candidates;
}

async function pathExists(targetPath) {
  try {
    const info = await stat(targetPath);
    return info.isFile() || info.isDirectory();
  } catch {
    return false;
  }
}

function extractMarkdownLinks(content) {
  const links = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of content.matchAll(regex)) {
    const rawTarget = match[1].trim();
    const cleaned = rawTarget.replace(/^<|>$/g, "").trim();
    if (!cleaned || cleaned.startsWith("#")) {
      continue;
    }
    links.push(cleaned.split(/\s+/)[0]);
  }
  return links;
}

async function findBrokenInternalLinks(rootDir = repoRoot, files = null) {
  const targetFiles = files ?? await walk(rootDir);
  const failures = [];

  for (const filePath of targetFiles) {
    if (!filePath.endsWith(".md") && !filePath.endsWith(".mdx") && !filePath.endsWith(".tsx") && !filePath.endsWith(".ts") && !filePath.endsWith(".js") && !filePath.endsWith(".jsx") && !filePath.endsWith(".json") && !filePath.endsWith(".yaml") && !filePath.endsWith(".yml")) {
      continue;
    }

    const content = await readFile(filePath, "utf8");
    for (const link of extractMarkdownLinks(content)) {
      const candidates = getCandidatePaths(link, filePath);
      if (candidates.length === 0) {
        continue;
      }
      const exists = await Promise.all(candidates.map((candidate) => pathExists(candidate)));
      if (!exists.some(Boolean)) {
        failures.push({file: path.relative(rootDir, filePath), link, resolved: path.relative(rootDir, candidates[0])});
      }
    }
  }

  return failures;
}

export {findBrokenInternalLinks};

if (import.meta.url === `file://${process.argv[1]}`) {
  const failures = await findBrokenInternalLinks();
  if (failures.length > 0) {
    console.error("Broken internal links detected:");
    for (const failure of failures) {
      console.error(`- ${failure.file}: ${failure.link} -> ${failure.resolved}`);
    }
    process.exitCode = 1;
  } else {
    console.log("Checked internal links successfully.");
  }
}
