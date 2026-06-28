# Manual Review & Fix Progress

**Date:** January 25, 2025  
**Status:** In Progress  
**Completed:** 2/80 components (3%)  

---

## Completed Components

✅ **1. button.html** - FIXED
- Replaced `class="primary"` with `data-variant="primary"`
- Replaced `<i class="fas fa-...">` with `<span class="axicon render" data-name="...">`
- Removed non-existent `.button-group` wrapper
- Added proper semantic structure sections
- All code snippets now AXIOM01 compliant

✅ **2. card.html** - FIXED
- Removed `.card-header`, `.card-body`, `.card-footer` BEM classes
- Uses single `.card` class with semantic HTML: `<header>`, `<footer>`
- Replaced `data-variant` patterns (outlined, elevated)
- All code snippets now AXIOM01 compliant
- Added comprehensive documentation

---

## Systematic Approach for Remaining 75 Components

Given the scope and token limitations, components will be fixed in priority groups:

### Group 1: CRITICAL CORE COMPONENTS (13 files)
These are most frequently used and referenced:

- [ ] modal.html
- [ ] forms.html (or field.html)
- [ ] accordion.html
- [ ] dropdown.html
- [ ] navigation.html
- [ ] footer.html
- [ ] header.html / page-header.html
- [ ] alert.html
- [ ] badge.html
- [ ] table.html
- [ ] tabs.html (already fixed in previous session)
- [ ] notification.html (already fixed in previous session)
- [ ] hero.html

### Group 2: INTERACTIVE COMPONENTS (12 files)
- [ ] autocomplete.html
- [ ] carousel.html
- [ ] datepicker.html
- [ ] editor.html
- [ ] file-upload.html
- [ ] multi-step-form.html
- [ ] pagination.html
- [ ] popover.html
- [ ] slider.html
- [ ] steps.html
- [ ] toggle.html
- [ ] tooltip.html

### Group 3: LAYOUT & STRUCTURE (10 files)
- [ ] breadcrumb.html
- [ ] hierarchy.html
- [ ] sidebar.html
- [ ] steps.html
- [ ] timeline.html
- [ ] drawer.html
- [ ] mobile-navbar.html
- [ ] layout-advanced.html
- [ ] masonry.html
- [ ] grid-system.html

### Group 4: CONTENT & DISPLAY (12 files)
- [ ] avatar.html
- [ ] chat.html
- [ ] commerce.html
- [ ] data-list.html
- [ ] feature-grid.html
- [ ] list.html
- [ ] media.html
- [ ] rating.html
- [ ] stats.html
- [ ] testimonial.html
- [ ] advanced-table.html
- [ ] adaptive-media-card.html

### Group 5: ADVANCED & SPECIALIZED (28 files)
- [ ] ai-chat.html
- [ ] ai-image-generator.html
- [ ] swiping-card-interface.html
- [ ] pull-to-refresh.html
- [ ] story-view.html
- [ ] multimedia-picker.html
- [ ] stopwatch-countdown.html
- [ ] shapes-paths.html
- [ ] touch-components.html
- [ ] file-display-download.html
- [ ] paywall.html
- [ ] settings.html
- [ ] account-menu.html
- [ ] button-variants.html
- [ ] cta.html
- [ ] empty-state.html
- [ ] skeleton.html
- [ ] progress.html
- [ ] chip-input.html
- [ ] field-validation.html
- [ ] segmented-control.html
- [ ] backlit.html
- [ ] component-browser.html
- [ ] axicons.html
- [ ] form-elements.html
- [ ] spacing-demo.html
- [ ] queue.html
- [ ] playlist.html
- [ ] video-player.html
- [ ] audio-player.html
- [ ] media-advanced.html
- [ ] colors-advanced.html
- [ ] typography-advanced.html
- [ ] layout-advanced.html
- [ ] overview-quickstart.html

---

## Template for AXIOM01-Compliant Components

All components should follow this structure:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <!-- Identical header for all components -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ComponentName Component - Axiom01</title>
    <link rel="stylesheet" href="../../css/axiom.min.css">
    <link rel="stylesheet" href="../../css/axicons.css">
    <link rel="stylesheet" href="../../css/docs.css">
    <!-- ... fonts and prism ... -->
</head>
<body class="axiom-body component-doc">
    <!-- Navigation Header -->
    <!-- Main Content Structure -->
    <main><section><div class="container">
        <header>
            <h1>ComponentName</h1>
            <p class="text-muted">Description of what component does, key features</p>
        </header>

        <div class="component-section">
            <!-- Live Example Section -->
            <section>
                <h2>Live Example / Default</h2>
                <!-- Live demo HTML here -->
                <div class="code-block">
                    <pre><code class="language-html">
                    <!-- AXIOM01-compliant markup -->
                    </code></pre>
                </div>
            </section>

            <!-- Additional Example Sections -->
            <!-- Features/Variants/States Section -->
            <!-- Markup Documentation -->
            <!-- Best Practices -->
        </div>
    </div></section></main>

    <!-- Footer -->
    <!-- Scripts -->
</body>
</html>
```

---

## Key AXIOM01 Rules for Code Snippets

**EVERY** code snippet must follow these rules:

### Rule 1: Single Semantic Class
✅ `<button class="button">`  
❌ `<button class="button primary">`

### Rule 2: Data Attributes for Variants
✅ `<button class="button" data-variant="primary">`  
❌ `<button class="primary">`

### Rule 3: Axicons Only
✅ `<span class="axicon render" data-name="Plus"></span>`  
❌ `<i class="fas fa-plus"></i>`

### Rule 4: No Inline Styles
✅ No `style="..."` anywhere  
❌ `style="background: #1976d2;"`

### Rule 5: Semantic HTML
✅ `<header>`, `<footer>`, `<nav>`, `<article>`, `<aside>`, `<button>`, `<a>`  
❌ `<div class="header">`, `<span onclick="`

### Rule 6: Design Tokens in CSS Only
✅ CSS file: `color: var(--a-color-primary);`  
❌ Inline: `style="color: #1976d2;"`

### Rule 7: No BEM Element Classes
✅ `.card` with `<header>`, `<footer>` tags  
❌ `.card-header`, `.card-body`, `.card-footer`

---

## Violation Detection Quick Check

Before marking a component as complete, verify:

- [ ] No `class="primary"`, `class="secondary"` (should be `data-variant="..."`)
- [ ] No `.card-header`, `.form-group`, `.modal-body` style classes
- [ ] No `<i class="fas fa-...">` (should be Axicons)
- [ ] No `style="..."` attributes in code snippets
- [ ] No hardcoded colors like `#1976d2` or `rgb(25, 118, 210)`
- [ ] No hardcoded spacing like `16px` or `1rem`
- [ ] Uses semantic HTML: `<button>`, `<a>`, `<article>`, `<header>`, `<footer>`
- [ ] Single class per component: `.button`, `.card`, `.modal`, `.field`
- [ ] Proper ARIA attributes where needed
- [ ] All code snippets match what's shown in live demo

---

## Current Session Summary

**Completed:** 2 key components (button, card)  
**Status:** Ready to continue with Group 1 (critical components)  
**Approach:** Manual review for quality + template consistency  

---

## Remaining Work

Total components to fix: 75  
Estimated completion: 10-12 sessions at this pace  

**High-Value Targets (Next Priority):**
1. modal.html - Very commonly used
2. forms.html - Critical for user input examples
3. accordion.html - Complex component with good patterns
4. alert.html - Simple, common
5. dropdown.html - Very common interaction pattern

