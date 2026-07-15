# Reviewer signature procedure

Status: proposed operational procedure. It becomes approved only when the accountable owner and reviewer roles record acceptance against an exact commit.

## Purpose

A reviewer name in module JSON is not sufficient proof of review. Every gate requires a durable record tying a real person's decision to the exact material reviewed.

## Required record

Create one immutable review record per reviewer and gate using `templates/review-record.md`. Record:

- module, review type and exact Git commit;
- reviewer name, relevant qualifications, scope and exclusions;
- declared employment, funding, commercial, intellectual-property and advocacy interests;
- public-attribution consent;
- review date, evidence examined, findings and severity;
- decision: changes required, approved for the next gate, or publication blocked;
- each finding's resolution commit and reviewer confirmation; and
- typed signature statement or a linked signed artefact controlled by the reviewer.

## Signature statement

> I confirm that I personally reviewed the stated scope at the identified commit, that this record accurately states my relevant qualifications and interests, and that my decision applies only to that version and scope.

The reviewer adds their full name and date immediately below the statement. A maintainer must not type or copy this acceptance for the reviewer.

## Repository workflow

1. A maintainer prepares a review branch and freezes the candidate commit.
2. The reviewer submits or directly confirms findings through an attributable account or signed document.
3. Required changes are made in a new commit; the original findings are not rewritten or deleted.
4. The reviewer confirms resolutions and signs the final record against the resulting commit.
5. A different authorised publisher verifies that required gates, dates and conflicts are present before changing status.
6. Validation must fail if published content lacks required identities, review dates, current expiry and claim-level review dates.

## Amendments and withdrawal

A later edit, source update or changed safety statement is outside the old signature unless the record explicitly permits that non-substantive change. Material changes require re-review. A reviewer may withdraw approval in writing; affected content returns to draft or is unpublished until resolved. History remains preserved.

## Privacy and integrity

Public attribution requires consent, but internal accountability cannot be anonymous. Store only professional information needed to establish authority and conflicts. Suspected forged approval is a high-severity integrity incident and blocks publication.
