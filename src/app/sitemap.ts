import type { MetadataRoute } from "next";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const base = "https://example.invalid"; return [{ url: base, changeFrequency: "monthly", priority: 1 }, ...publicModules(await getCanonicalModules()).map((m) => ({ url: `${base}/modules/${m.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }))]; }
