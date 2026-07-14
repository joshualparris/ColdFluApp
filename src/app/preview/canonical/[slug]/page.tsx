import { notFound } from "next/navigation";
import { CanonicalModuleView } from "@/components/modules/canonical-module";
import { getCanonicalModules, getCanonicalSources } from "@/lib/content/canonical";
import { previewsEnabled } from "@/lib/content/imported";
export async function generateStaticParams() { return previewsEnabled() ? (await getCanonicalModules()).filter((m) => m.status !== "published").map(({ slug }) => ({ slug })) : []; }
export default async function CanonicalPreview({ params }: { params: Promise<{ slug: string }> }) { if (!previewsEnabled()) notFound(); const { slug } = await params, module = (await getCanonicalModules()).find((x) => x.slug === slug && x.status !== "published"); if (!module) notFound(); return <CanonicalModuleView module={module} sources={await getCanonicalSources()} preview />; }
