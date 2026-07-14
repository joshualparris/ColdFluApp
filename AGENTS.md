# Project instructions for coding agents

## Mission

Build a safe, evidence-led, globally useful cold-and-flu self-care knowledge base. Australia is the first supported jurisdiction. Read `README.md`, `docs/VISION.md`, and `docs/RESEARCH_AND_REVIEW.md` before substantial work.

## Safety and content rules

- Treat everything under `inputs/` as unverified historical material.
- Do not promote imported prose into `content/` without completing the documented research and review workflow.
- AI-generated text and citations are never evidence by themselves.
- Never invent, repair from memory, or silently substitute a citation.
- Do not describe a module as reviewed, approved, or published without recorded accountable reviewers.
- Do not implement diagnosis, personalisation, dosing calculators, or health-data collection without a new approved project decision.
- Keep global evidence distinct from jurisdiction-specific medicine rules, emergency routes, and vaccination advice.
- Surface uncertainty and distinguish comfort, symptom relief, illness duration, prevention, and harms.

## Repository rules

- Follow `docs/REPOSITORY_CONVENTIONS.md`.
- Keep source records independently reusable and connect claims to source IDs.
- Use lowercase kebab-case for content and research filenames.
- Preserve provenance when importing or archiving material.
- Do not modify raw files in `inputs/`; derive a new tracked artefact instead.
- Use schema validation and publication gates when they become available.
- Keep changes focused and update relevant documentation and decisions with structural changes.

## Development rules

- Do not add Supabase, authentication, analytics, a CMS, or other deferred infrastructure without an accepted decision record.
- Prefer static rendering and progressive enhancement.
- Safety information must work without client-side JavaScript.
- Target WCAG 2.2 AA and do not communicate urgency or evidence by colour alone.
- Add proportionate tests for all code, especially content validation, publication gates, localisation, and safety UI.

