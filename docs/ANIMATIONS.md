# Animation System

## Overview

Axiom01 includes a comprehensive animation system with 22 keyframes and utility classes for smooth, accessible animations.

**File Location**: `css/_animations.css` (359 lines)

## Animation Principles

✅ **Purposeful**: Every animation serves a functional purpose
✅ **Accessible**: Respects `prefers-reduced-motion` media query
✅ **GPU-Accelerated**: Uses `transform` and `opacity` for performance
✅ **Performant**: 60fps on modern devices
✅ **Consistent**: Uses timing system from design tokens

## Available Keyframes

### Fade Animations

**`fadeIn`** - Opacity transition from 0 to 1
```css
.element.animate-fade-in {
  animation: fadeIn 300ms ease-out;
}
```

**`fadeOut`** - Opacity transition from 1 to 0
```css
.modal.closing {
  animation: fadeOut 300ms ease-in;
}
```

**`fadeInUp`** - Opacity + upward translation (0, 20px) → (1, 0)
```css
.card.animate-fade-in-up {
  animation: fadeInUp 400ms ease-out;
}
```

**`fadeInDown`** - Opacity + downward translation (0, -20px) → (1, 0)

**`fadeInLeft`** - Opacity + leftward translation (0, -30px) → (1, 0)

**`fadeInRight`** - Opacity + rightward translation (0, 30px) → (1, 0)

### Slide Animations

**`slideUp`** - Vertical slide from bottom to top
```css
.toast.notify-appear {
  animation: slideUp 300ms ease-out;
}
```

**`slideDown`** - Vertical slide from top to bottom

**`slideLeft`** - Horizontal slide from right to left

**`slideRight`** - Horizontal slide from left to right

### Scale Animations

**`scaleIn`** - Grow from 0.95 to 1.0
```css
.modal-content.appear {
  animation: scaleIn 300ms ease-out;
}
```

**`scaleOut`** - Shrink from 1.0 to 0.95

### Bounce Animations

**`bounce`** - Vertical bounce motion
```css
.button:hover {
  animation: bounce 500ms ease-in-out;
}
```

**`bounceIn`** - Scale + bounce entrance (0.3 → 1.0)

### Spin & Rotate

**`spin`** - 360° rotation
```css
.loading-spinner {
  animation: spin 1s linear infinite;
}
```

### Pulse Animations

**`pulse`** - Opacity pulse (1 → 0.5 → 1)
```css
.notification.unread {
  animation: pulse 2s ease-in-out infinite;
}
```

**`heartbeat`** - Scale pulse for emphasis (1 → 1.1 → 1)

### Special Effects

**`glow`** - Box-shadow glow effect
```css
.card.highlighted {
  animation: glow 2s ease-in-out infinite;
}
```

**`shimmer`** - Shine/loading effect (background position)
```css
.skeleton-loader {
  animation: shimmer 1.5s infinite;
}
```

## Utility Classes

All animations are available as utility classes via `.animate-[name]`:

```html
<!-- Fade animations -->
<div class="animate-fade-in">Fades in</div>
<div class="animate-fade-out">Fades out</div>
<div class="animate-fade-in-up">Slides up with fade</div>

<!-- Slide animations -->
<div class="animate-slide-up">Slides up</div>
<div class="animate-slide-down">Slides down</div>

<!-- Scale animations -->
<div class="animate-scale-in">Grows into view</div>
<div class="animate-scale-out">Shrinks away</div>

<!-- Special effects -->
<div class="animate-bounce">Bounces</div>
<div class="animate-spin">Spins continuously</div>
<div class="animate-pulse">Pulses</div>
<div class="animate-glow">Glows</div>
```

## Timing System

Animations automatically use CSS variables for consistent timing:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  /* Uses token values: */
  animation-duration: var(--a-transition-speed-normal, 300ms);
  animation-timing-function: var(--a-transition-timing, ease-out);
}
```

**Available timing variables:**
- `--a-transition-speed-fast`: 150ms (hover effects, micro-interactions)
- `--a-transition-speed-normal`: 300ms (state changes, standard transitions)
- `--a-transition-speed-slow`: 500ms (entrance animations)
- `--a-transition-timing`: ease-in-out (standard easing)

## Motion Preferences (Accessibility)

All animations automatically respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users with motion sensitivity or vestibular disorders won't see animations.

## Performance Optimization

✅ All animations use GPU-accelerated properties only:
- `transform` (translate, scale, rotate)
- `opacity`

❌ Avoid animating:
- `width`, `height` → Use `transform: scale()`
- `top`, `left` → Use `transform: translate()`
- `background-color` → Use `opacity` or blend modes

## Common Animation Patterns

### Loading Spinner
```css
.spinner {
  animation: spin 1s linear infinite;
}
```

### Toast/Notification Appear
```css
.toast {
  animation: slideUp 300ms ease-out;
}

.toast.dismiss {
  animation: slideDown 300ms ease-in;
}
```

### Modal Entrance
```css
.modal.open .content {
  animation: scaleIn 300ms ease-out;
}

.modal.closing .content {
  animation: scaleOut 300ms ease-in;
}
```

### Hover Feedback
```css
.button:hover {
  animation: bounce 300ms ease-out;
}
```

### Loading State
```css
.skeleton {
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
}
```

## Duration Guidelines

- **Fast** (150ms): Hover effects, micro-interactions, feedback
- **Normal** (300ms): State changes, transitions, standard animations
- **Slow** (500ms): Entrance animations, complex movements, emphasis

## Browser Support

All animations use standard CSS3 and are supported in:
- ✅ Chrome/Edge 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ iOS Safari 12+
- ✅ Android Browser 60+

## Animation Composition

You can combine animations for complex effects:

```css
@keyframes slideInBounce {
  0% { transform: translateY(100px); opacity: 0; }
  70% { opacity: 1; }
  100% { transform: translateY(0); }
}

.element.entrance {
  animation: slideInBounce 500ms ease-out;
}
```

## Custom Animations

Define custom keyframes and use the same timing system:

```css
@keyframes customEffect {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.my-effect {
  animation: customEffect 
    var(--a-transition-speed-normal, 300ms)
    var(--a-transition-timing, ease-out);
}
```

## Related Files

- **Implementation**: `css/_animations.css`
- **Integration**: `css/axiom.css` (imports animations)
- **Variables**: `css/_variables.css` (timing tokens)
- **Styling Guide**: `AXIOM01_STYLING_GUIDE.md`
- **Token Reference**: `docs/tokens/VARIABLES.md`

---

**Version**: 2.0.0  
**Updated**: 2025  
**Status**: Production Ready ✅
