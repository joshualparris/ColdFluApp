import Link from "next/link";

export default function MethodologyPage() {
  return (
    <>
      <p className="eyebrow">Methodology</p>
      <h1>How this knowledge base is built</h1>
      <p className="lede">This project uses a structured, evidence-aware workflow. It is not a substitute for clinician advice and it does not claim medical approval.</p>
      <section className="card">
        <h2>Current approach</h2>
        <ul>
          <li>Evidence is attached to individual claims rather than a whole page.</li>
          <li>Modules are validated against schema and review gates before entering the public build.</li>
          <li>Safety and triage content remain separate from general comfort guidance.</li>
        </ul>
      </section>
      <p>
        <Link href="/about/policy">Read the content policy</Link>
      </p>
    </>
  );
}
