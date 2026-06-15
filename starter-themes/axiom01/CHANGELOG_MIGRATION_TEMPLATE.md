# Drupal Compatibility Changelog + Migration Template

Use this template for any starter-theme release that changes compatibility expectations with upstream Axiom01 runtime assets.

## Release metadata

- Starter-theme version:
- Release date:
- Compatibility window (Axiom01 versions/commits):
- Synced upstream commit SHA:

## Compatibility summary

- Added support:
- Changed behavior:
- Removed/deprecated behavior:

## Drupal-impact matrix

- Core templates affected:
- Theme settings affected:
- Regions/block placement affected:
- JavaScript behavior libraries affected:
- CSS selector compatibility risks:

## Required site-owner actions

1. 
2. 
3. 

## Upgrade validation checklist

- [ ] `npm run sync:drupal-assets` executed from root and assets are in parity.
- [ ] `npm run audit:drupal-assets` passes.
- [ ] Key template outputs validated (page, node, views, status, form elements).
- [ ] Theme settings form renders and saves correctly.
- [ ] Menu and block region placement still matches expected layout.

## Rollback plan

- Roll back to prior starter-theme tag:
- Restore prior synced `dist/*` assets:
- Rebuild Drupal caches (`drush cr` or UI cache rebuild):
- Confirm restored template output and region layout:

## Notes for maintainers

- Follow-up docs needed:
- Known edge cases:
- Linked issue/PR:
