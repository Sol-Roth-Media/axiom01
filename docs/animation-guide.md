# Animation Philosophy & Guide for Axiom01

## Part 1: The Axiom01 Animation Philosophy

### Core Principle: Animation Enhances Function, Not Decoration

Axiom01 embraces a **purposeful animation philosophy**: animations exist to communicate state changes, guide user attention, and improve perceived performance. They should *never* exist for pure decoration.

**The Rule:** If you can remove an animation and the interface still communicates the same information, the animation shouldn't exist.

### Core Tenets

1. **Clarity Over Flash** - Animations should clarify intent and state, not distract.
2. **Accessibility First** - Respect `prefers-reduced-motion` always.
3. **Minimal & Purposeful** - Every animation has a reason; every reason is documented.
4. **CSS-First** - Use CSS animations and transitions; save JavaScript for complex choreography.
5. **Performance-Aware** - Animations use GPU-accelerated properties (`transform`, `opacity`).
6. **Semantic Consistency** - Similar interactions use similar animations.

### When to Animate

✅ **DO Animate For:**
- State changes (opened/closed, active/inactive, loading/done)
- Focus/hover interactions
- Transitions between pages or sections
- Progress feedback (loading bars, spinners)
- Attention guidance (subtle pulse on important elements)
- Entrance/exit of modal dialogs
- Form validation feedback (error shake, success checkmark)
- Scroll-triggered reveals

❌ **DO NOT Animate For:**
- Per-word text transitions
- Decorative flourishes
- Continuous motion without purpose
- Auto-play decorative effects
- Parallax effects (unless essential to UX)

---

## Part 2: Animation Timing & Easing

### Temporal Scale: CSS Variables

Axiom01 provides animation timing variables (planned for future CSS variable expansion):

```css
/* Future: Add to axiom_config.css */
--a-duration-instant:     0ms;      /* For opacity changes */
--a-duration-quick:       150ms;    /* Micro-interactions (hover) */
--a-duration-short:       200ms;    /* Dismissal, close operations */
--a-duration-standard:    300ms;    /* General transitions */
--a-duration-long:        500ms;    /* Important state changes */
--a-duration-very-long:   800ms;    /* Entrance animations */

--a-easing-linear:        linear;
--a-easing-standard:      cubic-bezier(0.4, 0, 0.2, 1);      /* Material Design */
--a-easing-decelerate:    cubic-bezier(0, 0, 0.2, 1);        /* Arrival (slowing down) */
--a-easing-accelerate:    cubic-bezier(0.4, 0, 1, 1);        /* Departure (speeding up) */
--a-easing-ease-in-out:   ease-in-out;
```

### Timing Guidelines

| Duration | Use Case | Perception |
|----------|----------|------------|
| 0-100ms | Instant | Feels immediate, no loading |
| 100-200ms | Quick feedback | Responsive, snappy |
| 200-300ms | Standard state change | Feels purposeful |
| 300-500ms | Important transitions | Clear visual flow |
| 500ms+ | Entrance, major transitions | Draws attention |

### Easing Guidelines

```css
/* Micro-interactions: Quick and snappy */
button:hover {
  background-color: var(--a-color-primary);
  transition: background-color 150ms ease-in-out;
}

/* Standard state changes: Smooth and professional */
.dropdown.is-open {
  max-height: 500px;
  opacity: 1;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Entrance animations: Decelerate (appear to slow down as it arrives) */
.modal {
  animation: slideInUp 500ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

/* Exit animations: Accelerate (appear to speed up as it leaves) */
.modal.closing {
  animation: slideOutDown 300ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
```

---

## Part 3: Essential Animation Recipes

### Recipe 1: Button Hover & Active States

**Purpose:** Provide tactile feedback without relying on color change alone.

```css
.button {
  cursor: pointer;
  transition: 
    background-color 150ms ease-in-out,
    transform 150ms ease-in-out,
    box-shadow 150ms ease-in-out;
}

.button:hover {
  transform: translateY(-2px);  /* Lift effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);  /* Click pressed */
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
  
  .button:hover {
    transform: none;
    box-shadow: none;
  }
}
```

### Recipe 2: Dropdown Open/Close

**Purpose:** Show that content is appearing/disappearing, not just toggling visibility.

```css
.dropdown {
  position: relative;
}

.dropdown.menu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: 
    max-height 300ms ease-in-out,
    opacity 300ms ease-in-out;
}

.dropdown.is-open .dropdown.menu {
  max-height: 500px;
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .dropdown.menu {
    transition: none;
  }
}
```

### Recipe 3: Modal Dialog Entrance/Exit

**Purpose:** Frame entry and exit of focused content; prevent jarring appearance.

```css
.modal {
  opacity: 0;
  transform: scale(0.95);
  transition: 
    opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
}

.modal.is-visible {
  opacity: 1;
  transform: scale(1);
}

.modal.is-closing {
  opacity: 0;
  transform: scale(0.95);
}

@keyframes fadeInBackdrop {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.modal-backdrop {
  animation: fadeInBackdrop 300ms ease-in-out forwards;
}

@media (prefers-reduced-motion: reduce) {
  .modal {
    transition: none;
  }
}
```

### Recipe 4: Loading Spinner (CSS Animation)

**Purpose:** Reassure users that something is happening; signal pending state.

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--a-color-outline);
  border-top-color: var(--a-color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Pause spinner if user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    border-top-color: inherit;
  }
}
```

### Recipe 5: Form Validation Feedback

**Purpose:** Communicate success or error without relying on color alone.

```css
/* Success checkmark animation */
@keyframes checkmark {
  0% {
    opacity: 0;
    transform: scale(0) rotateZ(-45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
  }
}

.form-group.valid::after {
  content: "✓";
  color: var(--a-color-success);
  font-weight: var(--a-font-weight-bold);
  animation: checkmark 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Error shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.form-group.error {
  animation: shake 400ms ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-group.valid::after {
    animation: none;
  }
  
  .form-group.error {
    animation: none;
  }
}
```

### Recipe 6: List Item Entrance Stagger

**Purpose:** Guide eye through multiple items without overwhelming.

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.list-item {
  animation: slideInLeft 400ms ease-out forwards;
  opacity: 0;  /* Start hidden */
}

/* Stagger each item */
.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 100ms; }
.list-item:nth-child(3) { animation-delay: 200ms; }
.list-item:nth-child(4) { animation-delay: 300ms; }
/* etc. Use CSS custom properties or LESS/SCSS for DRY approach */

@media (prefers-reduced-motion: reduce) {
  .list-item {
    animation: none;
    opacity: 1;
  }
}
```

### Recipe 7: Tooltip Fade-In

**Purpose:** Gently introduce supplementary information without jarring the user.

```css
.tooltip [role="tooltip"] {
  opacity: 0;
  visibility: hidden;
  transition: 
    opacity 200ms ease-in-out,
    visibility 200ms ease-in-out;
  pointer-events: none;
}

.tooltip.is-visible [role="tooltip"] {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .tooltip [role="tooltip"] {
    transition: none;
  }
}
```

### Recipe 8: Progress Bar Fill

**Purpose:** Show gradual progress; reassure users work is happening.

```css
.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--a-color-outline);
  border-radius: var(--a-border-radius-small);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--a-color-primary);
  width: 0%;
  transition: width 300ms ease-out;
  border-radius: var(--a-border-radius-small);
}

/* Indeterminate loading state (animated stripe) */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.progress-bar-fill.indeterminate {
  width: 100%;
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar-fill {
    transition: none;
  }
  
  .progress-bar-fill.indeterminate {
    animation: none;
  }
}
```

---

## Part 4: Accessibility with Animations

### The prefers-reduced-motion Media Query

**This is NON-NEGOTIABLE in Axiom01.**

```css
/* Default: With animation */
.element {
  transition: all 300ms ease-in-out;
}

/* User prefers reduced motion: Remove animation entirely */
@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
  
  /* Ensure element is still visible/functional without animation */
  .element {
    opacity: 1;  /* Don't leave it invisible */
    transform: none;  /* Don't leave it off-screen */
  }
}
```

### JavaScript Respect

```javascript
// Detect user preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Use in code conditionally
if (!prefersReducedMotion) {
  // Apply animation-based JavaScript logic
  element.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], { duration: 300 });
} else {
  // Instant fallback
  element.style.opacity = '1';
}
```

### Testing for Accessibility

✅ **DO:** Test your animations with `prefers-reduced-motion` enabled
- macOS: System Preferences > Accessibility > Display > Reduce Motion
- Windows 10+: Settings > Ease of Access > Display > Show animations
- Firefox: `about:config`, toggle `ui.prefersReducedMotion` to `1`

---

## Part 5: Performance Considerations

### GPU-Accelerated Properties Only

Use only these properties in animations (they're GPU-accelerated):

✅ **Always Safe:**
- `opacity`
- `transform` (translate, scale, rotate)

⚠️ **Use Sparingly:**
- `box-shadow`
- `color`

❌ **Never Animate:**
- `width`, `height`
- `left`, `top`, `right`, `bottom` (use `transform: translate()` instead)
- `font-size`, `padding`, `margin`

### Example: Bad vs. Good

```css
/* ❌ BAD: Animates expensive properties */
.dropdown.menu {
  max-height: 0;
  transition: max-height 300ms ease-in-out;  /* Recalculates layout on every frame */
}

.dropdown.is-open .dropdown.menu {
  max-height: 500px;
}

/* ✅ GOOD: GPU-accelerated */
.dropdown.menu {
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 300ms ease-in-out;  /* Smooth, no layout recalc */
}

.dropdown.is-open .dropdown.menu {
  transform: scaleY(1);
}
```

### Will-Change (Use Sparingly)

```css
/* Use only for animations you know are coming */
.element {
  will-change: transform;
}

/* Remove after animation is done */
.element {
  will-change: auto;
}
```

---

## Part 6: Common Animation Mistakes

### ❌ Mistake 1: Animation Without Accessibility

```css
/* WRONG: No prefers-reduced-motion */
.element {
  animation: spin 2s linear infinite;
}

/* RIGHT: Respect user preferences */
.element {
  animation: spin 2s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .element {
    animation: none;
  }
}
```

### ❌ Mistake 2: Too Long Durations

```css
/* WRONG: User feels stuck waiting */
.modal {
  transition: all 1500ms ease-in-out;  /* 1.5 seconds is too long */
}

/* RIGHT: Quick and responsive */
.modal {
  transition: all 300ms ease-in-out;
}
```

### ❌ Mistake 3: Animating Wrong Properties

```css
/* WRONG: Layout thrashing */
div {
  transition: width 300ms ease-in-out;  /* Recalculates layout */
}

/* RIGHT: Transform (GPU-accelerated) */
div {
  transition: transform 300ms ease-in-out;
  transform: scaleX(1);
}
```

### ❌ Mistake 4: Decorative Animations

```css
/* WRONG: No functional purpose */
.button {
  animation: rainbow 3s infinite;  /* Just for show */
}

/* RIGHT: Serves a purpose */
.button {
  transition: background-color 150ms ease-in-out;  /* Feedback on hover */
}
```

### ❌ Mistake 5: Starting Hidden

```css
/* WRONG: Content flashes or doesn't appear */
.element {
  opacity: 0;
  animation: fadeIn 300ms ease-in-out;
  /* If animation doesn't start, element stays invisible */
}

/* RIGHT: Start visible, fallback works */
.element {
  animation: fadeIn 300ms ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* And without JS/animation support, element is still visible */
```

---

## Part 7: Animation Checklist

Before shipping an animated component, verify:

### Design & Purpose
- [ ] Animation communicates a state change or action
- [ ] Animation improves UX, not just decoration
- [ ] Animation doesn't distract from content
- [ ] Animation speed is appropriate (not too slow, not too fast)
- [ ] Animation supports focus flow (no elements moving under cursor)

### Implementation
- [ ] Uses GPU-accelerated properties only (`transform`, `opacity`)
- [ ] Uses CSS animations/transitions (not JavaScript) where possible
- [ ] Duration between 150ms–500ms (depending on type)
- [ ] Easing is smooth and professional
- [ ] No hardcoded colors or values; uses CSS variables

### Accessibility
- [ ] Respects `prefers-reduced-motion` media query
- [ ] Animation doesn't prevent keyboard access
- [ ] Focus states are still visible without animation
- [ ] Content is actionable even if animation fails
- [ ] Animation tested with assistive technology

### Performance
- [ ] No layout thrashing (width, height, left, top)
- [ ] No excessive animation stacking
- [ ] Animation performs at 60 FPS (verify in DevTools)
- [ ] No significant increase to bundle size
- [ ] Animation doesn't block interaction

### Documentation
- [ ] Purpose of animation is documented in code comment
- [ ] Browser compatibility noted (if applicable)
- [ ] Accessibility considerations noted
- [ ] Example usage provided

---

## Part 8: Integration with Axiom01 Components

### Proposed Component Animation Patterns

```javascript
// js/components/dropdown.js
export default {
  init(element) {
    const toggleButton = element.querySelector('.dropdown-toggle');
    const menu = element.querySelector('.dropdown.menu');

    const toggleDropdown = (isOpen) => {
      element.classList.toggle('is-open', isOpen);
      
      // CSS handles the animation via transition
      // JavaScript just toggles the class
      if (isOpen) {
        menu.style.maxHeight = menu.scrollHeight + 'px';
      } else {
        menu.style.maxHeight = '0';
      }
    };

    toggleButton.addEventListener('click', () => toggleDropdown());

    return {
      destroy() {
        toggleButton.removeEventListener('click', () => toggleDropdown());
      }
    };
  }
};
```

---

## Conclusion

Animation in Axiom01 is purposeful, performant, and accessible. Every animation should:

1. Communicate state or feedback
2. Use GPU-accelerated properties
3. Respect user preferences (`prefers-reduced-motion`)
4. Complete in 150–500ms
5. Never distract from content

By following these principles, you create interfaces that feel responsive, professional, and inclusive.
