# Navigation Component

Primary navigation elements including navbars, breadcrumbs, and pagination for website structure and wayfinding.

## Primary Navigation

```html
<nav class="navigation primary" role="navigation" aria-label="Main navigation">
  <a href="/" class="nav-brand">
    <img src="logo.svg" alt="Company Logo" class="nav-logo">
    <span>Brand Name</span>
  </a>
  <ul class="nav-links">
    <li><a href="/home" aria-current="page">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <button class="button secondary">Login</button>
    <button class="button primary">Sign Up</button>
  </div>
</nav>
```

## Vertical Navigation

```html
<nav class="navigation vertical" role="navigation" aria-label="Sidebar navigation">
  <ul class="nav-links">
    <li>
      <a href="/dashboard" class="active">
        <i class="fas fa-tachometer-alt" aria-hidden="true"></i>
        <span>Dashboard</span>
      </a>
    </li>
    <li>
      <a href="/projects">
        <i class="fas fa-folder" aria-hidden="true"></i>
        <span>Projects</span>
      </a>
    </li>
    <li>
      <a href="/team">
        <i class="fas fa-users" aria-hidden="true"></i>
        <span>Team</span>
      </a>
    </li>
    <li>
      <a href="/settings">
        <i class="fas fa-cog" aria-hidden="true"></i>
        <span>Settings</span>
      </a>
    </li>
  </ul>
</nav>
```

## Navigation with Dropdowns

```html
<nav class="navigation primary" role="navigation">
  <ul class="nav-links">
    <li>
      <a href="/products" aria-expanded="false" aria-haspopup="true">
        Products
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
      </a>
      <ul class="nav-dropdown">
        <li><a href="/products/web">Web Apps</a></li>
        <li><a href="/products/mobile">Mobile Apps</a></li>
        <li><a href="/products/desktop">Desktop Apps</a></li>
      </ul>
    </li>
    <li><a href="/pricing">Pricing</a></li>
    <li><a href="/support">Support</a></li>
  </ul>
</nav>
```

## CSS Variables

```css
.navigation {
  --nav-bg: var(--a-color-surface);
  --nav-border: var(--a-color-outline);
  --nav-link-color: var(--a-color-on-surface);
  --nav-link-active: var(--a-color-primary);
  --nav-padding: var(--a-space-m);
}
```

## Accessibility Features

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Current page indication with `aria-current`
- Focus indicators and states
