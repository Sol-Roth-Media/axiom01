# @axiom01/audio

> Pro Audio & Live Performance Extension Pack for the Axiom01 UI Framework.

Built and battle-tested for the **Sol Roth DJ Live Performance & Operating System**, this extension pack provides mission-critical UI components for synthesizers, DJ software, VJ stage displays, and live music streaming.

---

## Philosophy & Architecture

Adheres strictly to the **Axiom01 Ethos**:
- **Minimal Class Density ($D_c \le 1$)**: Exactly one class on the component root element (`<nav class="padgrid">`, `<section class="prompter">`, `<article class="card deck">`).
- **Semantic HTML & Direct Targeting**: Native `<button>`, `<header>`, `<main>`, `<footer>`, `<kbd>`, `<progress>`.
- **Zero BEM & Zero Utility Class Pollution**: No `axiom-*` prefixes or `*-header` suffixes.
- **Hardware Tactile Feel**: Instant visual feedback (60-70ms transforms), LED peak illumination, and high-contrast dark room visibility.

---

## Components Included

| Component | Root Semantic Element | Children & Modifiers | Description |
|---|---|---|---|
| **Pad Grid** | `<nav class="padgrid">` | `<button data-stem="..." data-state="...">` | Tactile MPC/launchpad performance matrix with LED bezel rings and touch depression. |
| **Camelot Wheel** | `<div class="wheel">` | `<main>`, `<button data-key="...">` | Polar coordinate harmonic key selector with automatic harmonic match highlighting. |
| **Deck Telemetry** | `<article class="card deck">` | `<header>`, `<main>`, `<progress>`, `<footer>` | DJ deck telemetry card with BPM, key, track progress, and CUE/PLAY triggers. |
| **Stage Prompter** | `<section class="prompter">` | `<main><p class="active">` | Fluid auto-scrolling lyric and performance teleprompter HUD. |
| **4-Stem Mixer** | `<section class="stem-mixer">` | `<article class="card mixer">` | Channel strip with vertical faders, solo/mute latch toggles, and multi-segment LED peak meters. |
| **Billboard** | `<aside class="billboard">` | `<header>`, `<main>`, `<footer>` | Live stage announcement and flyer broadcaster. |
| **Spectrum Monitor**| `<aside class="spectrum-monitor">` | `<header>`, `<canvas>` | Floating real-time FFT spectrum bar monitor. |
| **Scene Card** | `<article class="card scene">` | `<header>`, `<figure>`, `<footer>` | Interactive VJ scene card with live canvas/video preview and hotkey badge. |
| **Stage Override** | `<article class="override-card">` | `<h2>`, `<p>`, `<footer>` | High-priority stage blackout and emergency alert modal. |

---

## Installation & Usage

```bash
npm install @axiom01/core @axiom01/audio
```

```html
<!-- Include Axiom Core + Audio Extension -->
<link rel="stylesheet" href="node_modules/@axiom01/core/css/axiom-core.min.css">
<link rel="stylesheet" href="node_modules/@axiom01/audio/css/axiom-audio.min.css">

<!-- Or via CDN -->
<link rel="stylesheet" href="https://sol-roth-media.github.io/axiom01/css/axiom-audio.min.css">
```

### JavaScript Runtime Helpers

```javascript
import { CamelotWheel, VUMeter } from "@axiom01/audio";

// Attach harmonic math to Camelot wheel
CamelotWheel.attach(document.querySelector(".wheel"), (key, details) => {
  console.log("Selected Key:", key, details);
});

// Animate a 16-segment LED VU meter
const vu = new VUMeter(document.querySelector(".vumeter"), 16);
vu.update(0.85); // 0.0 to 1.0
```

---

## License
MIT © Sol Roth Media
