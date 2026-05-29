# Axiom01 Maintenance Workflow (Solo Developer + AI Agents)

## 1) Triage rubric (required labels)

Each issue/PR should map to exactly one primary bucket:

- `bug`: regressions, broken behavior, accessibility defects.
- `docs`: documentation correctness, missing examples, guidance updates.
- `component-parity`: mismatch between documented component behavior and shipped runtime/component code.
- `drupal-integration`: work related to `axiom01-drupal11-starter-theme` compatibility and templates.

Optional secondary tags:
- `core-supported`
- `experimental`
- `deferred`

## 2) Definition of done checklists

### A) Code change DoD

- [ ] Scope matches one triage bucket.
- [ ] Change is minimal and maintainable by one developer.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] Accessibility impact evaluated (and fixed if needed).
- [ ] Changelog/docs updated when behavior or public guidance changes.

### B) Docs-only DoD

- [ ] Guidance matches current shipped code.
- [ ] Links resolve locally.
- [ ] `npm test` passes.

### C) Drupal integration DoD

- [ ] Compatibility contract updated when Axiom01 surface changes.
- [ ] Menu/header/footer templates render expected semantic structure.
- [ ] Core pages/forms/status messages verified.
- [ ] Cross-repo validation checklist updated/passed.

## 3) Release cadence

- Monthly patch releases for bug/docs/parity fixes.
- Quarterly minor releases for additive improvements.
- Major releases only when migration docs and compatibility notes are complete.

## 4) Quality lane (single command)

Use this as the default gate for routine maintenance and release readiness:

```bash
npm test
```

`npm test` runs:
1. pre-release audit,
2. critical interaction smoke checks,
3. accessibility smoke checks.
