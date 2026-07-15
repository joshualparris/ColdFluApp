export function DraftBanner({ origin }: { origin: "canonical" }) {
  return (
    <aside className="draft-banner" aria-label="Unpublished content warning">
      <strong>Unpublished research draft</strong>
      <span>
        This {origin} record has not received clinical approval and is not public medical advice.
      </span>
      <span className="draft-banner-watermark">PRIVATE PREVIEW · NOT FOR PUBLIC DISTRIBUTION</span>
    </aside>
  );
}
