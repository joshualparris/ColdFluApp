# Deep Research Prompt: Home Management of Colds & Flu (Modular Knowledge Base)

## Purpose
Build a comprehensive, evidence-graded knowledge base for a modular website on managing colds and flu at home. Each module should be independently addable/updatable as research deepens, so structure the output by discrete module rather than one long narrative.

## Output format requested (for each module)
For every module below, produce:
1. **Summary** (2-3 sentences, plain language)
2. **What actually helps** — ranked by evidence strength: Strong / Moderate / Weak-or-mixed / Traditional-but-untested
3. **Mechanism** (why it works, briefly — skip if unknown)
4. **Dosing/practical specifics** where applicable (e.g., salt water ratios, humidifier settings)
5. **Who should avoid it or take extra care** (kids, pregnant, elderly, chronic illness, medication interactions)
6. **Common myths for this module** — debunked with the actual evidence
7. **Sources** (prioritise: CDC, NHS, Mayo Clinic, Cochrane reviews, Cleveland Clinic, Australian healthdirect/NPS MedicineWise — note Australian brand/availability differences where relevant)

## Modules to research

### A. Symptom-specific modules
1. Cough (dry vs productive — different management)
2. Sore throat
3. Runny/blocked nose (rhinorrhea vs congestion)
4. Fever
5. Fatigue/body aches
6. Sinus pressure/headache
7. Loss of taste/smell
8. Ear pressure/blockage

### B. Intervention-type modules
9. Hydration (what actually helps thin mucus vs marketing claims)
10. Humidity/steam (humidifiers, vaporisers, hot showers — real mechanism vs comfort-only)
11. Rest & sleep positioning (elevation, sleep hygiene while sick)
12. Nutrition during illness (chicken soup — is there real evidence; what to eat/avoid)
13. OTC pharmacological options — by active ingredient, not brand:
    - Paracetamol/ibuprofen (fever & pain)
    - Decongestants: oral (pseudoephedrine/phenylephrine — note phenylephrine's disputed efficacy) vs nasal spray (and rebound congestion/rhinitis medicamentosa risk with prolonged use)
    - Antihistamines (sedating vs non-sedating, when actually useful for a cold vs allergy)
    - Cough suppressants (dextromethorphan) vs expectorants (guaifenesin) — when each is appropriate
    - Combination "cold and flu" products — risks of double-dosing paracetamol
14. Natural/traditional remedies — honey, ginger, garlic, elderberry, zinc, vitamin C, echinacea — evidence strength for each individually (don't lump together)
15. Saltwater gargles & saline nasal rinses/sprays (neti pot safety — sterile/distilled water requirement)
16. Lozenges & throat sprays
17. Warm compresses
18. Antiviral considerations (when Tamiflu is relevant, prescription-only, timing window)

### C. Special populations modules
19. Infants & children under 1 (honey ban, cough medicine ban under 5, fever thresholds for ER)
20. Pregnancy (medication safety — what's contraindicated)
21. Elderly / immunocompromised
22. People with asthma, COPD, or other chronic respiratory conditions
23. People with heart conditions/high blood pressure (decongestant caution)

### D. Prevention & household modules
24. Hygiene practices (handwashing, surface cleaning, isolation practicalities in a family home)
25. Immune-supporting lifestyle factors (sleep, exercise, stress — evidence-graded, not wellness-fad claims)
26. Flu vaccination — timing, who should get it, Australian NIP eligibility

### E. Red-flag / triage module
27. When to see a doctor vs ED vs self-manage — clear symptom thresholds (fever duration/temp, breathing difficulty, symptom duration >10 days, dehydration signs in kids)
28. Cold vs flu vs COVID vs strep vs allergies — differentiating symptom table

## Cross-cutting requirements
- **Evidence hierarchy discipline**: explicitly separate "feels good, no proven mechanism" (e.g. warm drinks) from "proven physiological effect" (e.g. saline reducing viral load in nasal passage). Don't let comfort measures masquerade as cures.
- **Australian context**: OTC availability/scheduling (e.g., pseudoephedrine is pharmacist-only in Australia), brand-name equivalents, healthdirect as an authoritative local source, PBS/NIP flu vaccine notes.
- **Debunk aggressively**: "starve a fever," "cold weather causes colds," "sweating out a fever," antibiotics for viral infections, mega-dose vitamin C.
- **Flag genuinely unsettled science clearly** (e.g., zinc lozenge timing/dose debate, elderberry evidence quality issues, vitamin D's role).

## Deliverable structure suggestion
Return findings as one markdown block per module (28 total, or grouped logically if you prefer batching by section A-E), each self-contained enough to become its own page/component on the site later.
