# Axiom01 Framework Compliance Audit & Component Backport Specification

## 1. Executive Summary & Framework Ethos

Axiom01 is built on one fundamental principle:

> **Write meaningful HTML where elements and classes describe WHAT an element IS, not what it looks like.**

Unlike modern utility-first frameworks that generate class chaos or BEM systems that pollute markup with complex hyphenated strings (`block__element--modifier`), Axiom01 enforces:

1. **Strict Class Density Metric ($D_c \le 1$)**: Exactly one class on a component's root element (or one base class plus a single modifier class for variants, e.g., `class="card deck"`).
2. **Direct Element Styling**: Styling is applied directly to native semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, `<article>`, `<button>`, `<h3>`, `<p>`, `<small>`, `<span>`).
3. **Child Element Order and Type**: Hierarchy and layout flow from the natural order of child elements using CSS descendant and child selectors (`.dock > header`, `.card > footer > button`), eliminating redundant sub-element wrapper classes.
4. **Zero BEM and Zero Dashed Classes**: No `axiom-*` prefixes, no role suffixes (`*-header`, `*-body`, `*-footer`), and no artificial button classes (`btn-*`, `btn-ax`). A button is simply a `<button>` element.

Reference: [Axiom01 Official Documentation Site](https://sol-roth-media.github.io/axiom01/)

---

## 2. Compliance Audit of the Live Performance System

### 2.1 Audit Findings & Anti-Pattern Elimination
An audit of previous implementations identified violations that have now been corrected:

| Anti-Pattern Identified | Axiom01 Violation | Corrected Axiom01 Architecture |
|---|---|---|
| `.axiom-dock-header`, `.drawer-header`, `.notes-header` | Dashed sub-element role suffixes | Use native `<header>` element inside parent: `.dock > header`, `aside > header` |
| `.btn-ax`, `.btn-vj`, `.btn-scene`, `.btn-select-scene` | Custom button utility classes | Native `<button>` element with standard single-word variants (`primary`, `secondary`, `outline`, `sm`) |
| `.axiom-beat-card`, `.axiom-deck-badge`, `.axiom-bpm-display` | BEM/dashed sub-element class sprawl | Extended core `card` component: `<article class="card deck">` with native child elements (`header`, `h3`, `p`, `small`) |
| `.axiom-prompter-viewport`, `.axiom-line.active` | Nested class bloat | `<section class="prompter">` with direct child paragraphs (`.prompter p`, `.prompter p.active`) |
| Hardcoded utility classes (`p-4 flex flex-col gap-2`) | Utility chaos | Token-driven component classes using CSS variables (`--a-space-*`, `--a-color-*`) |

---

## 3. Backport Component Specifications ($D_c \le 1$)

### Component 1: `card deck` (Extending Core `card`)

`axiom01` already provides the fundamental `.card` component in `css/_components.css`. For real-time telemetry and DJ deck monitoring, we extend `card` with a single semantic modifier: `class="card deck"`.

#### Semantic HTML Structure ($D_c = 2$, Base + Variant)
```html
<article class="card deck" data-state="master">
  <header>
    <span>DECK 1</span>
    <span>128.00 <small>BPM</small></span>
    <span>8A / Am</span>
  </header>
  <main>
    <h3>Titan Awakening</h3>
    <p>Sol Roth &bull; Extended Mix</p>
    <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
      <div style="width: 65%;"></div>
    </div>
  </main>
  <footer>
    <small>-01:42</small>
    <button class="secondary sm">CUE</button>
    <button class="primary sm">SYNC</button>
  </footer>
</article>
```

#### Axiom01 CSS Specification (Direct Descendants, No Dashed Classes)
```css
/* Extends core .card */
.card.deck {
  gap: var(--a-space-s);
  position: relative;
}

.card.deck[data-state="master"] {
  border-left: 4px solid var(--a-color-primary, #00f0ff);
}

.card.deck > header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--a-space-xs);
  border-bottom: 1px solid var(--a-color-outline);
}

.card.deck > header > span:nth-child(2) {
  font-family: var(--a-font-family-mono, monospace);
  font-weight: var(--a-font-weight-bold);
  font-size: 1.25rem;
  color: var(--a-color-warning, #ffd000);
}

.card.deck > main h3 {
  margin: var(--a-space-xs) 0 2px 0;
  font-size: 1.1rem;
}

.card.deck > main p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--a-color-on-surface-variant);
}

.card.deck [role="progressbar"] {
  height: 6px;
  background: var(--a-color-surface-container);
  border-radius: var(--a-border-radius-pill);
  overflow: hidden;
  margin-top: var(--a-space-xs);
}

.card.deck [role="progressbar"] > div {
  height: 100%;
  background: var(--a-color-primary);
}

.card.deck > footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--a-space-xs);
}
```

---

### Component 2: `dock` (`<aside class="dock">`)

A viewport-anchored action shelf designed for live performance controllers, media playback bars, and floating dashboards.

#### Semantic HTML Structure ($D_c = 1$)
```html
<aside class="dock" data-state="standard">
  <header>
    <h4><i class="axicon render" data-name="Slider"></i> Stage Controller</h4>
    <button class="icon sm" aria-label="Toggle Dock Size">
      <i class="axicon render" data-name="Chevron-Up"></i>
    </button>
  </header>
  <nav>
    <button class="active">1. Awakening</button>
    <button>2. Matrix</button>
    <button>3. Telemetry</button>
    <button>4. Warp</button>
  </nav>
  <footer>
    <button class="primary sm">Pose: IDLE</button>
    <button class="secondary sm">Portal: OPEN</button>
    <button class="outline sm">Cam: AUTO</button>
  </footer>
</aside>
```

#### Axiom01 CSS Specification
```css
.dock {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--a-color-surface);
  border-top: 1px solid var(--a-color-outline);
  padding: var(--a-space-xs) var(--a-space-m) env(safe-area-inset-bottom, var(--a-space-xs)) var(--a-space-m);
  display: flex;
  flex-direction: column;
  gap: var(--a-space-xs);
  transition: transform var(--a-transition-base), height var(--a-transition-base);
}

.dock[data-state="compact"] {
  height: 38px;
  overflow: hidden;
}

.dock > header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dock > header h4 {
  margin: 0;
  font-size: 0.85rem;
  font-weight: var(--a-font-weight-bold);
}

.dock > nav {
  display: flex;
  gap: var(--a-space-xs);
  overflow-x: auto;
}

.dock > nav > button {
  white-space: nowrap;
  padding: 4px 10px;
  font-size: 0.78rem;
}

.dock > footer {
  display: flex;
  gap: var(--a-space-xs);
  flex-wrap: wrap;
}
```

---

### Component 3: `prompter` (`<section class="prompter">`)

A stage teleprompter and high-readability text engine with fluid scaling and verse tracking.

#### Semantic HTML Structure ($D_c = 1$)
```html
<section class="prompter" data-mode="standard">
  <main>
    <p class="past">They built the towers up into the sky</p>
    <p class="active">A thousand neon signals passing by</p>
    <p>Waiting for the titan's roar tonight</p>
    <p>Standing on the edge of laser light</p>
  </main>
</section>
```

#### Axiom01 CSS Specification
```css
.prompter {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--a-color-surface-base, #07090e);
  padding: var(--a-space-l);
}

.prompter > main {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.prompter p {
  font-size: clamp(1.4rem, 4.5vw, 3.2rem);
  font-weight: var(--a-font-weight-bold);
  line-height: 1.35;
  margin: var(--a-space-s) 0;
  color: var(--a-color-on-surface-variant);
  transition: color var(--a-transition-base), transform var(--a-transition-base);
}

.prompter p.past {
  opacity: 0.35;
  transform: scale(0.96);
}

.prompter p.active {
  color: var(--a-color-primary, #00f0ff);
  transform: scale(1.04);
  text-shadow: 0 0 24px rgba(0, 240, 255, 0.45);
}

.prompter[data-mode="focus"] p {
  font-size: clamp(2.2rem, 7vw, 5.0rem);
}
```

---

### Component 4: `wheel` (`<div class="wheel">`)

An interactive Camelot harmonic wheel with adjacent key calculations.

#### Semantic HTML Structure ($D_c = 1$)
```html
<div class="wheel" data-key="8A">
  <svg viewBox="-120 -120 240 240">
    <!-- SVG segments -->
  </svg>
  <span>8A</span>
  <small>A Minor</small>
</div>
```

#### Axiom01 CSS Specification
```css
.wheel {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wheel > svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.wheel > span {
  font-size: 2rem;
  font-weight: var(--a-font-weight-bold);
  color: var(--a-color-primary);
  z-index: 1;
}

.wheel > small {
  font-size: 0.8rem;
  color: var(--a-color-on-surface-variant);
  z-index: 1;
}
```

---

### Component 5: `padgrid` (`<div class="padgrid">`)

A tactile 16-pad hardware grid for performance controllers.

#### Semantic HTML Structure ($D_c = 1$)
```html
<div class="padgrid" data-mode="stems">
  <button data-stem="vocal"><span>1</span><small>VOCAL</small></button>
  <button data-stem="drum"><span>2</span><small>DRUMS</small></button>
  <button data-stem="bass"><span>3</span><small>BASS</small></button>
  <button data-stem="inst"><span>4</span><small>INST</small></button>
  <!-- Pads 5 to 16 -->
</div>
```

#### Axiom01 CSS Specification
```css
.padgrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--a-space-xs);
  width: 100%;
  max-width: 400px;
}

.padgrid > button {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--a-space-xs);
  border: 2px solid var(--a-color-outline);
  background: var(--a-color-surface);
}

.padgrid > button:active,
.padgrid > button[data-state="active"] {
  background: var(--a-color-primary);
  color: #000;
  box-shadow: 0 0 16px var(--a-color-primary);
}

.padgrid > button > span {
  font-size: 0.75rem;
  opacity: 0.6;
}

.padgrid > button > small {
  font-size: 0.7rem;
  font-weight: var(--a-font-weight-bold);
}
```

---

## 4. Backport Roadmap Summary

| Component | Class Signature | Ethos & Relationship to Core |
|---|---|---|
| **Deck Card** | `class="card deck"` | Extends core `card` with telemetry and deck header styling ($D_c = 2$). |
| **Scene Card** | `class="card scene"` | Extends core `card` for VJ scene tiles with title and description ($D_c = 2$). |
| **Dock** | `class="dock"` | New component: Viewport-anchored floating bar with mode states ($D_c = 1$). |
| **Prompter** | `class="prompter"` | New component: Full-bleed teleprompter with fluid font scaling ($D_c = 1$). |
| **Wheel** | `class="wheel"` | New component: Harmonic key wheel display ($D_c = 1$). |
| **Pad Grid** | `class="padgrid"` | New component: 16-pad controller grid ($D_c = 1$). |

Every component strictly honors **Minimal Classes ($D_c \le 1$)**, styles directly on native elements, and eliminates all dashed sub-element naming.
