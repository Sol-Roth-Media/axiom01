# Paywall Component

Subscription and access control interfaces with clear messaging and accessible payment flows.

## Basic Paywall

```html
<div class="paywall" role="dialog" aria-labelledby="paywall-title" aria-describedby="paywall-description">
  <div class="paywall-content">
    <header class="paywall-header">
      <h2 id="paywall-title">Premium Content</h2>
      <p id="paywall-description">This content is available to subscribers only.</p>
    </header>
    
    <div class="paywall-preview">
      <p>Get unlimited access to premium articles, exclusive content, and ad-free reading.</p>
    </div>
    
    <div class="paywall-actions">
      <button class="button primary large">Subscribe Now</button>
      <button class="button secondary">Sign In</button>
    </div>
    
    <div class="paywall-benefits">
      <ul>
        <li>
          <i class="fas fa-check" aria-hidden="true"></i>
          <span>Unlimited premium articles</span>
        </li>
        <li>
          <i class="fas fa-check" aria-hidden="true"></i>
          <span>Ad-free experience</span>
        </li>
        <li>
          <i class="fas fa-check" aria-hidden="true"></i>
          <span>Exclusive newsletter</span>
        </li>
      </ul>
    </div>
  </div>
</div>
```

## Soft Paywall

```html
<article class="content-preview">
  <header>
    <h1>Article Title</h1>
    <p class="article-meta">Published on July 21, 2025</p>
  </header>
  
  <div class="content-excerpt">
    <p>This is the beginning of the article that everyone can read...</p>
  </div>
  
  <div class="paywall soft" role="region" aria-label="Subscription required">
    <div class="gradient-overlay" aria-hidden="true"></div>
    <div class="paywall-message">
      <h3>Continue Reading</h3>
      <p>Subscribe to read the full article and get access to our entire library.</p>
      <div class="paywall-actions">
        <button class="button primary">Subscribe</button>
        <button class="button tertiary">Already a member? Sign in</button>
      </div>
    </div>
  </div>
</article>
```

## CSS Variables

```css
.paywall {
  --paywall-bg: var(--a-color-surface);
  --paywall-border: var(--a-color-outline);
  --paywall-overlay: linear-gradient(transparent, var(--a-color-surface));
  --paywall-shadow: var(--a-shadow-large);
}
```

## Accessibility Features

- Proper dialog roles and ARIA labels
- Clear benefit descriptions
- Keyboard navigation support
- Screen reader friendly content structure
