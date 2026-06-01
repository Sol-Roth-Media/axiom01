# Axiom01 Framework Deep Improvements Backlog

Prioritized for solo-maintainer + AI-agent sustainability.

## P0 (next)

- [x] Restore valid runtime loader structure in `js/axiom.js` and keep registration APIs callable.
- [x] Add a lightweight runtime-loader syntax gate in the quality lane.
- [ ] Add focused smoke checks for dynamic component import failures and fallback behavior.

## P1

- [ ] Stabilize component lifecycle docs with `init()`/`destroy()` contract examples per supported component.
- [ ] Add a docs parity audit between `docs/components-overview.html` and `js/components/*`.
- [ ] Define migration-note template for any runtime loader breaking change.
- [ ] Add gesture regression smoke checks for swipe cards, pull refresh, and touch interactions.
- [ ] Add docs examples for production data binding patterns for story view, timer, and file display components.

## Started in this branch

- [x] Added runtime-loader syntax/API gate and wired it into `npm test`.

## P2

- [ ] Add optional diagnostics mode to runtime loader for structured initialization telemetry.
- [ ] Add explicit compatibility map between core-supported and experimental components.
- [ ] Add integration adapters for native file system APIs and offline media caching in multimedia picker workflows.
