# Footer Component

Site footer with links, contact information, and accessibility features for consistent page endings.

## Basic Footer

```html
<footer class="footer" role="contentinfo">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Company</h3>
        <ul class="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/press">Press</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Support</h3>
        <ul class="footer-links">
          <li><a href="/help">Help Center</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Company Name. All rights reserved.</p>
      <div class="social-links">
        <a href="#" aria-label="Follow us on Twitter">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#" aria-label="Follow us on LinkedIn">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
```

## CSS Variables

```css
.footer {
  --footer-bg: var(--a-color-surface-variant);
  --footer-text: var(--a-color-on-surface);
  --footer-link-color: var(--a-color-on-surface-variant);
  --footer-border: var(--a-color-outline);
}
```

## Accessibility Features

- Proper `contentinfo` role for site footer
- Semantic heading structure for footer sections
- Screen reader friendly social media links
- High contrast support
