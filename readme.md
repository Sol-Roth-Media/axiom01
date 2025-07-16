# Axiom01 UI Framework
Craft beautiful interfaces with less markup — Axiom01 enhances your HTML, not your class count. 🔥

## Quick Links
- [Axiom01 Style Guide](style-guide.html)
- [Grid System Examples](grid-examples.html)
- [Navbar Documentation & Demo](navbar-docs.html)
- [Component Demos](examples/components.html)

## Recent Features & Refactors
- **Accessibility**: All major components (modal, notification, datepicker) now include ARIA attributes, keyboard navigation, and improved focus states.
- **Feature Toggles**: JS and CSS now support runtime feature toggles for CSS variables, documented for maintainability.
- **Semantic Usage**: All components use semantic HTML and variable-driven patterns; legacy/utility-heavy classes removed.
- **Documentation Sync**: All docs now include direct links to style guide, grid examples, navbar docs, and component demos. Feature summaries and recent refactors are documented.
- **Component Audits**: Medium-priority tasks for accessibility and documentation are complete; minor enhancements remain.

## Overview
Axiom01 is a lightweight CSS and JavaScript framework that focuses on:
- **Theming**: Built-in support for multiple themes including light, dark, and specialty themes
- **Accessibility**: ARIA-compliant components and keyboard navigation
- **Flexibility**: CSS variables for easy customization
- **Modularity**: Use only what you need

## The Axiom Philosophy

Axiom01 is built on several core principles that make it different from other UI frameworks:

### Minimal Class Usage

Unlike many CSS frameworks that require numerous utility classes, Axiom01 leverages the power of semantic HTML and CSS variables. This approach:

- Reduces HTML bloat by minimizing the number of classes needed
- Promotes cleaner, more maintainable markup
- Encourages proper semantic HTML structure
- Makes your code more readable and easier to maintain

### CSS Variables Over Classes

Axiom01 uses CSS custom properties (variables) extensively to:
- Create consistent design patterns
- Enable easy theming and customization
- Allow for dynamic style changes without JavaScript
- Provide a clean way to override defaults without specificity issues

### Accessibility First

Accessibility isn't an afterthought—it's built into the framework from the ground up:
- ARIA attributes are implemented in all interactive components
- Keyboard navigation works out of the box
- Color contrast meets WCAG guidelines
- Focus states are clearly visible

### Performance Focused

Axiom01 is designed to be lightweight and performant:
- Minimal JavaScript dependencies
- No external libraries required
- Optimized CSS with low specificity
- Only the components you need

### Components
Axiom01 includes several ready-to-use components:
- **Buttons**: Primary, secondary, outline variants
- **Alerts**: Success, error, warning, info
- **Cards**: Flexible layouts
- **Modals**: Accessible dialogs
- **Tabs, Accordions, Dropdowns**: Keyboard and ARIA support
- **Navbar**: Responsive, accessible, theme-aware
- **Grid System**: Semantic, variable-driven layouts

## Recent Updates
- All CSS files now use standardized variables for spacing, colors, and typography
- Navbar refactored for accessibility and theme responsiveness
- New component demos and documentation added
- Improved ARIA and keyboard navigation in all interactive components

### Theming & Color System
Axiom01 provides 20+ built-in themes and a comprehensive color system:
- All colors, gradients, and surfaces are defined as CSS variables and update automatically with theme changes.
- The documentation now includes a dedicated color and gradient swatch section with inline tooltips, usage notes, and accessibility features.
- Semantic color variables (success, error, warning, info, surface, background, outline) are used throughout for clarity and maintainability.

### Accessibility & Tooltips
- All color and gradient swatches are keyboard and screen reader accessible, with ARIA labels and tooltips for usage notes.
- Interactive components (navbar, dropdowns, tabs, accordions) include ARIA roles and keyboard navigation.

## Getting Started
### Installation
Simply download or clone this repository:
``` bash
git clone https://github.com/Sol-Roth-Media/axiom01.git
```
#### Option 2: Using NPM
If you're using Node.js, you can install Axiom01 via NPM:
```bash
npm install axiom01
```
### Basic Usage
1. Include the necessary CSS files in your HTML:
   ```html
   <link rel="stylesheet" href="css/axiom.css">
   ```
2. Include the JavaScript file at the end of your body:
   ```html
   <script src="js/scripts.js"></script>
   ```
3. Start using Axiom01 components in your HTML.

## Features
### Theming System
Axiom01 comes with 20+ built-in themes across multiple categories. Themes in Axiom01 are powerful and can modify many aspects of your site beyond just colors, including:

- Color palettes and relationships
- Spacing and layout variables
- Typography characteristics
- Shadow properties
- Gradient definitions
- Border radiuses and other styling properties

You can switch themes by:
- Using the theme switcher dropdown
- Toggling between light/dark modes
- Setting a data-theme attribute on the html element
``` html
<html data-theme="dark">
```

#### Available Themes

Axiom01 includes the following theme categories:

**Core Themes**
- `light` - Default light theme with blue accent colors
- `dark` - Dark mode with adjusted contrast and inverted surfaces

**Aesthetic Themes**
- `aesthetic` - Soft blue and pink palette with muted saturation
- `light-aesthetic` - Light version with pink and purple accents
- `dark-aesthetic` - Dark version with pink and purple accents

**Vibrant Themes**
- `purple-haze` - Rich purple and pink gradient with vibrant colors
- `electric-neon` - Vibrant, high-contrast neon colors on a dark background
- `cyberpunk` - High-tech, dystopian aesthetic with bright accent colors
- `sunset` - Warm orange and purple gradients reminiscent of dusk

**Cinematic Themes**
- `cinematic-dark` - Film-noir inspired dark theme with dramatic contrast
- `cinematic-red` - Bold red accents against dark backgrounds for visual impact

**Specialty Themes**
- `blue` - Blue-focused color scheme
- `gray` - Grayscale theme with minimal saturation
- `forest` - Natural greens and earth tones for a calming nature-inspired look
- `metallic-chic` - Sophisticated silver and gold accents with subtle gradients
- `deep-vintage` - Rich, aged colors with classic styling and warm undertones
- `mechanical-floaty` - Industrial tones with airy, lightweight accents
- `cool-collected` - Balanced cool tones with thoughtful color placement
- `monotone` - Single-hue design with varying shades and tints
- `sepia` - Warm brown tones reminiscent of vintage photographs

#### Creating Custom Themes

To create a custom theme, add a new CSS rule set in your project:

```css
/* === Custom Theme === */
html[data-theme='my-custom-theme'],
.my-custom-theme {
    /* Base HSL components */
    --a-color-primary-hue: 340; /* Your primary color hue */
    --a-color-secondary-hue: 260; /* Your secondary color hue */
    --a-color-tertiary-hue: 180; /* Your tertiary color hue */

    /* Saturation levels */
    --a-saturation-primary: 75%;
    --a-saturation-secondary: 70%;
    --a-saturation-tertiary: 60%;

    /* Brightness values */
    --a-brightness-primary: 50%;
    --a-brightness-primary-container: 90%;

    /* Surface colors */
    --a-color-surface: hsl(340, 15%, 10%);
    --a-color-on-surface: hsl(340, 10%, 95%);

    /* Other variables you want to customize */
    --a-space-base: 18px; /* Adjust base spacing */
    --a-border-radius-base: 8px; /* Adjust border radius */

    /* Custom gradients */
    --a-gradient-primary: linear-gradient(135deg,
        hsl(340, 75%, 50%),
        hsl(260, 70%, 50%));
}
```

Then register your theme in JavaScript:

```javascript
// Add to availableThemes array
const availableThemes = [
    // ... existing themes
    { 
        value: 'my-custom-theme', 
        name: 'My Custom Theme', 
        description: 'Description of your custom theme'
    }
];
```
### Components
Axiom01 includes several ready-to-use components:
- **Buttons**: Primary, secondary, outline variants
- **Alerts**: Success, error, warning, info
- **Cards**: Flexible layouts
- **Modals**: Accessible dialogs
- **Tabs, Accordions, Dropdowns**: Keyboard and ARIA support
- **Navbar**: Responsive, accessible, theme-aware
- **Grid System**: Semantic, variable-driven layouts

##### Suggested New Components

The following components would make the Axiom01 UI framework more robust:

1. **Carousel/Slider**: Interactive image or content sliders with navigation controls
2. **Autocomplete**: Input field with suggestions as the user types
3. **Date Picker**: Calendar-based date selection component
4. **Tooltip (JS-enhanced)**: Enhanced tooltips with positioning and interaction
5. **Form Validation**: Client-side form validation with error messaging
6. **Infinite Scroll**: Automatically load more content as the user scrolls
7. **Lightbox**: Image/media viewer with overlay and navigation
8. **Drag and Drop**: Sortable lists and draggable elements

#### JavaScript Component System

Axiom01 includes a lightweight JavaScript component system that enhances HTML elements with interactive functionality. The system is designed to be unobtrusive, accessible, and easy to use.

##### How JavaScript Components Work

Axiom01's JavaScript components follow these principles:

- **Progressive Enhancement**: Components work with basic HTML and are enhanced with JavaScript
- **Accessibility**: All components include proper ARIA attributes and keyboard navigation
- **Automatic Initialization**: Components are automatically initialized when the page loads
- **No Dependencies**: Pure vanilla JavaScript with no external libraries required

##### Component Initialization

All JavaScript components are automatically initialized when the DOM is loaded through the `initAxiom()` function:

```javascript
// Main initialization function
function initAxiom() {
    initThemeSelector();
    initMobileMenu();
    initTabs();
    initAccordion();
    initDropdowns();
    initProgressDemo();
    initThrobberDemo();
}

// Run all initializations after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAxiom);
```

##### Using JavaScript Components

To use Axiom01's JavaScript components:

1. Include the `scripts.js` file in your HTML:
   ```html
   <script src="js/scripts.js"></script>
   ```
2. Add the appropriate HTML markup for the component you want to use
3. The components will be automatically initialized when the page loads

##### Available JavaScript Components

Axiom01 includes the following JavaScript components:

1. **Theme System**: 
   - Enables theme toggling and selection
   - Persists theme selection in localStorage
   - Automatically updates UI elements when theme changes

2. **Mobile Menu**:
   - Provides responsive navigation for mobile devices
   - Handles touch and keyboard interactions
   - Manages accessibility attributes for screen readers

3. **Tabs**:
   - Creates accessible tabbed interfaces
   - Supports keyboard navigation (arrow keys, home, end)
   - Manages ARIA attributes for accessibility

4. **Accordion**:
   - Creates collapsible content panels
   - Manages expand/collapse functionality
   - Handles keyboard interactions and accessibility

5. **Dropdown Menu**:
   - Provides interactive dropdown menus
   - Manages focus and keyboard navigation
   - Handles click-outside-to-close behavior

6. **Progress Bar**:
   - Creates interactive progress indicators
   - Updates ARIA attributes for accessibility
   - Supports programmatic updates

7. **Loading Throbber**:
   - Provides animated loading indicators
   - Can be toggled programmatically
   - Includes proper ARIA attributes for screen readers

##### Customizing Components

You can customize the behavior of components by modifying the initialization functions in `scripts.js`. Each component has its own initialization function that you can modify or extend.

##### Creating Custom Components

To create a custom component:

1. Add a new initialization function to `scripts.js`
2. Call your initialization function from `initAxiom()`
3. Create the necessary HTML markup and CSS for your component

Example:

```javascript
// Example of a custom component initialization function
function initCustomComponent() {
    const elements = document.querySelectorAll('.custom-component');

    elements.forEach(element => {
        // Add event listeners and functionality
        element.addEventListener('click', () => {
            // Your custom logic here
        });
    });
}

// Add to the initAxiom function
function initAxiom() {
    // Existing initializations...
    initCustomComponent(); // Add your custom component
}
```

##### Suggested New Components

The following components would make the Axiom01 UI framework more robust:

1. **Modal/Dialog**: Accessible modal windows for displaying content that requires user interaction
2. **Carousel/Slider**: Interactive image or content sliders with navigation controls
3. **Autocomplete**: Input field with suggestions as the user types
4. **Date Picker**: Calendar-based date selection component
5. **Tooltip (JS-enhanced)**: Enhanced tooltips with positioning and interaction
6. **Notification System**: Centralized system for managing toast notifications
7. **Form Validation**: Client-side form validation with error messaging
8. **Infinite Scroll**: Automatically load more content as the user scrolls
9. **Lightbox**: Image/media viewer with overlay and navigation
10. **Drag and Drop**: Sortable lists and draggable elements

### Grid System
A flexible CSS Grid-based layout system with responsive breakpoints.
``` html
<div class="row">
  <div class="col-6 col-md-4">Column 1</div>
  <div class="col-6 col-md-8">Column 2</div>
</div>
```
### Typography
Consistent typographic scale with responsive adjustments.
## Customization
Axiom01 uses CSS variables for easy customization. The main configuration files are:

- `axiom_vars.css`: Framework-wide variables like spacing, typography, etc.
- `colors_vars.css`: Theme color definitions and color palette generation
- `axiom_config.css`: Central configuration for breakpoints, animations, and framework settings

### CSS Variables

Axiom01 uses a consistent naming convention for CSS variables:

- All variables are prefixed with `--a-` to avoid conflicts with other libraries
- Color variables follow a semantic naming pattern: `--a-color-[role]-[variant]`
- Spacing variables use descriptive names: `--a-space-small`, `--a-space-medium`, etc.

Examples of commonly used variables:

```
/* Colors */
--a-color-primary: hsl(220, 70%, 50%);       /* Primary brand color */
--a-color-on-primary: hsl(220, 5%, 98%);     /* Text color on primary backgrounds */
--a-color-surface: hsl(220, 5%, 98%);        /* Main surface/background color */
--a-color-on-surface: hsl(220, 5%, 10%);     /* Main text color */

/* Spacing */
--a-space-small: 8px;                        /* Small spacing unit */
--a-space-base: 16px;                        /* Base spacing unit */
--a-space-large: 32px;                       /* Large spacing unit */

/* Typography */
--a-font-family-sans: "Open Sans", system-ui, sans-serif;
--a-font-size-base: 1rem;                    /* Base font size (typically 16px) */
--a-line-height-base: 1.6;                   /* Base line height */
```

You can override these variables in your own CSS to customize the framework to match your brand:

## Browser Support
Axiom01 supports all modern browsers, including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Feature Toggles for Customization
Axiom01 supports runtime feature toggles via CSS variables for:
- Animations (`--a-enable-animations`)
- Transitions (`--a-enable-transitions`)
- Font loading (`--a-enable-fonts`)
- CSS reset (`--a-use-css-reset`)

You can set these variables in your CSS (e.g., in axiom_config.css):
```css
:root {
  --a-enable-animations: true;
  --a-enable-transitions: true;
  --a-enable-fonts: true;
  --a-use-css-reset: true;
}
```

Axiom01's JavaScript components will automatically respect these toggles at runtime, enabling or disabling related features for accessibility and performance. See the [Styling Guide](AXIOM01_STYLING_GUIDE.md) and [Audit Progress](AUDIT_PROGRESS.md) for details.

## Documentation & Demos
- [Style Guide](style-guide.html): Visual reference for all components, colors, gradients, and layout patterns.
- [Component Demos](examples/components.html): Live interactive examples of all Axiom01 components.
- [Audit Progress](AUDIT_PROGRESS.md): Ongoing audit and refactoring status for the framework.

## Recent Improvements
- Enhanced color swatch documentation and accessibility in index.html
- All color and gradient swatches now respond to theme changes
- Improved layout and keyboard accessibility for swatch sections

## Color Swatches & Accessibility
Axiom01 provides comprehensive documentation and live demos for all semantic color variables, gradients, and grayscale swatches. All swatches include inline tooltips, ARIA labels, and usage notes, and respond to theme changes for accessibility and clarity. See [index.html](index.html) and [style-guide.html](style-guide.html) for details.

## Accessibility & Theming
Axiom01's color and gradient swatches are fully accessible, include tooltips and ARIA attributes, and respond to theme changes. See [index.html#colors](index.html#colors) and [style-guide.html](style-guide.html#colors) for details.

## Recent Improvements
- Color swatch section now includes inline tooltips, ARIA accessibility, and keyboard navigation.
- All color and gradient swatches respond to theme changes and use semantic CSS variables.
- Accessibility and documentation have been improved across all components.

## Accessibility & Performance
Axiom01 is built for accessibility and speed:
- All interactive components are ARIA-compliant
- Keyboard navigation is supported throughout
- Color contrast meets WCAG standards
- Minimal, optimized CSS and JS

## Contributing
We welcome contributions! Please see CONTRIBUTING.md for guidelines.

## License
Axiom01 is released under the MIT License. See LICENSE for details.

## Links
- [GitHub Repository](https://github.com/Sol-Roth-Media/axiom01)
- [Live Demo](docs/index.html)

## Acknowledgments
- Inspired by modern UI frameworks and design systems
- Created with accessibility and theming as core principles

This is the first release (v0.1) of Axiom01. We're excited to see what you build with it!

## Minimal CSS Philosophy

Axiom01 is built on a minimal, semantic-first CSS philosophy:
- **Semantic-First Styling:** Prefer semantic HTML elements (`header`, `section`, `footer`, `article`, etc.) over generic `div` containers. CSS targets these elements within components, reducing the need for extra classes.
- **Minimal & Meaningful Classes:** Use classes only for unique values or variants (e.g., `.primary`, `.card`). Avoid long, hyphenated class names and utility class stacking. Use camelCase for unique value classes.
- **Component Structure:** Structure components with semantic elements. For example:
  ```html
  <article class="card">
    <header>Card Title</header>
    <img src="..." alt="...">
    <section>Card content goes here.</section>
    <footer>Card actions</footer>
  </article>
  ```
  The CSS will style these sections automatically based on their element type and parent class.
- **Utility Classes:** Use utility classes for layout and color only when necessary (e.g., `.center`, `.primary`).

### Example: Card Component

**Before:**
```html
<div class="card card-header">
  <div class="card-header">Title</div>
  <div class="card-content">Content</div>
  <div class="card-footer">Actions</div>
</div>
```

**After:**
```html
<article class="card">
  <header>Title</header>
  <section>Content</section>
  <footer>Actions</footer>
</article>
```

**CSS:**
```css
.card header { /* styles for header */ }
.card section { /* styles for content */ }
.card footer { /* styles for footer */ }
```

By following these guidelines, your codebase will be cleaner, easier to maintain, and fully aligned with the Axiom01 philosophy

## Building Better Forms with Axiom01

Axiom01 provides a robust, accessible, and flexible system for building forms. Key features include:

### Semantic Structure & Grouping
- Use `<form>`, `<fieldset>`, and `<legend>` for logical grouping.
- Use `.formGroup` for spacing and organization of label/input pairs.
- Inline labels supported via `fieldset.inline-labels`.

### Validation & Messaging
- Add `data-axiom-validate` to your `<form>` for real-time validation and messaging.
- Validation messages are shown as users interact, with ARIA attributes for accessibility.
- Error, success, and info states are visually distinct.

### Example: Basic Form
```html
<form data-axiom-validate>
  <fieldset>
    <legend>Sign Up</legend>
    <div class="formGroup">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <div class="validationMessage"></div>
    </div>
    <div class="formGroup">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required minlength="8" />
      <div class="validationMessage"></div>
    </div>
    <div class="form-actions">
      <button type="submit" class="primary">Sign Up</button>
    </div>
  </fieldset>
</form>
```

### Accessibility Best Practices
- Labels are always associated with inputs via `for` and `id`.
- Validation messages use `role="alert"` and are linked to fields with `aria-invalid`.
- Keyboard navigation and focus states are clear and consistent.

### Advanced: Custom Validation
You can add custom validation logic by extending the JS or using the `setCustomValidity` API on inputs. Messages will be shown automatically.

### Form Group Patterns
- Use `.formGroup` for each label/input pair.
- Use `.form-actions` for submit/reset buttons.
- For horizontal forms, use `fieldset.inline-labels`.

### Messaging States
- Error: `.validationMessage.error`
- Success: `.validationMessage.success`
- Info: `.validationMessage.info`

### Example: Inline Labels
```html
<fieldset class="inline-labels">
  <div class="formGroup">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required />
    <div class="validationMessage"></div>
  </div>
</fieldset>
```

### Example: Multi-Field Form with Custom Validation
```html
<form data-axiom-validate>
  <fieldset>
    <legend>Profile</legend>
    <div class="formGroup">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required />
      <div class="validationMessage"></div>
    </div>
    <div class="formGroup">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required />
      <div class="validationMessage"></div>
    </div>
    <div class="formGroup">
      <label for="age">Age</label>
      <input type="number" id="age" name="age" min="1" max="120" required />
      <div class="validationMessage"></div>
    </div>
    <div class="formGroup">
      <label for="bio">Bio</label>
      <textarea id="bio" name="bio" maxlength="200"></textarea>
      <div class="validationMessage info">Max 200 characters.</div>
    </div>
    <div class="form-actions">
      <button type="submit" class="primary">Save</button>
      <button type="reset">Reset</button>
    </div>
  </fieldset>
</form>
```

### Example: Custom Validation (JS)
```js
// Add custom validation for matching passwords
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
confirm.addEventListener('input', function() {
  if (confirm.value !== password.value) {
    confirm.setCustomValidity('Passwords do not match');
  } else {
    confirm.setCustomValidity('');
  }
});
```

### Accessibility Recommendations
- Always use clear, descriptive labels.
- Group related fields with `<fieldset>` and `<legend>`.
- Use ARIA roles and attributes for dynamic messaging.
- Ensure keyboard navigation and focus states are visible.

### Recommendations for Further Improvement
- Add support for async validation (e.g., username availability).
- Provide helper text and tooltips for complex fields.
- Expand documentation with accessibility checklists and troubleshooting.
- Add more form examples to the style guide and live demos.
- Consider adding a form builder utility for rapid prototyping.

For more, see the [style guide](AXIOM01_STYLING_GUIDE.md) and live examples in [examples/components.html]

## Visual Design Tokens

Axiom01 provides a comprehensive set of CSS variables for colors, gradients, spacing, and more. See the [Style Guide](style-guide.html#gradient-swatches) for a live visual reference of all gradient variables and their usage.

### Gradient Variables

Axiom01 includes several built-in gradient variables for use in theming and design:

- `--a-gradient-primary`: Primary brand gradient
- `--a-gradient-secondary`: Secondary gradient for accents
- `--a-gradient-background`: Background gradient for sections
- `--a-gradient-card`: Gradient for card backgrounds
- `--a-gradient-button`: Gradient for button backgrounds

### Example Usage

To use a gradient variable, apply it to a CSS property like `background`:

```css
.my-element {
    background: var(--a-gradient-primary);
}
```

### Custom Gradients

You can define custom gradients using the built-in variables as a starting point:

```css
/* Custom gradient using built-in variables */
.my-custom-gradient {
    background: linear-gradient(
        var(--a-gradient-primary),
        var(--a-gradient-secondary)
    );
}
```

### Visual Reference

For a complete visual reference of all gradient variables and examples of their usage, see the [Gradient Swatches section](style-guide.html#gradient-swatches) of the Style Guide.

## Advanced Navbar Features
- Dropdown menus with keyboard navigation and ARIA attributes
- Search functionality
- Sticky and scroll-aware navigation
- Font Awesome hamburger icon for mobile
- Theme switcher and theme toggle button
- Accessibility features (skip to content, ARIA, live region announcements)
- Responsive design for all screen sizes

## Semantic Color & Gradient Swatches
Axiom01 now includes a dedicated section in index.html for semantic color and gradient variables. Each swatch is documented, accessible, and responds to theme changes. See [index.html#grayscale](index.html#grayscale) for details.

## Component Demos & Style Guide
- [Style Guide](style-guide.html): Best practices and live examples
- [Components Demo](components.html): Interactive component showcase

### Documentation & Demos
- [AXIOM01_STYLING_GUIDE.md](AXIOM01_STYLING_GUIDE.md): Quick styling guide and best practices
- [style-guide.html](style-guide.html): Full documentation of variables, components, and usage
- [examples/components.html](examples/components.html): Live component demos
- [navbar-advanced.html](navbar-advanced.html): Advanced navbar demo and markup

### Recent Refactors & Improvements
- Standardized all CSS variable usage for spacing, colors, and typography
- Improved accessibility and ARIA support across all components
- Added dedicated color and gradient swatch section to index.html
- Updated all documentation to match the latest implementation
