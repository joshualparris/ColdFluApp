import Link from "next/link";

export default function PolicyPage() {
  return (
    <>
      <p className="eyebrow">Policy</p>
      <h1>Content policy and review principles</h1>
      <p className="lede">This project is pre-publication and cannot be treated as approved medical guidance.</p>
      <section className="card">
        <h2>Principles</h2>
        <ul>
          <li>We distinguish evidence, symptom relief, illness duration, prevention, and harms.</li>
          <li>We do not provide diagnosis, personalisation, dosing calculators, or health-data collection.</li>
          <li>Unpublished, imported, or draft content remains clearly marked and excluded from public publication routes.</li>
        </ul>
      </section>
      <p>
        <Link href="/about/methodology">Read the methodology</Link>
      </p>
    </>
  );
}
