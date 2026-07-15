# Working backlog

Status key: `[ ]` not started, `[-]` in progress, `[x]` complete.

This file reflects the repository state as of 2026-07-15. It is intentionally conservative: items are marked complete only when the repository contains corresponding implementation, documentation, or tests.

## Project governance

- [x] Capture governance prerequisites and review/accountability expectations in [docs/DECISIONS.md](docs/DECISIONS.md) and [docs/GOVERNANCE_AND_ACCOUNTABILITY.md](docs/GOVERNANCE_AND_ACCOUNTABILITY.md).
- [x] Draft reviewer-conflict, funding, and correction policies; accountable human approval is still pending.
- [x] Separate external appointments, reviews, testing and approvals from this actionable backlog in [docs/EXTERNAL_LAUNCH_PREREQUISITES.md](docs/EXTERNAL_LAUNCH_PREREQUISITES.md).

## Content foundation

- [x] Adopt JSON as the canonical authoring format and implement schema version 1.
- [x] Draft controlled vocabularies for outcomes, populations, interventions, jurisdictions, and workflow states.
- [x] Create initial source, search-log, research-protocol, and review templates.
- [x] Draft a content style guide and medical glossary.
- [x] Select sore-throat supportive care as the first vertical-slice module.

## Existing research cleanup

- [x] Preserve raw imported material under [inputs/](inputs/).
- [x] Audit imported-file provenance and document preservation/disposition.
- [x] Mark imported Batch 1 material as unpublished discovery drafts rather than canonical content.
- [ ] Verify every imported Batch 1 citation, title, date, author, jurisdiction, and applicability against current sources.
- [ ] Replace organisation-only citations with exact source records where the research package still lacks them.
- [ ] Reassess claim-level evidence ratings and safety thresholds against current Australian guidance.
- [ ] Recheck doses, ages, duration limits, interactions, and triage thresholds against current Australian guidance.

## Research programme

- [x] Create a sore-throat research package with a protocol, search log, screening notes, extraction data, exclusions, evidence gaps, funding/conflict notes, and review placeholders.
- [x] Create a master evidence-gap register and prioritise safety-critical gaps.
- [x] Add sore-throat research artefacts for screening, exclusions, bias, funding/conflict, corrections/retractions, and evidence gaps.
- [x] Produce a structured sore-throat research handoff package and evidence-review-ready draft.
- [ ] Expand the evidence programme beyond sore-throat to the wider 28-module catalogue.
- [ ] Separate effectiveness, harms, prevention, disease duration, and comfort outcomes more explicitly in the sore-throat evidence record.
- [ ] Plan additional overlays listed in [docs/SCOPE.md](docs/SCOPE.md).

## Vertical-slice application

- [x] Implement a disabled-by-default, authenticated private research workspace without changing public publication gates.
- [ ] Document and verify deployment protection and credential-rotation evidence without recording secret values.
- [x] Initialise Next.js and TypeScript.
- [x] Implement content validation and build-failing publication gates.
- [x] Implement public and private module, source, and research-preview routes.
- [x] Implement methodology, policy, accessibility, privacy, and corrections pages.
- [x] Implement visibly labelled previews for non-published content.
- [x] Implement print styling and no-JavaScript safety behaviour.

## Quality engineering

- [x] Add schema, reference, jurisdiction, review-expiry, and publication-gate tests.
- [x] Add route/component tests covering accessibility, search, private preview, and supporting workflows.
- [x] Add a CI workflow for lint, typecheck, test, and build.
- [x] Add automated accessibility, internal-link, and spelling checks to CI.
- [ ] Complete repository-executable keyboard, zoom, reduced-motion, mobile, low-bandwidth, failed-image, JavaScript-disabled and print checks.
- [x] Add a security review checklist and review-signoff templates to support the independent security review workflow.

## Launch readiness

- [x] Draft launch-assurance and operational requirements in [docs/LAUNCH_ASSURANCE_PLAN.md](docs/LAUNCH_ASSURANCE_PLAN.md).
- [x] Add launch-readiness review templates and security checklist documentation to support the remaining sign-offs.
- [x] Add monitoring, backup/restore, incident-response and corrections-intake implementation runbooks and configuration templates.
- [ ] Enable repository security controls that are available for the GitHub plan and record the resulting settings.
- [x] Publish supported jurisdictions, known limitations, methodology, reviewers, funding, and change history.
- [x] Define success metrics that do not require collecting sensitive health data.

## Deliberately deferred

- [x] Defer a CMS/database until editor workflow testing justifies it.
- [x] Defer user accounts and personalised features until a documented need and privacy assessment exists.
- [x] Defer diagnostic tools, dose calculators, and related high-risk personalisation features as separate products.
