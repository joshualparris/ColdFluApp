# Private research workspace implementation

The authenticated `/research-preview/*` workspace supports research organisation. It does not change public content or publication gates.

## Workflow progress, not evidence quality

Programme and module progress comes from `docs/ASSIGNMENTS.md`, canonical module records and required files under `content/research/`. Server-side weights are: unassigned 0, assigned 5, researching 15, returned 30, intake-audit and needs-revision 40, canonical-draft 50, evidence-review 65, clinical-review 80, editorial-review 90, approved 95 and published 100. A blocked module retains its last achieved weight. The average is labelled “Workflow progress estimate”; it is never medical quality, accuracy or certainty. Artefact presence is not approval.

## Quests, milestones and badges

Quests are deterministically derived from assignment states, missing artefacts and incomplete human reviews. Each exposes its reason, completion test and repository evidence. A checkbox is personal tracking only and cannot complete a review. Today recommendations select available work plus a real external blocker. Badges show exact file-based criteria; review completion requires an accountable record.

Celebrations are optional, shown once per browser and limited to three seconds. Reduced-motion settings disable animation. They never obscure safety information, use sound or celebrate unpassed publication gates. Discoveries use curated private media or approved methodology material and never withhold necessary information.

## Canonical and personal state

Canonical workflow state is read from tracked repository records and cannot be changed through the interface. Pins (maximum five), dismissals, manual acknowledgements, theme, density, animation, avatar and landing preference use the versioned `coldflu.private-workspace.v1` local-storage key with safe parsing. Reset deletes only that key. No account, database, analytics, tracking, health data or upload is added. Media autoplay is permanently off; sound is not implemented.

## Ethics, accessibility and security

The design rejects gambling-style reinforcement, artificial scarcity, punitive streaks, guilt, anxiety prompts, loss aversion, fabricated cohorts and incentives to strengthen medical claims. It uses semantic headings, keyboard-native controls, visible focus, textual status, labelled progress bars, responsive layouts and reduced-motion support. Middleware applies `private, no-store` and `noindex, nofollow, noarchive` to every private route; public components contain no workbench data. Tests cover progress, artefacts, quests, human-review boundaries, badges, celebrations, ethical exclusions, local reset/pins, media and real Basic Authentication responses.
