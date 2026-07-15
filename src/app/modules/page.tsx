import Link from "next/link";
import { getCanonicalModules, publicModules } from "@/lib/content/canonical";
import { filterModulesByQuery } from "@/lib/content/module-search";

export default async function ModulesIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string | string[] }>;
}) {
  const params = (await searchParams) ?? {};
  const query = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";
  const modules = publicModules(await getCanonicalModules());
  const visibleModules = filterModulesByQuery(modules, query);

  return (
    <>
      <p className="eyebrow">Public module index</p>
      <h1>Browse public modules</h1>
      <p className="lede">Use this index to move between published modules and discover the current public content set.</p>
      <form action="/modules" method="get" className="search-form">
        <label htmlFor="module-search" className="sr-only">
          Search modules
        </label>
        <input id="module-search" name="q" type="search" placeholder="Search by title, topic, or keyword" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      {query ? <p className="lede">Showing results for “{query}”.</p> : null}
      <ul className="sources">
        {visibleModules.map((module) => (
          <li key={module.slug}>
            <Link href={`/modules/${module.slug}`}>{module.title}</Link>
            <br />
            <span>{module.category} · {module.description}</span>
          </li>
        ))}
      </ul>
      {visibleModules.length === 0 ? <p className="notice">No modules matched that query. Try a broader term such as “throat” or “pain”.</p> : null}
    </>
  );
}
