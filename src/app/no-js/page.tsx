import { PageShell } from "@/components/content/page-shell";

export default function NoJsPage() {
  return (
    <PageShell
      eyebrow="No JavaScript"
      title="The core experience works without JavaScript"
      intro="This site is designed to remain readable even when scripts are disabled."
    >
      <section className="card">
        <h2>What remains available</h2>
        <ul>
          <li>Plain content pages and navigation stay available.</li>
          <li>Primary content remains readable and linkable.</li>
          <li>Interactive enhancements are optional rather than required for safety-critical information.</li>
        </ul>
      </section>
    </PageShell>
  );
}
