# Axiom01 Grid System Audit & Recommendations

## Current State Analysis

### 1. Problem: `.grid` Class Definition
**Current CSS (Line 1742):**
```css
.grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: var(--a-space-l); 
}
```

**Issues:**
- ❌ Uses `repeat(auto-fit, minmax(280px, 1fr))`
- ❌ Unpredictable at high resolutions
- ❌ Can cause horizontal overflow
- ❌ 280px minimum is arbitrary
- ❌ Doesn't follow mobile-first principle
- ❌ No responsive breakpoint control
- ❌ Violates Axiom philosophy of predictability

### 2. Hero Component Issues
**Current Padding (Line ~1758):**
```css
section.hero.small {
  padding: calc(var(--a-space-xxl) + 80px) var(--a-space-xl) var(--a-space-xxl);
}
```

**Issues:**
- ❌ `calc(var(--a-space-xxl) + 80px)` is excessive (64px + 80px = 144px)
- ❌ Makes page jump below header awkwardly
- ❌ `p.description` gets white text on white background
- ❌ `.description` is styled as a component, not semantic text

### 3. Missing Responsive Grid Utilities
**Current State:**
- No semantic grid column classes (grid-cols-1, grid-cols-2, etc.)
- No responsive grid system
- Relies on magic numbers and auto-fit

## Recommendations

### Phase 1: Fix `.grid` (CRITICAL)
**Replace with mobile-first approach:**
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--a-space-m);
}

@media (min-width: 576px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 992px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1200px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

### Phase 2: Add Semantic Grid Utilities
```css
.grid-cols-1 { grid-template-columns: 1fr; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-5 { grid-template-columns: repeat(5, 1fr); }
```

### Phase 3: Fix Hero Padding
**Reduce excessive top padding:**
```css
section.hero.small {
  padding: var(--a-space-xl) var(--a-space-xl) var(--a-space-xl);
  margin-top: 80px; /* Account for header */
}
```

### Phase 4: Fix `.description` in Hero Context
**Use semantic paragraph styling:**
```css
section.hero p {
  color: var(--a-color-on-gradient);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

/* Only use .description class when it's actually a description component */
.description {
  /* Keep current styles */
}
```

### Phase 5: Add Advanced Grid Patterns
```css
/* Sidebar + Main layout */
.grid-sidebar { 
  grid-template-columns: 250px 1fr; 
}

@media (max-width: 768px) {
  .grid-sidebar { 
    grid-template-columns: 1fr; 
  }
}

/* Featured item in grid */
.grid-item-featured {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .grid-item-featured {
    grid-column: span 1;
  }
}
```

## Axiom01 Philosophy Alignment

### ✅ What We Should Keep
1. **Semantic HTML First** - Never sacrifice for CSS convenience
2. **CSS Variables** - All sizing, spacing, colors use variables
3. **Mobile-First** - Start simple, enhance for larger screens
4. **Minimal Classes** - One class per component, not utility stacking
5. **Accessibility** - WCAG 2.1 AA compliance always
6. **Predictability** - Layouts should never overflow or surprise

### ❌ What We Should Change
1. **Remove `repeat(auto-fit, minmax())`** - Too unpredictable
2. **Add explicit breakpoint control** - Not magic sizing
3. **Separate concerns** - Grid layout ≠ component styling
4. **Document patterns** - Show real-world examples
5. **Test extensively** - Every breakpoint, real devices

## Implementation Priority

**CRITICAL (Do First):**
1. Fix `.grid` definition with mobile-first approach
2. Fix `.hero.small` top padding
3. Fix `p` color in hero context

**HIGH (Do Second):**
1. Add semantic grid column classes
2. Add responsive grid demos
3. Update layout documentation

**MEDIUM (Do Third):**
1. Add advanced grid patterns (sidebar, featured items)
2. Add grid-order examples for responsive reordering
3. Add gap responsiveness

**LOW (Nice-to-Have):**
1. CSS Grid template areas examples
2. Auto-placement strategies
3. Performance optimization guide

## Testing Checklist

- [ ] Grid doesn't overflow at 480px
- [ ] Grid doesn't overflow at 768px
- [ ] Grid doesn't overflow at 1024px
- [ ] Grid doesn't overflow at 1200px
- [ ] Grid doesn't overflow at 1456px
- [ ] Grid doesn't overflow at 1920px
- [ ] Hero padding looks good on mobile
- [ ] Hero padding looks good on desktop
- [ ] Text is readable in hero (not white on white)
- [ ] All examples work at all breakpoints
- [ ] Mobile navbar works on all pages
