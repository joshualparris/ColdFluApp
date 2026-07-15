# Operations runbook

This runbook covers repository-controlled operations. Named service owners and emergency authority remain external prerequisites until accepted appointments are recorded.

## Production checks

The `operational-assurance` workflow checks the public home page, robots file and sitemap every day. It fails if the private preview appears in the public sitemap, if the robots policy no longer mentions the private route, or if the public pre-publication status disappears. GitHub Actions notifications are the initial alert route; an appointed operator must configure an independently monitored destination before launch.

## Correction intake

Public correction intake uses the repository's **Content correction or safety concern** issue form. It warns reporters not to submit personal health information and is not an emergency channel. Apply the `correction-intake` label, preserve the affected URL and version, then follow the severity and emergency-unpublishing policy in `docs/GOVERNANCE_AND_ACCOUNTABILITY.md`.

No unattended form in the application stores health information. A future private intake service requires a privacy assessment, retention policy, access controls and an accepted project decision.

## Incident response

1. Preserve the report, affected URL, deployed commit and time observed.
2. For plausible immediate harm, disable or revert the affected public material while seeking the authorised owner and clinical reviewer.
3. Classify the incident using the governance severity policy and open a restricted record if it contains security-sensitive information.
4. Correct through a reviewed pull request and publication gates.
5. Record impact, resolution, approver, public notice and follow-up action.

GitHub security vulnerabilities must be reported through private security reporting when enabled, not a public issue.

## Backup and restore

Git is the primary versioned record. The scheduled workflow also creates a 30-day Actions artifact containing `content/`, `docs/`, `templates/`, `README.md` and `TODO.md`. This artifact is convenient recovery material, not an independent disaster-recovery backup.

Quarterly restore exercise:

1. Download the latest snapshot artifact from a successful workflow run.
2. Extract it into an empty temporary directory.
3. compare it with the corresponding Git commit;
4. run `npm ci`, `npm run validate:content`, `npm test` and `npm run build` from a clean clone; and
5. record operator, date, commit, artifact ID, result, duration and findings.

Before launch, the appointed owner must configure an encrypted independent repository backup, document retention and access, and complete one witnessed restore.

## Credential rotation

Private-preview credentials belong only in Vercel environment settings. Rotate both username and password, redeploy, confirm old credentials return 401 and confirm valid credentials receive `noindex` and `no-store` headers. Never copy values into issues, logs or this repository. Record only the rotation date, operator, environment and verification result.

## Dependency and source maintenance

Dependabot proposes weekly npm and monthly GitHub Actions updates. Quality gates must pass before merging. Separately monitor Australian regulator alerts, guideline updates, source corrections/retractions and module review dates; dependency automation does not monitor medical evidence.
