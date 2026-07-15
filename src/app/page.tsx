import Image from "next/image";
import Link from "next/link";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";
import { getModuleVisual } from "@/lib/content/module-visuals";

export default async function Home() {
  const published = publicModules(await getCanonicalModules());
  return (
    <>
      <section className="card" style={{ marginBottom: "1.5rem" }}>
        <p className="eyebrow">Australian-first · evidence governance</p>
        <h1>Public knowledge base status</h1>
        <p className="lede">This project turns respiratory self-care research into structured, reviewable modules that can be explored safely without presenting them as approved medical advice.</p>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/modules" style={{ fontWeight: 700 }}>Browse the module index</Link> · <Link href="/sources" style={{ fontWeight: 700 }}>Browse source records</Link> · <Link href="/about/methodology" style={{ fontWeight: 700 }}>Read the methodology</Link>
        </p>
      </section>
      <section className="card-grid" style={{ marginTop: "1.5rem" }}>
        {published.map((module) => {
          const visual = getModuleVisual(module.slug);
          return (
            <article className="card" key={module.slug}>
              <Image src={visual.src} alt={visual.alt} className="module-card-image" width={800} height={480} />
              <h2><Link href={`/modules/${module.slug}`}>{module.title}</Link></h2>
              <p>{module.description}</p>
            </article>
          );
        })}
      </section>
      <section className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Support and policy</h2>
        <p>
          <Link href="/research-preview/media">Media library</Link> · <Link href="/about/accessibility">Accessibility</Link> · <Link href="/about/privacy">Privacy</Link> · <Link href="/about/corrections">Corrections</Link>
        </p>
      </section>
      {published.length === 0 ? <section className="notice"><h2>No medical modules are published</h2><p>Research drafts are not exposed by this application. Publication requires claim-level source verification and independent evidence, clinical and editorial review.</p></section> : null}
    </>
  );
}
