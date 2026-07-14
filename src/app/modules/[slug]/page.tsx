import { notFound } from "next/navigation";
import { CanonicalModuleView } from "@/components/modules/canonical-module";
import { getCanonicalModules, getCanonicalSources, publicModules } from "@/lib/content/canonical";
export async function generateStaticParams() { return publicModules(await getCanonicalModules()).map(({ slug }) => ({ slug })); }
export default async function PublicModule({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const matchingModule = publicModules(await getCanonicalModules()).find((x) => x.slug === slug);
  if (!matchingModule) notFound();
  return <CanonicalModuleView module={matchingModule} sources={await getCanonicalSources()} />;
}
