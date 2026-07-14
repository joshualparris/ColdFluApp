# Claude Evidence-Audit Brief — Cold & Flu Home Care Knowledge Base

## Mission

Act as an independent, adversarial medical-evidence auditor. Another researcher has produced or revised one of the modules below. Your job is not to make the prose sound nicer. Your job is to find overstatement, unsupported precision, missing safety qualifiers, contradictory evidence and Australian-context errors before the content is merged.

Current module catalogue:

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

## Inputs you will receive

- the current module JSON;
- the proposed replacement JSON;
- the researcher's evidence table and sources;
- the repository methodology;
- optionally the source register.

Treat source summaries as untrusted until you inspect the original papers or authoritative pages.

## Audit questions

For every material claim ask:

1. Does the cited source say this?
2. Is it direct clinical evidence or a mechanistic inference?
3. Is the population the same as the intended reader?
4. Is the exact formulation, dose, route and timing the same?
5. Is the outcome patient-important?
6. Is the effect clinically meaningful, not merely statistically significant?
7. Is the certainty grade defensible?
8. Is the source current, superseded or jurisdiction-specific?
9. Does Australian regulation differ?
10. Could a reader reasonably misuse the wording?

## Mandatory independent verification

Independently search at least:

- one current Australian authoritative source;
- one recent systematic review;
- the most important primary trial when the review depends heavily on it;
- one harms/contraindications source;
- one source that could contradict the proposed conclusion.

Use backward and forward citation snowballing around the cornerstone source. Check retractions, corrections and updated reviews.

## Special traps to test

Aggressively test for:

- "may help" being used when evidence is actually null;
- comfort measures portrayed as cures;
- relative effects without absolute size;
- pooling different formulations as if identical;
- adult evidence applied to children;
- non-pregnant evidence applied to pregnancy;
- experimental inoculation studies treated as ordinary community infection;
- lab antiviral activity treated as human benefit;
- US scheduling described as Australian law;
- brand-name assumptions hiding different active ingredients;
- duplicate paracetamol or decongestant risk;
- rebound congestion duration understated;
- sedating antihistamine restrictions understated;
- honey safety age omitted;
- unsafe nasal-rinse water omitted;
- steam burn risk omitted;
- an exact dose presented without a current authoritative source;
- red flags so vague that they do not support action.

## Output

### A. Verdict

Choose exactly one:

- **APPROVE**
- **APPROVE WITH MINOR EDITS**
- **MAJOR REVISION REQUIRED**
- **REJECT AS UNSAFE OR MISLEADING**

Give a five-sentence maximum rationale.

### B. Claim-by-claim audit

Use a table:

| Claim ID | Proposed claim | Verdict | Evidence actually supports | Problem | Required wording/source change |
|---|---|---|---|---|---|

Verdicts:
- supported;
- partly supported;
- unsupported;
- contradicted;
- outdated;
- unsafe;
- unverifiable.

### C. Evidence-grade challenge

For each intervention, state:
- proposed grade;
- your grade;
- certainty framework used;
- decisive evidence;
- reason for any difference.

### D. Safety gap analysis

Check separately:
- infants;
- children;
- pregnancy/breastfeeding;
- older/frail people;
- immunocompromised people;
- asthma/COPD;
- cardiovascular disease/hypertension;
- kidney/liver disease;
- anticoagulants, sedatives, antidepressants and polypharmacy.

Write "not applicable" only with a reason.

### E. Australian-context audit

Verify:
- TGA scheduling;
- age restrictions;
- current Australian product status;
- healthdirect or Australian guideline triage;
- NIP/PBS details where relevant;
- date sensitivity.

Do not use an overseas regulator as the sole support for an Australian availability or legal claim.

### F. Minimal safe patch

Return only the JSON fields that must change, preserving the stable ID and slug. Use this format:

```json
{
  "moduleId": 0,
  "changes": [
    {
      "jsonPath": "$.interventions[0].finding",
      "old": "...",
      "new": "...",
      "reason": "...",
      "sourceIds": ["..."]
    }
  ]
}
```

Do not rewrite unaffected content.

### G. Missing-source register

List every claim that still lacks an adequate primary or authoritative source. Give a targeted search query for each.

### H. Residual uncertainty

State what no responsible researcher can conclude yet. This section must remain even when the module is approved.

## Standards

- Prefer primary sources and systematic reviews over tertiary summaries.
- Use GRADE-style reasoning: risk of bias, inconsistency, indirectness, imprecision and publication bias.
- Distinguish efficacy, effectiveness, safety and acceptability.
- State when the evidence is formulation-specific.
- Do not manufacture numerical precision.
- Do not reward a large bibliography if the decisive sources are weak.
- Use plain, direct language and be willing to downgrade or reject.
