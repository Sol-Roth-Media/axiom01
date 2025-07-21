# Avatar Component

User avatars with fallbacks, status indicators, and accessibility features for representing users and entities.

## Basic Usage

```html
<!-- Image avatars -->
<img class="avatar" src="avatar.jpg" alt="John Smith">

<!-- Initial fallback avatars -->
<div class="avatar" aria-label="User initials: AB">AB</div>
```

## Avatar Sizes

Four size variants are available:

```html
<img class="avatar small" src="avatar.jpg" alt="Small avatar">
<img class="avatar" src="avatar.jpg" alt="Default avatar">
<img class="avatar large" src="avatar.jpg" alt="Large avatar">  
<img class="avatar xlarge" src="avatar.jpg" alt="Extra large avatar">
```

## Status Indicators

Show user presence with status indicators:

```html
<div class="avatar-wrapper">
  <img class="avatar" src="avatar.jpg" alt="John Smith">
  <span class="status online" aria-label="Online"></span>
</div>

<div class="avatar-wrapper">
  <img class="avatar" src="avatar.jpg" alt="Jane Doe">
  <span class="status busy" aria-label="Busy"></span>
</div>

<div class="avatar-wrapper">
  <img class="avatar" src="avatar.jpg" alt="Bob Johnson">
  <span class="status away" aria-label="Away"></span>
</div>

<div class="avatar-wrapper">
  <img class="avatar" src="avatar.jpg" alt="Alice Wilson">
  <span class="status offline" aria-label="Offline"></span>
</div>
```

## Avatar Groups

Display multiple users with overlap:

```html
<div class="avatar-group">
  <img class="avatar" src="avatar-1.jpg" alt="Team member 1">
  <img class="avatar" src="avatar-2.jpg" alt="Team member 2">
  <img class="avatar" src="avatar-3.jpg" alt="Team member 3">
  <div class="avatar" aria-label="2 more members">+2</div>
</div>
```

## CSS Implementation

Avatars use semantic element targeting:

```css
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
  font-weight: var(--a-font-weight-bold);
}

.avatar.small { width: 2rem; height: 2rem; }
.avatar.large { width: 3.5rem; height: 3.5rem; }
.avatar.xlarge { width: 5rem; height: 5rem; }
```

## Accessibility Features

- **Alt Text Required**: All image avatars must have descriptive alt text
- **Semantic Labels**: Initial avatars use `aria-label` for screen readers
- **Status Indicators**: Status spans include `aria-label` for accessibility
- **Keyboard Focusable**: Can be made interactive with proper focus management

## Live Example

[View Avatar Component →](../showcase/avatar.html)
