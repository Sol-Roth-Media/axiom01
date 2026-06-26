# AXIOM01 Responsive Component Implementation Guide

## Overview

This guide explains how to systematically add responsive behavior documentation to all 77 AXIOM01 components, ensuring consistency and helping developers understand how the framework handles responsive design automatically.

## Quick Facts

- **Total Components**: 77
- **Already Updated**: 3 (Card, Stats, Button)
- **Remaining**: 74
- **Template**: See `COMPONENT_RESPONSIVE_TEMPLATE.md`
- **Breakpoints**: Mobile (< 768px), Tablet (768-1023px), Desktop (1024px+)

## Implementation Strategy

### Phase 1: Grid-Based Components (High Priority)
Components that use framework grids and need responsive documentation first:

1. **Layout Components** (8 components)
   - Container
   - Drawer
   - Sidebar
   - Modal
   - Accordion
   - Tabs
   - Grid-based layouts
   - Carousel

2. **Form Components** (10 components)
   - Form
   - Input/Textarea
   - Select/Dropdown
   - Radio/Checkbox
   - Form Groups
   - Form Fieldsets
   - DatePicker
   - TimePicker
   - Rating
   - Range Slider

3. **Data Display** (12 components)
   - Table
   - Data List
   - Advanced Table
   - Tree View
   - Timeline
   - Progress
   - Breadcrumb
   - Pagination
   - List
   - Details
   - Badge
   - Chip

4. **Content Components** (15 components)
   - Alert
   - Badge
   - Callout
   - CTA
   - Testimonial
   - Quote
   - Code Block
   - Highlight
   - KPI Card
   - Metric Card
   - Stat Card
   - Media Card
   - Profile Card
   - Product Card
   - Social Media Card

5. **Navigation Components** (12 components)
   - Header/Navbar
   - Sidebar Nav
   - Menu/Dropdown
   - Breadcrumb
   - Pagination
   - Tabs
   - Vertical Menu
   - Hamburger
   - Search
   - Filter
   - Sort
   - Jump Menu

6. **Interactive Components** (14 components)
   - Button
   - Link
   - Icon Button
   - Toggle Button
   - Split Button
   - Button Group
   - Floating Action Button
   - Tooltip
   - Popover
   - Dropdown
   - Context Menu
   - Command Palette
   - Shortcut
   - Help

7. **Media Components** (6 components)
   - Image
   - Video Player
   - Audio Player
   - Gallery
   - Lightbox
   - Map

### Phase 2: Text & Typography Components (Medium Priority)
Components with minimal responsive changes:

- Heading
- Paragraph
- Link
- Code/Pre
- Blockquote
- List
- Definition List

### Phase 3: Advanced Components (Lower Priority)
Complex components that may have custom responsive patterns:

- AI Chat
- Commerce (Product, Cart, Checkout)
- Dashboard (with complex layouts)
- Data Grid
- Advanced Form
- Advanced Table with sorting/filtering

## Section Structure for Each Component

Every component page should include this section (before "Best Practices"):

```html
<section class="section">
    <h2 class="title">Responsive Behavior</h2>
    <!-- Component-specific content -->
</section>
```

## Content Guidelines

### For Mobile (< 768px)
- How does the component stack/reduce?
- Is spacing adjusted?
- Are there any hidden elements?
- Is touch-friendliness maintained?
- Minimum tap target: 44px

Example:
```
Mobile: Single column layout, buttons stack vertically
- Touch targets maintained at 44px minimum
- Icon + text layout preserved
- Full-width minus padding
```

### For Desktop (1024px+)
- Multi-column or flexible layout?
- Enhanced hover effects?
- Expanded features?
- Full-size elements?

Example:
```
Desktop: 3-column grid, full hover effects enabled
- Hover transitions smooth (200ms)
- Focus states visible for keyboard nav
- Optimal spacing for scanning
```

### Framework Integration
- Which grid system? (`.grid`, `.grid.tight`, etc.)
- Any CSS classes needed?
- Is it automatic or manual?
- What CSS handles this?

Example:
```
Uses .grid system:
- Automatic 2-column on mobile
- Auto-fit on desktop
- No custom CSS required
```

## Implementation Checklist

For each component update:

- [ ] Test on mobile (375px viewport)
- [ ] Test on tablet (768px viewport)
- [ ] Test on desktop (1024px+ viewport)
- [ ] Document mobile behavior
- [ ] Document desktop behavior
- [ ] Note framework grid used
- [ ] Add to component page
- [ ] Test build (npm run build)
- [ ] Verify responsive section displays correctly

## Grid Reference Table

Include this table in components that use grids:

| Grid Type | Mobile | Tablet | Desktop | Use Case |
|-----------|--------|--------|---------|----------|
| `.grid` | 2 col | auto-fit | auto-fit | Standard cards, flexible items |
| `.grid.tight` | 2 col | auto-fit | auto-fit | Icon grids, compact items, badges |
| `.code-comparison-grid` | 1 col | 2 col | auto-fit | Code examples, side-by-side comparison |
| `.grid:has(> .card pre)` | 1 col | 1 col | 2 col | Large code-containing cards |
| Form grids | 1 col | 2 col | varies | Form field layouts |

## CSS Media Query Reference

All responsive behavior uses these framework-level media queries:

```css
/* Mobile-first default behavior (< 768px) */
/* Tablets and up (768px+) */
@media (min-width: 768px) { ... }

/* Desktop and up (1024px+) */
@media (min-width: 1024px) { ... }

/* Large desktop (1440px+) */
@media (min-width: 1440px) { ... }
```

## Common Patterns

### Pattern 1: Stack to Single Column
```
Mobile: Single column
Desktop: Multi-column (based on content)
Implementation: Framework grid auto-fit
```

### Pattern 2: Hide/Show Elements
```
Mobile: Simplified layout, some elements hidden
Desktop: Full feature set visible
Implementation: display: none on mobile
```

### Pattern 3: Adaptive Typography
```
Mobile: Smaller font sizes
Desktop: Larger, more readable typography
Implementation: Responsive font tokens
```

### Pattern 4: Flex to Grid
```
Mobile: Flexbox for stacking
Desktop: CSS Grid for alignment
Implementation: Grid/Flex swap at breakpoint
```

## AXIOM01 Principles for Responsive Design

1. **Framework-Level** - Responsiveness defined in framework CSS, not component-specific
2. **Mobile-First** - Constraints applied to mobile, enhanced for larger screens
3. **Automatic** - Developers don't need to write responsive CSS for common patterns
4. **Semantic** - Responsive behavior comes from semantic HTML + framework grid
5. **Token-Driven** - Spacing, sizing all use design tokens at all breakpoints
6. **No Utilities** - Responsiveness from framework, not utility classes
7. **Accessible** - Touch targets, focus states, keyboard nav maintained across all sizes

## Testing Responsive Components

### Browser DevTools
```
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test standard breakpoints:
   - Mobile: 375px (iPhone 12)
   - Tablet: 768px (iPad)
   - Desktop: 1024px+
```

### Responsive Sizes to Test
- 320px (small phone)
- 375px (standard phone)
- 480px (large phone)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)
- 1920px (large desktop)

### Manual Testing Checklist
- [ ] Text readable at all sizes
- [ ] Touch targets 44px+ on mobile
- [ ] No horizontal scroll on mobile
- [ ] Images scale proportionally
- [ ] Buttons accessible via keyboard
- [ ] Focus states visible
- [ ] Color contrast maintained
- [ ] Animations smooth (60fps)

## Documentation Updates Completed

✅ **Card Component** - Responsive Behavior section added
✅ **Stats Component** - Responsive Behavior section added
✅ **Button Component** - Responsive Behavior section added
✅ **Template Created** - COMPONENT_RESPONSIVE_TEMPLATE.md

## Next Steps (Priority Order)

### Immediate (Session 15)
1. [ ] Update top 10 most-used components with responsive sections
2. [ ] Test all responsive sections on actual devices
3. [ ] Create visual examples/screenshots of responsive behavior

### Short-term (Sessions 15-16)
1. [ ] Update remaining grid-based components (40 components)
2. [ ] Create responsive examples page
3. [ ] Add Lighthouse performance testing

### Medium-term (Sessions 17-18)
1. [ ] Update all typography components
2. [ ] Update advanced components
3. [ ] Create responsive troubleshooting guide

### Long-term (Sessions 19+)
1. [ ] Add visual regression testing
2. [ ] Create device-specific guides
3. [ ] Performance optimization per device

---

**Status**: Phase 1 Planning Complete  
**Framework**: AXIOM01 v2.0  
**Breakpoints**: 4 (mobile/tablet/desktop/large)  
**Components**: 77 total (3 updated, 74 remaining)  
**Last Updated**: Session 14
