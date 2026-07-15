import { getModuleVisual } from "@/lib/content/module-visuals";

export function ModuleMediaGallery({ slug, title }: { slug: string; title: string }) {
  const visual = getModuleVisual(slug);

  return (
    <section className="hero-visual" aria-label={`${title} illustration`}>
      <img src={visual.src} alt={visual.alt} />
      <figcaption>{visual.credit}</figcaption>
    </section>
  );
}
