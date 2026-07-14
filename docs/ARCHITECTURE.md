# Technical architecture

## Recommended first architecture

Current implementation status: a minimal Next.js project-status scaffold is retained for build continuity. It may read only canonical repository content, exposes no unpublished module preview, and is not the developed product interface.

An isolated `/research-preview` workspace may read imported discovery material through a private-only adapter. Middleware checks a disabled-by-default feature flag and server-side Basic Authentication before routes load content. Responses use `noindex, nofollow, noarchive` and `private, no-store`; public indexes and module routes remain canonical and publication-filtered.

- **Framework:** Next.js App Router with TypeScript.
- **Content:** version-controlled Markdown/MDX plus structured YAML or JSON records.
- **Validation:** a runtime schema library and build-time integrity checks.
- **Rendering:** static generation by default; incremental regeneration only when needed.
- **Styling:** Tailwind CSS and a small accessible component system; shadcn/ui may provide primitives, not product architecture.
- **Testing:** unit tests for schema and transforms, component accessibility tests, end-to-end tests for critical journeys, and link/content validation.
- **Hosting:** any suitable static/Next.js host. Vercel is convenient but should not become a hard dependency.

## Why no database initially

The initial product is curated, public, versioned content with no accounts or live editing. Git-backed content gives reviewable diffs, rollback, preview builds, and a clear audit trail without introducing authentication, data migrations, or an administrative attack surface.

Consider a CMS or database only when an identified editor workflow, scale limit, structured query, or personalisation requirement cannot be handled safely with repository content. Supabase is a candidate at that point, not a default prerequisite.

## Proposed layout

```text
content/
  modules/
  sources/
  jurisdictions/
  research/
docs/
src/
  app/
  components/
    evidence/
    safety/
    sources/
  lib/
    content/
    validation/
    localisation/
tests/
scripts/
```

Components should be organised around stable reader needs and domain concepts. Arbitrary file-size limits and “one component per module” rules are discouraged: modules are data, while reusable rendering components encode consistent safety and evidence behaviour.

## Content pipeline

```text
validated source records
        +
validated module and overlay records
        |
claim/source integrity and publication-gate checks
        |
static pages + indexes + search document
```

## Jurisdiction model

Core evidence content is separated from local overlays. An overlay may add medicine scheduling, local terminology, emergency pathways, regulator links, vaccination programs, or a more conservative warning. The rendered page must clearly identify the active jurisdiction and fall back safely when no reviewed overlay exists.

## Engineering guardrails

- TypeScript strict mode; avoid `any` in content and safety paths.
- Validate untrusted or authored content at boundaries.
- Never render unsanitised HTML from content.
- Keep dependencies minimal and monitor security advisories.
- Require code review for schema, publication-gate, localisation, and safety-component changes.
- Use preview deployments for review, but visibly watermark unpublished health content.
- Preserve unrelated work and use small, intentional commits.
- Document architectural decisions rather than relying on editor-specific rule files.

## CI expectations

Every change should run formatting, linting, type checks, unit tests, schema validation, claim/source integrity checks, stale-review checks, link checks, accessibility checks, and a production build. Deployment must refuse unpublished or expired content.

## Deferred capabilities

- Authentication and profiles
- User-generated content
- Symptom checker or diagnostic logic
- Personalised recommendations
- Dose calculators
- Editorial CMS
- Server-side full-text search
- Native mobile applications

Each requires a separate product, clinical-safety, privacy, and security decision before implementation.
