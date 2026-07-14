# Project catch-up: Cold & Flu Research Base

You are picking up work on an existing project. Read this whole audit before proposing anything. Do not re-litigate settled decisions (marked below) without a new reason. If the repository is attached, verify these claims against it before acting on them — this audit was written from a snapshot on 2026-07-15.

## What this project is

A public, evidence-led Australian knowledge base for home management of colds, flu, and similar respiratory symptoms. Not a diagnosis tool. Organised into ~28 independently researchable/reviewable modules across symptoms, interventions, special populations, prevention, and triage. Every claim carries its own evidence rating (certainty + direction), not one grade per remedy. Australian-first, but built so a country overlay can be added later without rewriting the core.

Full detail lives in `docs/VISION.md`, `docs/SCOPE.md`, `docs/PRODUCT_REQUIREMENTS.md` — read those rather than assuming from this summary.

## Current phase

**Phase 0: foundation and evidence governance** (of 5 phases — see `docs/ROADMAP.md`). Not yet in Phase 1 (first vertical slice) even though one module is drafted, because the review gates for that module haven't been run yet.

## What actually exists right now

- **Governance docs**: vision, scope, content schema, research/review workflow, product requirements, architecture, roadmap, decision log, repo conventions — all written under `docs/`.
- **A versioned JSON Schema** for modules and sources (`schemas/module.schema.json`, `schemas/source.schema.json`), enforcing claim-level evidence, mandatory source IDs, safety fields, and reviewer fields.
- **A working validator** (`scripts/validate-content.mjs`, Ajv-based) that checks every module and source against the schema and catches missing/dangling source references. Currently passes: 1 module, 3 sources.
- **One drafted module**: `sore-throat`, status `draft`. Four claims (usual course, oral analgesia, medicated lozenges, salt-water gargle), three sources (healthdirect AU, NICE NG84, Australian Dept of Health antibiotics guidance), red flags, vulnerable-group warnings, AU jurisdiction note, myths section. Schema-valid. **Not clinically reviewed. Not published. Not to be treated as verified.**
- **Old research preserved but quarantined** under `inputs/`: the original scope prompt, a pasted research conversation, and two "raw" batches of AI-drafted modules (batch 1 covering ~7 topics, batch 2 covering another ~13). These are explicitly marked non-canonical — organisation-only citations, unverified claims, not schema-shaped. They are reference material for re-research, not content to promote directly.
- **Templates** for the research protocol, search log, source record, and review record, ready to use per-module.
- No `src/`, no Next.js app, no git repository initialised yet.

## Decisions already locked in (do not re-argue without new information)

- **D-001**: Content schema and review gates come before building out the full site or all module pages.
- **D-002**: Static-first, Git-backed content. No Supabase/database/auth/CMS until an actual need for accounts, live writes, or editorial UI is demonstrated.
- **D-003**: Evidence is attached per claim (outcome + population + certainty + direction), never one rating per remedy or page.
- **D-004**: Australian-first, but core evidence is kept structurally separable from jurisdiction-specific rules (medicine names, scheduling, emergency numbers).
- **D-005**: AI can research and draft. AI cannot approve its own evidence, clinical, or publication decisions — that requires an accountable human reviewer.
- **D-006**: No diagnosis, personalisation, dosing calculators, or health-data collection in the initial product.

## Rules for AI contributors (from `AGENTS.md`)

- Everything in `inputs/` is unverified — never promote it into `content/` without running it through the full research and review workflow.
- Never invent or "repair from memory" a citation. If you can't verify it, flag it, don't fill it in.
- Never mark something reviewed/approved/published without a named accountable reviewer on record.
- Don't add Supabase, auth, analytics, a CMS, or diagnosis/dosing-calculator logic without a new decision record.
- Source priority order: current AU guideline/regulator > systematic review/evidence-based guideline > individual trial/observational study > product information > reputable tertiary summary (last resort, orientation only).

## Known gaps / unresolved (from the project's own TODO.md)

- No project owner or accountable Australian clinical reviewer named yet — flagged as blocking.
- No evidence-methods reviewer or plain-language/accessibility editor named yet.
- No funding/advertising/conflict-of-interest/correction policy defined yet.
- Batch 1/2 imported research has not been encoding-checked, deduplicated, or had its citations verified against current AU sources.
- No git repository yet.
- No Next.js app started — deliberately deferred until the sore-throat module clears its review gates.

## What "done" looks like for the current phase (Phase 1 exit criteria)

One module (sore-throat is the candidate) fully re-researched under the protocol, passing evidence review, clinical review, and editorial review, rendered on a real page with evidence UI, AU overlay, and source list, tested for accessibility/mobile/print, with a working correction-handling process — all without needing to touch code for future modules.

## What NOT to do

- Don't start scaffolding the Next.js app yet — the schema and one clinically reviewed module come first (D-001, Roadmap Phase 1).
- Don't copy batch 1/2 prose into `content/` as-is.
- Don't invent a clinical reviewer or mark anything as reviewed/published.
- Don't add a database, auth, or CMS (D-002).
- Don't build diagnosis, personalisation, or dose-calculator features (D-006).

## Useful next actions (pick based on what the human wants to work on)

1. Name a project owner and pursue an actual accountable AU clinical reviewer — currently the hardest blocker to publishing anything.
2. Run the sore-throat module through evidence review (a second pass checking the search coverage and source applicability independent of the drafting).
3. Start cleaning batch 1: fix encoding, deduplicate the two variants, verify each citation against a real AU source.
4. Draft a second module fully through the schema (e.g. fever or cough) to stress-test the schema before building any UI around it.
