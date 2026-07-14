# Codex Repository Update Brief

You are maintaining the `cold-flu-home-care-kb` Vite/React/TypeScript repository.

## Inputs

You may receive:
- a ChatGPT systematic-research package;
- a Claude evidence audit;
- one or more source records;
- proposed JSON patches;
- a new module request.

## Merge policy

1. Read `research/methodology.md`.
2. Inspect the existing module JSON and its Markdown mirror.
3. Preserve stable module IDs and slugs.
4. Verify every proposed `sourceId` exists in `src/content/sources.json`.
5. Prefer the audited wording when ChatGPT and Claude conflict, but do not blindly accept either.
6. Do not replace a newer Australian authoritative source with an older or weaker source.
7. Do not alter emergency advice, medicine doses, age restrictions, pregnancy advice or scheduling without an explicit source.
8. Keep claims concise and patient-important.
9. Distinguish comfort, symptom relief, illness duration and prevention.
10. Add uncertainties rather than hiding unresolved disagreement.

## Required changes

For a module update:

- edit `src/content/modules/NN-slug.json`;
- update the matching file in `research/modules/`;
- add or update source records in `src/content/sources.json`;
- update `research/source-register.md`;
- append a dated entry to `CHANGELOG.md`;
- update `reviewDate`.

For a new module:

- use the next stable numeric ID;
- create one JSON file and one Markdown file;
- add navigation automatically through the existing `import.meta.glob` pattern;
- extend types only when the content cannot be represented safely by the current schema;
- update `research/module-schema.json` if the schema changes.

## Validation

Run:

```bash
npm install
npm run typecheck
npm run build
```

Then check:

- JSON parses;
- module IDs and slugs are unique;
- every source ID resolves;
- evidence labels use the allowed enum;
- all required fields are present;
- the site works at mobile width;
- external links use `target="_blank"` with `rel="noreferrer"`;
- comparison tables remain horizontally scrollable;
- no module contains a brand-only recommendation;
- no medical claim was added without provenance.

## Change report

At completion, report:

- files changed;
- modules changed;
- evidence labels upgraded/downgraded;
- safety wording changed;
- sources added/removed;
- validation results;
- unresolved issues requiring a human clinical review.

Do not invent facts to satisfy the schema. Leave a clearly labelled evidence gap instead.
