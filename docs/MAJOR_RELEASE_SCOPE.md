# Axiom01 Major Release Scope (Solo-Developer + AI Maintainers)

This document freezes the next major-release surface so one maintainer and AI agents can ship and sustain it.

## 1) Core supported set (stable surface)

The major release guarantees active support and backward-compatible maintenance for:

- Runtime loader: `/tmp/workspace/Sol-Roth-Media/axiom01/js/axiom.js`
- Design tokens + core styles: `/tmp/workspace/Sol-Roth-Media/axiom01/css/axiom.css`
- Docs shell + shared docs styling:
  - `/tmp/workspace/Sol-Roth-Media/axiom01/docs/components-overview.html`
  - `/tmp/workspace/Sol-Roth-Media/axiom01/css/doc-styles.css`
  - `/tmp/workspace/Sol-Roth-Media/axiom01/css/doc-preview.css`
- Production JS components currently implemented in `/tmp/workspace/Sol-Roth-Media/axiom01/js/components/`:
  - `mobile-navbar`
  - `dropdown`
  - `accordion`
  - `search`
  - `tooltip`
  - `component-browser`
  - `spacing-demo`
  - `editor`

## 2) Experimental set

Any docs component page without a matching production JS module in `/tmp/workspace/Sol-Roth-Media/axiom01/js/components/` is experimental by default.

Rules:
- Experimental items can change without migration guarantees.
- Experimental items are not blockers for major-release sign-off.
- Experimental pages must be clearly labeled in docs before major release.

## 3) Deferred set

Deferred until post-major-release unless directly required by the current stable surface:

- New standalone component categories not already represented in current JS modules.
- New build-system complexity beyond the single release quality lane.
- Additional platform integrations beyond the core framework and docs.

## 4) Breaking-change policy for the major release

Breaking changes are allowed only if they reduce long-term maintenance load for a solo maintainer and AI agents. Every breaking change must include:

1. Why the change lowers maintenance cost.
2. A migration note in changelog/docs.
3. A migration note in changelog/docs when consumers need one.
