import Link from "next/link";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";

export default async function Home() {
  const published = publicModules(await getCanonicalModules());
  return <>
    <p className="eyebrow">Australian-first · evidence governance</p>
    <h1>Public knowledge base status</h1>
    <p className="lede">This is a minimal technical scaffold for a pre-publication research project. Product interface development is deferred.</p>
    {published.length === 0 ? <section className="notice"><h2>No medical modules are published</h2><p>Research drafts are not exposed by this application. Publication requires claim-level source verification and independent evidence, clinical and editorial review.</p></section> : <section><h2>Published modules</h2><ul>{published.map((module) => <li key={module.slug}><Link href={`/modules/${module.slug}`}>{module.title}</Link></li>)}</ul></section>}
  </>;
}
