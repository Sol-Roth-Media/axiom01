# AXIOM01 v3 - The Semantic Rebellion: The Mathematics of Design

A complete semantic-first design framework and unified portal for exploring AXIOM01 philosophy, components, and documentation.

## Quick Facts

- **Total Size**: 37.6 KB uncompressed (~9.5 KB gzipped)
- **Philosophy**: Semantic-first HTML + framework-level CSS + minimal JavaScript
- **Accessibility**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first from 320px to 1920px+
- **Dark Mode**: Automatic via OKLCH color space
- **Components**: 20+ UI components with zero BEM classes
- **No Build Tools**: Direct source, no compilation needed

## Core Files

```
src/
├── index.html         (278 lines) - Semantic HTML portal
├── css/
│   └── axiom.css      (1,578 lines) - Complete CSS framework
└── js/
    └── axiom-core.js  (338 lines) - SPA + hub navigation
```

## The Philosophy

### One Semantic Class Per COMPONENT

Write meaningful semantic HTML where class names describe WHAT elements ARE (hero, card, button), NOT their structure or children.

```html
<!-- ✅ DO -->
<article class="hero">
  <h1>Title</h1>
  <p>Description</p>
</article>

<!-- ❌ DON'T -->
<div class="hero-container">
  <div class="hero-content">
    <h1 class="hero-title">Title</h1>
    <p class="hero-description">Description</p>
  </div>
</div>
```

### Framework Responsibility: CSS
### Developer Responsibility: HTML

```css
/* ✅ Framework styles semantic elements */
.hero { background: linear-gradient(...); }
header nav button { color: var(--a-primary); }
.card:hover { box-shadow: var(--a-shadow-md); }

/* ❌ Not element-specific classes */
.hero-background { }
.nav-button { }
.card-hover { }
```

## Key Features

### Design System
- **OKLCH Color Space** - Perceptually uniform colors with automatic dark mode
- **30+ Design Tokens** - Colors, typography, spacing, effects
- **Fluid Scaling** - Typography and spacing scale with `clamp()`
- **6-Layer @layer Cascade** - Reset → Tokens → Base → Layout → Components → Utilities

### Components (20+)
- Header/Navbar with sticky positioning
- Hero section with gradient background
- Card component with hover effects
- Responsive grid layout (auto-fit)
- Forms with native validation
- Alerts (info, success, warning, error)
- Tables with semantic styling
- Badges and labels
- Code blocks and blockquotes
- Lists (ordered/unordered)
- Emphasis (strong, em, mark, etc)
- Callout boxes (note, tip, warning, danger)

### Sections
- **Hero View** - Landing page with philosophy cards and CTAs
- **Docs View** - Component library with 3-column hub layout
- **Book View** - Book reader with table of contents and chapters

### Hub Layout
- **Left Sidebar** - Category/chapter navigation
- **Center Main** - Component grid or book content
- **Right Sidebar** - Component preview or chapter metadata
- **Responsive** - Full 3-column on desktop, single column on mobile

### Responsive Design
- **Mobile (320px)** - Single column, stacked navigation
- **Tablet (768px)** - Two columns, sidebars visible
- **Desktop (1024px)** - Full 3-column hub layout
- **Large (1200px+)** - Optimized spacing and sticky sidebars

### Accessibility
- Semantic HTML for screen readers
- ARIA attributes (aria-current, aria-label)
- Keyboard navigation (Tab, Enter)
- Focus visible states (2px outline)
- High contrast mode support
- Reduced motion support
- Skip links for keyboard users

### Performance
- No framework dependencies
- Direct CSS styling (no PostCSS)
- Minimal JavaScript (10.5 KB)
- Fast view switching (no page reload)
- No external libraries

## Getting Started

### Local Development

1. Clone the repository:
```bash
cd /Users/solroth/Sites/axiom01
git checkout version3
```

2. Open in a browser:
```bash
open src/index.html
# or
python3 -m http.server 8000  # if you prefer a local server
```

3. Test responsive design:
- Mobile: 320px width
- Tablet: 768px width
- Desktop: 1024px+ width

### Customization

Edit design tokens in `src/css/axiom.css`:

```css
:root {
  --a-hue-primary: 250;           /* Change primary color hue */
  --a-space-md: clamp(...);       /* Adjust spacing */
  --a-text-base: clamp(...);      /* Adjust typography */
}
```

The entire color system updates automatically from the primary hue.

## Architecture

### HTML Structure
- Pure semantic elements (header, nav, main, section, article, aside, footer)
- Zero class hierarchies (no `.navbar-nav-item-button`)
- One semantic class per component (`.hero`, `.card`, `.grid`)
- Data attributes for state (data-nav, data-category, data-chapter)
- ARIA attributes for accessibility

### CSS Architecture
```
@layer axiom.reset      → Browser normalization
@layer axiom.tokens     → Design tokens (OKLCH, spacing, etc)
@layer axiom.base       → HTML element defaults
@layer axiom.layout     → Layout patterns (grid, container)
@layer axiom.components → Component styling (.hero, .card)
@layer axiom.utilities  → Responsive, dark mode, accessibility
```

### JavaScript
- **Navigation** - SPA routing with browser history
- **Config** - Theme/spacing management with localStorage
- **HubNav** - Category filtering, chapter loading, component preview
- **CodeSnippet** - Copy-to-clipboard for code blocks

## Philosophy Compliance

| Principle | Status |
|-----------|--------|
| One semantic class per component | ✅ 100% |
| Zero BEM classes | ✅ 100% |
| No class hierarchies | ✅ 100% |
| Element-based CSS styling | ✅ 100% |
| Framework handles CSS | ✅ 100% |
| Design tokens only | ✅ 100% |
| Mobile-first responsive | ✅ 100% |
| Dark mode automatic | ✅ 100% |
| Accessibility (WCAG 2.1 AA) | ✅ 100% |

## Build Status

**Phase 1: Foundation** ✅ COMPLETE
- CSS framework with @layer cascade
- Design tokens (30+ OKLCH variables)
- Semantic HTML structure
- Core JavaScript (routing, theming)
- Mobile-first responsive

**Phase 2: Components** ✅ COMPLETE
- 20+ UI components fully styled
- Hub layout (3-column pattern)
- Navigation and routing system
- Theme/spacing toggles
- Full accessibility support

**Phase 3: Content** 🔄 IN PROGRESS
- Component documentation (77 components)
- Book chapters (17 chapters)
- Component preview functionality
- Search/filtering system
- Live configurator

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Free for personal and commercial use.

## Design Principles

1. **Semantic First** - HTML describes meaning, not presentation
2. **Framework Responsibility** - Framework handles CSS styling
3. **Developer Responsibility** - Developer writes semantic HTML
4. **No Build Tools** - Direct source, no compilation
5. **No External Dependencies** - Pure HTML/CSS/JavaScript
6. **Accessibility Built-In** - WCAG 2.1 AA from the start
7. **Mobile First** - Optimized for all screen sizes
8. **Dark Mode Automatic** - OKLCH color space handles it

## Resources

- **Repository**: `/Users/solroth/Sites/axiom01/` (version3 branch)
- **Main Files**: `src/index.html`, `src/css/axiom.css`, `src/js/axiom-core.js`
- **Documentation**: `V3_PROGRESS.md`, `AXIOM01_PHILOSOPHY_FIX.md`

---

**Status**: Phase 2 Complete, Phase 3 In Progress
**Version**: 3.0
**Last Updated**: June 2024

The semantic rebellion against class-based frameworks starts here. 🎉
