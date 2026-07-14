# Decision log

This lightweight log records decisions that constrain future work. Add dated entries when a decision changes.

## D-001 — Content before application scale

**Status:** accepted  
**Decision:** Define and test the content schema and review gates before generating the full site or all module pages.  
**Reason:** Modular data and publication governance—not component count—make the product safely expandable.

## D-002 — Static-first, no initial Supabase

**Status:** accepted  
**Decision:** Use repository-backed structured content and static generation for the initial product.  
**Reason:** There are no current requirements for accounts, live writes, or a CMS. A database would add operational and security work without solving an immediate problem.

## D-003 — Claim-level evidence

**Status:** accepted  
**Decision:** Attach evidence direction, certainty, population, outcome, and sources to individual claims rather than assigning one grade to an entire remedy or page.  
**Reason:** Evidence frequently differs by outcome, timing, formulation, and population.

## D-004 — Australian-first, explicitly localised

**Status:** accepted  
**Decision:** Launch with an Australian jurisdiction layer while keeping core evidence separable from local rules.  
**Reason:** Medicine availability and care pathways are jurisdiction-specific; unlabelled global advice is unsafe.

## D-005 — Human publication authority

**Status:** accepted  
**Decision:** AI may assist research and drafting but cannot provide evidence, clinical, or publication approval.  
**Reason:** Citations, interpretation, dosing, interactions, and triage require accountable verification.

## D-006 — No individual diagnosis or personalisation initially

**Status:** accepted  
**Decision:** Do not build symptom diagnosis, dosing calculators, profiles, or personalised treatment recommendations in the initial product.  
**Reason:** These materially increase clinical, privacy, human-factors, and regulatory risk.

## D-007 — JSON as the initial canonical content format

**Status:** accepted  
**Decision:** Store initial module and source records as JSON validated with JSON Schema Draft 2020-12. Longer research notes remain Markdown and structured extraction may use JSON.  
**Reason:** JSON provides deterministic parsing and validation for the first vertical slice without prematurely introducing an MDX content framework. The decision can be revisited after editor workflow testing.

## D-008 — One intake path for imported and external research

**Status:** accepted  
**Decision:** Retain the ChatGPT package as unverified discovery, provenance and design-reference material. It will not become a parallel production model. Useful claims must pass the canonical claim-level workflow. Multi-agent assignments are coordinated in `docs/ASSIGNMENTS.md`, and unchanged returns enter through `inputs/agent-returns/` before audit.  
**Reason:** Parallel schemas and direct promotion would obscure provenance and bypass evidence and review gates.

## D-009 — Application expansion remains deferred

**Status:** accepted  
**Decision:** Do not expand or integrate the imported application until the sore-throat vertical slice, terminology and workflow receive accountable approval.  
**Reason:** Phase 0 must prove evidence governance and publication controls before interface scale.

## D-010 — Authenticated private research workspace

**Status:** accepted
**Decision:** The application may provide an authenticated, non-indexed, read-only private research workspace containing unpublished canonical and imported material. This does not change canonical publication requirements. Drafts remain excluded from all public health-content routes.
**Reason:** Reviewers need a usable inspection tool without presenting unfinished medical content as public guidance.
