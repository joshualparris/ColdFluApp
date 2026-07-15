import { PageShell } from "@/components/content/page-shell";
import Link from "next/link";

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
      <section className="card">
        <h2>Report a correction</h2>
        <p>Use the public correction form without including symptoms, diagnoses, contact details or other personal health information. This is not an emergency service.</p>
        <p><Link href="https://github.com/joshualparris/ColdFluApp/issues/new?template=correction.yml">Open the correction form on GitHub</Link></p>
      </section>
    </PageShell>
  );
}
