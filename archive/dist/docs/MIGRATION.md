# Migrating to AXIOM01

Migration guides for moving from other frameworks to AXIOM01.

## From Bootstrap

### Key Differences

| Bootstrap | AXIOM01 |
|-----------|---------|
| `.btn` + `.btn-primary` | `<button class="primary">` |
| `.card` with nested classes | `<article class="card">` |
| Utility classes (`.m-4`, `.p-2`) | Design tokens (`var(--a-space-l)`) |
| `.d-flex`, `.justify-content-center` | Semantic HTML + flexbox |
| Multiple class names | Single semantic class |

### Migration Checklist

- [ ] Replace `.container` with `<div class="container">`
- [ ] Replace `.btn` with semantic `<button>`
- [ ] Remove all utility classes
- [ ] Use data-* for variants instead of class modifiers
- [ ] Update color classes to use CSS variables
- [ ] Test responsive behavior (AXIOM01 uses fluid tokens)

### Example: Button

**Bootstrap:**
```html
<button class="btn btn-primary btn-lg">Click me</button>
```

**AXIOM01:**
```html
<button class="primary" data-size="large">Click me</button>
```

### Example: Card

**Bootstrap:**
```html
<div class="card">
    <div class="card-header">
        <h5>Title</h5>
    </div>
    <div class="card-body">
        <p>Content</p>
    </div>
</div>
```

**AXIOM01:**
```html
<article class="card">
    <header>
        <h2>Title</h2>
    </header>
    <main>
        <p>Content</p>
    </main>
</article>
```

### Example: Spacing

**Bootstrap:**
```html
<div class="m-4 p-3">Content</div>
```

**AXIOM01:**
```html
<div style="margin: var(--a-space-xl); padding: var(--a-space-m);">Content</div>
<!-- Or better: Use custom CSS classes -->
```

---

## From Tailwind CSS

### Key Differences

| Tailwind | AXIOM01 |
|----------|---------|
| `flex justify-center items-center` | Semantic HTML structure |
| `text-lg font-bold text-primary` | Design tokens + semantic tags |
| `rounded-lg bg-blue-500` | Single component class |
| Utility-first | Semantic-first |
| Low specificity conflicts | Zero utility class conflicts |

### Migration Checklist

- [ ] Remove `@apply` rules
- [ ] Replace utility classes with semantic HTML
- [ ] Convert color classes to CSS variables
- [ ] Remove Tailwind configuration
- [ ] Use AXIOM01 tokens for sizing
- [ ] Test dark mode (AXIOM01 has built-in support)

### Example: Flex Container

**Tailwind:**
```html
<div class="flex flex-col gap-4 p-6 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold text-gray-900">Title</h2>
    <p class="text-gray-600">Content</p>
</div>
```

**AXIOM01:**
```html
<article class="card">
    <h2>Title</h2>
    <p>Content</p>
</article>
```

### Example: Responsive Grid

**Tailwind:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- items -->
</div>
```

**AXIOM01:**
```html
<div class="grid">
    <!-- items -->
    <!-- Automatically responsive with CSS Grid auto-fit -->
</div>
```

### Example: Colors

**Tailwind:**
```html
<div class="bg-blue-500 text-white p-4 rounded">Content</div>
```

**AXIOM01:**
```html
<div style="background: var(--a-color-primary); color: var(--a-color-on-primary); padding: var(--a-space-l); border-radius: var(--a-border-radius-base);">Content</div>
```

---

## From Bulma

### Key Differences

| Bulma | AXIOM01 |
|-------|---------|
| `.button.is-primary` | `<button class="primary">` |
| `.field` + `.control` wrappers | Direct input elements |
| `.container.is-fluid` | Responsive by default |
| `.columns` + `.column` | CSS Grid `.grid` |
| Multiple class layers | Single semantic class |

### Migration Checklist

- [ ] Replace `.button` with semantic `<button>`
- [ ] Simplify form structure (remove `.field`/`.control`)
- [ ] Replace `.columns` with `.grid`
- [ ] Update color naming (`.is-primary` → `.primary`)
- [ ] Remove nested class hierarchies
- [ ] Use AXIOM01's built-in responsiveness

---

## From Foundation

### Key Differences

| Foundation | AXIOM01 |
|-----------|----------|
| `.button` + `.primary` | `<button class="primary">` |
| `.callout` with modifier | `.alert` with semantic class |
| Grid system (24 columns) | CSS Grid with auto-fit |
| JavaScript plugins | Event delegation system |
| Complex nesting | Flat semantic structure |

---

## Common Patterns

### Navigation

**Before (Utility-heavy):**
```html
<nav class="flex justify-between items-center p-4 bg-white border-b">
    <div class="text-2xl font-bold">Logo</div>
    <ul class="flex gap-4">
        <li><a class="text-gray-600 hover:text-black">Home</a></li>
        <li><a class="text-gray-600 hover:text-black">Docs</a></li>
    </ul>
</nav>
```

**After (Semantic):**
```html
<header class="main">
    <nav role="navigation">
        <a href="#" class="brand">Logo</a>
        <ul class="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Docs</a></li>
        </ul>
    </nav>
</header>
```

### Forms

**Before (Utility-heavy):**
```html
<div class="flex flex-col gap-4 p-6 bg-white rounded-lg">
    <div>
        <label class="block text-sm font-semibold mb-2">Email</label>
        <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded" />
    </div>
    <button class="bg-blue-500 text-white px-6 py-2 rounded font-semibold">Submit</button>
</div>
```

**After (Semantic):**
```html
<form>
    <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" />
    </div>
    <button class="primary" type="submit">Submit</button>
</form>
```

### Cards

**Before (Utility-heavy):**
```html
<div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
    <h2 class="text-xl font-bold mb-2">Title</h2>
    <p class="text-gray-600 mb-4">Content</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Action</button>
</div>
```

**After (Semantic):**
```html
<article class="card">
    <header>
        <h2>Title</h2>
    </header>
    <main>
        <p>Content</p>
    </main>
    <footer>
        <button class="primary">Action</button>
    </footer>
</article>
```

---

## Performance Considerations

### Bundle Size Comparison

| Framework | CSS | JS | Total |
|-----------|-----|-----|-------|
| Bootstrap | 185KB | 48KB | 233KB |
| Tailwind | 35KB | - | 35KB |
| Bulma | 200KB | - | 200KB |
| **AXIOM01** | **8.5KB** | **6.5KB** | **15KB** |

AXIOM01 achieves smaller bundle sizes through:
- Semantic-first approach (no utility classes)
- Design token system (no duplicate styles)
- Minimal JavaScript (event delegation only)

---

## Browser Support

AXIOM01 targets modern browsers with ES6+ support:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

No IE11 support. No polyfills needed.

---

## Help & Support

### Common Issues

**Q: How do I customize colors?**
A: Use CSS variables. Override `--a-color-primary` and related tokens.

**Q: Can I use utility classes?**
A: Yes, but it defeats the philosophy. AXIOM01 encourages semantic HTML instead.

**Q: Do I need to learn a new CSS framework?**
A: Not really. AXIOM01 uses standard CSS. Just focus on semantic HTML.

**Q: What about TypeScript types?**
A: Coming soon. Core JavaScript is vanilla JS with JSDoc comments.

### Resources

- [AXIOM01 Docs](https://axiom01.com)
- [GitHub Discussions](https://github.com/Sol-Roth-Media/axiom01/discussions)
- [Issue Tracker](https://github.com/Sol-Roth-Media/axiom01/issues)

---

**Ready to migrate?** Start with one page, convert incrementally, and enjoy the semantic approach!

