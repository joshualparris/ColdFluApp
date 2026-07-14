# Product requirements

## Essential reader journeys

1. Find help by symptom, intervention, population, or prevention topic.
2. See emergency warning signs before detailed self-care content.
3. Compare options by outcome, evidence certainty, harms, and suitability.
4. Understand exactly what evidence applies to whom and under what conditions.
5. Open the sources and see review currency.
6. Change country/region when a reviewed local pack exists.
7. Report an error, broken source, accessibility problem, or safety concern.

## Module-page requirements

Every published page must display:

- title, scope, locale, and last review date;
- a short non-diagnostic summary;
- prominent escalation and emergency guidance;
- claim-level evidence indicators with a plain-language explanation;
- practical guidance and its limits;
- contraindications, interactions, and vulnerable-population warnings;
- myth or misconception corrections where useful;
- complete linked references;
- related modules and a correction/report link;
- a clear statement that the site does not replace individual medical advice.

## Discovery

Initial discovery should use prebuilt indexes and client-side or static search. Filters may include symptom, intervention, age group, evidence certainty, goal, and jurisdiction. Search must never rank commercially or imply that popularity equals effectiveness.

## Accessibility and inclusion

- Target WCAG 2.2 AA.
- Use semantic HTML, keyboard-accessible controls, visible focus, sufficient contrast, and reduced-motion support.
- Do not communicate evidence or urgency by colour alone.
- Define medical terms, use short sentences, and provide meaningful headings.
- Support zoom, screen readers, narrow screens, printing, and low-bandwidth use.
- Plan translations as reviewed content variants, not automated substitutions presented as authoritative.
- Test key journeys with people who have varied health literacy and access needs.

## Privacy and security

The initial site should collect no health profiles, symptom histories, accounts, or precise location. Use privacy-respecting analytics only if a documented question justifies them. Do not send search queries or page context containing health concerns to third parties without an explicit review and disclosure.

If personalisation or user accounts are later proposed, complete a privacy impact assessment, threat model, consent design, retention policy, and jurisdictional legal review first.

## Trust and governance UI

The site should publish its methodology, editorial policy, evidence labels, funding, conflicts, correction history, supported jurisdictions, and reviewer model. Advertising and affiliate links should be excluded from the initial product.

## Performance and resilience

- Core pages should be statically renderable and useful without client-side JavaScript.
- Emergency guidance must remain available during partial failures.
- Pages should be fast on low-end mobile devices and constrained networks.
- Source and internal links should be checked automatically.
- Printable pages should omit navigation clutter without removing warnings or review metadata.

## Initial acceptance criteria

The vertical slice is complete when one clinically reviewed module:

- validates against the schema;
- renders all required content and states;
- cannot publish while a required field or review is missing;
- passes automated accessibility, link, type, unit, and end-to-end checks;
- has been manually tested on mobile, keyboard, screen reader, and print views;
- shows correct Australian localisation and clear limitations;
- has a documented correction and update process.

