# AGENTS.md - Axiom01 Semantic Framework Rules & Standards

This document is the authoritative standard for all AI agents and contributors working in the **Axiom01** repository and any downstream applications integrating Axiom01.

---

## 1. The Core Axiom01 Philosophy

Axiom01 rejects modern web development's class hoarding, utility chaos, and BEM complexity. The framework is built on **Semantic HTML** where markup declares what an element **is**, not what it looks like.

Reference: [Axiom01 Documentation Site](https://sol-roth-media.github.io/axiom01/)

---

## 2. Cardinal Rules (Non-Negotiable)

### Rule 1: Enforce the Class Density Metric ($D_c \le 1$)
- Every component should have **at most one class on its root element** (e.g. `<aside class="dock">`, `<section class="prompter">`, `<article class="card">`).
- If a component is a variant of an existing base component, use a single-word secondary modifier class (e.g. `<article class="card deck">`, `<article class="card elevated">`, `<button class="button primary">`, `<aside class="dock compact">`).
- **NEVER** write utility chains (`class="flex flex-col gap-4 p-4 border rounded shadow"`).

### Rule 2: Zero BEM and Zero Dashed Sub-Element Classes
- **STRICTLY FORBIDDEN**:
  - BEM tokens: `__` (element) and `--` (modifier) (e.g. `card__header`, `dock__button--active`).
  - Prefix-bloat: `axiom-*` (e.g. `axiom-dock`, `axiom-btn-pill`, `axiom-beat-card`, `axiom-line`).
  - Role-suffix classes: `*-header`, `*-body`, `*-footer`, `*-title`, `*-content` (e.g. `main-header`, `docs-header`, `card-header`, `notes-header`).
  - Abbreviated button classes: `btn-*`, `btn-ax`, `btn-vj`, `btn-scene`.
- **CORRECT AXIOM PATTERN**:
  - Style native HTML elements directly: `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, `<article>`, `<section>`, `<button>`, `<h3>`, `<p>`, `<small>`, `<span>`.
  - Inside a component, use the tag itself:
    ```html
    <!-- ✅ AXIOM01 -->
    <article class="card">
      <header>
        <h3>Title</h3>
      </header>
      <p>Content goes here.</p>
      <footer>
        <button class="primary">Save</button>
      </footer>
    </article>

    <!-- ❌ FORBIDDEN: BEM / Dashed bloat -->
    <div class="axiom-card">
      <div class="card-header">
        <h3 class="card-title">Title</h3>
      </div>
      <div class="card-body">...</div>
      <div class="card-footer">
        <button class="btn-ax btn-primary">Save</button>
      </div>
    </div>
    ```

### Rule 3: Use Order and Type of Child Elements
- Use CSS child and structural selectors to target elements by order and type:
  ```css
  .card > header { ... }
  .card > header > span:first-child { ... }
  .card > footer { ... }
  .card button { ... }
  .dock > nav > button { ... }
  ```

### Rule 4: Native `<button>` Over Custom Button Classes
- Do not create `.btn-*` classes. A button is a `<button>` element.
- Default button styling applies to native `<button>`.
- Type and size variants use single-word modifier classes:
  - Sizes: `sm`, `lg`, `xl` (e.g. `<button class="sm">`).
  - Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`, `success` (e.g. `<button class="primary">`).
- In contextual navigation, target via parent: `nav button`, `header a`, `.dock button`.

### Rule 5: State and Dynamic Variables via `data-*` Attributes
- For dynamic runtime states, use semantic HTML5 data attributes:
  - `data-state="active" | "closed" | "loading"`
  - `data-theme="dark" | "light"`
  - `data-mode="stage" | "prompter"`
- CSS targets these directly:
  ```css
  .dock[data-state="compact"] { height: 36px; }
  .prompter p[data-state="active"] { color: var(--dj-accent-brand); }
  ```

---

## 3. Extending Existing Components vs Creating New Ones

1. **Check Existing Components First**:
   - `axiom01` already provides 79 core components (e.g. `card`, `button`, `badge`, `modal`, `tabs`, `table`, `hero`, `grid`).
   - If a UI element is conceptually a card, **extend `card` with a single modifier**:
     `<article class="card deck">` or `<article class="card scene">`.
2. **When Creating a Truly New Component**:
   - Give it a single, descriptive, lowercase semantic name:
     - `dock` (`<aside class="dock">`): Viewport-anchored action bar.
     - `prompter` (`<section class="prompter">`): Colossal stage lyric prompter.
     - `padgrid` (`<div class="padgrid">`): Hardware-style performance pad matrix.
     - `wheel` (`<div class="wheel">`): Harmonic key wheel.
   - Encapsulate all internal styling within that one root class using native descendant selectors.
