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
