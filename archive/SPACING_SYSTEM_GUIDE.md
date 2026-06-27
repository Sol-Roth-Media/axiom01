# Spacing System Implementation Guide

## Overview

All Axiom01 spacing now uses cascading CSS variables derived from a single `--a-space-unit`. This ensures:
- ✅ Consistent rhythm across the entire site
- ✅ Single point of change (modify unit, everything scales)
- ✅ Responsive scaling without media queries (when desired)
- ✅ Accessible, predictable spacing at all resolutions

## Spacing Token Reference

### Base Unit
```css
--a-space-unit: 1rem;  /* 16px - adjust here for site-wide scaling */
```

### Derived Tokens (All Calculated)
```css
--a-space-xs:   0.25 × 1rem =  4px
--a-space-s:    0.5 × 1rem  =  8px
--a-space-m:    1 × 1rem    = 16px   /* Same as unit */
--a-space-l:    1.5 × 1rem  = 24px
--a-space-xl:   2 × 1rem    = 32px
--a-space-2xl:  3 × 1rem    = 48px
--a-space-3xl:  4 × 1rem    = 64px
--a-space-4xl:  6 × 1rem    = 96px
--a-space-5xl:  8 × 1rem    = 128px
```

## Site-Wide Spacing Applications

### Container Padding (Responsive)
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--a-space-l);        /* Desktop/Tablet: 24px */
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--a-space-m);      /* Tablet: 16px */
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--a-space-s);      /* Mobile: 8px */
  }
}
```

**Result**: Content always has breathing room, scales intelligently

### Section Spacing (Vertical Rhythm)
```css
main > section {
  padding: var(--a-space-2xl) 0;      /* Desktop: 48px top/bottom */
}

@media (max-width: 768px) {
  main > section {
    padding: var(--a-space-xl) 0;     /* Mobile: 32px top/bottom */
  }
}

/* Alternating backgrounds for visual rhythm */
main > section:nth-child(even) {
  background-color: var(--ax-background-secondary);
}
```

**Result**: Consistent vertical rhythm, visual breaks between sections

### Header Spacing
```css
header.main {
  padding: var(--a-space-m) var(--a-space-l);  /* 16px top/bottom, 24px left/right */
  border-bottom: 1px solid var(--a-color-outline);
  position: sticky;
  top: 0;
}
```

**Result**: Balanced nav bar, enough space for content, sticky positioning

### Navbar Dropdown Spacing (FIXED)
```css
header.main.menu-open .links {
  position: absolute;
  top: 100%;
  left: var(--a-space-m);   /* FIXED: 16px from left edge */
  right: var(--a-space-m);  /* FIXED: 16px from right edge */
  padding: var(--a-space-l);  /* 24px internal padding */
  gap: var(--a-space-m);      /* 16px between items */
  background: var(--a-color-surface);
  border-radius: var(--a-border-radius-base);
}
```

**Result**: Dropdown menu has safe margins, never touches screen edge

### Section Header Spacing
```css
section > .container > header {
  text-align: center;
  margin-bottom: var(--a-space-xl);  /* 32px gap to content */
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

section > .container > header h2 {
  margin-bottom: var(--a-space-m);   /* 16px gap to description */
}

section > .container > header p {
  margin: 0;                          /* No margin on last element */
}
```

**Result**: Consistent spacing between section titles and content

### Grid Spacing
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--a-space-l);              /* 24px between grid items */
}

.grid.tight {
  gap: var(--a-space-m);              /* 16px - denser layout */
}

.grid.spacious {
  gap: var(--a-space-xl);             /* 32px - roomy layout */
}
```

**Result**: Consistent gaps in all grids, behavioral variants for density

### Card Internal Spacing
```css
.card {
  padding: var(--a-space-l);          /* 24px all around */
}

.card h3 {
  margin: 0 0 var(--a-space-m) 0;     /* 16px gap to description */
}

.card p {
  margin: 0 0 var(--a-space-m) 0;     /* 16px gap between paragraphs */
}

.card p:last-of-type {
  margin-bottom: 0;                    /* No margin on last element */
}
```

**Result**: Cards have consistent internal rhythm

### Button/Action Spacing
```css
.actions {
  display: flex;
  gap: var(--a-space-m);              /* 16px between buttons */
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 768px) {
  .actions {
    gap: var(--a-space-s);            /* 8px - tighter on mobile */
  }
}
```

**Result**: Button groups have responsive spacing

## Spacing Hierarchy

Use this decision tree to pick the right spacing:

```
Spacing Needed?
├─ Extra tight (icon next to text in button)
│  └─ --a-space-xs (4px)
│
├─ Tight (form fields, inline spacing)
│  └─ --a-space-s (8px)
│
├─ Standard (default padding, component spacing)
│  └─ --a-space-m (16px)
│
├─ Comfortable (grid gaps, breathing room)
│  └─ --a-space-l (24px)
│
├─ Generous (large gaps, section spacing)
│  └─ --a-space-xl (32px)
│
├─ Section separator (between major sections)
│  └─ --a-space-2xl (48px)
│
└─ Massive (hero padding, large sections)
   └─ --a-space-3xl+ (64px+)
```

## Responsive Spacing Rules

### Rule 1: Mobile-First Defaults
Start with tight spacing, increase on larger screens:

```css
/* Default (mobile): tight */
.grid {
  gap: var(--a-space-m);
}

/* Tablet+: increase breathing room */
@media (min-width: 768px) {
  .grid {
    gap: var(--a-space-l);
  }
}

/* Desktop+: generous spacing */
@media (min-width: 1024px) {
  .grid {
    gap: var(--a-space-xl);
  }
}
```

### Rule 2: Containers Scale with Screen
Padding reduces as screen shrinks:

```css
/* Desktop: plenty of breathing room */
.container {
  padding: 0 var(--a-space-l);        /* 24px */
}

/* Tablet: moderate padding */
@media (max-width: 768px) {
  .container {
    padding: 0 var(--a-space-m);      /* 16px */
  }
}

/* Mobile: minimal padding, maximize content */
@media (max-width: 480px) {
  .container {
    padding: 0 var(--a-space-s);      /* 8px */
  }
}
```

### Rule 3: Never Touch Edges
Safe margins prevent hitting screen edges:

```css
/* ❌ WRONG - touches edge on mobile */
header.menu {
  left: 0;
}

/* ✅ RIGHT - respects safe area */
header.menu {
  left: var(--a-space-m);
  right: var(--a-space-m);
}
```

## Verification Checklist

- [ ] All margins use `var(--a-space-*)`
- [ ] All padding uses `var(--a-space-*)`
- [ ] All gaps use `var(--a-space-*)`
- [ ] No hardcoded pixel values (16px, 24px, etc.)
- [ ] Container has responsive padding (desktop → mobile)
- [ ] Sections have responsive padding (desktop → mobile)
- [ ] Nav dropdown has left/right margins, not 0
- [ ] Grid gaps match spacing hierarchy
- [ ] Cards have consistent internal spacing
- [ ] Buttons/actions have responsive gaps
- [ ] Hero section uses large spacing tokens
- [ ] Section headers have proper gaps

## Common Spacing Mistakes

### ❌ Hardcoded Values
```css
padding: 20px;
margin: 32px;
gap: 24px;
```

### ✅ Token-Based Values
```css
padding: var(--a-space-l);    /* 24px, calculated */
margin: var(--a-space-2xl);   /* 48px, calculated */
gap: var(--a-space-l);        /* 24px, calculated */
```

### ❌ Inconsistent Spacing
```css
.card { padding: 20px; }
.button { padding: 24px; }
.section { padding: 48px; }
/* No relationship, random values */
```

### ✅ Hierarchical Spacing
```css
.card { padding: var(--a-space-l); }      /* 24px */
.button { padding: var(--a-space-m); }    /* 16px */
.section { padding: var(--a-space-2xl); } /* 48px */
/* Clear hierarchy, mathematical relationship */
```

### ❌ Non-Responsive Spacing
```css
.container { padding: 0 32px; }  /* Fixed, cramped on mobile */
header { padding: 20px 40px; }   /* Fixed, wastes space */
```

### ✅ Responsive Spacing
```css
.container { padding: 0 var(--a-space-l); }  /* 24px desktop */
@media (max-width: 768px) {
  .container { padding: 0 var(--a-space-m); } /* 16px mobile */
}

header { padding: var(--a-space-m) var(--a-space-l); }
@media (max-width: 768px) {
  header { padding: var(--a-space-s) var(--a-space-m); }
}
```

## Summary

**Axiom01's spacing system is:**

1. **Mathematical** — All values derived from one unit
2. **Consistent** — Single decision point for all spacing
3. **Responsive** — Scales intelligently for all screen sizes
4. **Hierarchical** — Clear relationships between values
5. **Maintainable** — Change one variable, everything adapts

**The Result:** Beautiful, consistent, perfectly-spaced layouts across all devices with minimal CSS.

**Remember:** Always use `var(--a-space-*)` tokens. Never hardcode pixel values.
