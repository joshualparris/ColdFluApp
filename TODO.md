# Working backlog

Status key: `[ ]` not started, `[-]` in progress, `[x]` complete, `[!]` blocked or requires an accountable decision.

## Project ownership and governance

- [-] Use “Cold & Flu Research Base” as the working product name; identify and record its legal/project owner.
- [!] Appoint a qualified Australian clinical reviewer and define the scope of their sign-off.
- [ ] Appoint an evidence-methods reviewer and plain-language/accessibility editor.
- [-] Obtain accountable approval for the drafted reviewer conflict-of-interest and attribution policy.
- [-] Obtain accountable approval for the drafted funding, advertising, affiliate, and sponsorship policy.
- [-] Obtain accountable approval for the drafted correction severity levels, response targets, and emergency-unpublishing policy.
- [ ] Obtain legal advice before public launch about applicable health-content, consumer, privacy, and accessibility obligations.

The repository now records these governance tasks as a prerequisite for public launch in [docs/DECISIONS.md](docs/DECISIONS.md).

## Content foundation

- [x] Choose JSON as the initial canonical authoring format and implement schema version 1.
- [!] Obtain accountable approval for the drafted evidence certainty and direction vocabulary.
- [x] Draft controlled vocabularies for outcomes, populations, interventions, jurisdictions, and workflow states.
- [x] Create initial source, search-log, research-protocol, and review templates.
- [!] Approve the drafted risk-based review intervals and update triggers.
- [x] Draft a content style guide and medical glossary; clinical/editorial approval is pending.
- [x] Select sore throat supportive care as the first vertical-slice module.

## Existing research cleanup

- [x] Preserve raw files under a clearly labelled `inputs/` location.
- [ ] Repair mojibake/encoding in imported files without treating the result as verified content.
- [ ] Deduplicate the two Batch 1 variants and record provenance.
- [ ] Verify every Batch 1 URL, title, date, author, jurisdiction, and applicability.
- [ ] Replace organisation-only citations with exact source records.
- [ ] Reassess every evidence rating at the claim level.
- [ ] Recheck all doses, ages, duration limits, interactions, and triage thresholds against current Australian guidance.
- [ ] Mark all seven modules as unpublished discovery drafts.

## Research programme

- [-] Create a reproducible protocol and query set for each of the 28 modules; sore throat has an initial rapid protocol and log.
- [x] Create a master evidence-gap register and prioritise safety-critical gaps.
- [x] Add sore-throat screening, exclusions, bias, funding/conflict, correction/retraction, and gap artefacts.
- [x] Complete Codex's structured sore-throat search and prepare an evidence-review-ready narrowed draft.
- [!] Obtain independent evidence verification and decide whether additional CENTRAL/Epistemonikos/full-text retrieval is required.
- [ ] Separate effectiveness, harms, prevention, disease duration, and comfort outcomes.
- [ ] Plan additional overlays listed in `docs/SCOPE.md`.

## Vertical-slice application

- [x] Add a disabled-by-default, authenticated private research workspace without changing public publication gates.
- [!] Configure and rotate private preview credentials in the deployment environment; add platform deployment protection where available.

- [x] Initialise Next.js and TypeScript after schema review.
- [x] Add content validation and build-failing publication gates.
- [x] Build module, evidence, safety, source, review-date, and jurisdiction components.
- [x] Add static indexes and simple search.
- [x] Add methodology, editorial policy, evidence labels, privacy, accessibility, and corrections pages.
- [x] Add authenticated, visibly labelled previews for non-published content.
- [x] Add print styling and no-JavaScript safety behaviour.

## Quality engineering

- [x] Unit-test schema boundaries, identifiers, references, and review-expiry logic with fixtures.
- [x] Test missing references, unsupported jurisdictions, and blocked publication states.
- [!] Complete evidence, clinical, and editorial review; all remain outstanding for sore throat.
- [-] Type, lint, tests and production build run in CI; add automated accessibility, internal-link and spelling checks.
- [ ] Add end-to-end tests for emergency guidance, jurisdiction changes, search, sources, and correction reporting.
- [ ] Manually test keyboard, screen reader, zoom, reduced motion, mobile, low bandwidth, and print.
- [ ] Threat-model the site and dependency/deployment pipeline before public beta.

## Launch readiness

- [ ] Conduct reader comprehension testing, especially evidence labels and triage.
- [ ] Complete independent clinical and evidence audits.
- [ ] Complete accessibility, privacy, security, and legal reviews.
- [ ] Establish source monitoring, uptime monitoring, backups, incident response, and correction intake.
- [ ] Publish supported jurisdictions, known limitations, methodology, reviewers, funding, and change history.
- [ ] Define success metrics that do not require collecting sensitive health data.

## Deliberately deferred

- [ ] Reassess the need for a CMS or database after editor workflow testing.
- [ ] Reassess user accounts only with a documented user need and privacy impact assessment.
- [ ] Reassess personalisation, diagnostic tools, and dose calculators as separate high-risk products.
