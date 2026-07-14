# Content model

## Design goals

The schema is the contract between research, review, and the website. It must preserve claim-level evidence and provenance while remaining understandable to editors.

Markdown or MDX may hold longer prose, but metadata and safety-critical content must be machine-validated. JSON, YAML, or typed frontmatter are acceptable storage formats; the application should validate them against one versioned schema during the build.

## Module shape

```yaml
schemaVersion: 1
id: fever
slug: fever
title: Fever
description: Plain-language search and index description.
category: symptom
status: draft # proposed | researching | draft | evidence_review | clinical_review | editorial_review | published | archived
audience: general
jurisdictions: [AU]
locale: en-AU
summary: Plain-language orientation without diagnostic certainty.
safety:
  emergencySummary: Short, always-visible escalation statement.
  redFlags: []
  vulnerableGroups: []
claims: []
practicalGuidance: []
myths: []
jurisdictionNotes: []
relatedModules: []
sourceIds: []
review:
  researchOwner: null
  evidenceReviewer: null
  clinicalReviewer: null
  editorialReviewer: null
  lastEvidenceSearch: null
  lastClinicallyReviewed: null
  nextReviewDue: null
  changeSummary: null
```

## Claim shape

Evidence ratings belong to claims, not remedies or whole pages.

```yaml
- id: fever-paracetamol-comfort
  statement: Paracetamol may reduce fever-related discomfort when used as directed.
  outcome: symptom_comfort
  population: general_adult
  intervention:
    name: paracetamol
    formulation: oral
    regimenStudied: null
  comparison: placebo_or_no_treatment
  evidence:
    certainty: moderate # high | moderate | low | very_low | insufficient
    direction: benefit # benefit | no_clear_effect | harm | mixed
    effectSummary: null
    rationale: Explanation of certainty, consistency, directness, and limitations.
  sourceIds: []
  caveats: []
  jurisdictions: [AU]
  reviewedAt: null
```

Do not use `strong`, `moderate`, or `weak` without defining whether the label describes certainty, magnitude, recommendation strength, or study design. The initial UI should show certainty and direction separately.

## Source shape

```yaml
id: source-stable-id
type: guideline # systematic_review | meta_analysis | rct | observational | regulator | product_information | textbook | other
title: Exact title
authorsOrOrganisation: []
publication: null
publishedAt: null
updatedAt: null
doi: null
url: https://exact-source.example
accessedAt: YYYY-MM-DD
jurisdiction: AU
language: en
peerReviewed: false
retractedOrCorrected: false
notes: Why this source is applicable and important limitations.
```

References must identify the exact document. Organisation names or homepages alone are insufficient. Archive or persistent identifiers should be captured where lawful and practical.

## Safety fields

Practical directions should support these optional structured fields:

- minimum and maximum ages;
- pregnancy and breastfeeding status;
- contraindications and interactions;
- route, formulation, concentration, timing, duration, and maximum use;
- whether professional advice is required;
- jurisdiction and effective date;
- source IDs supporting each material instruction.

Exact doses require clinical review. Any future dose calculator needs a separate specification, tests at boundaries, human-factors review, and explicit approval.

## Publishing rules

A production build must fail when a published module:

- lacks a clinical reviewer or clinical-review date;
- has an overdue review date;
- contains a material claim without a source;
- contains an invalid or unsupported jurisdiction;
- has emergency content without an approved local escalation route;
- references a missing source or related module;
- contains placeholder text or unresolved review notes.

Draft and review content may render only in protected previews clearly labelled as unpublished.

## Versioning

Schema migrations must be explicit and reversible. Content changes should preserve a changelog showing what changed, why, who reviewed it, and which sources triggered the change.

