# Axiom01 UI Framework

> A modern, accessible, and themeable UI framework built with semantic HTML and progressive enhancement.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/axiom01)
[![Bundle Size](https://img.shields.io/badge/gzipped-25KB%20core%20%7C%2045KB%20full-blue.svg)](https://bundlephobia.com/package/axiom01)

## ✨ Features

- **🎯 Semantic-First**: Built with proper HTML semantics and progressive enhancement
- **♿ Accessibility**: WCAG 2.1 AA+ compliant with screen reader and keyboard support
- **🎨 Themeable**: 5+ built-in themes plus interactive theme customization wizard
- **📱 Responsive**: Mobile-first design with flexible grid system
- **⚡ Performance**: Lightweight core bundle (25KB gzipped)
- **🛠 Developer Tools**: Interactive playground, VS Code extension, and build tools
- **🌓 Dark Mode**: Automatic dark mode with system preference detection

## 🚀 Quick Start

### CDN (Recommended for trying out)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01@latest/dist/css/axiom.min.css">
</head>
<body>
    <button class="primary">Hello Axiom01!</button>
    <script src="https://cdn.jsdelivr.net/npm/axiom01@latest/dist/js/axiom.min.js"></script>
</body>
</html>
```

### npm Installation

```bash
npm install axiom01
```

```javascript
// Import full framework
import 'axiom01/dist/css/axiom.css';
import 'axiom01/dist/js/axiom.js';

// Or import core only (smaller bundle)
import 'axiom01/dist/css/axiom-core.css';
import 'axiom01/dist/js/axiom-core.js';
```

## 📦 npm Package Contents

The npm package includes:
- dist/css/axiom.css (unminified)
- dist/css/axiom.min.css (minified)
- dist/js/axiom.js (unminified)
- dist/js/axiom.min.js (minified)

**Usage Example:**
```js
import 'axiom01/dist/css/axiom.min.css';
import 'axiom01/dist/js/axiom.min.js';
```

You can also use the unminified files for development or debugging.

## 📖 Documentation

| Resource | Description |
|----------|-------------|
| [Getting Started](docs/getting-started.md) | Installation and basic usage |
| [Components](components/) | Complete component library with examples |
| [Contributing](docs/contributing.md) | Contribution guidelines |
| [Developer Guide](DEVELOPER.md) | For framework contributors |
| [Interactive Playground](interactive-playground.html) | Live code editor and preview |
| [Theme Wizard](theme-customization-wizard.html) | Visual theme customizer |

## 🎨 Components

Axiom01 includes **27+ production-ready components**:

### Layout & Structure
- **Card** - Flexible content containers
- **Modal** - Accessible dialog boxes  
- **Drawer** - Slide-out panels and navigation
- **Accordion** - Collapsible content sections

### Forms & Inputs
- **Button** - Primary, secondary, and specialty buttons
- **Form** - Complete form layouts with validation
- **File Upload** - Drag & drop file uploads with progress
- **Search** - Advanced search with autocomplete

### Navigation
- **Navigation** - Responsive navbar with dropdowns
- **Breadcrumb** - Hierarchical navigation trails
- **Pagination** - Advanced pagination with jump-to-page
- **Tabs** - Accessible tabbed content

### Feedback & Status
- **Alert** - Success, warning, and error messages
- **Notification** - Toast notifications and alerts
- **Progress** - Progress bars and loading indicators
- **Skeleton** - Loading placeholders with animations

### Data Display
- **Table** - Sortable, responsive data tables
- **Timeline** - Process steps and chronological events
- **Tag** - Labels, badges, and removable chips
- **Empty State** - User-friendly no-data messages

[View all components →](components/)

## 🎭 Themes

### Built-in Themes
- **Light** - Clean, modern light theme (default)
- **Dark** - Elegant dark theme with proper contrast
- **Forest** - Nature-inspired green theme
- **Ocean** - Calm blue and teal theme
- **Sunset** - Warm orange and amber theme

### Theme Switching

```html
<!-- Manual theme switching -->
<html data-theme="dark">

<!-- Automatic system preference -->
<html> <!-- Respects prefers-color-scheme -->
```

### Custom Themes

Use our [Theme Wizard](theme-customization-wizard.html) to create custom themes visually, or modify the design tokens:

```css
:root {
  --a-color-primary-500: #your-brand-color;
  --a-color-surface: #your-background;
  /* ... customize any design token */
}
```

## ⚡ Performance

| Bundle | Size (Gzipped) | Description |
|--------|----------------|-------------|
| **Core** | ~25KB | Essential components only |
| **Full** | ~45KB | All components included |
| **Individual** | ~2-5KB | Import components separately |

- **Core Web Vitals**: Optimized for excellent Lighthouse scores
- **Tree Shakable**: Use only the components you need
- **No Dependencies**: Zero external dependencies
- **Modern Browsers**: ES6+ with graceful degradation

## 🛠 Development Tools

### Interactive Playground
Live code editor with real-time preview and component templates
### Theme Wizard
Visual theme customization tool with live preview and export
### VS Code Extension
Component snippets, CSS custom property autocomplete, and accessibility helpers

## 🤝 Contributing

We welcome contributions! Please see our:
- [Contributing Guide](docs/contributing.md) - Contribution guidelines
- [Developer Guide](DEVELOPER.md) - Framework development setup
- [Component Checklist](AXIOM01_COMPONENT_CHECKLIST.md) - Component standards

## 📄 License

Axiom01 is [MIT Licensed](LICENSE).

---

**Made with ❤️ by developers who care about accessibility and semantic web standards.**

## 🆕 Release 0.2.0 (July 27, 2025)
- Fixed all broken links in the documentation component browser
- Restored and integrated AI Chat and AI Imagegen components
- Added a Settings component stub to prevent 404s
- Confirmed BEM/class stacking violations are no longer present in docs/components/
- Version updated to 0.2.0
