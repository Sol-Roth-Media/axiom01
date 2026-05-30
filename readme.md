# Axiom01 UI Framework

> A modern, accessible, and themeable UI framework built with semantic HTML and progressive enhancement.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/axiom01)
[![Bundle Size](https://img.shields.io/badge/gzipped-25KB%20core%20%7C%2045KB%20full-blue.svg)](https://bundlephobia.com/package/axiom01)

## ✨ Features

- **🎯 Semantic-First**: Built with proper HTML semantics and progressive enhancement
- **♿ Accessibility**: WCAG 2.1 AA+ compliant with screen reader and keyboard support
- **🎨 Themeable**: 5+ built-in themes plus interactive theme customization wizard
- **📱 Responsive**: Mobile-first design with flexible grid system
- **⚡ Performance**: Lightweight core bundle (25KB gzipped)
- **🛠 Developer Tools**: Interactive playground, VS Code extension, and build tools
- **🌓 Dark Mode**: Automatic dark mode with system preference detection
# Axiom01

Axiom01 is a semantic-first UI framework and documentation site focused on clean HTML, minimal class usage, and accessible interaction patterns.

## Core principles

- Semantic HTML first, with one descriptive root class per component.
- No BEM-style class architecture.
- CSS variables drive spacing, color, typography, and themes.
- Accessibility defaults: keyboard support, ARIA state hooks, and focus handling.

## Current repository layout

- `index.html`: Main demo and framework landing page.
- `css/axiom.css`: Core framework styles and tokens.
- `css/site.css`: Site-level styles for `index.html` presentation.
- `css/doc-styles.css`: Shared docs page styling.
- `css/doc-preview.css`: Shared styling for component doc pages.
- `js/axiom.js`: Component loader that initializes `[data-component]` modules from `js/components/`.
- `js/index-page-manager.js`: Page behaviors (theme toggle, search modal, component browser, etc.).
- `docs/`: Documentation hub, advanced guides, and per-component pages.

## How component loading works

`js/axiom.js` scans the DOM for `[data-component]`, dynamically imports `js/components/<name>.js`, and initializes each instance.

Supported component exports:

- A class (constructed with the component element)
- An object with `init(element)`

If a component instance exposes `destroy()`, the loader tracks it for cleanup.

## Local development

There is no full automated test/build pipeline committed yet, so local verification is browser-first.

1. Open `index.html` in your browser.
2. Exercise affected docs pages under `docs/`.
3. For component behavior changes, test keyboard and responsive behavior (mobile + desktop widths).

### Optional static server

If your browser blocks module imports from `file://`, run a local server from the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Release workflow (GitHub Actions)

The repository includes `.github/workflows/release.yml`, which triggers on version tags (`v*.*.*`) and is intended to:

1. install dependencies,
2. run a build,
3. create a GitHub release,
4. deploy built artifacts to `gh-pages`,
5. publish to npm.

Before tagging a release, ensure repository scripts and packaging configuration match that workflow (for example: lockfile present, build scripts defined, publishable package settings in `package.json`, and required secrets configured).

## Build pipeline notes

`BUILD_PROCESS.md` documents a PostCSS pipeline (`postcss-import`, `cssnano`, `purgecss`) for producing optimized CSS. Treat it as the source of truth for CSS build setup.

## Release checks and artifacts

Run the local pre-release audit:

```bash
npm test
```

`npm test` is the single maintenance quality lane and runs:

1. pre-release audit,
2. semantic/BEM compliance gates for `index.html` and `docs/components/*.html`,
3. runtime-loader syntax gate,
4. critical interaction smoke checks,
5. accessibility smoke checks.

Build release artifacts expected by release automation:

```bash
npm run build
```

This generates:

- `dist/css/axiom.min.css`
- `dist/js/axiom.min.js`
- `dist/README.md`
- `dist/version.txt`

## Docs and contributor references

- `DEVELOPER.md`: contributor workflows and implementation notes.
- `AXIOM01_STYLING_GUIDE.md`: styling philosophy and conventions.
- `FIRST_MAJOR_RELEASE_AUDIT.md`: release hardening checklist and cleanup status.
- `TESTING.md`: recommended testing strategy (unit/integration/visual/accessibility).
- `docs/MAJOR_RELEASE_SCOPE.md`: major-release core supported set and stable surface.
- `docs/MAINTENANCE_WORKFLOW.md`: triage rubric, DoD checklists, and release cadence.
- `starter-themes/axiom01-drupal11-starter-theme/`: bootstrap scaffold for dedicated Drupal 11 starter-theme repo.

## First release readiness (current focus)

- Continue docs consistency cleanup (layout, spacing, and footer/header parity).
- Remove remaining legacy scaffolding and malformed markup.
- Tighten accessibility checks on interactive docs components.
- Finalize release pipeline inputs so tag-based releases are reliable.
- Restored and integrated AI Chat and AI Imagegen components
- Added a Settings component stub to prevent 404s
- Semantic compliance is now enforced by the pre-release audit with explicit integration-selector allowlists.
- Version updated to 0.2.0
