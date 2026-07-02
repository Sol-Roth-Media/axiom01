# Axiom01

**Semantic-first UI framework. Write meaningful HTML — Axiom handles the CSS.**

No utility classes. No BEM complexity. No build tools required. Just clean semantic HTML and a framework that respects your code.

```html
<!-- ✅ Axiom01 — one semantic class -->
<article class="card">
  <header><h3>Title</h3></header>
  <p>Content here.</p>
  <footer><button class="primary">Action</button></footer>
</article>

<!-- ❌ Utility-first — 18 classes -->
<div class="max-w-sm rounded-lg shadow-md bg-white p-6">
  <div class="border-b pb-4 mb-4">
    <h3 class="text-lg font-bold text-gray-800">Title</h3>
  </div>
  <p class="text-gray-600 text-sm">Content here.</p>
  <div class="flex justify-end">
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
  </div>
</div>
```

## Installation

```bash
npm install axiom01
```

```html
<!-- CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01/css/axiom.min.css">
<script src="https://cdn.jsdelivr.net/npm/axiom01/js/axicons-base.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axiom01/js/render-icons.js"></script>
```

## Quick Start

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <link rel="stylesheet" href="axiom.min.css">
</head>
<body>

  <!-- Hero section -->
  <section class="hero">
    <div class="container">
      <h1>Your Page Title</h1>
      <p class="tagline">Your tagline here.</p>
      <div class="actions">
        <a href="/start" class="button primary">Get Started</a>
        <a href="/docs" class="button secondary">View Docs</a>
      </div>
    </div>
  </section>

  <!-- Card grid -->
  <section>
    <div class="container">
      <div class="grid">
        <article class="card">
          <header><h3>Card Title</h3></header>
          <p>Card content here.</p>
          <footer><button class="primary">Action</button></footer>
        </article>
      </div>
    </div>
  </section>

</body>
</html>
```

## Core Philosophy

### One Class Per Component
Each component uses a single semantic class. The framework styles everything inside it automatically via element selectors.

| Axiom01 | Utility-first |
|---------|--------------|
| `class="card"` | `class="flex flex-col rounded shadow p-6 bg-white"` |
| `class="primary"` | `class="bg-blue-500 text-white px-4 py-2 rounded"` |
| `class="alert success"` | `class="bg-green-100 text-green-800 border border-green-300 p-4 rounded"` |

### Semantic HTML
Write HTML that describes meaning, not appearance:

```html
<!-- Theming on semantic elements — no sub-classes -->
<article class="card">
  <header>...</header>  <!-- not .card-header -->
  <figure>...</figure>  <!-- not .card-image -->
  <footer>...</footer>  <!-- not .card-footer -->
</article>
```

### Design Tokens
All values are CSS custom properties — change one to update everything:

```css
:root {
  --a-color-primary: #2563eb;
  --a-space-unit: 1rem;
  --a-heading-scale: 1.15;
  --a-border-radius-base: 5px;
}
```

## Components

68 production-ready components:

| Category | Components |
|----------|-----------|
| **Actions** | Button, Link Button, Button Group |
| **Content** | Card, Alert, Badge, Avatar |
| **Forms** | Input, Select, Textarea, Checkbox, Radio, Toggle, Slider, Rating |
| **Navigation** | Navbar, Sidebar, Tabs, Breadcrumb, Pagination, Steps |
| **Overlays** | Modal, Drawer, Tooltip, Popover |
| **Data** | Table, List, Timeline, Progress |
| **Media** | Video Player, Audio Player, Carousel, Gallery, Lightbox |
| **Advanced** | AI Chat, Data List, Masonry, Swiping Cards, Autocomplete |

### Buttons

```html
<button class="primary">Primary Action</button>
<button class="secondary">Secondary</button>
<button class="outline">Outline</button>
<button class="danger">Destructive</button>
<button disabled>Disabled</button>

<!-- Link as button -->
<a href="/start" class="button primary">Get Started</a>

<!-- Sizes -->
<button class="primary small">Small</button>
<button class="primary">Default</button>
<button class="primary large">Large</button>
```

### Cards

```html
<!-- Basic card — framework styles header/footer/figure automatically -->
<article class="card">
  <header><h3>Title</h3></header>
  <p>Content here.</p>
  <footer>
    <button class="primary">Action</button>
  </footer>
</article>

<!-- Card with media -->
<article class="card">
  <figure>
    <img src="image.jpg" alt="Description">
  </figure>
  <header><h3>Media Card</h3></header>
  <p>Image bleeds edge-to-edge automatically.</p>
</article>

<!-- Ghost card (transparent, no border) -->
<div class="card ghost">
  <span class="axicon render" data-name="Zap"></span>
  <h4>Feature</h4>
  <p>Description</p>
</div>

<!-- Clickable card -->
<a href="/details" class="card">
  <header><h3>Click me →</h3></header>
  <p>The entire card is the link.</p>
</a>
```

### Alerts

```html
<div class="alert info" role="status">
  <p>Informational message.</p>
</div>

<div class="alert success" role="status">
  <span class="axicon render" data-name="Check-Circle"></span>
  <div>
    <strong>Saved!</strong>
    <p>Your changes have been saved.</p>
  </div>
</div>

<div class="alert warning" role="alert">
  <span class="axicon render" data-name="Alert-Triangle"></span>
  <div><p>Please review before continuing.</p></div>
</div>

<div class="alert error" role="alert">
  <span class="axicon render" data-name="Alert-Circle"></span>
  <div><p>An error occurred.</p></div>
</div>
```

### Forms

```html
<!-- Labels wrap inputs — no extra classes needed -->
<form>
  <label for="email">Email Address</label>
  <input type="email" id="email" required>

  <label for="message">Message</label>
  <textarea id="message" rows="5"></textarea>

  <label for="country">Country</label>
  <select id="country">
    <option value="">Choose…</option>
    <option value="us">United States</option>
  </select>

  <button type="submit" class="primary">Send</button>
</form>
```

### Badges

```html
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge error">Error</span>
<span class="badge info">Info</span>
```

### Tables

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Smith</td>
      <td><span class="badge success">Active</span></td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>

<!-- Striped -->
<table data-variant="striped">...</table>
```

## Axicons — 1,700+ SVG Icons

The active distribution ships with two focused sets: Base (1,100+) and Premium (600+). Premium icons are reserved for richer color, accent, and brand treatments.

```html
<!-- Load scripts -->
<script src="js/axicons-base.js"></script>
<script src="js/render-icons.js"></script>

<!-- Use icons -->
<span class="axicon render" data-name="Check"></span>
<span class="axicon render" data-name="Check-Color"></span>
<span class="axicon render" data-name="Check-Premium"></span>

<!-- In buttons -->
<button class="primary">
  <span class="axicon render" data-name="Plus"></span> Add Item
</button>
```

## Theming

### Dark Mode

```html
<!-- Set on html element -->
<html lang="en" data-theme="light">
<html lang="en" data-theme="dark">
```

```js
// Toggle
document.documentElement.setAttribute('data-theme',
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
);
```

### Custom Theme

```css
/* Override any tokens in your own stylesheet */
:root {
  --a-color-primary: #7c3aed;        /* Your brand color */
  --a-color-secondary: #0ea5e9;
  --a-border-radius-base: 8px;       /* More rounded */
  --a-font-family-sans: 'Inter', sans-serif;
  --a-heading-scale: 1.2;            /* Larger heading scale */
}

[data-theme="dark"] {
  --a-color-surface: #0f172a;
  --a-color-on-surface: #f8fafc;
}
```

## Grid System

```html
<!-- Auto-responsive grid -->
<div class="grid">
  <article class="card">Column 1</article>
  <article class="card">Column 2</article>
  <article class="card">Column 3</article>
</div>

<!-- Tight grid (smaller min-width) -->
<div class="grid tight">...</div>
```

## Layout

```html
<!-- Max-width container with responsive padding -->
<div class="container">
  <!-- Your content -->
</div>
```

## Typography

Paragraphs are automatically constrained to `65ch` for optimal readability.

```html
<!-- All text elements — no classes needed -->
<h1>Page Title</h1>
<p>Body paragraph, auto-constrained to 65ch.</p>
<p class="muted">Secondary text using muted class.</p>

<ul>
  <li>List item one</li>
  <li>List item two</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>

<blockquote>
  "A quote here."
  <cite>— Source</cite>
</blockquote>
```

## Accessibility

All components are WCAG 2.1 AA compliant out of the box:

- Native semantic elements (`<button>`, `<nav>`, `<dialog>`, `<progress>`)
- Keyboard navigation on all interactive components
- Focus visible states on every focusable element
- ARIA attributes where HTML semantics are insufficient
- Sufficient color contrast in all built-in themes
- `prefers-reduced-motion` respected for all animations

## Browser Support

All modern browsers — Chrome, Firefox, Safari, Edge (latest 2 versions).

## Stats

| Metric | Value |
|--------|-------|
| CSS bundle (gzipped) | **13.3 KB** |
| JS bundle (gzipped) | **1.0 KB** |
| Components | **68** |
| Design tokens | **149** |
| Icons (base) | **1,100+** |
| Icons (active library) | **1,700+** |
| Dependencies | **0** |

## Documentation

Full documentation, live demos, and component reference at:
**[https://github.com/Sol-Roth-Media/axiom01](https://github.com/Sol-Roth-Media/axiom01)**

## License

MIT — free for personal and commercial use.

---

*Axiom01 — The Semantic Rebellion against utility-class chaos.*
