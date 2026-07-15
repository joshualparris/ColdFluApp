# GitHub security settings

Verified against the production GitHub repository on 2026-07-15.

## Enabled

- Public repository with GitHub issues available for correction intake.
- Secret scanning.
- Secret-scanning push protection.
- Dependabot security updates.
- Repository Dependabot configuration for weekly npm and monthly GitHub Actions updates.
- `main` branch protection requiring the `quality` status check to be current.
- One approving pull-request review with stale approvals dismissed.
- Resolution of review conversations before merge.
- Force pushes and branch deletion disabled for `main`.

## Not treated as complete assurance

- Administrators are not currently bound by branch protection, preserving emergency recovery access. Any use of that bypass must be documented as an incident or emergency change.
- Non-provider secret patterns and secret validity checks are not enabled by the current repository setting.
- These controls do not replace an independent security assessment, Vercel account review, least-privilege collaborator audit or credential rotation.

Settings were read back through the GitHub API after configuration. No credentials or tokens are recorded here.
