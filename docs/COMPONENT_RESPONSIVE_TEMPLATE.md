# Component Documentation: Responsive Behavior Section Template

## Standard Template for All Components

Every component documentation page should include a "Responsive Behavior" section that explains how the component adapts across different screen sizes. This ensures consistency and helps developers understand framework-level responsive design.

## Template HTML

```html
<section class="section">
    <h2 class="title">Responsive Behavior</h2>
    <p>[COMPONENT] automatically adapts to different screen sizes through the framework's responsive grid system:</p>
    
    <h3>Mobile (< 768px)</h3>
    <p>On mobile devices, [COMPONENT] displays as follows:</p>
    <ul>
        <li>[Specific behavior description for mobile]</li>
        <li>[Stack pattern or layout change]</li>
        <li>Touch-friendly spacing maintained (minimum 44px tap targets)</li>
        <li>[Other mobile-specific considerations]</li>
    </ul>

    <h3>Desktop (1024px+)</h3>
    <p>Desktop displays use responsive behavior:</p>
    <ul>
        <li>[Desktop layout description]</li>
        <li>[Hover states and interactions]</li>
        <li>[Enhanced visual effects if applicable]</li>
        <li>[Desktop-specific features]</li>
    </ul>

    <h3>Framework Integration</h3>
    <p>[COMPONENT] uses [specific grid type or layout mechanism]:</p>
    <ul>
        <li>[Framework grid type used]</li>
        <li>[CSS class or selector]</li>
        <li>Automatic responsiveness - no custom CSS required</li>
        <li>Mobile-first approach with framework-level media queries</li>
    </ul>
</section>
```

## Component-Specific Examples

### Cards (`.card`)
- Mobile: Stack vertically or 2 columns based on content type
- Desktop: 3-4 columns for small cards, 1-2 for large cards
- Framework: `.grid` or `.grid.tight`
- Behavior: Content density optimized per screen size

### Stats (`.stat`)
- Mobile: 2-column layout for efficient space use
- Desktop: 3-4 columns with auto-fit
- Framework: `.hero .grid` or `.grid`
- Behavior: Numbers and labels remain readable at all sizes

### Forms (`.form`)
- Mobile: Single column stacking
- Desktop: Multi-column layouts (if using grid)
- Framework: Form elements auto-stack within containers
- Behavior: Labels above inputs on mobile, side-by-side on desktop (if custom layout)

### Tables (`table`)
- Mobile: Single column or horizontal scroll
- Desktop: Full multi-column table
- Framework: CSS handles overflow on mobile
- Behavior: Consider implementing responsive table patterns

### Modals (`.modal`)
- Mobile: Full-width or max-width constraint
- Desktop: Centered with fixed size
- Framework: Viewport-based sizing
- Behavior: Touch-friendly close buttons maintained

### Navigation (`header.main`)
- Mobile: Hamburger menu, collapsed layout
- Desktop: Full horizontal navigation
- Framework: Toggle mechanism built-in
- Behavior: Touch targets (48px+) maintained on mobile

### Grid Layouts

| Grid Type | Mobile | Tablet | Desktop | Use Case |
|-----------|--------|--------|---------|----------|
| `.grid` | 2 col | auto-fit | auto-fit | Standard items, cards, stats |
| `.grid.tight` | 2 col | auto-fit | auto-fit | Icon grids, compact items |
| `.code-comparison-grid` | 1 col | 2 col | auto-fit | Code examples, side-by-side |
| `.grid:has(> .card pre)` | 1 col | 1 col | 2 col | Large code-containing cards |
| `.grid.preview` | 1 col | 1 col | 2-3 col | Component previews |

## Implementation Guidelines

### 1. Mobile-First Approach
- All components are mobile-first by default
- Framework applies mobile constraints automatically
- Larger breakpoints use `auto-fit` or flexible layouts
- No additional media queries needed in most cases

### 2. Breakpoints Used Framework-Wide
- **Mobile**: < 768px (default, most constrained)
- **Tablet**: 768px - 1023px (transitional)
- **Desktop**: 1024px+ (full flex layout)
- **Large Desktop**: 1440px+ (extra space)

### 3. Touch Considerations
- All interactive elements: minimum 44px tap targets
- Mobile spacing: increased gaps and padding
- Hover states disabled on touch devices
- Focus states maintained for keyboard navigation

### 4. Content Density
- Mobile: Reduced density, optimized for single-column reading
- Desktop: Increased density, multi-column layouts
- Line-length: Constrained to ~65 characters for readability
- Spacing: Proportionally adjusted per screen size

### 5. Accessibility Integration
- Focus states visible at all screen sizes
- Color contrast maintained in all layouts
- Touch targets remain keyboard-accessible
- Semantic HTML ensures structure is preserved

## AXIOM01 Philosophy Applied

All responsive behavior should adhere to AXIOM01 principles:

- **Semantic**: Responsive behavior defined in CSS, not HTML
- **Framework-Level**: Media queries at framework level, not page-level
- **Consistent**: All components follow same breakpoint strategy
- **No Utilities**: Responsiveness from tokens and framework grid, not utility classes
- **Automatic**: Developers get responsive layout "for free" by using framework components

## Adding This Section to Components

### For Existing Components
1. Identify framework grid used (`.grid`, `.grid.tight`, etc.)
2. Test component on mobile (< 768px), tablet, and desktop
3. Document the observed responsive behavior
4. Add "Responsive Behavior" section before "Best Practices"
5. Include framework integration details

### For New Components
1. Create component with AXIOM01 principles
2. Use framework grid system for layouts
3. Test at all breakpoints immediately
4. Document responsive behavior as part of initial documentation
5. Add section before finalizing documentation

## Examples for Common Components

### Alert Component
```
Mobile: Full-width with icon stacking
Desktop: Icon + message side-by-side
Framework: Uses `.grid` or flexbox
Behavior: Automatic text wrapping on mobile
```

### Button Component
```
Mobile: Full-width or auto-fit
Desktop: Inline or flexible sizing
Framework: No grid needed (single element)
Behavior: Padding adjusted for tap targets
```

### Modal Component
```
Mobile: Viewport-full or max-width 90vw
Desktop: Fixed width centered
Framework: CSS media queries on .modal
Behavior: Close button always accessible
```

---

**Guidelines Version**: 1.0  
**Framework**: AXIOM01 v2.0  
**Last Updated**: Session 14  
**Status**: Template ready for component implementation
