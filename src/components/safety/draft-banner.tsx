export function DraftBanner({ origin }: { origin: "imported" | "canonical" }) {
  return <aside className="draft-banner" aria-label="Unpublished content warning">
    <strong>Unpublished AI-assisted research draft</strong>
    <span>This {origin} record has not received clinical approval. It is provided only for research review and must not be used as personalised medical advice.</span>
  </aside>;
}
