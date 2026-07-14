"use client";
import { useMemo, useState } from "react";
type Item = { slug: string; title: string; section: string; evidence: string[] };
export function PreviewBrowser({ items }: { items: Item[] }) {
  const [query, setQuery] = useState(""), [section, setSection] = useState("all"), [evidence, setEvidence] = useState("all");
  const sections = [...new Set(items.map((x) => x.section))], levels = [...new Set(items.flatMap((x) => x.evidence))];
  const shown = useMemo(() => items.filter((x) => `${x.title} ${x.section}`.toLowerCase().includes(query.toLowerCase()) && (section === "all" || x.section === section) && (evidence === "all" || x.evidence.includes(evidence))), [items, query, section, evidence]);
  return <section aria-labelledby="browse-title"><h2 id="browse-title">Browse imported drafts</h2><div className="filters"><label>Search<input type="search" value={query} onChange={(e) => setQuery(e.target.value)} /></label><label>Section<select value={section} onChange={(e) => setSection(e.target.value)}><option value="all">All sections</option>{sections.map((x) => <option key={x}>{x}</option>)}</select></label><label>Prototype evidence label<select value={evidence} onChange={(e) => setEvidence(e.target.value)}><option value="all">All labels</option>{levels.map((x) => <option key={x}>{x}</option>)}</select></label></div><p aria-live="polite">{shown.length} drafts shown</p><div className="module-list">{shown.map((item) => <a className="module-link" href={`/preview/imported/${item.slug}`} key={item.slug}><strong>{item.title}</strong><span>{item.section}</span></a>)}</div></section>;
}
