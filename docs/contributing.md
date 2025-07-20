# Contributing to Axiom01

> Guidelines for contributing to the Axiom01 UI framework

## 🚀 Quick Contribution Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/axiom01.git
cd axiom01

# Install dependencies
npm install

# Start development environment
npm run dev

# Run tests
npm test
```

## 🎯 Contribution Types

### 🐛 Bug Reports
- Use our [bug report template](https://github.com/yourusername/axiom01/issues/new?template=bug_report.md)
- Include browser/OS information
- Provide minimal reproduction case
- Check existing issues first

### ✨ Feature Requests
- Use our [feature request template](https://github.com/yourusername/axiom01/issues/new?template=feature_request.md)
- Explain the use case and problem
- Consider if it fits our semantic-first philosophy
- Discuss implementation approach

### 🔧 Code Contributions
- Follow our [component checklist](../AXIOM01_COMPONENT_CHECKLIST.md)
- Maintain accessibility standards (WCAG 2.1 AA+)
- Include comprehensive tests
- Update documentation

## 📋 Component Development Standards

### HTML Structure
```html
<!-- ✅ Good: Semantic HTML -->
<article class="card">
  <header>
    <h3>Title</h3>
  </header>
  <section>
    <p>Content</p>
  </section>
</article>

<!-- ❌ Bad: Div soup -->
<div class="card">
  <div class="card-header">
    <div class="card-title">Title</div>
  </div>
  <div class="card-body">Content</div>
</div>
```

### CSS Guidelines
```css
/* ✅ Good: Use design tokens */
.component {
  padding: var(--a-space-md);
  color: var(--a-color-text);
  border-radius: var(--a-radius-md);
}

/* ❌ Bad: Hardcoded values */
.component {
  padding: 16px;
  color: #333;
  border-radius: 8px;
}
```

### JavaScript Patterns
```javascript
// ✅ Good: Component registration
AxiomComponents.register('myComponent', {
  init() {
    this.element = document.querySelector('.my-component');
    this.setupAccessibility();
    this.setupKeyboardNav();
  },
  
  setupAccessibility() {
    // ARIA attributes, focus management
  }
});

// ❌ Bad: Global scope pollution
function initMyComponent() {
  // No structure or registration
}
```

## ♿ Accessibility Requirements

Every component must include:

### Required ARIA Attributes
- `role` - Define the component's purpose
- `aria-label` or `aria-labelledby` - Accessible name
- `aria-describedby` - Additional description if needed
- `aria-expanded` - For collapsible components
- `aria-current` - For current item in sets

### Keyboard Navigation
- `Tab` - Navigate between focusable elements
- `Enter/Space` - Activate buttons and controls
- `Escape` - Close modals/dropdowns
- `Arrow keys` - Navigate within component groups

### Screen Reader Support
- Meaningful text content
- ARIA live regions for dynamic updates
- Proper heading hierarchy
- Table headers and captions

### Example: Accessible Button
```html
<button 
  class="primary"
  aria-label="Save document"
  aria-describedby="save-help">
  Save
</button>
<div id="save-help" class="sr-only">
  This will save your current progress
</div>
```

## 🎨 Design Token Usage

### Use Semantic Tokens
```css
/* ✅ Good: Semantic tokens */
.alert {
  color: var(--a-color-text);
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-border);
}

/* ❌ Bad: Raw color values */
.alert {
  color: var(--a-color-neutral-900);
  background: var(--a-color-neutral-50);
}
```

### Available Design Tokens
- **Colors**: `--a-color-primary-*`, `--a-color-text`, `--a-color-surface`
- **Spacing**: `--a-space-xs` through `--a-space-4xl`
- **Typography**: `--a-size-*`, `--a-font-*`, `--a-line-height-*`
- **Effects**: `--a-radius-*`, `--a-shadow-*`, `--a-transition-*`

## 📝 Code Style

### CSS Conventions
- Use kebab-case for class names
- Follow BEM-like methodology when needed
- Group properties logically (layout, appearance, typography)
- Use 2-space indentation

### JavaScript Conventions
- Use ES6+ features
- Follow our ESLint configuration
- Include JSDoc comments for functions
- Use meaningful variable names

### HTML Conventions
- Always use semantic HTML elements
- Include proper meta tags
- Use ARIA attributes appropriately
- Validate markup

## 🧪 Testing Requirements

### Manual Testing
- [ ] Test with keyboard only
- [ ] Test with screen reader
- [ ] Test in multiple browsers
- [ ] Test responsive behavior
- [ ] Test dark/light themes

### Automated Testing
- [ ] CSS linting passes (`npm run lint:css`)
- [ ] JavaScript linting passes (`npm run lint:js`)
- [ ] Performance budget met (`npm run analyze`)
- [ ] No accessibility violations

### Cross-browser Testing
Test in these browsers (or their mobile equivalents):
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## 📦 Pull Request Process

### 1. Prepare Your Changes
```bash
# Create feature branch
git checkout -b feature/my-awesome-feature

# Make your changes
# ...

# Run full test suite
npm test
npm run analyze

# Commit with conventional commits
git commit -m "feat: add awesome new component"
```

### 2. Pull Request Checklist
- [ ] Branch is up to date with main
- [ ] All tests pass
- [ ] Performance budget met
- [ ] Documentation updated
- [ ] Component added to playground (if applicable)
- [ ] Accessibility requirements met
- [ ] Cross-browser testing completed

### 3. Review Process
- Maintainers will review code quality
- Accessibility audit will be performed
- Performance impact will be assessed
- Documentation will be verified

## 🏷 Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/):

```bash
# Features
git commit -m "feat: add breadcrumb component"
git commit -m "feat(theme): add ocean theme variant"

# Bug fixes
git commit -m "fix: resolve modal focus trap issue"
git commit -m "fix(button): improve keyboard navigation"

# Documentation
git commit -m "docs: update component examples"

# Performance
git commit -m "perf: optimize CSS bundle size"

# Breaking changes
git commit -m "feat!: redesign theme system"
```

## 🎯 Component Contribution Workflow

### 1. Plan Your Component
- Check if similar component exists
- Review our [component checklist](../AXIOM01_COMPONENT_CHECKLIST.md)
- Discuss in GitHub Issues first

### 2. Implement Component
```bash
# Create component files
touch components/my-component.html    # Demo page
touch css/my-component.css           # Styles
touch js/my-component.js             # Behavior (if needed)
```

### 3. Add to Build System
Edit `build.js` to include your new files:
```javascript
const componentCSSFiles = [
  // ...existing files...
  'css/my-component.css'
];
```

### 4. Add to Playground
Edit `js/playground.js` to add component template:
```javascript
this.componentTemplates = {
  // ...existing templates...
  'my-component': {
    html: '<!-- Your component HTML -->',
    css: '/* Custom styles */',
    js: '// Component interactions'
  }
};
```

### 5. Update Documentation
- Add component to main README.md
- Create usage examples
- Update component categories in playground

## 🚀 Release Contributions

### Version Bump PRs
Help us prepare releases by:
- Updating CHANGELOG.md
- Testing release candidates
- Updating documentation
- Reviewing performance metrics

### Performance Optimization
- Identify bundle size optimization opportunities
- Suggest CSS/JS improvements
- Report performance regressions

## 💬 Community Guidelines

- Be respectful and inclusive
- Help others learn and contribute
- Share knowledge and best practices
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## 🔗 Resources

- [Developer Guide](../DEVELOPER.md) - Framework development
- [Styling Guide](../AXIOM01_STYLING_GUIDE.md) - CSS patterns
- [Component Checklist](../AXIOM01_COMPONENT_CHECKLIST.md) - Requirements
- [Interactive Playground](../interactive-playground.html) - Test components
- [Theme Wizard](../theme-customization-wizard.html) - Create themes

---

Thank you for contributing to Axiom01! 🎉
