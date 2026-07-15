import { PageShell } from "@/components/content/page-shell";

export default function TransparencyPage() {
  return (
    <PageShell
      eyebrow="Transparency"
      title="Project status, scope and accountability"
      intro="This is an Australian-first pre-publication research project. No medical module is currently approved for public use."
    >
      <section className="card">
        <h2>Supported jurisdictions</h2>
        <p>Australia is the first intended jurisdiction, but it is not yet a supported public medical-content release. No other jurisdiction is currently supported.</p>
      </section>
      <section className="card">
        <h2>Known limitations</h2>
        <ul>
          <li>Research drafts and imported material have not completed independent evidence, Australian clinical or editorial review.</li>
          <li>The project does not diagnose illness, personalise treatment, calculate doses or collect symptom information.</li>
          <li>Current automated accessibility checks do not establish WCAG 2.2 AA conformance.</li>
        </ul>
      </section>
      <section className="card">
        <h2>Reviewers and ownership</h2>
        <p>The legal/project owner, Australian clinical reviewer, evidence-methods reviewer and plain-language/accessibility editor are not yet appointed. No draft should be interpreted as approved.</p>
      </section>
      <section className="card">
        <h2>Funding and change history</h2>
        <p>No project funding, advertising, affiliate arrangement or sponsorship is recorded. Source-level funding and conflicts remain part of evidence review. Repository commits and correction records provide the current change trail.</p>
      </section>
    </PageShell>
  );
}
