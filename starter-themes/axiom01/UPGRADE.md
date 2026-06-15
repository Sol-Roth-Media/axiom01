# Upgrade Guide

## Axiom01 upgrade process

1. Update Axiom01 dependency/version reference.
2. Run `npm run sync:drupal-assets` from repository root to refresh starter-theme `dist/*` runtime files.
3. Run template smoke checks and menu rendering checks.
4. Review release notes for token or component API changes.
5. Update compatibility range in `COMPATIBILITY.md` if needed.

## Drupal minor/patch upgrade process

1. Update Drupal core in project.
2. Verify theme registry rebuild and template discovery.
3. Re-run starter-theme validation checklist.
