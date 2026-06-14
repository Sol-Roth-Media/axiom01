# Component Page Standard - Documentation

## Overview
All 68 component documentation pages in axiom01 follow a unified standard for consistency, accessibility, and user experience.

## Required Structure

Every component page MUST have the following structure:

### 1. **HTML Header & CSS Includes**
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Component Name] - Axiom01</title>
    <link rel="stylesheet" href="../../css/axiom.css">
    <link rel="stylesheet" href="../../css/doc-styles.css">
    <link rel="stylesheet" href="../../css/doc-preview.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" .../>
    <!-- Fonts -->
</head>
```

**REQUIRED CSS FILES:**
- ✓ `../../css/axiom.css` - Core framework styles
- ✓ `../../css/doc-styles.css` - Documentation page styles
- ✓ `../../css/doc-preview.css` - Component preview and layout styles

### 2. **Body Element**
```html
<body class="axiom-body component-doc">
```

**REQUIRED Classes:**
- `axiom-body` - Core body styling
- `component-doc` - Component documentation page styling

### 3. **Header Navigation**
```html
<header class="main" data-component="mobile-navbar">
    <nav role="navigation" aria-label="Main Navigation">
        <a href="../../index.html" class="brand">...</a>
        <ul class="links">
            <!-- Navigation links -->
        </ul>
        <div class="actions">
            <!-- Search, GitHub, Theme toggle, Menu toggle -->
        </div>
    </nav>
</header>
```

**REQUIRED:**
- `data-component="mobile-navbar"` - Enables mobile menu component
- Mobile-responsive navigation with menu toggle button
- Theme toggle button (id="theme-toggle")
- Search functionality

### 4. **Main Content Area**
```html
<main class="content">
    <section class="hero">
        <div class="container">
            <h1>[Component Name]</h1>
            <p>[Component Description]</p>
        </div>
    </section>

    <div class="component-section">
        <section>
            <div class="container">
                <h2>Section Title</h2>
                <!-- Content -->
            </div>
        </section>
    </div>
    <!-- More component-sections as needed -->
</main>
```

**REQUIRED:**
- `<main class="content">` - Main content container
- `<section class="hero">` - Hero section with component title and description
- `<div class="container">` - Content wrapper for proper spacing
- `<div class="component-section">` - Wrapper for each content section

### 5. **Footer**
```html
<footer class="main">
    <div class="content">
        <div class="brand">
            <a href="../../index.html" class="logo">[Ax<span class="primary">01</span>]</a>
            <p class="tagline">The Semantic Web, Reimagined.</p>
        </div>
        <div class="links">
            <!-- Documentation, Community, More links -->
        </div>
    </div>
    <div class="bottom">
        <p>&copy; <span id="current-year"></span> Axiom01. All Rights Reserved.</p>
    </div>
</footer>
```

### 6. **JavaScript Includes (in this order)**
```html
<script src="../../js/axiom.js"></script>
<script src="../../js/index-page-manager.js"></script>
</body>
</html>
```

**REQUIRED:**
- `axiom.js` - Component framework (must be first)
- `index-page-manager.js` - Page manager for theme, search, etc.

## Styling Classes

### Component Document Styling
- `axiom-body` - Core body styling
- `component-doc` - Component documentation page
- `content` - Main content container with proper padding
- `component-section` - Section wrapper for component demos
- `hero` - Hero section (title and description)
- `container` - Content width constraint and horizontal padding

### Component Classes
- `section` - Standard section for content
- `live` - Live demo container
- `code-block` - Code snippet display
- `title` - Section titles
- `description` - Section descriptions

## CSS Variables Used

The component pages use axiom01's comprehensive CSS variable system:

### Spacing
- `--a-space-m` - Medium spacing
- `--a-space-l` - Large spacing
- `--a-space-xl` - Extra large spacing
- `--a-space-xxl` - 2x extra large spacing

### Colors
- `--a-color-surface` - Background color
- `--a-color-on-surface` - Text color on surface
- `--a-color-outline` - Border color

### Typography
- `--a-font-size-l` - Large font size
- `--a-font-weight-bold` - Bold weight
- `--a-border-radius-medium` - Medium border radius
- `--a-shadow-large` - Large shadow effect

## Hero Section

Every component page MUST have a hero section that appears immediately after the main tag:

```html
<section class="hero">
    <div class="container">
        <h1>[Component Name]</h1>
        <p>[Short description of what the component does]</p>
    </div>
</section>
```

**Hero Section Features:**
- ✓ Proper spacing with doc-preview.css
- ✓ Clear typography hierarchy
- ✓ Readable text color (adapts to light/dark modes)
- ✓ No overlap with fixed header
- ✓ Responsive padding on all screen sizes

## Mobile Responsiveness

Component pages are fully responsive:

### Mobile Navigation (< 768px)
- Mobile menu toggle button appears
- Mobile navbar component handles all interactions
- Menu auto-closes on link click
- Full screen width utilization

### Hero Sections
- Responsive padding scales with viewport
- Maintains readability on small screens
- No text overlap or overflow

### Content Sections
- Flex layout adapts to screen size
- Container width constraints maintained
- Touch-friendly spacing and targets

## Light & Dark Modes

All component pages support light and dark modes:

- Theme toggle in header
- Theme saved to localStorage
- Colors adapt automatically via CSS variables
- Hero text color uses `--a-color-on-surface` for readability in both modes

## Accessibility Features

Component pages meet WCAG accessibility standards:

- Semantic HTML structure
- ARIA labels and roles where needed
- Mobile navbar component handles keyboard navigation
- Theme toggle with aria-label
- Proper heading hierarchy (h1 → h2 → h3)
- Search modal with proper focus management

## Scripts & Functionality

### axiom.js
- Initializes components with data-component attributes
- Dynamically loads component modules
- Manages component lifecycle

### index-page-manager.js
- Handles theme toggling
- Manages search functionality
- Smooth scrolling for anchor links
- Dynamic copyright year
- Dropdown management
- Component browser functionality

### mobile-navbar.js (via axiom.js)
- Handles mobile menu toggle
- Auto-close on navigation
- ARIA attribute management

## Common Issues & Solutions

### Issue: Hero text is white-on-white
**Solution:** Ensure doc-preview.css includes:
```css
.component-doc section.hero p {
    color: var(--a-color-on-surface) !important;
}
```

### Issue: Mobile menu not responding
**Solution:** 
1. Ensure header has `data-component="mobile-navbar"`
2. Include `axiom.js` in scripts
3. Don't duplicate mobile menu logic in index-page-manager.js

### Issue: Hero overlaps fixed header
**Solution:** Ensure main.content has proper top padding:
```css
.component-doc main.content {
    padding-top: 80px;
}
```

## Checklist for New Component Pages

When creating a new component documentation page:

- [ ] Created file in `/docs/components/`
- [ ] HTML structure matches template above
- [ ] CSS files included: axiom.css, doc-styles.css, doc-preview.css
- [ ] Body class includes "component-doc"
- [ ] Header has data-component="mobile-navbar"
- [ ] Hero section present with title and description
- [ ] Content wrapped in component-section divs
- [ ] Scripts included: axiom.js, index-page-manager.js
- [ ] Footer present with dynamic year
- [ ] Tested in light and dark modes
- [ ] Tested on mobile (< 768px)
- [ ] Mobile menu works correctly
- [ ] Hero section properly styled (no overlap, readable text)

## Current Status

✅ **68 component pages** all compliant with this standard:
- 67 component documentation pages
- 1 dynamic content management page

✅ **100% audit compliance:**
- doc-preview.css included
- Hero sections present
- Component-section wrappers
- Scripts loaded
- Proper structure

## Maintenance Guidelines

### Mobile Menu Changes
**NEVER** duplicate mobile menu initialization!
- Edit: `js/components/mobile-navbar.js`
- Test on: index.html (without data-component) AND component pages (with data-component)

### Hero Section Changes
- Edit: `css/doc-preview.css`
- Affects: All 68 component pages
- Test: Light mode, dark mode, mobile view

### Theme Changes
- Edit: `css/axiom.css` (CSS variables)
- Edit: `js/index-page-manager.js` (if adding new theme)
- Test: All 68 pages in new theme

## Related Documentation

- MOBILE_MENU_FIX.md - Root cause analysis of mobile menu conflict
- Session 2 Summary - Component page standardization work
- axiom01 Framework Documentation - Full feature documentation

---

**Last Updated:** 2024
**Audit Status:** ✅ 100% Compliance (68/68 pages)
**Mobile Menu:** ✅ Fixed (no duplicate initialization)
