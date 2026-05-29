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
