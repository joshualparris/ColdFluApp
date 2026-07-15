# Launch assurance plan

Automated checks support—but do not replace—human accessibility, clinical, evidence, privacy, security and legal review. Public launch remains blocked until accountable owners sign the relevant records.

## Automated browser checks

`npm run test:e2e` runs desktop and mobile Chromium against the production build. It checks representative public routes with axe-core WCAG A/AA rules, basic keyboard focus/search interaction, public sitemap privacy and disabled private-preview responses. CI installs Chromium and runs these checks after the production build.

Automated accessibility tools cannot establish WCAG 2.2 AA conformance. They do not reliably assess comprehension, meaningful reading order, screen-reader usability, cognitive load, the appropriateness of alternative text or the clinical clarity of urgent language.

## Manual accessibility matrix

Record tester, date, commit, browser/device, assistive technology and findings for:

- Keyboard-only navigation, visible focus, skip link, dialogs/forms and no keyboard traps.
- NVDA with Firefox/Chrome and VoiceOver with Safari, including headings, landmarks, lists, links, status and safety messages.
- 200% and 400% zoom/reflow; text spacing; portrait mobile; high contrast/forced colours.
- Reduced motion, dark/light themes and colour-independent meaning.
- JavaScript disabled, low bandwidth, failed images and print/PDF output.
- Form errors and correction intake without relying on colour or placeholder text.

## Reader comprehension protocol

Recruit participants representing general readers, carers, varied health literacy and accessibility needs. Do not collect unnecessary health histories. Use scenario-based questions to test whether readers can distinguish comfort from treatment, identify uncertainty, find sources, understand jurisdiction, recognise when professional care is needed and avoid interpreting comparisons as diagnosis. Predefine success thresholds with the clinical and editorial reviewers; record misunderstandings and revise before launch.

## Threat model

Protected assets include unpublished research, reviewer identity/contact records, deployment credentials, repository integrity and public safety content. Principal threats include leaked Basic Auth credentials, indexing/cache leakage, malicious dependency or workflow changes, forged reviewer approvals, unsafe content bypassing publication gates, stale Australian guidance, correction suppression, third-party media tracking and denial of service.

Controls already present include static-first public rendering, no health-data accounts, build-failing publication gates, private `no-store`/`noindex` headers, disabled-by-default preview and locked CI checks. Required before beta: Vercel deployment protection where available, credential rotation, least-privilege GitHub/Vercel access, branch protection and required CI, dependency update policy, secret scanning, reviewer-signature procedure, backup/restore exercise, correction escalation contacts and an independent security review.

## Incident and correction response

1. Preserve the report, affected URL/version, reporter contact if voluntarily supplied and time received.
2. Triage using the proposed severity policy without delaying removal of plausibly harmful content.
3. Temporarily unpublish or disable affected material when authorised and uncertainty is materially unsafe.
4. Notify the owner and relevant clinical/evidence reviewer; preserve evidence and audit logs.
5. Correct through reviewed content and publication gates, document scope and user impact, and publish a material correction notice.
6. Monitor recurrence and complete a post-incident review.

Uptime monitoring should cover public health pages, robots/sitemap behaviour, certificate/HTTPS state and correction-channel availability without collecting sensitive reader data. Source monitoring should track regulator alerts, guideline updates, corrections/retractions and review-due dates. Define retention, backup encryption, restore tests and service owners before launch.

## External sign-offs still required

- Australian clinical and independent evidence audit.
- Plain-language/accessibility review and assistive-technology testing.
- Privacy impact and data-flow review.
- Independent security assessment of repository, CI and Vercel configuration.
- Australian legal advice covering health information, consumer representations, accessibility, privacy, reviewer attribution and correction obligations.

Each sign-off identifies the exact commit, scope, limitations, conflicts, findings, resolution and accountable approver.
