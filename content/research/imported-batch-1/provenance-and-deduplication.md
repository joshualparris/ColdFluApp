# Imported Batch 1 — provenance and deduplication audit

Audit date: 2026-07-15. Both inputs remain unverified and unchanged.

## Files

| File | SHA-256 | Lines observed | Disposition |
|---|---|---:|---|
| `inputs/imported-research/cold-flu-modules-batch1-claude-raw.md` | `91B0EB5DBFBF210C56C2440EFEFFE77B8CF44D1A9F65557F851012B5EFAB3AD5` | 182 | Preserve as the earlier raw variant. |
| `inputs/imported-research/cold-flu-modules-batch1-linked-raw.md` | `A21CADC6A4B04A2DB412A7DE82AEABEA7E1E8C72C19782917B3291BCF6AF0C09` | 193 | Preserve as a later linked/rewritten variant. |

## Deduplication decision

These are related variants, not byte-identical duplicates. The linked variant restructures prose, replaces citation placeholders with URLs and changes or adds substantive wording. Neither is selected as canonical. Both remain raw provenance; future research may use them only as discovery leads.

The linked variant must not be treated as a corrected edition. It contains health claims whose wording, jurisdiction and thresholds differ from the earlier file. A future claim audit must cite the exact originating variant and independently verify the claim.

## Encoding assessment

The tracked files are valid UTF-8 and the audited headings and punctuation render correctly when decoded as UTF-8. The garbled characters previously seen in some PowerShell output are a console/code-page rendering issue, not evidence that the raw bytes should be rewritten. No raw input was modified. Any derived copy must explicitly record its decoding and must not be called verified content.

## High-risk material requiring fresh Australian verification

- Paediatric fever ages, temperatures, durations and emergency thresholds.
- Paracetamol, ibuprofen, decongestant, cough/cold medicine and aspirin statements.
- Ingredient/formulation-specific evidence grades and duration limits.
- Nasal-irrigation water preparation and device-cleaning instructions.
- Honey and supplement dose/formulation claims.
- Triage timeframes and statements that symptoms imply strep or another cause.
- Time-sensitive 2026 influenza eligibility, products and state programmes.

The linked variant relies substantially on US clinical/consumer sources for Australian-facing medicine and triage text. Those claims cannot be promoted without exact current Australian regulator, product-information, guideline or care-pathway sources and accountable clinical review.

## Module disposition

The seven represented areas—OTC medicines, complementary/traditional remedies, saline/gargles, fever, babies/young children, triage and influenza vaccination—are **unpublished discovery drafts**. This label applies to both variants and does not advance any assignment or review state.

## Remaining audit work

- [Completed as resolution triage] Build a deduplicated exact URL inventory with source lines, live status, redirect and page title. See `url-inventory.json` and `url-audit-summary-2026-07-15.md`.
- Record and independently check author/organisation, publication/update date, jurisdiction, supersession and claim applicability for each source selected for reuse.
- Replace organisation-level or tertiary references with exact records where a claim is retained.
- Re-run current Australian searches and discard superseded/time-sensitive statements.
- Extract claims separately by outcome and formulation; do not inherit the prose-level “Strong/Moderate/Weak” labels.
- Check corrections, retractions, funding and conflicts.
- Complete independent evidence, clinical and editorial review for any newly created canonical package.
