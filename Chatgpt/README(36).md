# Cold & Flu Home Care Knowledge Base

A modular, evidence-graded website for home management of colds, influenza and overlapping respiratory symptoms, with an Australian clinical and regulatory context.

## Included

- 28 independent JSON modules
- 28 readable Markdown research files
- 39 initial sources
- evidence-level filtering
- full-text search
- responsive module navigation
- printable module pages
- source provenance and review dates
- systematic research methodology
- separate ChatGPT research, Claude audit and Codex merge briefs
- a 50-topic evidence expansion roadmap

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run typecheck
npm run build
```

The production output is written to `dist/`.

## Content architecture

- `src/content/modules/*.json` — website source of truth, one file per module
- `src/content/sources.json` — reusable source registry
- `research/modules/*.md` — readable research mirror
- `research/methodology.md` — evidence and editorial standard
- `research/roadmap.md` — prioritised expansion beyond the initial 28 modules
- `research/module-schema.json` — JSON schema
- `research/prompts/` — AI research/audit/implementation briefs

The app uses `import.meta.glob`, so adding a valid module JSON file automatically adds it to navigation.

## Recommended workflow

1. Give the relevant module and `chatgpt-deep-research.md` to ChatGPT.
2. Give ChatGPT's package, the existing module and `claude-evidence-audit.md` to Claude.
3. Give both outputs and `codex-repository-update.md` to Codex in VS Code.
4. Review high-risk claims manually.
5. Run type-check and build.
6. Commit the module, source-register and change-log updates together.

## Safety

This project provides general educational information. It is not a diagnosis, prescription or substitute for individual advice from a doctor, pharmacist, nurse or emergency service. Medicine scheduling, vaccine programs and clinical recommendations change; high-risk modules require regular review.
