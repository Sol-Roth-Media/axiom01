# AXIOM01 - Installation & Setup Guide

## Quick Start

### Via npm

```bash
npm install axiom01
```

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01/dist/css/axiom.min.css">
<script src="https://cdn.jsdelivr.net/npm/axiom01/dist/js/axiom.min.js"></script>
```

### Via Git

```bash
git clone https://github.com/Sol-Roth-Media/axiom01.git
cd axiom01
npm install
npm run build
```

---

## Basic Setup

### 1. Include CSS & JS

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My AXIOM01 Site</title>
    <link rel="stylesheet" href="css/axiom.min.css">
    
    <!-- FOUC Prevention: Set theme before rendering -->
    <script>
        const theme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    </script>
</head>
<body>
    <!-- Your content -->
    
    <script src="js/axiom.min.js"></script>
</body>
</html>
```

### 2. Semantic HTML Structure

AXIOM01 requires proper semantic HTML. Use appropriate tags:

```html
<!-- Good: Semantic structure -->
<header class="main">
    <nav role="navigation">
        <!-- Navigation items -->
    </nav>
</header>

<main>
    <section>
        <article class="card">
            <h2>Card Title</h2>
            <p>Content here</p>
        </article>
    </section>
</main>

<footer>
    <!-- Footer content -->
</footer>
```

### 3. Design Token System

All styling uses CSS custom properties (design tokens):

```css
:root {
    /* Spacing */
    --a-space-xs: 0.25rem;
    --a-space-s: 0.5rem;
    --a-space-m: 1rem;
    --a-space-l: 1.5rem;
    --a-space-xl: 2rem;
    
    /* Colors */
    --a-color-primary: #2563eb;
    --a-color-success: #16a34a;
    --a-color-error: #dc2626;
    --a-color-warning: #ea580c;
    
    /* Typography */
    --a-font-family-sans: 'Inter', system-ui, sans-serif;
    --a-font-weight-normal: 400;
    --a-font-weight-bold: 700;
}
```

Use tokens in your custom CSS:

```css
.custom-box {
    padding: var(--a-space-l);
    background: var(--a-color-primary);
    border-radius: var(--a-border-radius-base);
}
```

---

## Core Components

### Semantic Buttons

```html
<button>Default</button>
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="outline">Outline</button>
<button disabled>Disabled</button>
```

### Cards

```html
<article class="card">
    <header>
        <h2>Card Title</h2>
    </header>
    <main>
        <p>Card content</p>
    </main>
    <footer>
        <button>Action</button>
    </footer>
</article>
```

### Alerts

```html
<div class="alert success" role="alert">
    <span class="axicon render" data-name="Check-Circle"></span>
    <div>
        <strong>Success!</strong>
        <p>Operation completed.</p>
    </div>
</div>
```

### Forms

```html
<form>
    <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" required>
    </div>
    
    <button class="primary" type="submit">Submit</button>
</form>
```

---

## Theming

### Built-in Themes

AXIOM01 ships with light and dark modes. Toggle with:

```javascript
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}
```

### Custom Color Palettes

Set via data attribute:

```html
<html data-theme="light" data-axiom-palette="indigo">
```

Available palettes:
- `default` (blue)
- `indigo`
- `emerald`
- `sunset`

### Custom Themes

Override tokens in your CSS:

```css
:root {
    --a-color-primary: #your-color;
    --a-space-unit: 1.125rem;
    --ax-font-body: 'Your Font', sans-serif;
}
```

---

## Accessibility (WCAG 2.1 AA)

### Keyboard Navigation

All interactive elements are keyboard accessible:

```html
<!-- Proper focus management -->
<button>Accessible by default</button>

<!-- Custom buttons need role -->
<div role="button" tabindex="0">Clickable</div>
```

### Focus Indicators

Focus states are automatic and visible:

```css
/* Automatically applied to all interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 2px solid var(--a-color-primary);
    outline-offset: 2px;
}
```

### ARIA Labels

Use semantic HTML first, add ARIA when needed:

```html
<!-- Good: Semantic -->
<nav aria-label="Main navigation">
    <a href="#" aria-current="page">Home</a>
</nav>

<!-- Required for icon-only buttons -->
<button aria-label="Close menu">
    <span class="axicon render" data-name="X"></span>
</button>
```

### Color Contrast

All colors meet WCAG AA standards (4.5:1 for text).

### Reduced Motion

Respects user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## JavaScript API

### Event Delegation

All components use event delegation. Add components dynamically:

```javascript
// Components added via JavaScript still work
const newAlert = document.createElement('div');
newAlert.className = 'alert success';
newAlert.innerHTML = '<p>This works!</p>';
document.body.appendChild(newAlert);
```

### State Management

Store and retrieve component state:

```javascript
// Set
Axiom.state.set('userPreference', { theme: 'dark' });

// Get
const prefs = Axiom.state.get('userPreference');

// Clear
Axiom.state.clear('userPreference');
```

### Custom Events

Listen for component state changes:

```javascript
document.addEventListener('axiom:alert:dismiss', (e) => {
    console.log('Alert dismissed:', e.detail.element);
});

document.addEventListener('axiom:step:change', (e) => {
    console.log('Step changed to:', e.detail.activeIndex);
});
```

### Debounce Utility

Prevent excessive function calls:

```javascript
const debouncedResize = Axiom.debounce(() => {
    console.log('Resizing...');
}, 250);

window.addEventListener('resize', debouncedResize);
```

---

## Performance Tips

### Optimize Bundle Size

Tree-shake unused components:

```javascript
// Only import what you need (if using modules)
import { dismiss } from 'axiom01/js/alert';
```

### Lazy Loading

Defer non-critical CSS:

```html
<link rel="preload" href="css/axiom.min.css" as="style">
<link rel="stylesheet" href="css/axiom.min.css">
```

### Web Font Optimization

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

---

## Build System

### NPM Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Watch for changes
npm run watch

# Minify CSS/JS
npm run minify
```

### File Structure

```
axiom01/
├── css/
│   ├── _variables.css    # Design tokens
│   ├── _components.css   # Component styles
│   ├── _utilities.css    # Optional utilities
│   └── axiom.css         # Main bundle
├── js/
│   ├── axiom.js          # Core API
│   └── axiom.min.js      # Minified
├── docs/
│   └── components/       # 77 component examples
└── dist/                 # Production artifacts
```

---

## Support & Community

- 📖 [Full Documentation](https://axiom01.com)
- 🐛 [Issue Tracker](https://github.com/Sol-Roth-Media/axiom01/issues)
- 💬 [Discussions](https://github.com/Sol-Roth-Media/axiom01/discussions)
- 📦 [NPM Package](https://www.npmjs.com/package/axiom01)

---

## License

AXIOM01 is released under the MIT License.

