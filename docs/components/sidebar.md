# Sidebar Component

Navigation and supplementary content panels with responsive behavior and accessibility support.

## Basic Sidebar

```html
<div class="layout-with-sidebar">
  <aside class="sidebar" role="complementary" aria-label="Navigation sidebar">
    <nav class="sidebar-nav" role="navigation">
      <ul class="nav-list">
        <li>
          <a href="/dashboard" class="nav-item active" aria-current="page">
            <i class="fas fa-tachometer-alt" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/projects" class="nav-item">
            <i class="fas fa-folder" aria-hidden="true"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="/team" class="nav-item">
            <i class="fas fa-users" aria-hidden="true"></i>
            <span>Team</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
  
  <main class="main-content" role="main">
    <h1>Main Content Area</h1>
    <p>Primary content goes here.</p>
  </main>
</div>
```

## Collapsible Sidebar

```html
<div class="layout-with-sidebar collapsible">
  <aside class="sidebar collapsed" role="complementary" aria-label="Collapsible navigation">
    <button class="sidebar-toggle" aria-expanded="false" aria-controls="sidebar-nav">
      <i class="fas fa-bars" aria-hidden="true"></i>
      <span class="sr-only">Toggle sidebar</span>
    </button>
    
    <nav class="sidebar-nav" id="sidebar-nav" role="navigation">
      <ul class="nav-list">
        <li>
          <a href="/dashboard" class="nav-item" title="Dashboard">
            <i class="fas fa-tachometer-alt" aria-hidden="true"></i>
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
  
  <main class="main-content" role="main">
    <h1>Content with Collapsible Sidebar</h1>
  </main>
</div>
```

## CSS Variables

```css
.sidebar {
  --sidebar-width: 280px;
  --sidebar-bg: var(--a-color-surface);
  --sidebar-border: var(--a-color-outline);
  --sidebar-nav-active: var(--a-color-primary);
}
```

## Accessibility Features

- Proper ARIA roles and labels
- Keyboard navigation support
- Screen reader friendly toggle controls
- Current page indication with `aria-current`
