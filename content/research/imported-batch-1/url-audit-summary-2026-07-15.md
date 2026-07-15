# Imported Batch 1 URL audit summary — 2026-07-15

Scope: `cold-flu-modules-batch1-linked-raw.md`. This is a mechanical resolution and triage audit, not evidence verification. The generated inventory is `url-inventory.json` and can be reproduced with `npm run audit:batch1-links`.

## Inventory result

- 44 Markdown-link occurrences.
- 29 unique URLs.
- 25 returned a successful HTTP response during the run.
- 4 returned access-control responses: two HTTP 403 and two Cochrane HTTP 412 responses.
- A successful response does not verify the associated health claim, authorship, date, applicability, funding, conflicts, correction or retraction status.

## Material findings

- Most cited guidance and consumer material is from the United States or other non-Australian jurisdictions. It cannot support Australian medicine rules or escalation thresholds without an exact Australian source.
- The WA Health seasonal-program URL returned HTTP 200 but displayed a page-not-found title. It is a soft 404 and must be replaced before any use.
- The linked draft mixes older and newer Cochrane zinc records. These are separate review versions, not interchangeable duplicates.
- Several links are tertiary news, hospital explainers or professional summaries. They may orient a search but do not replace the underlying synthesis, regulator record or current Australian pathway.
- Repeated links were deduplicated in the generated inventory while preserving every originating line number and supplied label.
- The child-fever section relies on non-Australian tertiary sources. Current Australian Healthdirect and RCH candidates are now separately recorded in the babies-and-young-children package; the imported thresholds were not promoted.
- The imported medicine and nasal-irrigation sections require Australian regulator/product and water-safety verification. US FDA/CDC material is retained only as a discovery lead.
- Time-sensitive 2026 influenza links need programme-by-programme currency checks at publication time; a resolving URL alone is insufficient.

## Disposition

No imported evidence label, dose, age, threshold or claim is accepted. Exact source-level verification remains open and must be performed only for claims selected for a canonical package. Dead, blocked and soft-404 links are not silently substituted.
