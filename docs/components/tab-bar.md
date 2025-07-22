# Tab Bar Component

Horizontal navigation tabs for switching between different views or sections with accessibility support.

## Basic Tab Bar

```html
<div class="tab-bar" role="tablist" aria-label="Main sections">
  <button class="tab-button active" role="tab" aria-selected="true" aria-controls="home-panel" id="home-tab">
    <i class="fas fa-home" aria-hidden="true"></i>
    <span>Home</span>
  </button>
  <button class="tab-button" role="tab" aria-selected="false" aria-controls="search-panel" id="search-tab">
    <i class="fas fa-search" aria-hidden="true"></i>
    <span>Search</span>
  </button>
  <button class="tab-button" role="tab" aria-selected="false" aria-controls="profile-panel" id="profile-tab">
    <i class="fas fa-user" aria-hidden="true"></i>
    <span>Profile</span>
  </button>
  <button class="tab-button" role="tab" aria-selected="false" aria-controls="settings-panel" id="settings-tab">
    <i class="fas fa-cog" aria-hidden="true"></i>
    <span>Settings</span>
  </button>
</div>

<div class="tab-content">
  <div class="tab-panel active" role="tabpanel" aria-labelledby="home-tab" id="home-panel">
    <h2>Home Content</h2>
    <p>Welcome to the home section.</p>
  </div>
  <div class="tab-panel" role="tabpanel" aria-labelledby="search-tab" id="search-panel">
    <h2>Search</h2>
    <p>Search functionality here.</p>
  </div>
  <div class="tab-panel" role="tabpanel" aria-labelledby="profile-tab" id="profile-panel">
    <h2>Profile</h2>
    <p>User profile information.</p>
  </div>
  <div class="tab-panel" role="tabpanel" aria-labelledby="settings-tab" id="settings-panel">
    <h2>Settings</h2>
    <p>Application settings.</p>
  </div>
</div>
```

## Icon-only Tab Bar

```html
<div class="tab-bar compact" role="tablist" aria-label="Navigation">
  <button class="tab-button active" role="tab" aria-selected="true" aria-label="Dashboard">
    <i class="fas fa-tachometer-alt" aria-hidden="true"></i>
  </button>
  <button class="tab-button" role="tab" aria-selected="false" aria-label="Messages">
    <i class="fas fa-envelope" aria-hidden="true"></i>
    <span class="badge">3</span>
  </button>
  <button class="tab-button" role="tab" aria-selected="false" aria-label="Notifications">
    <i class="fas fa-bell" aria-hidden="true"></i>
  </button>
</div>
```

## CSS Variables

```css
.tab-bar {
  --tab-bg: var(--a-color-surface);
  --tab-border: var(--a-color-outline);
  --tab-active-color: var(--a-color-primary);
  --tab-text-color: var(--a-color-on-surface);
}
```

## Accessibility Features

- Proper ARIA roles and attributes
- Keyboard navigation (Arrow keys, Tab, Enter)
- Screen reader support
- Focus indicators
