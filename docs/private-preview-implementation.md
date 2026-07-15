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

## Expedition experience

The research map groups tracked modules into regions and exposes recorded dependencies without implying medical causation. Source Detective offers a browser-local worksheet; its checks do not verify canonical records. Mysteries come from tracked evidence-gap headings and assignment notes. The timeline renders only recorded dates, while claim constellations show citation relationships without implying verification.

The journal remains browser-local and is excluded from canonical research. Printable mission briefings report assignment, review and artefact state. Category ceremonies occur only when their repository condition is true. “What changed?” is a current-state snapshot because reliable per-event timestamps do not exist. Investigator, Archivist and Cartographer personas affect flavour only. Field Desk, Evidence Archive and Night Library affect presentation only. None can update module, review or publication state.
