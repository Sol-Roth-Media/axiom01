# Runtime Loader Migration Note Template

Use this template whenever a runtime-loader change can break existing integration behavior.

## Summary

- Change:
- Why it changed:
- Impact level: low / medium / high

## Affected surface

- Public API changes:
- Component loading behavior changes:
- Initialization lifecycle changes:
- Destroy/cleanup lifecycle changes:

## Required consumer updates

1. 
2. 
3. 

## Compatibility and fallback

- Backward-compatible path:
- Fallback behavior:
- Deprecated patterns:

## Verification checklist

- [ ] `npm test` passes
- [ ] `npm run build` passes
- [ ] Dynamic import failure path still returns `null`
- [ ] Initialization skips unresolved components without throwing
- [ ] Updated docs in `docs/components-overview.html` when affected

## Rollout notes

- Version tag:
- Release notes entry:
- Follow-up cleanup tasks:
