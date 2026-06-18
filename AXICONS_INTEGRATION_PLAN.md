# Axicons Integration Plan for Axiom01

## Vision

Replace Font Awesome with Axicons—a native SVG icon system built for Axiom01's philosophy:
- **Semantic-first**: Single meaningful class structure
- **Minimal**: No BEM, no utility stacking
- **Cascading**: CSS naturally overrides icon properties
- **Lightweight**: 200 curated icons, optimized SVG
- **Accessible**: Proper ARIA attributes, semantic HTML

---

## Implementation Strategy

### Phase 1: CSS Foundation

**File**: `css/axicons.css`

```css
/* Base .axicon definition */
.axicon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
    vertical-align: -0.125em;
    flex-shrink: 0;
}

/* The render hook (decoupled behavior trigger) */
.render {
    /* Intentionally empty - purely a JavaScript hook */
}

/* Optional utility classes that cascade naturally */
.axicon-sm { width: 0.875em; height: 0.875em; }
.axicon-lg { width: 1.25em; height: 1.25em; }
.axicon-xl { width: 1.5em; height: 1.5em; }

.axicon-spin { animation: axicon-spin 1s linear infinite; }
@keyframes axicon-spin { to { transform: rotate(360deg); } }
```

**Why this structure:**
- `width: 1em` makes icons scale with font-size (semantic sizing)
- `stroke: currentColor` makes icons inherit text color
- `.render` is a pure JS hook, not a style trigger
- Optional utilities cascade without breaking the base

### Phase 2: JavaScript Injection

**File**: `js/axicons.js` (already complete)

The render script that injects SVG content:

```javascript
document.querySelectorAll('.axicon.render').forEach(el => {
    const name = el.getAttribute('data-name');
    const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
    
    if (icon) {
        el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
    }
});
```

**Why this approach:**
- Targets elements with BOTH `.axicon` AND `.render`
- Keeps injection logic separate from styling
- Case-insensitive lookup for flexibility
- Automatic `aria-hidden="true"` for accessibility

### Phase 3: HTML Integration

**Usage Pattern:**

```html
<!-- Simple icon -->
<span class="axicon render" data-name="Settings"></span>

<!-- With color override -->
<span class="axicon render" style="color: #3b82f6;" data-name="Heart"></span>

<!-- Large icon -->
<span class="axicon render axicon-lg" data-name="Bell"></span>

<!-- Spinning loader -->
<span class="axicon render axicon-spin" data-name="Loader"></span>

<!-- In a button (semantic) -->
<button>
    <span class="axicon render" data-name="Download"></span>
    Download
</button>

<!-- In a component context -->
<nav class="navbar">
    <span class="axicon render" style="color: var(--a-color-primary);" data-name="Menu"></span>
</nav>
```

### Phase 4: Component Integration

**Where Font Awesome is currently used:**

1. **Navbar/Header icons** - Search, GitHub, theme toggle, menu
2. **Hero sections** - Decorative icons
3. **Alert/Notification icons** - Alert, Info, Warning, Check
4. **Button icons** - Action buttons
5. **Form icons** - Input decoration
6. **Navigation icons** - Breadcrumb, pagination, sidebar

**Replace each with corresponding Axicon:**

| Current (Font Awesome) | Axicon Replacement | Notes |
|------------------------|-------------------|-------|
| `fa-search` | `Search` | Exact match |
| `fa-github` | `GitHub` | Via SVG lookup |
| `fa-moon` | `Moon` | Theme toggle |
| `fa-bars` | `Menu` | Mobile menu |
| `fa-book` | `Book` | Documentation |
| `fa-keyboard` | `Keyboard` | Forms & Inputs |
| `fa-compass` | `Compass` | Navigation |
| `fa-bell` | `Bell` | Notifications |
| `fa-image` | `Image` | Media |
| `fa-check-circle` | `CheckCircle` | Success state |
| `fa-alert-triangle` | `AlertTriangle` | Warning state |
| `fa-info` | `Info` | Info state |
| `fa-x` / `fa-close` | `X` | Close/dismiss |

### Phase 5: Documentation

**Create**: `docs/AXICONS_REFERENCE.md`
- All 200 icons with previews
- Naming conventions
- Usage examples
- Styling patterns
- Migration guide from Font Awesome

**Update**: `AXIOM01_STYLING_GUIDE.md`
- Add section 7: Icon System (Axicons)
- Design patterns for icon usage
- Color inheritance examples
- Responsive icon sizing

### Phase 6: Testing & Validation

**Checklist:**
- [ ] All Font Awesome instances replaced with Axicons
- [ ] Icons render correctly at all breakpoints
- [ ] Color inheritance works (currentColor cascade)
- [ ] Sizing classes work (.axicon-lg, etc.)
- [ ] Accessibility maintained (aria-hidden="true")
- [ ] Performance improved (no font file download)
- [ ] Mobile navbar icons display correctly
- [ ] Dark mode colors work properly
- [ ] No console errors or warnings

---

## Axiom Philosophy Alignment

### ✅ Semantic-First
- Single meaningful class (`.axicon`)
- Data attributes for configuration (`data-name`)
- No utility class stacking

### ✅ Minimal Classes
- Base: `.axicon` (required)
- Trigger: `.render` (required)
- Optionals: `.axicon-lg`, `.axicon-spin` (additive, not mandatory)
- No BEM syntax

### ✅ CSS Cascade
- Icons inherit parent color via `currentColor`
- Override with inline `style="color: ..."`
- Add modifiers: `.axicon-lg`, `.axicon-sm`
- Natural CSS composition

### ✅ No Vendor Lock-in
- Pure SVG, no external dependencies
- Custom Axiom icons (200 curated)
- Full control over design language

### ✅ Performance
- No font file loading delay
- Lightweight JavaScript injection
- Minimal CSS payload
- Instant availability

---

## Migration Timeline

**Phase 1-2 (Setup)**: 1 hour
- Add `axicons.css` to framework
- Update HTML head/body includes
- Add 3-5 test icons to components

**Phase 3-4 (Integration)**: 2 hours
- Replace Font Awesome instances in 5 component areas
- Update navbar/header
- Update pages (components-overview, layout-advanced)

**Phase 5-6 (Documentation & Testing)**: 1 hour
- Create reference documentation
- Update styling guide
- Full regression testing

**Total Estimated Time**: 4 hours

---

## Files to Modify

1. **axiom.css** - Add Axicons base styles
2. **index.html** - Replace Font Awesome with Axicons
3. **docs/components-overview.html** - Replace icons
4. **docs/layout-advanced.html** - Replace icons
5. **docs/AXICONS_REFERENCE.md** - CREATE new reference
6. **AXIOM01_STYLING_GUIDE.md** - Add icon system section
7. **js/axicons.js** - Already complete, just integrate

---

## Success Criteria

✅ All Font Awesome icons successfully replaced
✅ Icons render correctly across all pages and resolutions
✅ No console errors or warnings
✅ Performance metrics improve (fewer external dependencies)
✅ Documentation complete and clear
✅ Axicons become standard in Axiom01 ecosystem
✅ Developers can easily add new icons

---

## Version

- **Axicons**: 1.0.0
- **Integration Target**: Axiom01 v2.1.1
- **Breaking Changes**: None (Font Awesome is purely presentational)

