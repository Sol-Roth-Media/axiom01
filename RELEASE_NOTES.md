# Axiom01 v2.0.0 Release Notes

**Release Date:** January 20, 2025

## 🎉 Major Release: Professional Design System & Complete Component Library

We're thrilled to announce **Axiom01 v2.0.0**, a major upgrade that transforms Axiom01 into a production-ready UI framework with a comprehensive professional design system, animations, utilities, and complete component library.

## What's New?

### 1. 🎨 Professional Design System (50+ Tokens)

A complete CSS variable-based design system for consistent design across all projects:

- **Colors**: Primary, secondary, semantic (success, warning, error, info), surface/text, grayscale
- **Spacing**: xs (4px) through xxl (56px), responsive scale
- **Typography**: Font families, sizes, weights, line heights
- **Shadows**: Medium and large depth levels
- **Borders**: Radius variants (small, base, medium, large, full)
- **Breakpoints**: xs, sm, md, lg, xl, xxl responsive sizes
- **Gradients**: Primary, sunset, ocean, forest
- **Transitions**: Fast (150ms), normal (300ms), slow (500ms)

**Why it matters**: Maintain visual consistency across your entire app. Change colors, spacing, or typography globally by updating one CSS variable. Perfect for theming and dark mode.

**Example**:
```css
.button {
  padding: var(--a-space-m);
  background: var(--a-color-primary);
  border-radius: var(--a-border-radius-base);
}
```

See [`docs/tokens/VARIABLES.md`](docs/tokens/VARIABLES.md) for complete reference.

### 2. ✨ Animation System (20+ Keyframes)

Smooth, accessible animations for delightful interactions:

- **Fade animations**: fadeIn, fadeOut, fadeInUp, fadeInDown, fadeInLeft, fadeInRight
- **Slide animations**: slideUp, slideDown, slideLeft, slideRight
- **Scale animations**: scaleIn, scaleOut
- **Bounce animations**: bounce, bounceIn
- **Special effects**: spin, pulse, heartbeat, glow, shimmer
- **Utility classes**: `.animate-fade-in`, `.animate-slide-up`, etc.

**Why it matters**: Add beautiful, purposeful animations without writing complex keyframes. All animations respect `prefers-reduced-motion` for accessibility.

**Example**:
```html
<div class="animate-fade-in">Fades in</div>
<button class="animate-bounce-on-hover">Bounces on hover</button>
```

See [`docs/ANIMATIONS.md`](docs/ANIMATIONS.md) for complete reference.

### 3. 🎛️ Utility Classes (100+ Utilities)

Optional utility classes for rapid development and quick prototyping:

- **Display**: block, inline, flex, grid, hidden, visible
- **Flexbox**: flex-row, flex-col, items-center, justify-between, gap-m
- **Spacing**: Margin and padding utilities (m-m, p-l, mx-auto, etc.)
- **Typography**: Font weights, text alignment, transform, truncation
- **Colors**: Text, background, border color variants
- **Sizing**: Width, height, responsive sizing
- **Responsive**: hide-sm, show-md, sr-only (screen reader only)

**Why it matters**: Quick layouts without writing CSS. Perfect for prototyping and complex layouts.

**Example**:
```html
<div class="flex items-center gap-m p-l">
  <img src="..." alt="...">
  <p>Flexbox layout with spacing</p>
</div>
```

See [`docs/UTILITIES.md`](docs/UTILITIES.md) for complete reference.

### 4. 🧩 Production-Ready Components

#### Button Component
- 4 sizes: sm, default, lg, xl
- 7 types: primary, secondary, success, warning, danger, ghost, outline
- Special states: loading, icon-only, disabled
- Button groups

#### Card Component
- 5 variants: default, elevated, outlined, filled, hover-lift
- Semantic structure: header, content, footer
- Responsive card grid
- Interactive hover states

#### Badge Component
- 6 colors: primary, secondary, success, warning, error, info
- 3 sizes: sm, default, lg
- Perfect for status indicators

#### Alert Component
- 4 types: info, success, warning, error
- 3 sizes: sm, default, lg
- Dismissible variant
- Color-coded with border indicators

#### Tag Component
- Dismissible variant
- Smooth transitions

#### Link Component
- 5 variants: primary, secondary, muted, underline, cta
- External link indicators
- Visited link styling

**Why it matters**: Production-tested components following Axiom01's semantic-first philosophy. No BEM, no class stacking, just clean HTML.

See [`docs/COMPONENTS.md`](docs/COMPONENTS.md) for complete component API.

## 📊 Release Stats

- **CSS Added**: 1,400+ lines
- **Design Tokens**: 50+
- **Animations**: 20+
- **Utilities**: 100+
- **Component Variants**: 20+
- **Documentation**: 40+ KB (4 new pages + 1 updated)
- **Backward Compatibility**: 100%
- **Breaking Changes**: 0

## ✅ Quality Assurance

### Accessibility
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard accessible (full)
- ✅ Screen reader friendly (semantic HTML + ARIA)
- ✅ Color contrast: 4.5:1 or better
- ✅ Motion preferences respected
- ✅ Focus indicators visible

### Dark Mode
- ✅ Automatic detection
- ✅ System preference support
- ✅ All components adapted
- ✅ Smooth transitions

### Responsive Design
- ✅ Mobile-first approach
- ✅ 6 breakpoints
- ✅ Touch-friendly (32px+ targets)
- ✅ Tested at all sizes

### Browser Support
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Browser 90+

## 🔄 100% Backward Compatible

**Important**: v2.0.0 is completely backward compatible with v1.x. 

- ✅ All existing code continues to work
- ✅ No breaking changes
- ✅ New features are optional
- ✅ Simply update the package to use v2.0.0

```bash
npm update axiom01
# Your existing code works unchanged!
```

## 📖 Documentation Updates

All new features are fully documented:

- **[Component Reference](docs/COMPONENTS.md)** — Complete API for all components
- **[Design Tokens](docs/tokens/VARIABLES.md)** — 50+ tokens with examples
- **[Animation Guide](docs/ANIMATIONS.md)** — 20+ keyframes and patterns
- **[Utilities Reference](docs/UTILITIES.md)** — 100+ utility classes
- **[Styling Guide](AXIOM01_STYLING_GUIDE.md)** — Updated with components section
- **[README](README.md)** — Comprehensive overview with quick examples

## 🚀 Getting Started with v2.0.0

### Use Design Tokens
```css
.button {
  padding: var(--a-space-m);
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
}
```

### Use Animations
```html
<div class="animate-fade-in">Content</div>
```

### Use Components
```html
<button class="button--lg button--success">Save</button>

<div class="card card--elevated">
  <header><h2>Title</h2></header>
  <div>Content</div>
</div>
```

### Use Utilities
```html
<div class="flex items-center gap-m p-l">Content</div>
```

## 🎯 Why Axiom01 v2.0.0?

Axiom01 v2.0.0 delivers a **professional, production-ready design system** while maintaining our core philosophy:

1. **Semantic HTML First** — Clean HTML with minimal classes
2. **No BEM** — Single, descriptive class names
3. **Design Tokens** — Consistency through CSS variables
4. **Accessibility by Default** — WCAG 2.1 AA compliant
5. **Optional Utilities** — Use them or stick with semantic CSS

Perfect for:
- ✅ Enterprise applications
- ✅ Design systems
- ✅ Component libraries
- ✅ Production websites
- ✅ Accessible interfaces
- ✅ Dark mode support

## 📝 Migration Notes

### For v1.x Users
No action needed! Your existing code works as-is. To use new features:

1. Update to v2.0.0: `npm update axiom01`
2. Browse new features in documentation
3. Use new components, tokens, or utilities as needed

### For New Users
Start with the new comprehensive features:

1. Read [`README.md`](README.md)
2. Explore [`docs/`](docs/) documentation
3. Check component examples in [`docs/COMPONENTS.md`](docs/COMPONENTS.md)
4. Use design tokens from [`docs/tokens/VARIABLES.md`](docs/tokens/VARIABLES.md)

## 🐛 Known Issues

None at release. Please report any issues on [GitHub](https://github.com/Sol-Roth-Media/axiom01/issues).

## 🙏 Contributors

This release represents a major expansion of Axiom01's capabilities while maintaining the core philosophy of semantic HTML purity and accessibility first.

## 📄 License

MIT License — See [LICENSE](LICENSE) for details.

---

**Axiom01 v2.0.0** — Professional design system. Semantic HTML. Accessible by default.

**Update now**: `npm install axiom01@2.0.0`

**Questions?** Check the [documentation](docs/) or open an [issue](https://github.com/Sol-Roth-Media/axiom01/issues).
