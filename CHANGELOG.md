# Changelog

## 2026-07-15 — Private research workspace

- Added a disabled-by-default, HTTP Basic-authenticated `/research-preview` workspace for imported discovery drafts, canonical drafts, sources, assignments and evidence gaps.
- Added server-side access checks, private no-store caching, noindex protections, and tests while leaving all public publication gates unchanged.

## 2026-07-15 — Phase 0B stabilisation

- Removed the active imported-module loader, renderer, search and preview routes; the minimal Next.js shell now reads canonical content only and exposes no drafts.
- Relocated the original ChatGPT source package and one hashed raw ZIP under `inputs/imported-research/`; removed duplicate static builds, ZIP and top-level copies.
- Corrected `claim.reviewedAt` semantics and reset unreviewed sore-throat claims to `null`; added publication-gate tests.
- Re-established dependencies with `npm ci` after stopping only repository-specific dev processes.
- Added NCBI E-utilities and Crossref verification for two sore-throat synthesis records. The package remains not ready for evidence review.

## 2026-07-15 — Phase 0 governance continuation

- Audited the ChatGPT prototype without promoting it.
- Added the 28-module assignment register and external-agent intake contract.
- Drafted controlled vocabularies, style guidance, glossary and a review-expiry proposal pending human approval.
- Strengthened canonical validation and added fixture-based publication-gate tests.
- Expanded the sore-throat research trail; its status remains `draft` and all independent reviews remain outstanding.
- Scoped Codex's five sequential safety-critical population modules without generating reader content.
