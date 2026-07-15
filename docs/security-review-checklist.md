# Security review checklist

Use this checklist before any public beta or launch decision.

## Repository and CI review
- Confirm GitHub Actions use pinned versions and least-privilege permissions.
- Review workflow changes, secrets handling, and dependency update policy.
- Ensure branch protection and required CI checks are enabled.

## Deployment review
- Confirm private preview is disabled in production unless explicitly approved.
- Verify deployment protection or access controls are enabled where the platform supports them.
- Rotate credentials and verify they are not exposed in logs or the repository.

## Content and publication review
- Verify that unpublished content remains non-indexed and non-public by default.
- Confirm that correction intake and emergency unpublishing paths are documented and tested.
- Review reviewer attribution, conflicts, and approval records before publication.

## Evidence of completion
- Record the reviewer name, date, scope, findings, and remediation status in the project decision log.
