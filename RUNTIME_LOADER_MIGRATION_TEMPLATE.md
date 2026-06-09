# Runtime Loader Breaking-Change Migration Note

Use this template whenever a release includes runtime loader behavior changes that can affect existing integrations.

## Summary

- Release version:
- Change type (`breaking` / `behavioral` / `deprecation`):
- Affected components:

## What changed

- Previous runtime behavior:
- New runtime behavior:
- Why the change was made:

## Impact assessment

- Who is affected (framework consumers, docs examples, starter themes, custom apps):
- Affected APIs/hooks (`registerComponent`, loader lifecycle, event hooks, data attributes):
- Backward compatibility status:

## Required migration actions

1. 
2. 
3. 

## Validation checklist

- [ ] `npm test` passes after migration updates.
- [ ] Runtime loader syntax gate passes (`npm run audit:runtime-loader`).
- [ ] Runtime loader failure-path smoke gate passes (`npm run audit:runtime-loader-failures`).
- [ ] Updated docs examples still pass pre-release audit (`npm run audit:pre-release`).

## Rollback guidance

- Revert target release/tag:
- Temporary compatibility shim (if available):
- Fallback behavior and known limitations:

## Communication

- Changelog entry link:
- Release notes link:
- Affected downstream teams/projects notified:
