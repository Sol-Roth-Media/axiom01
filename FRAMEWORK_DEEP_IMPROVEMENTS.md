# Axiom01 Framework Deep Improvements Backlog

Prioritized for solo-maintainer + AI-agent sustainability.

## P0 (next)

- [x] Restore valid runtime loader structure in `js/axiom.js` and keep registration APIs callable.
- [x] Add a lightweight runtime-loader syntax gate in the quality lane.
- [x] Add focused smoke checks for dynamic component import failures and fallback behavior.
- [x] Add strict docs audit checks for inline styles and non-semantic interactive element patterns.
- [ ] Add strict class-shape checks to block BEM, dashed multi-part classes, and nested class chains in docs examples.
- [ ] Add a class-budget check for key docs pages so examples stay one-root-class-first with semantic descendants.

## P1

- [ ] Stabilize component lifecycle docs with `init()`/`destroy()` contract examples per supported component.
- [ ] Add a docs parity audit between `docs/components-overview.html` and `js/components/*`.
- [ ] Define migration-note template for any runtime loader breaking change.
- [ ] Add gesture regression smoke checks for swipe cards, pull refresh, and touch interactions.
- [ ] Add docs examples for production data binding patterns for story view, timer, and file display components.
- [ ] Audit all docs component examples for one descriptive root class plus adjective variants only.
- [ ] Replace extra wrapper markup in docs examples with semantic sectioning elements where possible.
- [ ] Normalize docs examples to rely on element order and descendant selectors instead of child utility classes.
- [ ] Add a semantic-structure checklist to docs contribution requirements and release checklist cross-checks.

## Started in this branch

- [x] Added runtime-loader syntax/API gate and wired it into `npm test`.

## P2

- [ ] Add optional diagnostics mode to runtime loader for structured initialization telemetry.
- [ ] Add explicit compatibility map between core-supported and experimental components.
- [ ] Add integration adapters for native file system APIs and offline media caching in multimedia picker workflows.
- [ ] Add an automated docs report that ranks pages by class-count density and semantic-structure quality.
- [ ] Add staged autofix suggestions for docs examples that can remove redundant classes without behavior changes.
- [ ] Publish an Axiom01 semantic migration playbook for converting legacy class-heavy snippets to compliant patterns.

## New deep improvements (semantic-first hardening)

- [ ] Add docs audit checks to flag non-semantic button-like anchors (`href="#"`) and require true button elements for actions.
- [ ] Add a targeted docs smoke gate that enforces one-root-class examples for selected flagship component pages before broad rollout.
- [ ] Add an audit check that flags class attributes with more than two tokens in component examples to reduce wrapper-class drift.
- [ ] Add a migration backlog map for top 20 docs component pages with the highest semantic debt and class-density.
- [ ] Add starter-theme Twig fixture checks that block new BEM-style (`__` / `--`) and multi-dash utility classes.
