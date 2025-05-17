# Axiom01 UI Framework
Welcome to Axiom01, a modern and flexible UI framework designed for building beautiful, accessible, and themeable web interfaces.

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


## Getting Started
### Installation
Simply download or clone this repository:
``` bash
git clone https://github.com/yourusername/axiom01.git
```
#### Option 2: Using NPM
If you're using Node.js, you can install Axiom01 via NPM:
### Basic Usage
1. Include the necessary CSS files in your HTML:
``` html
<link rel="stylesheet" href="css/axiom.css">
```
1. Include the JavaScript file at the end of your body:
``` html
<script src="js/scripts.js"></script>
```
1. Start using Axiom01 components in your HTML.

## Features
### Theming System
Axiom01 comes with multiple built-in themes. You can switch themes by:
- Using the theme switcher dropdown
- Toggling between light/dark modes
- Setting a data-theme attribute on the html element
``` html
<html data-theme="dark">
```
### Components
Axiom01 includes several ready-to-use components:
- **Buttons**: Primary, secondary, outline variants
- **Navigation**: Responsive navbar with mobile support
- **Cards**: Flexible content containers
- **Tabs**: Accessible tabbed interfaces
- **Accordions**: Collapsible content panels
- **Dropdowns**: Menu dropdown components
- **Form elements**: Styled inputs, checkboxes, radio buttons
- **Progress indicators**: Progress bars and loading throbbers

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
- : Framework-wide variables like spacing, typography, etc. `axiom_vars.css`
- : Theme color definitions `colors_vars.css`

## Browser Support
Axiom01 supports all modern browsers, including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
Contributions to Axiom01 are welcome and appreciated! Here's how you can contribute:
### Reporting Issues
If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/yourusername/axiom01/issues).
### Development Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards
- Use consistent indentation (2 spaces)
- Follow BEM methodology for CSS class naming
- Add comments for any complex logic
- Ensure new components are accessible

## License
Axiom01 is open source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Acknowledgments
- Inspired by modern UI frameworks and design systems
- Created with accessibility and theming as core principles

This is the first release (v0.1) of Axiom01. We're excited to see what you build with it!