# Controlled vocabularies (draft)

This proposal starts from schema version 1. It is technically usable for drafting but awaits accountable evidence-methods and clinical approval.

## Evidence concepts

- **Certainty:** `high`, `moderate`, `low`, `very_low`, `insufficient`. Confidence that the estimated effect for the exact outcome/population/formulation is close enough to the truth for the stated claim.
- **Direction:** `benefit`, `no_clear_effect`, `harm`, `mixed`. Direction of observed evidence, not certainty or recommendation.
- **Magnitude:** report an absolute effect and interval where reasonably available; otherwise use a transparent study scale. No controlled adjective set is approved yet.
- **Clinical importance:** a separate judgement about whether the effect matters to people; threshold and method await reviewer approval.
- **Recommendation strength:** not represented in schema v1. It must not be inferred from certainty or direction; adding it requires a decision and schema change.

## Schema-controlled terms

- Outcomes: `symptom_comfort`, `pain`, `fever`, `hydration`, `illness_duration`, `complications`, `transmission`, `harms`, `care_escalation`.
- Module categories: `symptom`, `intervention`, `population`, `prevention`, `triage`.
- Safety actions: `call_emergency`, `urgent_assessment`, `medical_advice`, `pharmacist_advice`.
- Publication statuses: `proposed`, `researching`, `draft`, `evidence_review`, `clinical_review`, `editorial_review`, `published`, `archived`.
- Research-assignment statuses are defined separately in `docs/ASSIGNMENTS.md`.
- Jurisdictions use `GLOBAL` or ISO 3166-1 alpha-2 codes. A valid code does not mean a jurisdiction is supported or reviewed.

## Draft terminology rules

Population values should state age/life stage and relevant condition without implying applicability beyond evidence, for example `adults with uncomplicated acute sore throat`. `general` is discouraged when studies are narrower. Intervention names use generic active ingredient or practice; formulation is separate (`oral tablet`, `lozenge`, `spray`, `gargle`). Regimen records reproduce what was studied and never become reader dosing instructions without clinical review. Comparisons identify placebo, no treatment, usual care or a named active comparator; use `null` only when no comparative claim is made.

Outcome expansion, magnitude labels, clinical-importance thresholds, recommendation strength, standard population ontology and risk-based expiry periods all require accountable approval before being called accepted standards.

## Review-expiry proposal awaiting approval

- 3–6 months: emergency pathways, regulator safety alerts, vaccination programmes and rapidly changing infection guidance.
- 12 months: medicine rules, contraindications and vulnerable-population modules.
- 18–24 months: stable supportive-care effectiveness evidence.
- Earlier review for a source update, correction/retraction, safety signal, material guideline change or credible error report.

These are proposed maxima, not approved policy. A reviewer may require a shorter interval; no module may publish until `nextReviewDue` is set by the accountable process.
