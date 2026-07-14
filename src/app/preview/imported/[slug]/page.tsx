import { notFound } from "next/navigation";
import { ImportedModuleView } from "@/components/modules/imported-module";
import { getImportedModules, getImportedSources, previewsEnabled } from "@/lib/content/imported";
export async function generateStaticParams() { return previewsEnabled() ? (await getImportedModules()).map(({ slug }) => ({ slug })) : []; }
export default async function ImportedPage({ params }: { params: Promise<{ slug: string }> }) { if (!previewsEnabled()) notFound(); const { slug } = await params, modules = await getImportedModules(), module = modules.find((x) => x.slug === slug); if (!module) notFound(); return <ImportedModuleView module={module} sources={await getImportedSources()} />; }
