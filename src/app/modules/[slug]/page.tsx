import { notFound } from "next/navigation";
import { CanonicalModuleView } from "@/components/modules/canonical-module";
import { getCanonicalModules, getCanonicalSources, publicModules } from "@/lib/content/canonical";
export async function generateStaticParams() { return publicModules(await getCanonicalModules()).map(({ slug }) => ({ slug })); }
export default async function PublicModule({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const module = publicModules(await getCanonicalModules()).find((x) => x.slug === slug); if (!module) notFound(); return <CanonicalModuleView module={module} sources={await getCanonicalSources()} />; }
