# ChatGPT Deep Research Brief — Cold & Flu Home Care Knowledge Base

## Role

Act as the primary systematic-review researcher for a modular Australian health-information website. Do not merely write an article. Produce evidence that can be audited, compared, and imported into a version-controlled React/TypeScript knowledge base.

## Repository context

The site currently contains these modules:

1. Cough: dry versus productive
2. Sore throat
3. Runny nose versus nasal congestion
4. Fever
5. Fatigue and body aches
6. Sinus pressure and headache
7. Loss of taste or smell
8. Ear pressure or blockage
9. Hydration
10. Humidity, steam and showers
11. Rest, sleep and positioning
12. Nutrition during illness
13. OTC medicines by active ingredient
14. Natural and traditional remedies
15. Saltwater gargles and saline nasal care
16. Lozenges and throat sprays
17. Warm compresses
18. Influenza antivirals
19. Infants and young children
20. Pregnancy
21. Older adults and immunocompromised people
22. Asthma, COPD and chronic respiratory disease
23. Heart conditions, palpitations and high blood pressure
24. Household hygiene and reducing spread
25. Sleep, exercise, stress and immune-supporting habits
26. Influenza vaccination in Australia
27. When to self-manage, see a doctor or seek emergency care
28. Cold vs influenza vs COVID-19 vs strep throat vs allergies

Each module is stored independently. Research one module at a time unless explicitly asked for a cross-module review.

## Research objective

For the assigned module, determine:

1. Which home interventions produce a clinically meaningful benefit?
2. Which only improve comfort?
3. Which lack evidence, do not work, or may cause harm?
4. What dose, formulation, timing and duration were actually studied or recommended?
5. Which populations were included or excluded?
6. What changes for infants, children, pregnancy, older adults, immunocompromised people, asthma/COPD, heart disease, hypertension, kidney/liver disease and polypharmacy?
7. What is the current Australian regulatory and clinical context?
8. Where do high-quality sources disagree?
9. What claims in the existing module are too strong, too vague or unsupported?
10. What remains genuinely unsettled?

## Question formulation

Before searching, write a specific PICO/PICOS, SPIDER, PECO or diagnostic-accuracy question. Break broad modules into separate questions by:

- intervention and formulation;
- age group;
- symptom or disease;
- prevention versus treatment;
- efficacy versus harm;
- community illness versus experimentally induced infection.

## Search protocol

Search and document:

- Cochrane Library;
- PubMed/MEDLINE;
- Embase if available;
- Epistemonikos;
- WHO and national guideline repositories;
- Australian TGA;
- Australian Immunisation Handbook and health.gov.au;
- healthdirect and NPS MedicineWise where current material exists;
- CDC, NHS, NICE and FDA only when they add evidence not covered by Australian guidance;
- trial registries for major completed or ongoing trials;
- forward and backward citation snowballing from 3–5 cornerstone papers.

Prioritise systematic reviews published or updated in the last 10 years, but include older foundational trials when still decisive. Search separately for adverse events and contraindications.

Do not cite search snippets. Open and inspect the underlying source. Record publication date and, for guidance, the page's review/update date when available.

## Inclusion and exclusion

Prefer human clinical evidence with patient-important outcomes: symptom severity, duration, sleep, function, complications, adverse events or healthcare use.

Down-weight or exclude:

- in-vitro or animal evidence used as proof of clinical benefit;
- surrogate endpoints without patient benefit;
- proprietary mixtures with unclear formulation;
- narrative reviews without reproducible methods;
- preprints when peer-reviewed evidence exists;
- statistically significant but clinically trivial findings;
- overseas product assumptions that do not match Australian formulations.

## Evidence grading

Assign one label to each intervention:

- **Strong** — consistent high-quality clinical evidence or authoritative safety guidance.
- **Moderate** — probable benefit, but modest effect or important limitations.
- **Weak-or-mixed** — low certainty, conflicting studies, formulation dependence or no clear clinical importance.
- **Traditional-but-untested** — commonly used for comfort without adequate controlled evidence.

Also classify the claim as one of:

- clinical benefit demonstrated;
- possible benefit with uncertainty;
- comfort measure;
- no demonstrated benefit;
- evidence of harm/restriction;
- mechanistic hypothesis only.

## Australian requirements

Verify rather than assume:

- prescription/pharmacist-only/general-sale status;
- current TGA scheduling and safety warnings;
- Australian age restrictions and product formulations;
- NIP/PBS eligibility where relevant;
- current influenza vaccine year and recommendations;
- Australian emergency and healthdirect advice.

A US FDA conclusion can inform efficacy but must not be described as Australian regulation.

## Output package

Return the following in this exact order.

### 1. Research question and protocol
- PICO/PICOS/SPIDER/PECO question
- databases and sites searched
- exact queries
- search date
- inclusion/exclusion criteria

### 2. Evidence map
A table with one row per source:
- citation;
- country;
- design;
- population and sample size;
- intervention/formulation/dose/timing;
- comparator;
- outcomes;
- effect size with confidence interval where available;
- adverse events;
- risk of bias/limitations;
- relevance to Australia.

### 3. Cornerstone-source synthesis
Explain what the 3–5 most decisive sources establish, where they agree and where they conflict. Distinguish direct evidence from inference.

### 4. Claim audit of the existing module
For every substantive existing claim, mark:
- supported;
- partly supported;
- unsupported;
- outdated;
- potentially unsafe;
- wording too strong;
- missing qualification.

Quote no more than the minimum fragment needed to identify the claim.

### 5. Revised module content
Produce a complete replacement module in this structure:

```json
{
  "id": 0,
  "slug": "stable-existing-slug",
  "section": "existing section",
  "title": "title",
  "summary": "2–3 plain-language sentences",
  "evidenceSnapshot": "brief overall judgement",
  "interventions": [
    {
      "name": "active ingredient or intervention",
      "evidence": "Strong | Moderate | Weak-or-mixed | Traditional-but-untested",
      "finding": "clinical outcome, not marketing language",
      "practical": "specific use, formulation, timing and duration only when supported",
      "mechanism": "brief; explicitly label hypothesis if not clinically established",
      "cautions": "age, pregnancy, illness and interaction cautions"
    }
  ],
  "practicalSteps": ["..."],
  "avoidOrCare": ["..."],
  "myths": [{"claim": "...", "reality": "..."}],
  "redFlags": ["..."],
  "unsettled": ["..."],
  "sourceIds": ["PROPOSED_SOURCE_ID"],
  "reviewDate": "YYYY-MM-DD"
}
```

Do not change the existing module ID or slug unless there is a documented migration reason.

### 6. Source additions
For every new source, provide:

```json
{
  "id": "SHORT_STABLE_ID",
  "title": "Full title",
  "organisation": "Organisation/journal",
  "type": "Systematic review | RCT | Australian clinical guidance | Regulation | etc.",
  "url": "canonical URL or DOI",
  "year": "YYYY",
  "note": "What this source establishes and its main limitation"
}
```

### 7. Contradiction and uncertainty register
List:
- conflicts between systematic reviews and guidelines;
- formulation-specific uncertainty;
- important missing subgroups;
- ongoing trials;
- claims that should remain deliberately cautious.

### 8. Suggested next research tasks
Rank the five highest-value unanswered questions by likely safety or clinical impact.

## Safety and wording rules

- Never diagnose the reader.
- Never imply that comfort equals faster viral clearance.
- Never imply antibiotics treat viral colds, influenza or COVID-19.
- Never infer a child dose from an adult dose.
- Never claim saline, soup, steam, supplements or positive thinking "kills the virus" unless a clinical outcome trial supports that exact claim.
- State absolute effects when possible.
- Flag any possible overdose, duplicate-ingredient or interaction risk.
- Put emergency red flags before lengthy nuance when the topic is high risk.
- Use plain Australian English and active ingredients rather than brands.
