# Deep Improvements Backlog

Priority is set for solo-maintainer sustainability and high leverage.

## P0 (start now)

- [x] Harden menu templates for nested trees, active-trail states, and semantic list classes.
- [x] Improve status-message accessibility semantics (`error` as assertive alert).
- [x] Add explicit validation checks for menu depth rendering and message roles.

## P1

- [x] Add configurable Axiom01 asset strategy (local dist vs package-managed copy) with fail-safe docs.
- [x] Add optional dark/light theme token overrides for Drupal admin and frontend parity.
- [x] Add template-level compatibility coverage for page/node/views/status outputs and fallback rendering.
- [x] Expand configurable appearance controls (mode, palette, fonts, spacing, width) in theme settings.
- [x] Expand block regions and add menu fallbacks for out-of-box navigation.
- [x] Restore contextual edit affordances in key templates (branding/node/views).

## P2

- [ ] Complete Axiom-first replacement wave in order: tabs/pager/exposed/search, then table/list admin alignment, then tooltip/modal-safe enhancements.
- [ ] Add a Drupal-focused changelog/migration template for Axiom01 compatibility bumps.
- [ ] Introduce CI matrix validation against supported Drupal 11 patch lines.
- [ ] Add a starter-theme release checklist with rollback guidance.
- [ ] Add installer profile or config split that auto-places recommended blocks into expanded regions.
- [ ] Add visual-regression snapshots for each palette/font/spacing setting combination.
- [ ] Add optional per-region layout controls (container width, background, spacing) in theme settings.

## Started in this branch

- [x] Began P0 by hardening navigation and status message templates.
- [x] Continued P1 with explicit light/dark token overrides in `css/theme.css`.
- [x] Completed asset strategy switch with auto/package/local selection and fallback docs.
- [x] Added expanded region map, menu fallback rendering, contextual-link-friendly templates, and appearance config controls.

## New in-depth TODO (next wave)

- [x] Add dedicated Twig overrides for `details.html.twig` and `fieldset.html.twig` to enforce Axiom01 accordion/fieldset anatomy consistently in admin and frontend forms.
- [x] Add visual consistency styles for Drupal-specific classes (`.form-item--error-message`, `.messages`, `.pager`, `.tabs`) so core structures inherit Axiom01 spacing and typography defaults.
- [ ] Add cross-browser focus/hover checks for form controls, including high-contrast mode and forced-colors accessibility scenarios.
- [ ] Introduce sample content/config bundle demonstrating a complete “contact + filters + accordion help panel” page using only Axiom01-ready Drupal structures.
- [ ] Add validation steps (or snapshots) proving themed output for key Drupal core forms: user login, search, node edit, and theme settings.
- [ ] Add region-level layout utility classes and documentation so sidebars, prefooter, and footer blocks preserve rhythm across all spacing-scale options.

## Backlog entry policy (required)

Every new improvement entry must explicitly state:

1. Which Drupal core surface is being replaced.
2. Which Axiom component/pattern is used.
3. How semantic/minimal markup is preserved (single root class, no BEM/class-stack expansion).

## Backport candidates to core Axiom01

- [ ] Add a first-party semantic search pattern that supports configurable key/value JSON sources via data attributes (no class-heavy markup required).
- [x] Add docs guidance for platform integration hooks (`data-icon-set`, `data-character-set`) so downstream themes/apps can align with Axiom01 tokens without hard-coding class stacks.
- [x] Add “semantic-first integration” examples showing how framework styles can target native CMS classes (`.messages`, `.pager`, `.tabs`, form error wrappers) without BEM-style wrapper classes.
- [x] Backport CMS integration styles into core Axiom01 CSS for Drupal progress/throbber, file upload widgets, and generic field widget/formatter hooks.
