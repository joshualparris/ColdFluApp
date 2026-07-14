# Repository conventions

## Directory responsibilities

| Directory | Purpose | Publication status |
|---|---|---|
| `content/modules/` | Canonical structured reader modules | Controlled by module status |
| `content/sources/` | Reusable exact source records | Internal until referenced |
| `content/jurisdictions/` | Reviewed local rules and pathways | Jurisdiction-specific |
| `content/research/` | Protocols, searches, extraction, and review records | Internal evidence trail |
| `inputs/` | Imported prompts, conversations, and unverified drafts | Never publish directly |
| `templates/` | Blank authoring and review forms | Internal |
| `scripts/` | Validation and maintenance automation | Internal tooling |
| `archive/` | Superseded canonical artefacts with provenance | Never publish directly |

`archive/` is not a dumping ground for raw imports; those belong in `inputs/`. Archive only material that was once canonical or operationally significant, and include a short reason and replacement reference.

## Naming

- Use lowercase kebab-case: `sore-throat.md`, `au.yaml`, `search-log.md`.
- Module IDs and slugs should be stable and match their folder names.
- Source IDs should be stable identifiers, not mutable titles.
- Add a date only when it conveys a real event or version: `2026-07-15-search-log.md`.
- Use `raw` or `unverified` in imported filenames where publication status might otherwise be ambiguous.

## Proposed module research package

```text
content/research/sore-throat/
  protocol.md
  search-log.md
  screening.md
  extraction.yaml
  claim-source-map.yaml
  reviews/
```

The reader-facing module remains in `content/modules/sore-throat.*`; research artefacts do not get bundled into public pages unless intentionally exposed.

## Moving content through the repository

1. Preserve incoming material unchanged in `inputs/` and record its origin.
2. Create a research package using the templates.
3. Verify sources and extract claim-level evidence.
4. Draft canonical structured content under `content/`.
5. Complete evidence, clinical, editorial, and accessibility review.
6. Publish only after automated and human gates pass.
7. Move superseded canonical versions to `archive/` only when version control alone is insufficient for the audit need.

External agent submissions use `inputs/agent-returns/<agent>/<module-slug>/<return-date>/` and remain unchanged raw provenance. Canonical integration copies only verified material and leaves the return in place.

## Empty directories

`.gitkeep` files retain intentional empty directories until real content exists. Remove the marker once the directory contains tracked files.
