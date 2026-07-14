# ChatGPT import audit

Audit date: 2026-07-15. The package remains in `Chatgpt/` unchanged while provenance and relocation are decided. Nothing in it is canonical evidence or publishable content.

## Inventory

The package contains 28 Markdown module summaries, 28 prototype module JSON files, and one JSON register containing 39 candidate sources. It also contains methodology, roadmap and source-register documents; prompts for ChatGPT, Claude and Codex; a Vite/React application with TypeScript, CSS and package files; compiled `dist/` and a second static export; two ZIP archives; and top-level copies of selected documentation/prompts. The package describes work dated 2026-07-15 in its materials; file timestamps alone are not treated as research or review dates.

SHA-256 comparison found exact duplicate pairs for the Claude prompt, Codex prompt, README, methodology, roadmap, and all three compiled static-export files. Both the expanded package and redundant ZIP/static output are retained only for provenance pending a deliberate archival decision; they should not be committed again as generated product output.

## Provenance and overlap

A reproducible audit compared lowercase word-token sets for each imported Markdown module against the three files under `inputs/imported-research/`. Every module had measurable overlap. Highest Jaccard similarity by module ranged from 0.093 to 0.191; the strongest matches included OTC medicines (0.191), infants/young children (0.180), natural/traditional remedies (0.176), and runny/blocked nose (0.175). This supports broad overlap in topics, claims and vocabulary, not exact duplication or definite derivation.

Manual structural inspection also found the same 28-topic catalogue and reused module-wide labels such as `Strong`, `Moderate`, `Weak-or-mixed`, and `Traditional-but-untested`. The package sometimes adds reorganised prose, prototype fields, design treatment and candidate links. Those may be novel presentation or discovery leads, but lineage is uncertain without source-session records. No claim of fresh independent research is justified.

## Canonical conflicts

- Evidence is commonly expressed at module or item level rather than canonical outcome-specific claims.
- Prototype labels conflate or leave ambiguous certainty, effect direction, magnitude and recommendation strength.
- Candidate sources include incomplete metadata and organisation/orientation pages rather than verified exact records.
- A URL cannot support every statement in its module; claim-to-source mappings were not independently verified.
- International evidence and Australian medicine, vaccination and care-pathway rules are not consistently separated.
- Medicine, age, dose, duration and triage statements remain unverified and may exceed cited support.
- Prototype generation/review dates are not accountable evidence, clinical or editorial reviews.
- Prototype slugs differ from canonical choices (for example `infants-and-young-children`, `pregnancy`, and `triage-and-red-flags`).
- Some wording appears more confident than the displayed source type permits; this requires fresh extraction, not silent downgrading.

## Disposition

| Artefact | Disposition |
|---|---|
| 28 Markdown summaries and 28 prototype JSON modules | Unpublished discovery material requiring fresh claim-level research; raw provenance/research leads |
| 39-source register | Research leads only; verify exact records independently |
| Vite/React source and styling | Design reference only; no production model or renderer reuse is approved |
| Methodology and roadmap | Possible documentation improvements; canonical governance takes precedence |
| Agent prompts | Prompt/template candidates; exact duplicate copies are redundant |
| `dist/`, static export and ZIPs | Redundant generated artefacts retained temporarily for provenance; not suitable as product input |

No imported prose or source mapping was promoted. Future relocation should copy the original package to `inputs/imported-research/chatgpt-prototype-2026-07-15/` with a manifest, verify the copy, and only then decide whether redundant extracted/build copies can be removed. This audit does not authorise deletion.
