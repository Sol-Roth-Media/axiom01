# AXIOM01

Semantic-first UI framework for building accessible interfaces with minimal markup, one root component class, and theming applied on actual elements rather than BEM-style helper chains.

## Current status

- **Published package:** `2.1.2`
- **Framework state:** v2 framework, docs, and audits are in release-hardening for the first stable v2 launch
- **Philosophy:** semantic markup first, no BEM, no extra wrapper classes, one root component class, theme through tokens and element order
- **Accessibility:** WCAG-minded defaults with audit and smoke-test coverage in the repository
- **Distribution:** zero-dependency CSS framework with optional JavaScript component runtime and static docs site

## What is in the repo

- `css/` — core framework CSS, tokens, docs styles, and release-ready minified assets
- `js/` — runtime loader, page scripts, and component modules
- `docs/` — public documentation site and component reference pages
- `scripts/` — build, sync, audit, and smoke-test tooling used by release workflows
- `src/` — structured content and source material that feeds framework/docs work
- `archive/` — historical reports, session notes, and older release artifacts kept for reference
- `assets/`, `favicon/`, `templates/` — supporting site assets and integration templates
- `index.html` — main framework landing page

## Repository structure

```text
axiom01/
├── README.md
├── package.json
├── index.html
├── css/
├── js/
│   └── components/
├── docs/
│   └── components/
├── scripts/
├── src/
├── archive/
├── assets/
├── favicon/
└── templates/
```

## Key framework traits

- Semantic-first HTML and element-led styling
- One root component class instead of BEM trees
- Design-token driven theming and dark-mode support
- Release-ready docs site with broad component coverage
- 80 component docs, 24 runtime modules, 3,969 Axicons variants, and 22 keyframe animations
- Optional JavaScript runtime for interactive components
- Build, parity, philosophy, and accessibility audit gates in `npm test`

## Quick start

### Install from npm

```bash
npm install axiom01
```

### Use from CDN

```html
<link rel="stylesheet" href="https://unpkg.com/axiom01@2.1.2/css/axiom.min.css">
<script type="module" src="https://unpkg.com/axiom01@2.1.2/js/axiom.min.js"></script>
```

### Local development

```bash
npm install
npm run build
npm test
```

Open `/home/runner/work/axiom01/axiom01/index.html` or serve the repository root locally to browse the framework site and docs.

## Core docs

- `docs/overview-quickstart.html`
- `docs/components-overview.html`
- `docs/axicons.html`
- `docs/styling-guide.html`
- `AXIOM01_STYLING_GUIDE.md`
- `DEVELOPER.md`

## Release workflow commands

- `npm run build` — rebuild CSS, JS, and `dist/` artifacts
- `npm test` — run pre-release, philosophy, runtime-loader, interaction, gesture, and accessibility checks

## Stable v2 release focus

CMS and framework integrations still exist, including Drupal in the public `dbase` repo, but they were removed from this repository to keep concerns separated.
The repo is currently centered on final cleanup, documentation accuracy, and audit hardening so the first stable v2 release ships with a clean public structure and reliable release gates.
