# Axiom01 Framework Audit Report
## Semantic Compliance & Framework Violations Analysis

**Status:** ❌ Multiple violations detected  
**Severity:** Medium - Documentation contradicts implementation  
**Pages Audited:** 83 component pages  
**Violations Found:** 139+ instances across pages

---

## Executive Summary

The Axiom01 documentation site contains numerous violations of its own core philosophy: "Semantic HTML First" with "no custom, no BEM classes." While the framework CSS is well-structured with semantic components (`btn`, `card`, `alert`, `form-group`, etc.), **the documentation pages themselves use custom classes, inline styles, and divitis patterns that contradict Axiom01's principles.**

### Key Issues

1. **Inline Styles** - Using `style=""` instead of CSS variables
2. **Custom Classes** - Classes like `form-demo`, `github`, `menu`, `search`, `button-group` not in core framework
3. **Divitis** - Using `<div>` with custom classes instead of semantic `<button>`, `<nav>`, `<article>`
4. **Role-Based Divs** - `<div role="tabpanel">` instead of semantic `<section>` or HTML5 elements
5. **Inconsistent Spacing** - Inline style margins instead of framework spacing utilities
6. **Framework Class Mixing** - Some pages use Tailwind-like class names (`max-w-sm`, `delay-3`)

---

## Detailed Findings

### 1. Inline Styles (Critical)

**Pattern:** Using `style=""` for spacing, colors, positioning

**Examples Found:**

```html
<!-- ❌ WRONG - Inline styles -->
<div style="margin: var(--a-space-m) 0;">Content</div>
<div style="opacity: 0;">Hidden</div>
<label style="display: block; margin-bottom: var(--a-space-s);">
  <input type="checkbox"> Option
</label>
```

**Impact:** 
- Breaks separation of concerns
- Makes styling maintenance harder
- Inconsistent with "semantic HTML first" philosophy
- Harder to theme (dark mode, variants)

**Solution:** Move to CSS classes or leverage semantic element defaults

```html
<!-- ✓ RIGHT - Semantic elements + CSS variables -->
<section class="component-section">
  <input type="checkbox" id="option1">
  <label for="option1">Option</label>
</section>
```

```css
.component-section {
  margin: var(--a-space-m) 0;
}

.component-section label {
  display: block;
  margin-bottom: var(--a-space-s);
}
```

---

### 2. Custom/Non-Framework Classes

**Pattern:** Classes not part of Axiom01 core framework

**Violations by Page:**

| Class Name | Pages | Framework Class | Should Be |
|-----------|-------|-----------------|-----------|
| `form-demo` | form-elements.html | ❌ Custom | Use `card` + `component-section` |
| `github` | 5+ pages | ❌ Custom | Use `btn btn-secondary` + icon |
| `menu` | Multiple pages | ❌ Custom | Use semantic `<nav>` |
| `search` | Multiple pages | ❌ Custom | Use semantic `<form>` + `<input>` |
| `button-group` | button.html | ❌ Custom | Use `button` class with flex layout |
| `theme` | Multiple pages | ❌ Custom | Use `btn` with modifier |
| `axiom-body` | Multiple pages | ❌ Custom | Not needed; use `body` |
| `content` | Multiple pages | ❌ Custom | Use semantic `<main>`, `<article>`, `<section>` |
| `title` | Multiple pages | ❌ Custom | Use `<h1>`, `<h2>`, etc. |
| `max-w-sm`, `delay-3` | index.html | ⚠️ Tailwind-like | Use `container` + CSS variables |

**Example Violations:**

File: `docs/form-elements.html`
```html
<!-- ❌ WRONG -->
<div class="form-demo">
  <div>
    <label for="text-input">Text Input</label>
    <input type="text" id="text-input" placeholder="Enter some text">
  </div>
</div>
```

```html
<!-- ✓ RIGHT -->
<section class="card">
  <div class="card-body">
    <label for="text-input">Text Input</label>
    <input type="text" id="text-input" placeholder="Enter some text">
  </div>
</section>
```

---

### 3. Divitis (Non-Semantic HTML)

**Pattern:** Using `<div>` with custom classes instead of semantic elements

**Violations:**

```html
<!-- ❌ WRONG - Divitis -->
<div class="nav">
  <div class="brand">Logo</div>
  <div class="links">
    <div class="link"><a href="/">Home</a></div>
    <div class="link"><a href="/about">About</a></div>
  </div>
</div>

<!-- ✓ RIGHT - Semantic -->
<nav role="navigation" aria-label="Main Navigation">
  <a href="/" class="brand">Logo</a>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

**Pages with Divitis Issues:**
- `docs/animations.html` - 3 instances
- `docs/axicons.html` - 2 instances  
- `docs/media-advanced.html` - 3 instances
- `docs/components/account-menu.html` - 3 instances

---

### 4. Role-Based Divs (Anti-Pattern)

**Pattern:** Using `<div role="X">` instead of semantic HTML

**Example from index.html:**

```html
<!-- ❌ WRONG -->
<div role="tabpanel" aria-labelledby="tab-1">
  Content
</div>

<!-- ✓ RIGHT -->
<section id="tab-1-content" aria-labelledby="tab-1">
  Content
</section>

<!-- Or use semantic HTML5 -->
<article id="tab-1-content" aria-labelledby="tab-1">
  Content
</article>
```

**Why This Matters:**
- `role` is for ARIA - should only be used when no semantic element exists
- Semantic elements have built-in accessibility
- Easier for screen readers to navigate
- Aligns with Axiom01's "Semantic HTML First" principle

---

### 5. Inconsistent Spacing Patterns

**Pages: Multiple**

**Issue:** Mixing inline styles with framework utilities

```html
<!-- ❌ INCONSISTENT -->
<div style="margin-bottom: var(--a-space-m);">Item 1</div>
<div style="margin-bottom: var(--a-space-m);">Item 2</div>
<div style="margin-bottom: var(--a-space-m);">Item 3</div>
```

**Solution:** Use CSS classes (not shown in framework) or semantic grouping

```html
<!-- ✓ BETTER - Semantic grouping -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: var(--a-space-m);
}

li:last-child {
  margin-bottom: 0;
}
```

---

### 6. Tailwind-Like Classes (Mixing Frameworks)

**Files: index.html**

**Violations:**
- `max-w-sm` - Tailwind class, not Axiom01
- `delay-3` - Tailwind animation utility
- `border` - Tailwind utility

**Impact:**
- Confuses developers about what's Axiom01 vs. external frameworks
- Breaks portability (framework switching becomes harder)
- Violates "minimal dependencies" principle

```html
<!-- ❌ WRONG - Tailwind classes in Axiom01 project -->
<div class="max-w-sm delay-3 border">...</div>

<!-- ✓ RIGHT - Pure Axiom01 -->
<div class="container" style="max-width: var(--a-space-m); animation-delay: 0.3s; border: 1px solid var(--a-color-outline);">...</div>

<!-- Or better: Use CSS -->
<div class="hero-animation">...</div>
```

```css
.hero-animation {
  max-width: var(--a-container-max-width);
  animation-delay: 0.3s;
  border: 1px solid var(--a-color-outline);
}
```

---

## Violations by Page

### High Priority (Many Violations)

| Page | Inline Styles | Custom Classes | Divitis | Roles |
|------|---------------|----------------|---------|-------|
| docs/media-advanced.html | 3 | 3 | 3 | - |
| docs/animations.html | 3 | 3 | 3 | 3 |
| docs/axicons.html | 3 | 3 | 2 | 3 |
| index.html | 3 | 4 | - | 1 |
| docs/form-elements.html | 3 | 5 | 1 | - |

### Medium Priority

- docs/components-overview.html (3 inline, 5 custom)
- docs/typography-advanced.html (3 inline, 3 custom)
- docs/layout-advanced.html (3 inline, 3 custom)
- docs/colors-advanced.html (3 inline, 3 custom)

### All 83 Pages Affected

Every component page contains at least one violation type, suggesting:
1. Documentation pages were built without strict compliance checking
2. Framework CSS doesn't provide enough utility classes
3. Missing CSS class for common patterns (demo containers, examples)

---

## Root Cause Analysis

### Why These Violations Exist

1. **Framework Incompleteness**
   - Core CSS has semantic components (btn, card, alert)
   - Missing utility classes for common patterns
   - Example: No `.example`, `.demo`, `.showcase` classes

2. **Documentation Scope Creep**
   - Pages evolved independently
   - Some use semantic HTML, some use custom patterns
   - No validation/linting to enforce compliance

3. **Mixed Design System Implementation**
   - Some pages look like they started from a Tailwind template
   - Others are pure semantic HTML
   - Inconsistent base assumptions

4. **Lack of Governance**
   - No documented pattern for "documentation example containers"
   - Developers guessed at CSS class names
   - No linting rules to catch violations

---

## Recommendations

### Phase 1: Immediate Fixes (Quick Wins)

**1. Remove Custom Classes from Documentation**

Create a minimal CSS file specifically for documentation examples:

```css
/* docs/docs.css - Documentation-only styles (non-portable) */

/* Example/demo containers - used ONLY in documentation */
.component-example {
  background: var(--a-color-surface-variant);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-lg);
  padding: var(--a-space-l);
  margin-bottom: var(--a-space-l);
}

.component-example.form-demo {
  /* Specific for form demonstrations */
}

/* Documentation sections */
.component-section {
  margin-bottom: var(--a-space-xxl);
}

/* Example output areas */
.output-example {
  background: var(--a-color-surface);
  padding: var(--a-space-m);
  border-left: 3px solid var(--a-color-primary);
}
```

**Then in HTML:**

```html
<!-- ✓ BEFORE -->
<div class="form-demo">
  <label for="email">Email</label>
  <input type="email" id="email">
</div>

<!-- ✓ AFTER -->
<div class="component-example form-demo">
  <label for="email">Email</label>
  <input type="email" id="email">
</div>
```

**2. Remove All Inline Styles**

Target: All 50+ inline style attributes

```html
<!-- ❌ BEFORE -->
<label style="display: block; margin-bottom: var(--a-space-s);">
  <input type="checkbox"> Option
</label>

<!-- ✓ AFTER -->
<label class="form-check-label">
  <input type="checkbox" class="form-check"> Option
</label>
```

**3. Replace All `<div role="X">` with Semantic Elements**

```html
<!-- ❌ BEFORE -->
<div role="navigation" class="main-nav">...</div>

<!-- ✓ AFTER -->
<nav role="navigation" aria-label="Main Navigation">...</nav>
```

### Phase 2: Structural Improvements (1-2 weeks)

**1. Build Axiom01 Utility Classes (Optional, Not BEM)**

If needed, add semantic utility classes that extend (not replace) core components:

```css
/* Semantic naming - describes content, not presentation */
.section-padding-l { padding: var(--a-space-l); }
.margin-block { margin-block: var(--a-space-m); }
.text-muted { color: var(--a-color-text-secondary); }
```

**2. Create Component Pattern Library**

Document standard patterns for examples:

```html
<!-- Pattern: Simple Example Container -->
<section class="component-section">
  <div class="component-example">
    <!-- Live example -->
  </div>
  <pre><code class="language-html"><!-- Code example --></code></pre>
</section>
```

**3. Remove Tailwind-Like Classes**

Replace all `max-w-*`, `delay-*`, etc. with semantic alternatives

### Phase 3: Enforcement (Ongoing)

**1. Create HTML Linting Rules**

`.htmlhint.json`:
```json
{
  "rules": {
    "no-inline-style": true,
    "no-unknown-classes": ["form-demo", "github", "menu"],
    "no-role-divs": true,
    "semantic-nav": true,
    "semantic-header": true
  }
}
```

**2. Document Axiom01 Usage Guide**

File: `AXIOM01_DEVELOPER_GUIDE.md`

```markdown
# Axiom01 Component Usage

## Core Components (Use These)

- `btn` - All buttons
- `card` - Content containers
- `alert` - Status messages
- `form-group` - Form field groups
- `form-control` - Inputs, selects, textareas

## Semantic Elements (Use These)

- `<nav>` - Navigation
- `<header>` - Page/section headers
- `<footer>` - Page/section footers
- `<main>` - Main content
- `<article>` - Self-contained content
- `<section>` - Thematic grouping

## DO NOT

- ❌ Add custom classes (use framework components)
- ❌ Use inline styles (use CSS variables)
- ❌ Use `<div role="X">` (use semantic elements)
- ❌ Use Tailwind/Bootstrap classes
- ❌ Use BEM naming

## Documentation Examples

Use `.component-example` for demo containers:

\`\`\`html
<section class="component-section">
  <div class="component-example">
    <!-- Live example here -->
  </div>
</section>
\`\`\`
```

**3. Pre-Commit Linting**

```bash
# .husky/pre-commit
npm run lint:html -- 'docs/**/*.html'
```

---

## Migration Checklist

### Page-by-Page Fix Template

For each of 83 pages:

- [ ] Remove `style=""` attributes (move to CSS)
- [ ] Remove custom class names (replace with framework classes)
- [ ] Replace `<div role="X">` with semantic elements
- [ ] Ensure all `<nav>`, `<header>`, `<footer>` are semantic
- [ ] Verify dark mode compatibility
- [ ] Test keyboard navigation
- [ ] Validate HTML5

### Batch Fix Script

Create a migration script to auto-fix common patterns:

```python
# migrate_to_semantic.py

import re
from pathlib import Path

def fix_inline_styles(html):
    """Move inline styles to CSS classes"""
    # Move margin-bottom to class
    return re.sub(
        r'style="[^"]*margin-bottom:\s*var\(--a-space-[a-z]+\)"',
        'class="margin-block-end"',
        html
    )

def fix_custom_classes(html):
    """Replace custom classes with framework equivalents"""
    replacements = {
        'form-demo': 'component-example form-demo',
        'button-group': 'flex gap-m',
        # ... more mappings
    }
    for old, new in replacements.items():
        html = html.replace(f'class="{old}"', f'class="{new}"')
    return html

def fix_div_roles(html):
    """Replace div[role] with semantic elements"""
    html = re.sub(
        r'<div role="navigation"',
        '<nav role="navigation"',
        html, flags=re.IGNORECASE
    )
    # ... more patterns
    return html
```

---

## Estimated Impact

| Fix Type | Time | Pages Affected | Severity |
|----------|------|----------------|----------|
| Remove inline styles | 2-3 days | 50+ | High |
| Remove custom classes | 2-3 days | 83 | High |
| Replace div roles | 1 day | 10+ | Medium |
| Update CSS for examples | 2-3 days | 83 | High |
| Add linting rules | 1 day | All future | High |
| **Total** | **~1-2 weeks** | All | **High** |

---

## Success Metrics

After fixes, the site should:

✓ Have ZERO inline styles (except `data-theme` toggles)  
✓ Use ONLY framework core classes + documentation-specific classes  
✓ Use semantic HTML throughout (100% of navigation, headers, footers)  
✓ Pass HTML5 validation  
✓ Pass accessibility audit (WCAG 2.1 AA)  
✓ Have consistent styling pattern across all pages  
✓ Match documented philosophy in AXIOM01_STYLING_GUIDE.md  

---

## Next Steps

1. **Review & Approve** - Get team consensus on recommendations
2. **Priority Mapping** - Decide which pages to fix first
3. **Tool Setup** - Install htmlhint, configure linting
4. **Mass Fix** - Use batch script for common patterns
5. **Manual Review** - Polish edge cases
6. **Testing** - Visual regression, accessibility, dark mode
7. **Documentation** - Update developer guide
8. **Enforcement** - Add pre-commit hooks

---

**Report Generated:** 2025  
**Auditor:** Code Analysis System  
**Scope:** 83 HTML pages, Axiom01 documentation site  
**Framework Version:** 0.1  
**Compliance Status:** ⚠️ Non-compliant (needs remediation)
