# Deep Improvements Backlog

Priority is set for solo-maintainer sustainability and high leverage.

## P0 (start now)

- [x] Harden menu templates for nested trees, active-trail states, and semantic list classes.
- [x] Improve status-message accessibility semantics (`error` as assertive alert).
- [x] Add explicit validation checks for menu depth rendering and message roles.

## P1

- [x] Add configurable Axiom01 asset strategy (local dist vs package-managed copy) with fail-safe docs.
- [x] Add optional dark/light theme token overrides for Drupal admin and frontend parity.
- [ ] Add template-level compatibility smoke fixtures for page/node/views/status outputs.

## P2

- [ ] Add a Drupal-focused changelog/migration template for Axiom01 compatibility bumps.
- [ ] Introduce CI matrix validation against supported Drupal 11 patch lines.
- [ ] Add a starter-theme release checklist with rollback guidance.

## Started in this branch

- [x] Began P0 by hardening navigation and status message templates.
- [x] Continued P1 with explicit light/dark token overrides in `css/theme.css`.
- [x] Completed asset strategy switch with auto/package/local selection and fallback docs.
