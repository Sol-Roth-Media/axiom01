# Getting Started with Axiom01

> Quick start guide for developers building websites with Axiom01

## Installation Options

### Option 1: CDN (Fastest)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Axiom01 Site</title>
    <!-- Axiom01 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01@latest/dist/css/axiom.min.css">
</head>
<body>
    <!-- Your content here -->
    <button class="primary">Get Started</button>
    
    <!-- Axiom01 JavaScript (optional) -->
    <script src="https://cdn.jsdelivr.net/npm/axiom01@latest/dist/js/axiom.min.js"></script>
</body>
</html>
```

### Option 2: npm Package
```bash
npm install axiom01
```

```javascript
// Import full framework
import 'axiom01/dist/css/axiom.css';
import 'axiom01/dist/js/axiom.js';

// Or just core components (smaller bundle)
import 'axiom01/dist/css/axiom-core.css';
import 'axiom01/dist/js/axiom-core.js';
```

### Option 3: Download & Host
1. Download from [GitHub Releases](https://github.com/yourusername/axiom01/releases)
2. Extract the `dist/` folder to your project
3. Include the CSS and JS files in your HTML

## Basic Usage

### HTML Structure
Axiom01 follows semantic HTML principles:

```html
<!-- Card Component -->
<article class="card">
    <header>
        <h3>Card Title</h3>
    </header>
    <section>
        <p>Card content goes here.</p>
    </section>
    <footer>
        <button class="primary">Action</button>
    </footer>
</article>

<!-- Form Component -->
<form class="form">
    <fieldset>
        <legend>Contact Form</legend>
        <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" required>
        </div>
        <div class="field">
            <label for="message">Message</label>
            <textarea id="message" rows="4"></textarea>
        </div>
    </fieldset>
    <footer>
        <button type="submit" class="primary">Send</button>
    </footer>
</form>
```

### CSS Classes
Axiom01 uses semantic class names:

```css
/* Buttons */
.primary      /* Main action button */
.secondary    /* Secondary action */
.tertiary     /* Subtle action */
.danger       /* Destructive action */
.success      /* Positive action */

/* Layout */
.container    /* Main content container */
.card         /* Content card */
.modal        /* Dialog/popup */

/* Forms */
.form         /* Form wrapper */
.field        /* Form field container */
.help         /* Help text */
```

### JavaScript (Optional)
Many components work without JavaScript, but enhanced features require it:

```javascript
// Initialize all components (automatic)
// Components self-register when the page loads

// Or initialize specific components
AxiomComponents.init('modal');
AxiomComponents.init('drawer');
```

## Core Concepts

### 1. Semantic HTML First
Every component uses proper HTML semantics:
- `<article>` for cards
- `<dialog>` for modals  
- `<nav>` for navigation
- `<fieldset>` for form groups

### 2. Progressive Enhancement
- Basic functionality works without JavaScript
- Enhanced features layer on top
- Graceful degradation for older browsers

### 3. Accessibility Built-in
- ARIA attributes included
- Keyboard navigation support
- Screen reader compatible
- High contrast support

### 4. CSS Custom Properties
Modern theming with CSS variables:
```css
:root {
    --a-color-primary-500: #3b82f6;
    --a-space-md: 1rem;
    --a-radius-md: 0.5rem;
}
```

## Theming

### Quick Theme Switch
```html
<!-- Light theme (default) -->
<html>

<!-- Dark theme -->
<html data-theme="dark">

<!-- Other themes -->
<html data-theme="forest">
<html data-theme="ocean">
<html data-theme="sunset">
```

### Custom Colors
Override CSS custom properties:
```css
:root {
    --a-color-primary-500: #your-brand-color;
    --a-color-primary-600: #your-darker-shade;
}
```

### System Preference
Respects user's system dark/light preference automatically.

## Bundle Options

Choose the right bundle for your needs:

| Bundle | Size | Use When |
|--------|------|----------|
| **Core** | ~25KB | Using basic components only |
| **Full** | ~45KB | Need all components |
| **Individual** | ~2-5KB each | Want maximum optimization |

```html
<!-- Core bundle (recommended for most sites) -->
<link rel="stylesheet" href="axiom01/dist/css/axiom-core.min.css">
<script src="axiom01/dist/js/axiom-core.min.js"></script>

<!-- Full bundle (if you need all components) -->
<link rel="stylesheet" href="axiom01/dist/css/axiom.min.css">
<script src="axiom01/dist/js/axiom.min.js"></script>

<!-- Individual components -->
<link rel="stylesheet" href="axiom01/dist/css/button.css">
<link rel="stylesheet" href="axiom01/dist/css/card.css">
```

## Browser Support

- **Modern browsers**: Full support with all features
- **Older browsers**: Graceful degradation with CSS custom property fallbacks
- **Mobile**: Optimized for touch and small screens

## Next Steps

1. **Explore Components**: Check out the [component library](../components/)
2. **Try the Playground**: Use our [interactive playground](../interactive-playground.html)
3. **Customize Themes**: Use the [theme wizard](../theme-customization-wizard.html)
4. **Read the Docs**: See our [full documentation](../docs/)

## Need Help?

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/axiom01/issues)
- **Discussions**: [Ask questions](https://github.com/yourusername/axiom01/discussions)
- **Examples**: [View example sites](../examples/)

---

[← Back to README](../README.md) | [Components Overview →](components.md)
