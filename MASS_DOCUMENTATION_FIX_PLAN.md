# CRITICAL: Mass Component Documentation Fix - Action Plan

**Date**: January 2025  
**Status**: AUDIT COMPLETE - MAJOR WORK IDENTIFIED  
**Severity**: CRITICAL - 47 of 74 pages (64%) are broken

---

## Summary

Audit revealed 47 component pages are effectively broken/incomplete:
- Most have working HTML components but NO code documentation
- Missing standard documentation sections
- Inconsistent formatting
- No code-block sections in many pages
- Footer links still broken (markdown-template.html references)

---

## Broken Pages by Severity

### TIER 1: Absolutely Critical (18 pages)
These are HIGH-USE components with zero proper documentation:

1. **modal.html** - Essential overlay component
2. **drawer.html** - Essential navigation component
3. **carousel.html** - Content display component
4. **datepicker.html** - Form component (HIGH USE)
5. **autocomplete.html** - Form component (HIGH USE)
6. **footer.html** - Layout component
7. **forms.html** - CORE form documentation
8. **empty-state.html** - Content state
9. **file-upload.html** - Form component
10. **infinite-scroll.html** - Interaction pattern
11. **pagination.html** - Navigation component
12. **chat.html** - Communication component
13. **commerce.html** - E-commerce component
14. **ai-chat.html** - AI component
15. **ai-image-generator.html** - AI component
16. **alert.html** - Feedback component (already has examples but incomplete)
17. **queue.html** - Advanced component
18. **list.html** - Content display

### TIER 2: Important (15 pages)
Components that need work but less critical:

```
multimedia-picker.html
swiping-card-interface.html
story-view.html
video-player.html
audio-player.html
advanced-table.html
segmented-control.html
chip-input.html
page-header.html
account-menu.html
sidebar.html
touch-components.html
file-display-download.html
adaptive-media-card.html
stopwatch-countdown.html
```

### TIER 3: Special/Demo (14 pages)
Advanced, specialized, or demo pages:

```
component-browser.html
placeholder.html
button-variants.html
backlit.html
playlist.html
masonry.html
rating.html
data-list.html
hero.html
enhanced-demo.html
cta.html
testimonial.html
stats.html
feature-grid.html
```

---

## What Needs to be Done

### For EACH broken page, add:

1. **Live Examples Section**
   - Show working component (they already exist!)
   - 2-3 different states/variants
   - Use Axicons and color variables
   - Proper styling with code-block div

2. **HTML Structure Section**
   - Semantic, clean markup
   - Code snippet with `<pre><code class="language-html">`
   - Required attributes highlighted
   - Full example from header to footer

3. **Key Features/Variants Section**
   - List available options
   - Configuration details
   - Props/attributes

4. **Use Cases Section**
   - When to use this component
   - Real-world scenarios
   - 3-5 examples

5. **Accessibility Section**
   - WCAG compliance
   - Keyboard navigation
   - Screen reader support
   - ARIA attributes used

6. **Best Practices Section**
   - Do's and don'ts
   - Common patterns
   - Performance tips
   - Anti-patterns

7. **Fix Footer Links**
   - Remove broken markdown-template.html links
   - Update to direct file links
   - Add "(Markdown)" labels

---

## Implementation Strategy

### Phase 1: TIER 1 Critical (18 pages)
**Estimate**: 10-15 hours  
**Priority**: HIGHEST  
These are most-used, fix immediately

Focus pages (start here):
1. modal.html
2. drawer.html
3. autocomplete.html
4. datepicker.html
5. carousel.html

### Phase 2: TIER 2 Important (15 pages)
**Estimate**: 8-12 hours  
**Priority**: HIGH

### Phase 3: TIER 3 Special (14 pages)
**Estimate**: 6-10 hours  
**Priority**: MEDIUM

---

## IMMEDIATE TASKS

### Task 1: Fix All Footer Links
**ALL 74 PAGES** have broken footer links to `markdown-template.html`

Change FROM:
```html
<li><a href="../markdown-template.html?file=../../README.md">README</a></li>
<li><a href="../markdown-template.html?file=../../DEVELOPER.md">Developer Guide</a></li>
<li><a href="../markdown-template.html?file=../../AXIOM01_STYLING_GUIDE.md">Styling Guide</a></li>
```

Change TO:
```html
<li><a href="../../README.md" target="_blank">README</a> <span style="font-size: 0.75rem; color: var(--a-color-text-muted);">(Markdown)</span></li>
<li><a href="../../DEVELOPER.md" target="_blank">Developer Guide</a> <span style="font-size: 0.75rem; color: var(--a-color-text-muted);">(Markdown)</span></li>
<li><a href="../styling-guide.html">Styling Guide</a></li>
<li><a href="../../CONTRIBUTING.md" target="_blank">Contributing</a> <span style="font-size: 0.75rem; color: var(--a-color-text-muted);">(Markdown)</span></li>
```

### Task 2: Standardize Component Section Structure
Create a template that every page should follow:

```html
<div class="component-section">
    <section>
        <h2>Live Examples</h2>
        <!-- WORKING EXAMPLES GO HERE -->
    </section>

    <section>
        <h2>HTML Structure</h2>
        <div class="code-block">
            <pre><code class="language-html">...</code></pre>
        </div>
    </section>

    <section>
        <h2>Features</h2>
        <ul>...</ul>
    </section>

    <section>
        <h2>Use Cases</h2>
        <ul>...</ul>
    </section>

    <section>
        <h2>Accessibility</h2>
        <ul>...</ul>
    </section>

    <section>
        <h2>Best Practices</h2>
        <ul>...</ul>
    </section>
</div>
```

---

## Status by Page

### Working with Examples (5 pages)
✅ card.html
✅ badge.html
✅ avatar.html
✅ breadcrumb.html
✅ accordion.html

### Partial (20 pages)
⚠️ button.html
⚠️ toggle.html
⚠️ shapes-paths.html
... (17 more - need various sections)

### Broken - Tier 1 (18 pages)
❌ modal.html
❌ drawer.html
❌ autocomplete.html
❌ datepicker.html
❌ carousel.html
❌ forms.html
❌ footer.html
❌ chat.html
❌ pagination.html
... (10 more)

### Broken - Tier 2 (15 pages)
❌ multimedia-picker.html
❌ swiping-card-interface.html
... (13 more)

### Broken - Tier 3 (14 pages)
❌ component-browser.html
❌ placeholder.html
... (12 more)

---

## Effort Estimate

| Task | Pages | Time | Difficulty |
|------|-------|------|-----------|
| Fix footer links (all) | 74 | 30 min | Easy |
| TIER 1 components | 18 | 12 hrs | Medium |
| TIER 2 components | 15 | 10 hrs | Medium |
| TIER 3 components | 14 | 8 hrs | Easy |
| Test & verification | - | 2 hrs | Easy |
| **TOTAL** | **74** | **32.5 hrs** | - |

---

## Starting Point

**RECOMMENDED**: Start with 5 TIER 1 pages
- modal.html
- drawer.html
- autocomplete.html
- datepicker.html
- carousel.html

These will:
1. Establish the template/pattern
2. Fix the most critical missing docs
3. Be reusable for other pages

---

## Next Steps

1. Fix all footer links in all 74 pages (30 min)
2. Start with modal.html (exemplary fix)
3. Apply pattern to remaining TIER 1 pages
4. Progress through TIER 2 and TIER 3

This is a large undertaking but critical for production readiness.

**RECOMMENDATION**: This is best done with either:
- A dedicated multi-hour work session
- OR distributed across 2-3 focused sessions
- OR automated with a script that applies the template
