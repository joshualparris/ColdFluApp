# External researcher hand-off contract

External agents cannot edit canonical records. Preserve each return unchanged at `inputs/agent-returns/<agent>/<module-slug>/<return-date>/`. This staging area is unverified and never publishes directly.

## Required bundle

Every return contains `protocol.md`, `search-log.md`, `screening.md`, `extraction.json`, `excluded-studies.md`, `claim-source-map.json`, `module.json`, `source-records/`, and `handoff-notes.md`. Add `risk-of-bias.md`, `corrections-retractions.md`, `funding-conflicts.md`, and `evidence-gaps.md` whenever applicable; omission must be explained in hand-off notes.

Researchers must use the repository's exact schema version and stable claim/source IDs; provide exact titles, URLs and identifiers; separate global evidence from Australian rules; log database, exact query, date, filters and result counts; record exclusions and reasons; extract design, population, formulation, timing, comparator and outcomes; separate effectiveness, harm, prevention, duration and comfort; flag indirectness; check funding, conflicts, corrections and retractions; avoid unsupported doses, ages and triage thresholds; leave reviewer fields empty; keep module status at `draft` or earlier; and state every unresolved issue. AI-generated citations are leads until checked against exact records.

## Return checklist

- [ ] Assignment and canonical slug match `docs/ASSIGNMENTS.md`.
- [ ] Files are unchanged in the dated staging path and identify agent/tool and return date.
- [ ] JSON parses and uses schema version 1; status is no later than `draft`.
- [ ] Reviewer identities and review dates are empty.
- [ ] Every material claim maps to exact source IDs; no module-level evidence grade is substituted.
- [ ] Search and screening are reproducible, with gaps and access limits stated.
- [ ] Australian medicine, vaccination and escalation statements use exact current local records.
- [ ] Formulation, population, jurisdiction and indirectness are explicit.

## Codex intake audit

1. Preserve the raw return and record its origin; never edit it in place.
2. Compare assignment, schema version, filenames and IDs with canonical standards.
3. Parse and validate module/source records in isolation.
4. Open each cited record; verify title, author/organisation, date, identifier, URL, applicability, correction status and claimed support.
5. Reconcile search logs, screening, extraction and claim maps; identify unsupported or overstrong claims.
6. Record `needs-revision` when facts are absent. Do not invent metadata or mappings merely to pass validation.
7. Copy only verified, provenance-linked material into `content/research/`, then draft canonical records in `content/modules/` and `content/sources/`.
8. Run automated validation and retain raw staging files. Human review gates remain separate.

Promotion is a deliberate copy-and-adapt operation with a focused change record; staging files are never moved over canonical files and never deleted after promotion.
