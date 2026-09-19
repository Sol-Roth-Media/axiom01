# Axiom01 Developer Guide

Welcome to the official Developer Guide for **Axiom01** — the Semantic-First UI Framework. This guide will take you through our core philosophy, performance optimizations, installation methods, and best practices for building beautiful, accessible interfaces with minimal code.

## 🧠 Philosophy: The Semantic Reality

Modern web development suffers from a hoarding problem — massive class density and utility chaos. Axiom01 subtracts complexity by returning to **Semantic HTML**. 

* **Write Meaningful HTML:** Declare what an element *is* (`<article>`, `<section>`, `<header>`, `<form>`), not what it looks like.
* **Minimal Classes:** We enforce a strict Class Density Metric (D_c ≤ 1). One class per component (e.g., `class="card"` instead of 15 utility classes).
* **Token-Driven Symmetry:** All styling flows from CSS variables, establishing perfect mathematical vertical rhythm across the entire UI.
* **Accessible by Default:** WCAG 2.1 AA out of the box with built-in keyboard navigation and focus states.

---

## 🚀 Installation & Setup

### 1. Using NPM (Recommended for Build Pipelines)

To integrate Axiom01 into your Node.js or modern front-end build pipeline:

```bash
# Install the framework
npm install axiom01

# Check for outdated packages and update Axiom01
npm outdated
npm update axiom01
```

### 2. Using Git (For Manual Builds & Contributing)

If you prefer to clone the repository for direct development or contributing to the source code:

```bash
# Clone the repository
git clone https://github.com/Sol-Roth-Media/axiom01.git

# Navigate into the project
cd axiom01

# Checkout a specific stable release (e.g., v2.2.3)
git checkout tags/v2.2.3
```

---

## 🏗️ How to Start a Website

Starting a website with Axiom01 means writing standard HTML. Notice the complete absence of utility class bloat in the template below.

### Basic `index.html` Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Axiom01 Site</title>
  
  <link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
</head>
<body class="axiom-body">

  <header class="main">
    <nav>
      <a href="/" class="brand">ax[10]m</a>
      <ul class="links">
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <section class="hero">
      <div class="container">
        <h1>Write Less Code.</h1>
        <p>Build better interfaces with semantic markup.</p>
        <button class="primary">Get Started</button>
      </div>
    </section>

    <section>
      <div class="container">
        <article class="card">
          <header>
            <h3>Accessible by Default</h3>
          </header>
          <p>This paragraph is automatically constrained to 65ch for optimal readability. No extra classes needed.</p>
          <footer>
            <button class="secondary">Learn More</button>
          </footer>
        </article>
      </div>
    </section>
  </main>

  <script src="node_modules/axiom01/js/axiom.min.js"></script>
</body>
</html>
```

---

## ⚡ Performance & Axicons

Axiom01 is built to be featherweight. The core CSS bundle is only **15.3 KB (Gzipped)** and the JavaScript is **3.9 KB**. Zero dependencies.

### Working with Axicons

Axiom01 comes with a modular library of 1,700+ ultra-lightweight SVG icons. It is deliberately split into variants so you never load what you don't need:

1. **Start Minimal (Base):**
Include the base script to get 1,100+ core UI icons at just 89KB.
```html
<script src="path/to/axicons-base.js"></script>
```

2. **Add Premium Moments:**
For richer UI states, optionally load the premium set (600+ icons) and variants (filled, duotone).
```html
<script src="path/to/axicons-premium.js"></script>
<script src="path/to/axicons-premium-variants.js"></script>
```

3. **Lazy Loading (Best Practice):**
Load icons on-demand in your JavaScript for maximum performance:
```javascript
// Load premium icons only when the UI requires them
await AxiconsLoader.loadPremium();
```

---

## 🎨 Global Styling & Customization

Axiom01 components are complete out of the box, but highly customizable. Modify the mathematical rhythm or color harmony by overriding CSS tokens in your `:root`.

**Important:** Axiom01 utilizes OKLCH math for its entire color system. You should override the base hues and chroma, not hardcoded hex values, to ensure automatic dark mode scaling works perfectly.

```css
:root {
  /* Scale typography globally */
  --a-heading-scale: 1.15;
  
  /* Adjust global spacing symmetry */
  --a-space-unit: 1rem;
  
  /* Brand colors using OKLCH Hues (0-360) */
  --a-hue-primary: 250; /* A deep blue/purple */
  --a-chroma-primary: 0.15; /* Saturation level */
  
  --a-hue-secondary: 150; /* A minty green */
  --a-chroma-secondary: 0.12;
  
  /* Muted text color */
  --a-color-on-surface-variant: oklch(0.55 0 0);
}
```

---

## 💡 Tips and Tricks

* **Trust Native HTML:** Let native elements do the heavy lifting. Use `<ul>` and `<ol>` for lists without adding extra classes. Axiom01 automatically styles inline `code`, `keyboard`, and blockquotes flawlessly.
* **The Forms Rule:** Forms require almost zero classes. Just wrap your `<label>` and `<input>` inside a `<form>` tag (or native fieldsets), and Axiom01 automatically provides accessible, consistently styled inputs with perfect spacing.
* **Customize via Variables, not Overrides:** If a component needs to behave differently, adjust its behavior using CSS tokens rather than slapping on an `!important` rule or a custom utility class.
* **Leverage Built-In Themes:** Axiom01 comes with 22 live themes out of the box. Dark mode and system-theme detection are baked in; rely on the semantic color tokens to ensure seamless, automatic transitions between light and dark modes.

---

*Created by Sol Roth Media • Released under the MIT License*



## Advanced Framework Internals

This guide provides in-depth information for developers looking to understand, extend, or contribute to the Axiom01 UI framework. It covers core architectural decisions, best practices, and future considerations.

## 1. Component Lifecycle Management

Axiom01 components are designed to be modular and self-contained. Each component is initialized when its `data-component` attribute is detected by `axiom.js`. For more complex components, it's crucial to manage their lifecycle, especially when components are dynamically added, removed, or updated.

### `init()` Method

When `axiom.js` detects a `data-component` attribute, it attempts to call an `init()` method on the corresponding component's JavaScript module. This method is responsible for:

*   Setting up event listeners.
*   Performing initial DOM manipulations.
*   Fetching any necessary data.
*   Initializing third-party libraries (e.g., Fuse.js for search, CKEditor for editor).

### `destroy()` Method

For components that manage their own resources (e.g., event listeners, timers, third-party instances), a `destroy()` method is essential. This method should:

*   Remove all event listeners to prevent memory leaks.
*   Clean up any created DOM elements that are not automatically garbage-collected.
*   Destroy instances of third-party libraries.

### Runtime lifecycle contract (supported shape)

`js/axiom.js` supports two component export shapes:

1. **Class export** (`export default class X { ... }`)
   - Constructor receives the component root element.
   - The runtime stores instances that expose `destroy()`.
2. **Factory/object export** (`export default { init(element) { ... } }`)
   - `init(element)` should return an instance/object.
   - Returned object should expose `destroy()` when cleanup is needed.

For framework-maintained interactive modules (`js/components/*.js` excluding helper-only modules), keep this baseline contract:

- [ ] `init(element)` exists (or class constructor + `init()` pattern).
- [ ] `destroy()` exists for listener/timer/resource cleanup.
- [ ] No inline event-handler dependency (`onclick`, etc.).
- [ ] Docs page for the module is linked in `docs/components-overview.html`.

This contract is now enforced by pre-release and smoke audits, so new component work should follow the same structure from the start.

### Class Naming Policy (Framework-Owned)

Axiom01 is semantic-first and intentionally avoids BEM-style class naming in public docs and examples.

- Prefer single, semantic component classes (`card`, `alert`, `filter-toolbar`).
- Helper classes should stay short and dashed (`filter-toolbar-row`, `code-block-copy`).
- Double-underscore (`__`) and modifier (`--`) class tokens are reserved only for rare internal migration shims and should not be introduced in new markup.
- If a temporary exception is required, document it in this guide before release and include a removal task in the audit checklist.

**Example Component Structure:**

```javascript
// js/components/my-component.js
export default class MyComponent {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('button');
        this.handleClick = this.handleClick.bind(this); // Bind 'this' for event listener
    }

    init() {
        console.log('MyComponent initialized:', this.element);
        this.button.addEventListener('click', this.handleClick);
    }

    handleClick() {
        alert('Button clicked in MyComponent!');
    }

    destroy() {
        console.log('MyComponent destroyed:', this.element);
        this.button.removeEventListener('click', this.handleClick);
        // Clean up other resources if any
    }
}
```

## 2. Centralized Event Delegation

To improve performance and simplify event management, Axiom01 encourages centralized event delegation where appropriate, especially for elements that are dynamically added or removed from the DOM.

Instead of attaching event listeners directly to individual elements, attach a single listener to a common ancestor (e.g., `document` or `main`). Then, use event bubbling and check `event.target` to determine if the event originated from the desired element.

**Benefits:**

*   **Performance:** Fewer event listeners mean less memory consumption and faster DOM updates.
*   **Simplicity:** Easier to manage events for dynamically added content.
*   **Maintainability:** Event logic is centralized, making it easier to debug and update.

**Example:**

```javascript
// Instead of:
// document.querySelectorAll('.my-button').forEach(button => {
//     button.addEventListener('click', handleButtonClick);
// });

// Use event delegation:
document.addEventListener('click', (event) => {
    if (event.target.matches('.my-button')) {
        handleButtonClick(event);
    }
});
```

## 3. Accessibility Guidelines

Axiom01 is built with WCAG 2.1 AA compliance as a core principle. When developing new components or extending existing ones, always adhere to the following guidelines:

*   **Semantic HTML:** Use the most appropriate HTML5 elements (`<nav>`, `<main>`, `<button>`, `<input>`, etc.).
*   **ARIA Attributes:** Employ ARIA roles, states, and properties (`role`, `aria-label`, `aria-expanded`, `aria-controls`, etc.) to convey meaning and functionality to assistive technologies.
*   **Keyboard Navigation:** Ensure all interactive elements are reachable and operable via keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys). Manage focus appropriately for modal dialogs, dropdowns, and other complex widgets.
*   **Color Contrast:** Maintain sufficient color contrast ratios (minimum 4.5:1 for normal text) for all text and interactive elements. Axiom01's color system is designed to help with this.
*   **Focus Management:** Clearly indicate focus states for interactive elements. Ensure focus is managed logically, especially when opening/closing overlays or modals.
*   **Descriptive Text:** Provide meaningful `alt` text for images and clear labels for form controls.

## 4. Browser Support

Axiom01 aims for broad browser compatibility, focusing on modern browsers.

*   **Target Browsers:** The latest two versions of Chrome, Firefox, Safari, Edge.
*   **CSS Features:** Leverages modern CSS features like CSS Variables, Flexbox, and Grid. Fallbacks are provided where feasible, but older browsers (e.g., IE11) are not officially supported.
*   **JavaScript:** Written in modern JavaScript (ES6+). Transpilation is recommended for broader compatibility if targeting older environments. The provided `axiom.js` and component scripts assume a modern browser environment.

## 5. Content Security Policy (CSP) Considerations

When using Axiom01's dynamic component loading (via `import()`), you might encounter Content Security Policy (CSP) errors related to `eval()` or `unsafe-eval`. This is because some server configurations or default CSPs might interpret dynamic `import()` statements as similar to `eval()`, which is often restricted for security reasons.

To resolve this, you need to configure your server's Content Security Policy to allow `unsafe-eval` for `script-src`.

**Example CSP Header (Server-side configuration):**

```
Content-Security-Policy: script-src 'self' 'unsafe-inline' 'unsafe-eval';
```

**Note:** While `unsafe-eval` is necessary for dynamic imports in some environments, it should be used with caution as it can potentially increase the attack surface if not managed carefully. Always ensure all scripts loaded are trusted.

## 6. Vision for a Theme Generation Tool

A key future enhancement for Axiom01 is a comprehensive, interactive theme generation tool. This tool would:

*   **GUI for Customization:** Provide a user-friendly interface to adjust primary colors, secondary colors, spacing units, typography scales, border radii, and other global CSS variables.
*   **Live Preview:** Offer a live preview of how changes affect a sample page or component library.
*   **Accessibility Checker:** Integrate real-time WCAG compliance checks for color contrast as themes are customized.
*   **Code Export:** Generate a custom CSS file (or a set of CSS variable declarations) that users can easily integrate into their projects.
*   **Preset Management:** Allow users to save, load, and share custom themes.

This tool would significantly lower the barrier to entry for deep customization, empowering users to create unique, accessible themes without writing extensive CSS from scratch.
