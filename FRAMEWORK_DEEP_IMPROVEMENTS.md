# Axiom01 Framework Deep Improvements Backlog

Prioritized for solo-maintainer + AI-agent sustainability.

## P0 (next)

- [x] Restore valid runtime loader structure in `js/axiom.js` and keep registration APIs callable.
- [x] Add a lightweight runtime-loader syntax gate in the quality lane.
- [x] Add focused smoke checks for dynamic component import failures and fallback behavior.

## P1

- [ ] Stabilize component lifecycle docs with `init()`/`destroy()` contract examples per supported component.
- [x] Add a docs parity audit between `docs/components-overview.html` and `js/components/*`.
- [x] Define migration-note template for any runtime loader breaking change.

## Started in this branch

- [x] Added runtime-loader syntax/API gate and wired it into `npm test`.
- [x] Added focused runtime-loader fallback smoke checks for dynamic import failures.
- [x] Added components-overview parity audit coverage for `js/components/*` links.
- [x] Added runtime-loader migration note template for breaking changes.

## P2

- [ ] Add optional diagnostics mode to runtime loader for structured initialization telemetry.
- [ ] Add explicit compatibility map between core-supported and experimental components.
