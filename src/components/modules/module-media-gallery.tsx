import Image from "next/image";
import { getModuleVisual } from "@/lib/content/module-visuals";

export function ModuleMediaGallery({ slug, title }: { slug: string; title: string }) {
  const visual = getModuleVisual(slug);

  return (
    <section className="hero-visual" aria-label={`${title} illustration`}>
      <Image src={visual.src} alt={visual.alt} width={1200} height={720} />
      <figcaption>{visual.credit}</figcaption>
    </section>
  );
}
