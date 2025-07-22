# Timeline Component

Chronological display of events, activities, or process steps with proper semantic structure and accessibility.

## Basic Timeline

```html
<div class="timeline" role="list" aria-label="Project timeline">
  <article class="timeline-item" role="listitem">
    <div class="timeline-marker" aria-hidden="true"></div>
    <div class="timeline-content">
      <header>
        <h3>Project Started</h3>
        <time datetime="2025-01-15">January 15, 2025</time>
      </header>
      <p>Initial project kickoff and team formation.</p>
    </div>
  </article>
  
  <article class="timeline-item" role="listitem">
    <div class="timeline-marker" aria-hidden="true"></div>
    <div class="timeline-content">
      <header>
        <h3>Design Phase Complete</h3>
        <time datetime="2025-02-28">February 28, 2025</time>
      </header>
      <p>All wireframes and mockups finalized and approved.</p>
    </div>
  </article>
  
  <article class="timeline-item active" role="listitem">
    <div class="timeline-marker" aria-hidden="true">
      <i class="fas fa-code" aria-hidden="true"></i>
    </div>
    <div class="timeline-content">
      <header>
        <h3>Development Phase</h3>
        <time datetime="2025-07-21">July 21, 2025</time>
      </header>
      <p>Currently building the core features and components.</p>
    </div>
  </article>
</div>
```

## Horizontal Timeline

```html
<div class="timeline horizontal" role="list" aria-label="Product roadmap">
  <article class="timeline-item completed" role="listitem">
    <div class="timeline-marker" aria-hidden="true">
      <i class="fas fa-check" aria-hidden="true"></i>
    </div>
    <div class="timeline-content">
      <h4>Q1 2025</h4>
      <p>MVP Launch</p>
    </div>
  </article>
  
  <article class="timeline-item active" role="listitem">
    <div class="timeline-marker" aria-hidden="true"></div>
    <div class="timeline-content">
      <h4>Q3 2025</h4>
      <p>Feature Expansion</p>
    </div>
  </article>
  
  <article class="timeline-item" role="listitem">
    <div class="timeline-marker" aria-hidden="true"></div>
    <div class="timeline-content">
      <h4>Q4 2025</h4>
      <p>Global Release</p>
    </div>
  </article>
</div>
```

## CSS Variables

```css
.timeline {
  --timeline-line-color: var(--a-color-outline);
  --timeline-marker-bg: var(--a-color-surface);
  --timeline-marker-border: var(--a-color-primary);
  --timeline-active-color: var(--a-color-primary);
}
```

## Accessibility Features

- Proper semantic structure with `<article>` and `<time>` elements
- ARIA roles for list semantics
- Screen reader friendly content
- Keyboard navigation support
