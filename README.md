# Cold & Flu Research Base

An evidence-led, modular public knowledge base for cold, influenza, and related respiratory self-care. The project is Australian-first at launch, designed to support additional countries without presenting local medicine rules or care pathways as universal.

> [!CAUTION]
> This repository is pre-publication work. Existing research drafts are not clinically reviewed and must not be presented as medical advice.

## Start here

- [Vision and principles](docs/VISION.md)
- [Scope and module map](docs/SCOPE.md)
- [Content model](docs/CONTENT_SCHEMA.md)
- [Research and review workflow](docs/RESEARCH_AND_REVIEW.md)
- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Technical architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Working backlog](TODO.md)
- [Research assignments](docs/ASSIGNMENTS.md)
- [External researcher hand-off](docs/AGENT_RESEARCH_HANDOFF.md)
- [Project decisions](docs/DECISIONS.md)
- [Governance and accountability register](docs/GOVERNANCE_AND_ACCOUNTABILITY.md)
- [External launch prerequisites](docs/EXTERNAL_LAUNCH_PREREQUISITES.md)
- [Operations runbook](docs/OPERATIONS_RUNBOOK.md)
- [Privacy-preserving success metrics](docs/SUCCESS_METRICS.md)
- [GitHub security settings](docs/GITHUB_SECURITY_SETTINGS.md)
- [Reviewer signature procedure](docs/REVIEWER_SIGNATURE_PROCEDURE.md)
- [Master evidence-gap register](docs/EVIDENCE_GAP_REGISTER.md)
- [External research runbook](docs/EXTERNAL_RESEARCH_RUNBOOK.md)
- [Research programme status](docs/RESEARCH_PROGRAMME_STATUS.md)

## Current status

The project is in **Phase 0: foundation and evidence governance**.

- The original 28-module scope has been captured.
- Governance ownership and accountable reviewer roles are now explicitly tracked as a prerequisite to any public launch. The repository currently records the need for a named legal/project owner, an Australian clinical reviewer, an evidence-methods reviewer, and a plain-language/accessibility editor before launch.
- Seven AI-produced module drafts exist, but have not passed the required evidence, editorial, or clinical review gates.
- A minimal Next.js project-status scaffold exists, but product interface development is deferred. It reads only canonical content and exposes only modules with `status: published`.
- One schema-validated sore-throat module is an unpublished vertical-slice draft; no module is approved for publication.

The original prompt, conversation export, and Batch 1 files are retained under `inputs/` as source material. They are not canonical product content.

## Canonical workflow

```text
research question -> evidence search -> structured extraction -> module draft
       -> evidence review -> clinical review -> editorial/accessibility review
       -> publish -> monitor sources -> scheduled re-review
```

Only modules with `status: published` may be included in a production build. AI may assist at every drafting stage, but it cannot approve its own health claims.

## Product direction

The first implementation should be one complete vertical slice using a single reviewed module. The likely stack is Next.js, TypeScript, schema-validated content files, and static generation. A database, accounts, and CMS are deferred until they solve a demonstrated need.

## Repository map

```text
content/     Canonical, schema-validated content and research records
docs/        Product, research, governance, and architecture documentation
inputs/      Unverified historical prompts, conversations, and imported drafts
templates/   Authoring and review templates
scripts/     Future validation and maintenance tools
archive/     Superseded canonical artefacts, retained with provenance
```

See [repository conventions](docs/REPOSITORY_CONVENTIONS.md) before adding or moving files.

## Content validation

With Node.js installed:

```sh
npm ci
npm run validate:content
npm test
```

Validation checks schemas, identifiers and references, jurisdictions, research-package completeness, and mandatory publication/review/safety gates. Tests exercise valid and failing fixture repositories without duplicating live medical content.

## Private research preview

An authenticated, read-only workspace is available at `/research-preview` when explicitly enabled. It is disabled by default and does not change public publication gates. Set `ENABLE_PRIVATE_RESEARCH_PREVIEW=true`, `RESEARCH_PREVIEW_USERNAME`, and a strong `RESEARCH_PREVIEW_PASSWORD` in the local or deployment environment; never commit their values. Disable it by setting the flag to `false` or removing it. Rotate access by replacing both credential values and redeploying.

HTTP Basic Authentication assumes HTTPS and provides only modest personal-workspace protection. Add Vercel Deployment Protection where available. Every private response is non-indexed and non-cacheable, but imported material remains unverified discovery content rather than canonical evidence.
