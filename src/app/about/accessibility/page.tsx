import { PageShell } from "@/components/content/page-shell";

export default function AccessibilityPage() {
  return (
    <PageShell
      eyebrow="Accessibility"
      title="Accessible by default"
      intro="The project aims to make core guidance understandable and usable without JavaScript, with clear structure and readable contrast."
    >
      <section className="card">
        <h2>What this means here</h2>
        <ul>
          <li>Content uses semantic headings and descriptive links.</li>
          <li>Keyboard users can reach navigation and actions without a mouse.</li>
          <li>Colour is not the only way to communicate meaning or severity.</li>
        </ul>
      </section>
    </PageShell>
  );
}
