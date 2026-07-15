import { PageShell } from "@/components/content/page-shell";

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy and data handling"
      intro="This project does not collect symptom, diagnosis, or health-data from readers in its initial public experience."
    >
      <section className="card">
        <h2>Current approach</h2>
        <ul>
          <li>The public site is designed to be statically rendered and avoid user accounts.</li>
          <li>Private preview work is browser-local and is not a substitute for public health guidance.</li>
          <li>Any future data collection would require a separate decision and review before implementation.</li>
        </ul>
      </section>
    </PageShell>
  );
}
