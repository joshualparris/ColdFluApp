import { useEffect, useMemo, useState } from 'react';
import { modules, sections, sourceById } from './content';
import type { EvidenceLevel, KnowledgeModule } from './types';

const evidenceLevels: EvidenceLevel[] = [
  'Strong',
  'Moderate',
  'Weak-or-mixed',
  'Traditional-but-untested',
];

const evidenceLabels: Record<EvidenceLevel, string> = {
  Strong: 'Strong',
  Moderate: 'Moderate',
  'Weak-or-mixed': 'Weak or mixed',
  'Traditional-but-untested': 'Traditional, untested',
};

function getModuleFromHash(): KnowledgeModule {
  const slug = window.location.hash.replace(/^#\/?/, '');
  return modules.find((module) => module.slug === slug) ?? modules[0];
}

function searchableText(module: KnowledgeModule): string {
  return [
    module.title,
    module.summary,
    module.evidenceSnapshot,
    ...module.interventions.flatMap((item) => [
      item.name,
      item.finding,
      item.practical,
      item.mechanism,
      item.cautions,
    ]),
    ...module.practicalSteps,
    ...module.avoidOrCare,
    ...module.myths.flatMap((myth) => [myth.claim, myth.reality]),
    ...module.redFlags,
    ...module.unsettled,
  ]
    .join(' ')
    .toLowerCase();
}

function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  return (
    <span className={`evidence-badge evidence-${level.toLowerCase().replace(/-/g, '_')}`}>
      {evidenceLabels[level]}
    </span>
  );
}

function ModuleNavigation({
  filteredModules,
  selected,
  onSelect,
}: {
  filteredModules: KnowledgeModule[];
  selected: KnowledgeModule;
  onSelect: (module: KnowledgeModule) => void;
}) {
  const grouped = filteredModules.reduce<Record<string, KnowledgeModule[]>>((acc, module) => {
    (acc[module.section] ??= []).push(module);
    return acc;
  }, {});

  return (
    <nav aria-label="Knowledge base modules" className="module-nav">
      {Object.entries(grouped).map(([section, sectionModules]) => (
        <section key={section} className="nav-section">
          <h2>{section}</h2>
          <ol>
            {sectionModules.map((module) => (
              <li key={module.id}>
                <button
                  type="button"
                  className={selected.id === module.id ? 'nav-item active' : 'nav-item'}
                  onClick={() => onSelect(module)}
                >
                  <span className="module-number">{String(module.id).padStart(2, '0')}</span>
                  <span>{module.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </section>
      ))}
      {filteredModules.length === 0 && (
        <p className="empty-state">No modules match those filters.</p>
      )}
    </nav>
  );
}

function BulletSection({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <ul className="spaced-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ComparisonTable({ module }: { module: KnowledgeModule }) {
  if (!module.comparisonRows?.length) return null;
  const headers = Object.keys(module.comparisonRows[0]);

  return (
    <section className="content-section">
      <h2>Symptom comparison</h2>
      <p className="table-note">
        This changes probability; it does not diagnose the cause.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {module.comparisonRows.map((row, index) => (
              <tr key={`${row[headers[0]]}-${index}`}>
                {headers.map((header, cellIndex) =>
                  cellIndex === 0 ? (
                    <th key={header} scope="row">{row[header]}</th>
                  ) : (
                    <td key={header}>{row[header]}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ModuleDetail({ module }: { module: KnowledgeModule }) {
  const moduleSources = module.sourceIds
    .map((sourceId) => sourceById.get(sourceId))
    .filter((source) => source !== undefined);

  return (
    <article className="module-detail">
      <header className="module-header">
        <p className="eyebrow">{module.section} · Module {module.id}</p>
        <h1>{module.title}</h1>
        <p className="lead">{module.summary}</p>
        <div className="review-row">
          <span>Reviewed {new Date(`${module.reviewDate}T00:00:00`).toLocaleDateString('en-AU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}</span>
          <span>{moduleSources.length} sources</span>
        </div>
      </header>

      <section className="evidence-snapshot" aria-labelledby="snapshot-heading">
        <h2 id="snapshot-heading">Evidence snapshot</h2>
        <p>{module.evidenceSnapshot}</p>
      </section>

      <section className="content-section">
        <h2>What actually helps</h2>
        <div className="intervention-grid">
          {module.interventions.map((item) => (
            <article className="intervention-card" key={item.name}>
              <header>
                <h3>{item.name}</h3>
                <EvidenceBadge level={item.evidence} />
              </header>
              <p>{item.finding}</p>
              {item.mechanism && item.mechanism !== '—' && (
                <dl>
                  <div>
                    <dt>Why it may work</dt>
                    <dd>{item.mechanism}</dd>
                  </div>
                </dl>
              )}
              {item.practical && (
                <dl>
                  <div>
                    <dt>Practical use</dt>
                    <dd>{item.practical}</dd>
                  </div>
                </dl>
              )}
              {item.cautions && (
                <dl>
                  <div>
                    <dt>Take care</dt>
                    <dd>{item.cautions}</dd>
                  </div>
                </dl>
              )}
            </article>
          ))}
        </div>
      </section>

      <BulletSection title="Practical steps" items={module.practicalSteps} />
      <BulletSection title="Who should avoid it or take extra care" items={module.avoidOrCare} />

      <section className="content-section">
        <h2>Common myths</h2>
        <div className="myth-list">
          {module.myths.map((myth) => (
            <article key={myth.claim} className="myth-card">
              <p><strong>Myth:</strong> {myth.claim}</p>
              <p><strong>Reality:</strong> {myth.reality}</p>
            </article>
          ))}
        </div>
      </section>

      <ComparisonTable module={module} />

      <section className="content-section red-flag-section">
        <h2>Red flags</h2>
        <ul className="spaced-list">
          {module.redFlags.map((flag) => <li key={flag}>{flag}</li>)}
        </ul>
      </section>

      <BulletSection title="Unsettled science and evidence gaps" items={module.unsettled} />

      <section className="content-section">
        <h2>Sources</h2>
        <ol className="source-list">
          {moduleSources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
              <span>{source.organisation} · {source.type} · {source.year}</span>
              <p>{source.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}

export default function App() {
  const [selected, setSelected] = useState<KnowledgeModule>(getModuleFromHash);
  const [query, setQuery] = useState('');
  const [sectionFilter, setSectionFilter] = useState('All');
  const [evidenceFilter, setEvidenceFilter] = useState<'All' | EvidenceLevel>('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setSelected(getModuleFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${selected.title} | Cold & Flu Home Care`;
  }, [selected.title]);

  const filteredModules = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    return modules.filter((module) => {
      const sectionMatches = sectionFilter === 'All' || module.section === sectionFilter;
      const evidenceMatches =
        evidenceFilter === 'All' ||
        module.interventions.some((item) => item.evidence === evidenceFilter);
      const queryMatches = !normalised || searchableText(module).includes(normalised);
      return sectionMatches && evidenceMatches && queryMatches;
    });
  }, [query, sectionFilter, evidenceFilter]);

  const selectModule = (module: KnowledgeModule) => {
    setSelected(module);
    window.location.hash = `/${module.slug}`;
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="site-kicker">Evidence-graded · Australian context</p>
          <a className="site-title" href="#/cough">Cold & Flu Home Care</a>
        </div>
        <button
          type="button"
          className="menu-button"
          onClick={() => setSidebarOpen((value) => !value)}
          aria-expanded={sidebarOpen}
        >
          Modules
        </button>
      </header>

      <aside className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
        <div className="filter-panel">
          <label>
            Search all modules
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. honey, asthma, fever"
            />
          </label>
          <label>
            Section
            <select value={sectionFilter} onChange={(event) => setSectionFilter(event.target.value)}>
              <option>All</option>
              {sections.map((section) => <option key={section}>{section}</option>)}
            </select>
          </label>
          <label>
            Contains evidence level
            <select
              value={evidenceFilter}
              onChange={(event) => setEvidenceFilter(event.target.value as 'All' | EvidenceLevel)}
            >
              <option>All</option>
              {evidenceLevels.map((level) => (
                <option key={level} value={level}>{evidenceLabels[level]}</option>
              ))}
            </select>
          </label>
          <p className="result-count">{filteredModules.length} of {modules.length} modules</p>
        </div>
        <ModuleNavigation
          filteredModules={filteredModules}
          selected={selected}
          onSelect={selectModule}
        />
      </aside>

      <main>
        <section className="safety-notice" aria-label="Safety notice">
          <strong>Not a diagnosis.</strong> For severe breathing difficulty, blue or grey lips,
          collapse, seizure, severe chest pain, confusion or inability to wake, call 000.
          In Australia, healthdirect is available on 1800 022 222.
        </section>

        <ModuleDetail module={selected} />

        <section className="method-note">
          <h2>How evidence labels are used</h2>
          <div className="legend-grid">
            <p><EvidenceBadge level="Strong" /> Supported by consistent high-quality evidence or authoritative clinical guidance.</p>
            <p><EvidenceBadge level="Moderate" /> Likely helpful, but effect size, population or certainty has limits.</p>
            <p><EvidenceBadge level="Weak-or-mixed" /> Studies conflict, are small, or show limited clinical benefit.</p>
            <p><EvidenceBadge level="Traditional-but-untested" /> Commonly used for comfort without adequate controlled evidence.</p>
          </div>
          <p>
            Evidence strength is not the same as personal suitability. Doses and contraindications
            still depend on age, pregnancy, health conditions and other medicines.
          </p>
        </section>
      </main>
    </div>
  );
}
