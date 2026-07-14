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
- [Project decisions](docs/DECISIONS.md)

## Current status

The project is in **Phase 0: foundation and evidence governance**.

- The original 28-module scope has been captured.
- Seven AI-produced module drafts exist, but have not passed the required evidence, editorial, or clinical review gates.
- No production website has been implemented.
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
npm install
npm run validate:content
npm test
```

Validation checks schemas, identifiers and references, jurisdictions, research-package completeness, and mandatory publication/review/safety gates. Tests exercise valid and failing fixture repositories without duplicating live medical content.
