import "server-only";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { CanonicalModule, CanonicalSource } from "./types";

async function readJsonDirectory<T>(directory: string): Promise<T[]> {
  const files = (await readdir(directory)).filter((file) => file.endsWith(".json")).sort();
  return Promise.all(files.map(async (file) => JSON.parse(await readFile(path.join(directory, file), "utf8")) as T));
}
export const getCanonicalModules = () => readJsonDirectory<CanonicalModule>(path.join(process.cwd(), "content", "modules"));
export const getCanonicalSources = () => readJsonDirectory<CanonicalSource>(path.join(process.cwd(), "content", "sources"));
export const publicModules = (modules: CanonicalModule[]) => modules.filter((module) => module.status === "published");
