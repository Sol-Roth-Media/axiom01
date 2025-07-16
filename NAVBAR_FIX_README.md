# Advanced Navbar Implementation & Integration Guide

## Overview
The Axiom01 advanced navbar is now the default navigation component for index.html and all major pages. It provides:
- Dropdown menu support with keyboard navigation and ARIA attributes
- Search functionality
- Sticky navigation option
- Scroll-aware appearance
- Font Awesome hamburger icon for mobile
- Theme switcher and theme toggle button
- Accessibility features (skip to content link, ARIA attributes, live region announcements)
- Responsive design for all screen sizes

## Integration Steps
1. **Include Styles**
   Add to your `<head>` after other CSS files:
   ```html
   <link rel="stylesheet" href="css/navbar.css">
   ```
2. **Include JavaScript**
   Add before the closing `</body>` tag, after other scripts:
   ```html
   <script src="js/navbar.js"></script>
   ```
3. **Font Awesome**
   Ensure Font Awesome is included for icons:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
   ```
4. **Navbar Markup**
   Use the markup from index.html or navbar-advanced.html for full feature support. See those files for examples.

## Features
- **Dropdown Menus:** Add `.dropdown` to `<li>` for nested menus. Keyboard and ARIA support included.
- **Search:** Add a `.search-container` for search input and button.
- **Sticky & Scroll-Aware:** Add `.sticky` and `.scroll-aware` classes for advanced behavior.
- **Theme Switcher:** Use `.theme-switcher-container` and `.theme-toggle` for theme selection and toggling.
- **Accessibility:** Includes skip to content, ARIA attributes, live region announcements, and keyboard navigation.
- **Mobile Menu:** Hamburger icon and menu toggle work on all screen sizes.

## Troubleshooting
- If the menu toggle or dropdowns do not work, ensure both navbar.css and navbar.js are included and there are no conflicting scripts.
- For legacy support, you may use navbar-fix.css and navbar-fix.js, but these are deprecated in favor of the advanced implementation.
- Always use the markup structure from index.html or navbar-advanced.html for best results.
- If icons do not appear, confirm Font Awesome is loaded after other CSS files.
- For sticky/scroll-aware features, ensure the relevant classes are present in your markup.

## Legacy Files
- `navbar-fix.css` and `navbar-fix.js` are retained for legacy support only. Use `navbar.css` and `navbar.js` for all new development.

## Documentation & Demos
- [Style Guide (HTML)](style-guide.html)
- [Component Demos](examples/components.html)
- [Audit Progress](AUDIT_PROGRESS.md)
- [AXIOM01_STYLING_GUIDE.md](AXIOM01_STYLING_GUIDE.md)
- [Semantic Color & Gradient Swatches](index.html#colors)
