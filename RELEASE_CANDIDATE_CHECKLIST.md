# Axiom01 Release Candidate Checklist (v1.0.0)

Use this checklist before creating the release tag.

## 1) Working tree and scope

- [ ] `git status` reviewed and all tracked deletions are intentional for this release.
- [ ] No accidental local files are staged (for example editor metadata/system files).
- [ ] Release changes are committed in focused, reviewable commits.

## 2) Automated local checks

- [ ] Pre-release audit passes:
  - `npm test`
- [ ] Release artifact build passes:
  - `npm run build`
- [ ] Packaging dry-run passes:
  - `npm pack --dry-run`
- [ ] `dist/` contains expected files:
  - `dist/css/axiom.min.css`
  - `dist/js/axiom.min.js`
  - `dist/README.md`
  - `dist/version.txt`

## 3) Manual smoke tests (browser)

### Core pages

- [ ] `index.html` loads and major sections render correctly.
- [ ] `docs/components-overview.html` layout is polished on mobile and desktop.
- [ ] `docs/markdown-template.html` footer spacing is consistent with other docs pages.

### Search and navigation

- [ ] Header search toggle opens/closes modal (click, Escape, and backdrop click).
- [ ] Search results open valid pages (component pages + markdown-template docs).
- [ ] Search works from:
  - [ ] `index.html`
  - [ ] `docs/*.html`
  - [ ] `docs/components/*.html`
- [ ] Theme toggle works and persists between page reloads.
- [ ] Mobile menu toggle behaves correctly (including focus/interaction expectations).

### Footer consistency

- [ ] Footer spacing is consistent across root docs pages.
- [ ] Footer links in component docs route to `docs/components-overview.html` and markdown-template docs links (no placeholder links).

### Spot-check component docs

- [ ] `docs/components/accordion.html`
- [ ] `docs/components/search.html`
- [ ] `docs/components/infinite-scroll.html`
- [ ] `docs/components/multi-step-form.html`
- [ ] `docs/components/tooltip.html`

## 4) Release workflow readiness

- [ ] `.github/workflows/release.yml` reflects intended behavior (audit -> build -> release -> deploy -> publish).
- [ ] Required secrets exist in repository settings:
  - [ ] `NPM_TOKEN`
  - [ ] `GITHUB_TOKEN` (default token permissions sufficient)
- [ ] npm package metadata is correct in `package.json` (`name`, `version`, `license`, `files`).
- [ ] `CHANGELOG.md` updated for this tag.

## 5) Tag and release

- [ ] Create/verify final release commit.
- [ ] Create tag in semver format: `v1.0.0`.
- [ ] Push tag to trigger release workflow.
- [ ] Verify GitHub Release contains expected artifacts.
- [ ] Verify npm publish succeeded.
- [ ] Verify GitHub Pages deployment outcome matches intended release output.

## Sign-off

- [ ] Engineering sign-off
- [ ] Docs/UI sign-off
- [ ] Release owner sign-off

