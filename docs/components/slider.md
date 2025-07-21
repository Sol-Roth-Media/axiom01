# Slider Component

The slider component provides an accessible range input control with proper keyboard navigation and screen reader support.

## Basic Usage

```html
<div class="form-group">
  <label for="volume-slider">Volume</label>
  <input type="range" id="volume-slider" class="slider" min="0" max="100" value="50" aria-describedby="volume-value">
  <output id="volume-value" for="volume-slider">50</output>
</div>
```

## Slider with Steps

```html
<div class="form-group">
  <label for="rating-slider">Rating</label>
  <input type="range" id="rating-slider" class="slider" min="1" max="5" step="1" value="3" aria-describedby="rating-output">
  <output id="rating-output" for="rating-slider">3 stars</output>
</div>
```

## Vertical Slider

```html
<div class="form-group vertical">
  <label for="brightness-slider">Brightness</label>
  <input type="range" id="brightness-slider" class="slider vertical" min="0" max="100" value="75" orient="vertical" aria-describedby="brightness-output">
  <output id="brightness-output" for="brightness-slider">75%</output>
</div>
```

## Disabled State

```html
<div class="form-group">
  <label for="disabled-slider">Disabled Slider</label>
  <input type="range" id="disabled-slider" class="slider" min="0" max="100" value="25" disabled aria-describedby="disabled-output">
  <output id="disabled-output" for="disabled-slider">25</output>
</div>
```

## CSS Variables

The slider component uses the following CSS variables:

```css
.slider {
  --slider-track-color: var(--a-color-outline);
  --slider-thumb-color: var(--a-color-primary);
  --slider-fill-color: var(--a-color-primary);
  --slider-height: var(--a-space-xs);
  --slider-thumb-size: var(--a-space-l);
}
```

## Accessibility Features

- Proper labeling with `<label>` elements
- ARIA describedby connecting to output elements
- Keyboard navigation support (arrow keys, home/end)
- Screen reader announcements for value changes
- High contrast mode support
- Focus indicators

## JavaScript Integration

```javascript
// Update output when slider value changes
const slider = document.getElementById('volume-slider');
const output = document.getElementById('volume-value');

slider.addEventListener('input', function() {
  output.textContent = this.value;
});
```
