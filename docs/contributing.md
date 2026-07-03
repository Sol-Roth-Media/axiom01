# Contributing to AXIOM01

Thank you for your interest in contributing to AXIOM01! This guide will help you get started.

## Philosophy First

Before contributing, understand AXIOM01's core philosophy:

1. **Semantic HTML First** - Use proper HTML elements (`<button>` not `<div role="button">`)
2. **One Class Per Component** - `.card`, not `.card-header` + `.card-body`
3. **Design Tokens Only** - All values come from CSS variables, never hardcoded pixels
4. **No Utility Classes** - No `.m-4`, `.p-2`, `.flex`, etc.
5. **Data Attributes for Variants** - Use `data-variant="elevated"`, not `.card-elevated`

If your contribution violates these principles, it will be rejected.

---

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR-USERNAME/axiom01.git
cd axiom01
npm install
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 3. Make Changes

### 4. Build & Test

```bash
npm run build
npm run test  # (when available)
```

### 5. Submit PR

Push your branch and create a pull request with:
- Clear description of changes
- Link to related issue (if any)
- Screenshots (for UI changes)
- Accessibility testing results

---

## Adding a Component

### Step 1: Verify the Component Doesn't Exist

Check `docs/components/` directory and the [components overview](./components-overview.html).

### Step 2: Plan the Component

Answer these questions:
- **Semantic HTML**: What HTML tag best represents this? (`<button>`, `<article>`, `<nav>`, etc.)
- **Single Class**: What single class name describes it? (`.card`, `.alert`, `.hero`)
- **Variants**: How will variants work? (Use `data-*` attributes, not class modifiers)
- **States**: What states does it have? (disabled, active, focused, etc.)
- **Accessibility**: What ARIA roles/labels are needed?

### Step 3: Add CSS to `_components.css`

```css
/* === COMPONENT NAME === */
.component-name {
    display: block;
    padding: var(--a-space-l);
    background: var(--a-color-surface);
    border: 1px solid var(--a-color-outline);
    border-radius: var(--a-border-radius-base);
}

/* Variant: using data-variant attribute */
.component-name[data-variant="elevated"] {
    border: none;
    box-shadow: var(--a-shadow-md);
}

/* State: using data-state attribute */
.component-name[data-state="active"] {
    background: var(--a-color-primary);
    color: var(--a-color-on-primary);
}

/* Disabled state */
.component-name:disabled,
.component-name[data-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Focus state (keyboard navigation) */
.component-name:focus-visible {
    outline: 2px solid var(--a-color-primary);
    outline-offset: 2px;
}
```

### Step 4: Create Component Documentation

Create `docs/components/component-name.html`:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component Name - Axiom01</title>
    <link rel="stylesheet" href="../../css/axiom.min.css">
    <link rel="stylesheet" href="../../css/docs.css">
</head>
<body>
    <header class="main" data-component="mobile-navbar">
        <!-- Header from template -->
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Component Name</h1>
                <p>Short description of what this component does.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <header>
                    <h2>Live Examples</h2>
                </header>

                <div class="grid">
                    <article class="card">
                        <header>
                            <h3>Default State</h3>
                        </header>
                        <main>
                            <!-- Live example here -->
                        </main>
                    </article>

                    <article class="card">
                        <header>
                            <h3>Variant Name</h3>
                        </header>
                        <main>
                            <!-- Live example here -->
                        </main>
                    </article>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <header>
                    <h2>Semantic HTML Structure</h2>
                </header>

                <article class="card">
                    <header>
                        <h3>Basic Structure</h3>
                    </header>
                    <main>
                        <pre><code class="language-html">&lt;!-- HTML example --&gt;</code></pre>
                    </main>
                </article>
            </div>
        </section>

        <section>
            <div class="container">
                <header>
                    <h2>Framework Classes</h2>
                </header>

                <article class="card">
                    <header>
                        <h3>Available Classes</h3>
                    </header>
                    <main>
                        <table>
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>.component-name</code></td>
                                    <td>Main component container</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </article>
            </div>
        </section>

        <section>
            <div class="container">
                <header>
                    <h2>Accessibility</h2>
                </header>

                <article class="card">
                    <header>
                        <h3>WCAG 2.1 AA Compliance</h3>
                    </header>
                    <main>
                        <ul>
                            <li>Keyboard accessible</li>
                            <li>Proper ARIA labels</li>
                            <li>Color contrast compliant</li>
                            <li>Focus indicators visible</li>
                        </ul>
                    </main>
                </article>
            </div>
        </section>
    </main>

    <footer class="footer">
        <!-- Footer from template -->
    </footer>

    <script src="../../js/axiom.min.js"></script>
</body>
</html>
```

### Step 5: Update Components Overview

Edit `docs/components-overview.html` to add your component to the listing.

### Step 6: Run Build

```bash
npm run build
```

### Step 7: Test Thoroughly

- [ ] Works on mobile (<480px)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1200px+)
- [ ] Dark mode works
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] No inline styles
- [ ] No utility classes
- [ ] All values use design tokens
- [ ] Follows semantic HTML patterns

---

## Fixing Bugs

### 1. Find the Issue

Check if it's in:
- `css/axiom.css` (styling)
- `js/axiom.js` (interactivity)
- `docs/components/` (documentation)

### 2. Write a Test (Future)

```javascript
// Test structure (when testing framework is added)
test('component should behave correctly', () => {
    // Your test
});
```

### 3. Fix the Bug

Make minimal, focused changes.

### 4. Verify

```bash
npm run build
# Manual testing in browser
```

---

## Code Style

### CSS

```css
/* Use semantic selectors */
.component-name {
    display: block;
}

/* Use design tokens */
padding: var(--a-space-l);
background: var(--a-color-surface);

/* Organize by concern */
.component-name { /* structure */ }
.component-name:hover { /* interaction */ }
.component-name:focus-visible { /* accessibility */ }
.component-name[data-active] { /* state */ }

/* No specificity wars */
/* Avoid nesting beyond 2 levels */
.component-name .inner-element { }
```

### JavaScript

```javascript
// Use meaningful variable names
const menuButton = e.target.closest('button.menu');

// Use event delegation
document.addEventListener('click', function(e) {
    const target = e.target.closest('.component');
    if (target) {
        // Handle event
    }
});

// Emit custom events
const event = new CustomEvent('axiom:component:action', {
    detail: { element, action },
    bubbles: true
});
element.dispatchEvent(event);
```

### HTML

```html
<!-- Use semantic elements -->
<article class="card">
    <header>
        <h2>Title</h2>
    </header>
    <main>
        <p>Content</p>
    </main>
</article>

<!-- Use data attributes for variants -->
<div class="component" data-variant="elevated">

<!-- No inline styles -->
<!-- BAD: style="padding: 1rem;" -->
<!-- GOOD: padding uses design tokens in CSS -->

<!-- No utility classes -->
<!-- BAD: class="flex gap-4 p-2 m-3" -->
<!-- GOOD: class="component" -->
```

---

## Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- `feat`: New feature or component
- `fix`: Bug fix
- `docs`: Documentation
- `refactor`: Code restructuring
- `test`: Tests (when added)
- `perf`: Performance improvement

### Examples

```
feat(components): add timeline component

- Add .timeline semantic styling
- Include keyboard navigation support
- Full WCAG 2.1 AA compliance
- Update components overview

Fixes #123
```

```
fix(css): correct button focus states

The focus-visible outline wasn't visible in dark mode.
Changed to use primary color which has sufficient contrast.
```

---

## Pull Request Checklist

- [ ] Branch is up-to-date with `main`
- [ ] Code follows style guidelines
- [ ] No inline styles added
- [ ] No utility classes added
- [ ] All values use design tokens
- [ ] Component is semantic HTML
- [ ] Tested on mobile, tablet, desktop
- [ ] Dark mode works
- [ ] Keyboard accessible
- [ ] ARIA labels added where needed
- [ ] Focus indicators visible
- [ ] Build passes: `npm run build`
- [ ] Documentation is complete
- [ ] Commit messages are clear

---

## Questions?

- Check [existing issues](https://github.com/Sol-Roth-Media/axiom01/issues)
- Read [framework philosophy](./FRAMEWORK_AUDIT_2025.md)
- Start a [discussion](https://github.com/Sol-Roth-Media/axiom01/discussions)

---

## Code of Conduct

We're committed to providing a welcoming and inclusive community. Please:

- Be respectful and inclusive
- Give credit where it's due
- Focus on the code, not the person
- Help others learn

---

Thank you for contributing to AXIOM01! 🎉

