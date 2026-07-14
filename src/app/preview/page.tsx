import { notFound } from "next/navigation";
import Link from "next/link";
import { DraftBanner } from "@/components/safety/draft-banner";
import { PreviewBrowser } from "@/components/navigation/preview-browser";
import { getImportedModules, previewsEnabled } from "@/lib/content/imported";
import { getCanonicalModules } from "@/lib/content/canonical";
export default async function PreviewHome() { if (!previewsEnabled()) notFound(); const imported = await getImportedModules(), canonical = await getCanonicalModules(); return <><DraftBanner origin="imported" /><h1>Unpublished research preview</h1><p>This isolated workspace contains {imported.length} imported prototype modules and {canonical.length} canonical draft. Prototype evidence labels are editorial assessments, not GRADE certainty.</p><p><Link href="/preview/sources">Browse 39 candidate sources</Link> · <Link href="/preview/canonical/sore-throat">Open canonical sore-throat draft</Link></p><PreviewBrowser items={imported.map((m) => ({ slug: m.slug, title: m.title, section: m.section, evidence: [...new Set(m.interventions.map((i) => i.evidence))] }))} /></>; }
