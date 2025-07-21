# Toggle Switch Component

Accessible toggle switches for binary on/off states with proper ARIA support and keyboard navigation.

## Basic Usage

```html
<label class="toggle">
  <input type="checkbox" role="switch" aria-describedby="notifications-desc">
  <span></span>
  <span>Enable notifications</span>
</label>
<p id="notifications-desc" class="help-text">Receive email notifications for updates</p>
```

## Toggle States

```html
<!-- Default state -->
<label class="toggle">
  <input type="checkbox" role="switch">
  <span></span>
  <span>Default toggle</span>
</label>

<!-- Checked state -->
<label class="toggle">
  <input type="checkbox" role="switch" checked>
  <span></span>
  <span>Checked toggle</span>
</label>

<!-- Disabled state -->
<label class="toggle">
  <input type="checkbox" role="switch" disabled>
  <span></span>
  <span>Disabled toggle</span>
</label>
```

## Toggle Sizes

Three size variants are available:

```html
<label class="toggle small">
  <input type="checkbox" role="switch">
  <span></span>
  <span>Small toggle</span>
</label>

<label class="toggle">
  <input type="checkbox" role="switch">
  <span></span>
  <span>Default toggle</span>
</label>

<label class="toggle large">
  <input type="checkbox" role="switch">
  <span></span>
  <span>Large toggle</span>
</label>
```

## Color Variants

```html
<label class="toggle primary">
  <input type="checkbox" role="switch" checked>
  <span></span>
  <span>Primary color</span>
</label>

<label class="toggle success">
  <input type="checkbox" role="switch" checked>
  <span></span>
  <span>Success state</span>
</label>

<label class="toggle warning">
  <input type="checkbox" role="switch" checked>
  <span></span>
  <span>Warning state</span>
</label>
```

## CSS Implementation

The toggle uses semantic element targeting:

```css
.toggle {
  display: flex;
  align-items: center;
  gap: var(--a-space-m);
  cursor: pointer;
  margin: var(--a-space-s) 0;
}

.toggle input[type="checkbox"] {
  display: none;
}

.toggle span:first-of-type {
  width: 3rem;
  height: 1.5rem;
  background: var(--a-color-neutral-300);
  border-radius: 1rem;
  position: relative;
  transition: background-color 0.2s;
}

.toggle span:first-of-type::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(1.5rem - 4px);
  height: calc(1.5rem - 4px);
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
}

.toggle input:checked + span:first-of-type {
  background: var(--a-color-primary);
}

.toggle input:checked + span:first-of-type::before {
  transform: translateX(1.5rem);
}
```

## Accessibility Features

- **ARIA Switch Role**: Uses `role="switch"` for proper screen reader support
- **Keyboard Navigation**: Fully operable with Space and Enter keys
- **Focus Indicators**: Clear visual focus states
- **Associated Labels**: Proper label association with form controls
- **Descriptive Text**: Optional `aria-describedby` for additional context

## JavaScript Integration

```javascript
// Listen for toggle changes
document.querySelectorAll('.toggle input').forEach(toggle => {
  toggle.addEventListener('change', function() {
    console.log(`Toggle ${this.checked ? 'on' : 'off'}`);
    // Update UI or send to server
  });
});
```

## Live Example

[View Toggle Component →](../showcase/toggle.html)
