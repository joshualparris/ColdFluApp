import type { CanonicalModule, CanonicalSource } from "@/lib/content/types";
import { DraftBanner } from "@/components/safety/draft-banner";
export function CanonicalModuleView({ module, sources, preview = false }: { module: CanonicalModule; sources: CanonicalSource[]; preview?: boolean }) {
  const byId = new Map(sources.map((s) => [s.id, s]));
  return <article>{preview && <DraftBanner origin="canonical" />}<p className="eyebrow">Canonical · {module.status} · {module.locale}</p><h1>{module.title}</h1><p className="lede">{module.summary}</p>
    <section className="danger"><h2>Safety first</h2><p>{module.safety.emergencySummary}</p><ul>{module.safety.redFlags.map((x) => <li key={x.text}>{x.text} <small>Action: {x.action.replaceAll("_", " ")}</small></li>)}</ul></section>
    <section><h2>Evidence claims</h2><div className="card-grid">{module.claims.map((claim) => <article className="card" key={claim.id}><h3>{claim.intervention.name}</h3><p>{claim.statement}</p><p><span className="badge">Certainty: {claim.evidence.certainty}</span> <span className="badge">Direction: {claim.evidence.direction}</span></p><dl><dt>Outcome</dt><dd>{claim.outcome.replaceAll("_", " ")}</dd><dt>Population</dt><dd>{claim.population}</dd><dt>Effect</dt><dd>{claim.evidence.effectSummary ?? "Not quantified"}</dd><dt>Why this rating</dt><dd>{claim.evidence.rationale}</dd></dl>{claim.caveats.length > 0 && <ul>{claim.caveats.map((x) => <li key={x}>{x}</li>)}</ul>}</article>)}</div></section>
    <section><h2>Practical guidance</h2>{module.practicalGuidance.map((x) => <article className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</section>
    <section><h2>Exact source records</h2><ul className="sources">{module.sourceIds.map((id) => { const s = byId.get(id); return s ? <li key={id}><a href={s.url} rel="noreferrer">{s.title}</a><br /><span>{s.authorsOrOrganisation.join(", ")} · {s.jurisdiction}</span></li> : null; })}</ul></section>
    <section className="notice"><h2>Review record</h2><p>Clinical reviewer: {module.review.clinicalReviewer ?? "Not assigned"}</p><p>Last clinical review: {module.review.lastClinicallyReviewed ?? "Not completed"}</p></section>
  </article>;
}
