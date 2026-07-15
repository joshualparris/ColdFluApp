# External research runbook

This runbook controls the 22 ChatGPT/Claude assignments in `docs/ASSIGNMENTS.md`. External model access is not available merely because Codex can edit this repository. A run counts as returned only when its unchanged artefacts are saved under the specified `inputs/agent-returns/` path.

## One-module-at-a-time rule

1. Select only the next assigned module below.
2. Start a fresh external session and use `docs/AGENT_RESEARCH_HANDOFF.md` plus the relevant base prompt under `inputs/prompts/`.
3. Substitute exactly one canonical slug, title, category, Australian-first scope and incoming path.
4. Require exact URLs and bibliographic identifiers; model prose and citations remain unverified.
5. Save the return unchanged with provider and return date.
6. Mark `returned` only after all expected files are present.
7. Codex performs intake audit before the next module is run. Failed packages become `needs-revision`; nothing is copied directly into canonical content.

## External queue

### ChatGPT

- [ ] `cough`
- [ ] `runny-or-blocked-nose`
- [ ] `fatigue-and-body-aches`
- [ ] `sinus-pressure-and-headache`
- [ ] `loss-of-taste-or-smell`
- [ ] `ear-pressure-or-blockage`

### Claude — intervention modules

- [ ] `fever`
- [ ] `hydration`
- [ ] `humidity-and-steam`
- [ ] `rest-sleep-and-positioning`
- [ ] `nutrition-during-illness`
- [ ] `otc-medicines-by-active-ingredient`
- [ ] `complementary-and-traditional-remedies`
- [ ] `gargles-saline-sprays-and-nasal-irrigation`
- [ ] `lozenges-and-throat-sprays`
- [ ] `warm-compresses`
- [ ] `prescription-antivirals-and-timing`

### Claude — prevention and triage

- [ ] `household-precautions`
- [ ] `sleep-activity-stress-and-general-health`
- [ ] `influenza-vaccination`
- [ ] `when-to-seek-care`
- [ ] `cold-flu-covid-strep-allergies`

## Codex sequential queue

These five are repository research tasks, not external returns: `babies-and-young-children`, `pregnancy-and-breastfeeding`, `older-and-immunocompromised-people`, `asthma-copd-and-chronic-respiratory-conditions`, and `cardiovascular-disease-and-high-blood-pressure`.

## Intake audit minimum

- Confirm provenance and file completeness without modifying the raw return.
- Resolve every URL and verify title, authors/organisation, date, DOI/PMID, jurisdiction and source type.
- Detect duplicates, superseded versions, corrections and retractions.
- Check funding/conflicts and commercial formulation dependence.
- Re-run current Australian safety, regulator and pathway searches.
- Separate comfort, symptom effects, illness duration, prevention and harms.
- Reject unsupported doses, ages, diagnostic thresholds and escalation wording.
- Create new canonical artefacts only from verified extraction.
- Leave all evidence, clinical and editorial reviews unstarted until accountable people act.

No checklist tick is evidence quality or publication approval.
