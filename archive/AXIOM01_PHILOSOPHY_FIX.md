# AXIOM01 Philosophy - Critical Correction Applied

## The Issue

Initial Phase 1 implementation of `index.html` violated the core AXIOM01 principle by:
- ❌ Using BEM-style class naming (.navbar, .navbar-nav, .navbar-content)
- ❌ Creating dashed class hierarchies (.hub-layout, .hub-sidebar, .hub-stage, .hub-toc)
- ❌ Naming elements after their children (.component-stage, .form-group, .button-group)
- ❌ Creating nested class chains in CSS
- ❌ Hoarding classes per element instead of per component

This violated the fundamental principle: **One semantic class per COMPONENT, not per element.**

## The Fix

### HTML Structure - Semantic Elements Only

```html
<!-- WRONG - BEM, class names describe structure -->
<div class="navbar-content">
  <nav class="navbar-nav">
    <ul class="navbar-list">
      <li class="navbar-item">
        <button class="navbar-button">Home</button>
      </li>
    </ul>
  </nav>
</div>

<!-- CORRECT - Semantic elements, minimal classes -->
<header>
  <nav>
    <ul>
      <li>
        <button data-nav="hero">Home</button>
      </li>
    </ul>
  </nav>
</header>
```

### CSS Styling - Element Selectors

```css
/* WRONG - Class chains, BEM hierarchy */
.navbar { }
.navbar-nav { }
.navbar-nav ul { }
.navbar-nav ul li button { }

/* CORRECT - Element selectors describing structure */
header { }
header > nav { }
header > nav > ul { }
header > nav > ul > li > button { }
```

## Key Principles Restored

### 1. **Minimal Classes**
- **One class per COMPONENT**: `.hero`, `.card`, `.grid`, `.primary`
- **NOT one class per element**: ❌ `.navbar`, `.hub-layout`, `.form-group`
- The framework styles elements using their semantic structure, not class names

### 2. **Semantic HTML Structure**
- Element ORDER determines styling, not class names
- `<header><nav><a>`, `<main><article>`, `<aside><nav>`
- CSS uses element hierarchy: `header > nav { }`
- NEVER name elements after their children

### 3. **No Class Hoarding**
- AXIOM01 Philosophy: Class density $D_c \le 1.0$ (one class per element maximum)
- Components like `.card`, `.grid` have ONE class
- Structure comes from HTML elements, not from class names

### 4. **Framework Responsibility**
- Framework styles semantic elements
- Framework uses `:has()`, `>`, `+` selectors for intelligent layouts
- Framework provides ONE semantic class per component
- Developer writes semantic HTML; framework handles CSS

### 5. **Element Order = Theme**
```html
<!-- Structure determines styling -->
<header>
  <nav>
    <a>Brand</a>              <!-- First element: brand styling -->
    <ul><li><button></li>     <!-- Second element: nav buttons -->
    <div><button></div>       <!-- Third element: action buttons -->
  </nav>
</header>
```

CSS then styles by position:
```css
header > nav > a { /* Brand */ }
header > nav > ul > li > button { /* Nav buttons */ }
header > nav > div > button { /* Action buttons */ }
```

## The Semantic Rebellion

AXIOM01 challenges the utility-class and strict BEM paradigms:

> "Write meaningful HTML where class names describe WHAT elements ARE 
> (card, button, form), not what they look like or where they sit.
> One semantic class provides complete behavior.
> The framework handles CSS. You handle HTML structure."

This means:
- ✅ Write semantic HTML with proper element hierarchy
- ✅ Use ONE semantic class per component
- ✅ Let the framework style elements based on their semantic meaning
- ✅ No class naming after structure (navbar, hub-layout, form-group)
- ✅ No BEM syntax (block__element--modifier)
- ✅ No dashed hierarchies (card-title, card-body)

## Applied in v3

### index.html (Fixed)
- ✅ `<header><nav>` - semantic structure
- ✅ `<main><article class="hero">` - one class per component
- ✅ `<section id="view-docs"><article class="hub">` - semantic content
- ✅ `<aside>` with `<nav>` - proper semantic layout
- ✅ NO class names like `.hub-layout`, `.hub-sidebar`, `.component-stage`

### axiom.css (Updated)
- ✅ `header { }` - element selectors
- ✅ `header > nav { }` - hierarchy from elements
- ✅ `header > nav > ul > li > button { }` - order-based styling
- ✅ `.hero > h1 { }` - element + component class
- ✅ NO class chains like `.hub-layout > .hub-sidebar`

## CRITICAL RULE FOR ALL FUTURE WORK

When writing HTML/CSS for AXIOM01:

### STOP if you're writing:
- ❌ `.navbar`, `.header`, `.sidebar`, `.main-content`
- ❌ `.card-title`, `.card-body`, `.card-footer`
- ❌ `.form-group`, `.input-wrapper`, `.button-group`
- ❌ `.hub-layout`, `.component-stage`, `.book-toc`
- ❌ Any BEM (`.button__text`)
- ❌ Any dashed hierarchy

### START if you're writing:
- ✅ `.card`, `.button`, `.form`, `.grid` (components only)
- ✅ `<header><nav><a>` (semantic elements)
- ✅ `header > nav { }` (element selectors)
- ✅ `header > nav > ul > li > button { }` (order-based)
- ✅ `.primary`, `.outline` (variants)
- ✅ `.hidden` (state)

## Commit History

- **Initial Phase 1**: Violated philosophy with BEM classes
- **Critical Fix**: Rewrote index.html to be truly semantic
- **CSS Updated**: Changed from class chains to element selectors
- **Philosophy Restored**: Back to true AXIOM01 principles

---

**Remember**: The name "AXIOM01" comes from "ONE class per element" (axiom = fundamental principle).
AXIOM01 = **A**rtistry meets **X**ML = **I**ntelligent **O**ver **M**eticulousness

Write semantic HTML. Let the framework handle CSS. One class per component.

This is the rebellion against utility-class chaos and BEM bureaucracy.
