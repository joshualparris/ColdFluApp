import Link from "next/link";
import { getCanonicalSources } from "@/lib/content/canonical";
import { getJurisdictionSummary, groupSourcesByJurisdiction } from "@/lib/content/source-index";
import type { CanonicalSource } from "@/lib/content/types";

export default async function SourcesIndexPage() {
  const sources = await getCanonicalSources();
  const grouped = groupSourcesByJurisdiction(sources as CanonicalSource[]);
  const summary = getJurisdictionSummary(grouped);

  return (
    <>
      <p className="eyebrow">Evidence trail</p>
      <h1>Browse source records</h1>
      <p className="lede">This index surfaces the source records behind the public module content and groups them by jurisdiction.</p>
      <section className="card">
        <h2>Jurisdictions</h2>
        <ul>
          {Object.entries(summary).map(([jurisdiction, count]) => (
            <li key={jurisdiction}>{jurisdiction}: {count} source{count === 1 ? "" : "s"}</li>
          ))}
        </ul>
      </section>
      {Object.entries(grouped).map(([jurisdiction, items]) => (
        <section className="card" key={jurisdiction}>
          <h2>{jurisdiction}</h2>
          <ul className="sources">
            {items.map((source) => (
              <li key={source.id}>
                <a href={source.url} rel="noreferrer">{source.title}</a>
                <br />
                <span>{source.id}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p>
        <Link href="/modules">Back to the module index</Link>
      </p>
    </>
  );
}
