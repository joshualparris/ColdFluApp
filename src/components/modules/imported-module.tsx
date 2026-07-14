import type { ImportedPrototypeModule, ImportedSourceCandidate } from "@/lib/content/types";
import { DraftBanner } from "@/components/safety/draft-banner";

const Evidence = ({ value }: { value: string }) => <span className="badge">Prototype assessment: {value}</span>;
export function ImportedModuleView({ module, sources }: { module: ImportedPrototypeModule; sources: ImportedSourceCandidate[] }) {
  const used = sources.filter((source) => module.sourceIds.includes(source.id));
  return <article>
    <DraftBanner origin="imported" />
    <p className="eyebrow">Imported prototype · {module.section}</p><h1>{module.title}</h1>
    <p className="lede">{module.summary}</p>
    <section className="notice"><h2>Evidence snapshot</h2><p>{module.evidenceSnapshot}</p><p><strong>Generated:</strong> {module.reviewDate} — this is not a clinical review date.</p></section>
    {module.redFlags.length > 0 && <section className="danger"><h2>Imported red flags — unverified</h2><ul>{module.redFlags.map((x) => <li key={x}>{x}</li>)}</ul></section>}
    <section><h2>Candidate interventions</h2><div className="card-grid">{module.interventions.map((item) => <article className="card" key={item.name}><h3>{item.name}</h3><Evidence value={item.evidence} /><p>{item.finding}</p><dl><dt>Prototype practical note</dt><dd>{item.practical}</dd><dt>Proposed mechanism</dt><dd>{item.mechanism}</dd><dt>Cautions</dt><dd>{item.cautions}</dd></dl></article>)}</div></section>
    <List title="Prototype practical steps" items={module.practicalSteps} /><List title="Cautions and limits" items={module.avoidOrCare} />
    {module.myths.length > 0 && <section><h2>Myths and corrections</h2>{module.myths.map((item) => <article className="card" key={item.claim}><h3>{item.claim}</h3><p>{item.reality}</p></article>)}</section>}
    <List title="Unsettled questions" items={module.unsettled} />
    {module.comparisonRows && <ComparisonTable rows={module.comparisonRows} />}
    <section><h2>Candidate sources</h2><p>Source presence does not mean the claim, metadata, or Australian applicability has been independently verified.</p><ul className="sources">{used.map((source) => <li key={source.id}><a href={source.url} rel="noreferrer">{source.title}</a><br /><span>Candidate source — exact metadata and applicability not yet independently verified. {source.organisation}; imported year: {source.year}.</span></li>)}</ul></section>
  </article>;
}
function List({ title, items }: { title: string; items: string[] }) { return items.length ? <section><h2>{title}</h2><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></section> : null; }
function ComparisonTable({ rows }: { rows: Record<string, string>[] }) {
  const headers = Object.keys(rows[0] ?? {}); return <section><h2>Prototype comparison</h2><div className="table-scroll" tabIndex={0}><table><thead><tr>{headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{headers.map((h, j) => j === 0 ? <th key={h} scope="row">{row[h]}</th> : <td key={h}>{row[h]}</td>)}</tr>)}</tbody></table></div></section>;
}
