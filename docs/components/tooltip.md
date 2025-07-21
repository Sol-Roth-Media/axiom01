# Tooltip Component

Accessible tooltips that provide additional context on hover and focus with proper keyboard navigation support.

## Basic Usage

```html
<button class="tooltip" data-tooltip="This is a helpful tooltip">
  Hover me
  <span role="tooltip" aria-hidden="true">This is a helpful tooltip</span>
</button>
```

## Positioning

Tooltips support four positioning options:

```html
<!-- Top (default) -->
<button class="tooltip top">
  Top Tooltip
  <span role="tooltip" aria-hidden="true">Appears above</span>
</button>

<!-- Right -->
<button class="tooltip right">
  Right Tooltip  
  <span role="tooltip" aria-hidden="true">Appears to the right</span>
</button>

<!-- Bottom -->
<button class="tooltip bottom">
  Bottom Tooltip
  <span role="tooltip" aria-hidden="true">Appears below</span>
</button>

<!-- Left -->
<button class="tooltip left">
  Left Tooltip
  <span role="tooltip" aria-hidden="true">Appears to the left</span>
</button>
```

## Rich Content Tooltips

For complex tooltip content with HTML elements:

```html
<button class="tooltip rich" data-tooltip-id="rich-tooltip">
  Complex Content
  <div role="tooltip" aria-hidden="true" id="rich-tooltip">
    <h4>Rich Tooltip</h4>
    <p>Tooltips can contain <strong>formatted text</strong> and multiple elements.</p>
    <small>Use sparingly for complex information.</small>
  </div>
</button>
```

## CSS Implementation

The tooltip component uses minimal classes with CSS targeting semantic elements:

```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip span[role="tooltip"] {
  position: absolute;
  background: var(--a-color-on-surface);
  color: var(--a-color-surface);
  padding: var(--a-space-s) var(--a-space-m);
  border-radius: var(--a-border-radius-medium);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
}

.tooltip:hover span[role="tooltip"],
.tooltip:focus span[role="tooltip"] {
  opacity: 1;
  visibility: visible;
}
```

## Accessibility Features

- **Focus Support**: Tooltips appear on both hover and keyboard focus
- **Screen Reader Support**: Uses `role="tooltip"` and `aria-hidden="true"`
- **Keyboard Navigation**: Fully accessible via Tab navigation
- **Semantic HTML**: Proper tooltip markup following ARIA guidelines

## Live Example

[View Tooltip Component →](../showcase/tooltip.html)
