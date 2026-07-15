import { PageShell } from "@/components/content/page-shell";

export default function CorrectionsPage() {
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
    </PageShell>
  );
}
