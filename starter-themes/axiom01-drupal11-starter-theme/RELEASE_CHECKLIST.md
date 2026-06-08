# Starter-theme Release Checklist

Use this checklist for every starter-theme release candidate.

## Pre-release gates

- [ ] `npm test` passes from repository root.
- [ ] `npm run build` passes from repository root.
- [ ] `npm run audit:drupal-assets` reports `PASS`.
- [ ] `npm run audit:drupal-twig` reports `PASS`.

## Compatibility and validation

- [ ] `VALIDATION.md` checklist completed.
- [ ] `CHANGELOG_MIGRATION_TEMPLATE.md` filled when compatibility behavior changed.
- [ ] `RELEASE_NOTE_TEMPLATE.md` updated with source commit SHA and parity result.
- [ ] Core template coverage verified (page/node/views/status/form/menu/branding).

## Rollback guidance

- [ ] Previous starter-theme release tag identified and documented.
- [ ] Prior `dist/css/axiom.min.css` and `dist/js/axiom.min.js` artifacts archived.
- [ ] Rollback steps documented (`git checkout <previous-tag>` + `drush cr`).
- [ ] Post-rollback smoke verified (menus, forms, status messages, AI blocks).

