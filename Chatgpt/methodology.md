# Research methodology and editorial standard

## Purpose

This repository is an evidence-graded, modular knowledge base about home management of colds, influenza and overlapping respiratory illnesses. It is designed for iterative research by humans and AI systems, with each topic stored as an independent JSON module and a readable Markdown research note.

It is educational information, not individual medical advice or a diagnostic tool.

## Question frameworks

Use the most suitable framework for each update:

- **PICO** for interventions: population, intervention, comparison and outcome.
- **PICOS** when study design needs to be specified.
- **SPIDER** for qualitative questions such as acceptability, comfort, caregiver burden or lived experience.
- **PECO** for exposure questions such as sleep restriction, smoke exposure or humidity.
- **Diagnostic accuracy framing** for symptom-differentiation modules: index test, reference standard, population and target condition.

Do not pose "Does it work?" without defining the population, formulation, dose, timing, comparator and outcome.

## Source hierarchy

Prioritise, in order:

1. Current Australian legislation, TGA scheduling/safety notices, Australian Immunisation Handbook, health.gov.au and healthdirect.
2. Living or recent clinical guidelines from recognised public-health bodies.
3. Cochrane and other high-quality systematic reviews/meta-analyses.
4. Large randomised controlled trials.
5. Strong observational evidence for harms, prognosis or rare outcomes.
6. Mechanistic studies only when clinical outcome evidence is unavailable.
7. Traditional use or expert opinion, explicitly labelled as such.

Commercial health pages may be used for practical context, but must not carry a major efficacy or safety claim when a stronger primary or authoritative source is available.

## Search workflow

For every module update:

1. Define a narrow, answerable question.
2. Record the search date, databases/sites, query strings and date limits.
3. Find 3–5 cornerstone sources.
4. Backward snowball through references for foundational evidence.
5. Forward snowball through citing literature for newer evidence.
6. Search specifically for harms, contraindications, special populations and Australian availability.
7. Search for contradictory reviews or guidelines.
8. Screen title/abstract, then full text.
9. Extract data into a structured evidence table.
10. Synthesize clinical importance, not only statistical significance.
11. Update the JSON module, Markdown note, source register and change log.
12. Run type-check and production build.

## Inclusion criteria

Prefer:

- Human studies directly relevant to acute viral upper-respiratory symptoms.
- Systematic reviews or trials reporting patient-important outcomes: symptom severity, duration, sleep, function, complications, adverse events or healthcare use.
- Current Australian guidance for scheduling, age restrictions, pregnancy, dosing and public-health recommendations.
- Clear formulation and dose information where the intervention depends on it.

## Exclusion or down-weighting criteria

Exclude or clearly down-weight:

- In-vitro findings presented as proof of clinical benefit.
- Animal studies presented as home-treatment recommendations.
- Studies without a relevant comparator.
- Surrogate outcomes without demonstrated patient benefit.
- Undisclosed proprietary mixtures.
- Preprints when peer-reviewed evidence exists.
- Narrative reviews that do not describe a search method.
- Old guidance superseded by current regulation.
- Studies of induced experimental colds presented as identical to community illness without qualification.

## Evidence labels

### Strong

Use when there is consistent high-quality clinical evidence, or authoritative safety/clinical guidance with a strong benefit-risk basis. "Strong" can apply to a safety restriction even when an efficacy trial would be unethical.

### Moderate

Use when benefit is probable but the effect is modest, evidence has some limitations, or results apply only to a defined formulation/population.

### Weak-or-mixed

Use when studies conflict, certainty is low, effect is small or not clinically meaningful, formulations vary, or the evidence does not support routine use.

### Traditional-but-untested

Use when a practice is common and plausibly comforting but lacks adequate controlled evidence. Do not imply that "traditional" means safe.

## Claim discipline

Every important claim must be one of:

- **Clinical benefit demonstrated**
- **Possible benefit with uncertainty**
- **Comfort measure**
- **No demonstrated benefit**
- **Evidence of harm / restriction**
- **Mechanistic hypothesis only**

Never turn a biomarker, laboratory effect or plausible mechanism into a claim that an intervention shortens illness.

Use absolute effects where available. A statistically significant result is not necessarily noticeable or worth the cost/harms.

## Safety standard

Every module must address:

- age restrictions;
- pregnancy/breastfeeding where relevant;
- chronic disease;
- medication interactions;
- accidental duplicate ingredients;
- duration limits;
- emergency red flags;
- uncertainty or gaps.

Dosing must come from an authoritative current source and be formulation-specific. Do not infer a child's dose from an adult dose.

## Australian context

Check at every major update:

- TGA scheduling and safety alerts;
- whether a medicine is prescription-only, pharmacist-only or pharmacy/general sale;
- Australian product formulations, which can differ from overseas brands;
- NIP/PBS eligibility and current-year vaccine advice;
- healthdirect triage information and Australian emergency contacts.

Do not treat US FDA decisions as Australian regulation. They may inform efficacy evidence, but Australian scheduling must be stated separately.

## Versioning and provenance

Each module has:

- stable numeric ID;
- stable slug;
- review date;
- source IDs;
- explicit unsettled-science field.

For substantive changes, record:

- date;
- module;
- changed claim;
- old and new evidence label;
- source added or removed;
- reason.

Do not silently overwrite a stronger source with a weaker or older one.

## Update triggers

Re-review a module when:

- TGA or Australian guidance changes;
- a major systematic review or guideline appears;
- a safety warning or product withdrawal occurs;
- a source link breaks;
- the module review date is older than 12 months;
- a user reports a contradiction or unclear wording.

High-risk modules (children, pregnancy, antivirals, triage, decongestants and vaccination) should be checked at least every 6 months.

## Editorial style

- Plain Australian English.
- Separate treatment of symptoms from treatment of the infection.
- Distinguish "may soothe" from "shortens illness".
- Avoid wellness-fad language and blame.
- Explain uncertainty without false balance.
- Put emergency guidance before long discussion where risk is high.
- Use active ingredients, not brand names, except when explaining label recognition.
