# Axiom01 Framework Deep Improvements Backlog

Prioritized for solo-maintainer + AI-agent sustainability.

## P0 (next)

- [x] Restore valid runtime loader structure in `js/axiom.js` and keep registration APIs callable.
- [ ] Add a lightweight runtime-loader syntax gate in the quality lane.
- [ ] Add focused smoke checks for dynamic component import failures and fallback behavior.

## P1

- [ ] Stabilize component lifecycle docs with `init()`/`destroy()` contract examples per supported component.
- [ ] Add a docs parity audit between `docs/components-overview.html` and `js/components/*`.
- [ ] Define migration-note template for any runtime loader breaking change.

## P2

- [ ] Add optional diagnostics mode to runtime loader for structured initialization telemetry.
- [ ] Add explicit compatibility map between core-supported and experimental components.
