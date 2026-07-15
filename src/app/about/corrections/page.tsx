import { PageShell } from "@/components/content/page-shell";
import { buildCorrectionFormState, createCorrectionReport } from "@/lib/content/corrections";

export default function CorrectionsPage() {
  const state = buildCorrectionFormState({
    moduleSlug: "sore-throat",
    email: "reader@example.com",
    issue: "A source link looks outdated and should be rechecked before publication.",
  });
  const report = createCorrectionReport({
    moduleSlug: state.moduleSlug,
    email: state.email,
    issue: state.issue,
  });

  return (
    <PageShell
      eyebrow="Corrections"
      title="Correction and update process"
      intro="Material changes are treated as a governance event, not a casual edit, because health content can affect safety and understanding."
    >
      <section className="card">
        <h2>How updates are handled</h2>
        <ul>
          <li>Substantive changes require review and traceable documentation.</li>
          <li>High-impact or safety-critical corrections are escalated before publication.</li>
          <li>Readers are expected to rely on the latest reviewed version rather than archived copies.</li>
        </ul>
      </section>
      <section className="card">
        <h2>Report a correction</h2>
        <form className="search-form" style={{ margin: 0 }}>
          <label className="sr-only" htmlFor="correction-module">Module</label>
          <input id="correction-module" defaultValue={state.moduleSlug} readOnly />
          <label className="sr-only" htmlFor="correction-email">Email</label>
          <input id="correction-email" defaultValue={state.email} readOnly />
          <label className="sr-only" htmlFor="correction-issue">Issue</label>
          <input id="correction-issue" defaultValue={state.issue} readOnly />
          <button type="button">Submit report</button>
        </form>
        <p><strong>Reference:</strong> {report.id}</p>
        <p><strong>Priority:</strong> {state.priority}</p>
        <p><strong>Ready to submit:</strong> {state.canSubmit ? "Yes" : "No"}</p>
      </section>
    </PageShell>
  );
}
