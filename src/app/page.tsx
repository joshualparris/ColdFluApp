import Link from "next/link";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";
import { getModuleVisual } from "@/lib/content/module-visuals";

export default async function Home() {
  const published = publicModules(await getCanonicalModules());
  return <>
    <p className="eyebrow">Australian-first · evidence governance</p>
    <h1>Public knowledge base status</h1>
    <p className="lede">This is a minimal technical scaffold for a pre-publication research project. Product interface development is deferred.</p>
    <p style={{ marginTop: "1rem" }}>
      <Link href="/modules" style={{ fontWeight: 700 }}>Browse the published module index</Link> or <Link href="/about/methodology" style={{ fontWeight: 700 }}>read the methodology</Link>.
    </p>
    <p style={{ marginTop: "1rem" }}>
      <Link href="/research-preview/media" style={{ fontWeight: 700 }}>Browse the media library</Link> for curated videos and podcasts.
    </p>
    <p style={{ marginTop: "1rem" }}>
      <Link href="/about/accessibility">Accessibility</Link> · <Link href="/about/privacy">Privacy</Link> · <Link href="/about/corrections">Corrections</Link>
    </p>
    <section className="card-grid" style={{ marginTop: "1.5rem" }}>
      {published.map((module) => {
        const visual = getModuleVisual(module.slug);
        return <article className="card" key={module.slug}>
          <img src={visual.src} alt={visual.alt} className="module-card-image" />
          <h2><Link href={`/modules/${module.slug}`}>{module.title}</Link></h2>
          <p>{module.description}</p>
        </article>;
      })}
    </section>
    {published.length === 0 ? <section className="notice"><h2>No medical modules are published</h2><p>Research drafts are not exposed by this application. Publication requires claim-level source verification and independent evidence, clinical and editorial review.</p></section> : null}
  </>;
}
