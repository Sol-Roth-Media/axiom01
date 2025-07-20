# Axiom01 Developer Guide

> **For Framework Developers & Contributors**  
> This guide is for developers working on the Axiom01 framework itself, not end users building websites with Axiom01.

## 🚀 Quick Start for Developers

```bash
# Clone the repository
git clone https://github.com/yourusername/axiom01.git
cd axiom01

# Install dependencies
npm install

# Build the framework
npm run build

# Start development server
npm run dev

# Open development tools
npm run playground        # Interactive component playground
npm run theme-wizard     # Theme customization wizard
```

## 📁 Repository Structure

```
axiom01/
├── css/                 # Source CSS files
│   ├── tokens/         # Generated design token CSS
│   └── *.css          # Component and core styles
├── js/                 # Source JavaScript files
├── components/         # Component examples and demos
├── dist/              # Built/compiled files (auto-generated)
├── scripts/           # Build and development scripts
├── docs/              # Documentation and legacy files
├── archive/           # Legacy files and old scripts
└── .vscode-extension/ # VS Code extension for developers
```

## 🛠 Build System

Axiom01 uses a modern Node.js-based build system with multiple build targets:

### Main Build Commands

```bash
# Full build with performance analysis
npm run build

# Build with theme compilation
npm run build:themes

# Build with performance monitoring
npm run build:performance

# Analyze bundle sizes and performance
npm run analyze
```

### Individual Build Steps

```bash
# Compile design tokens to CSS
npm run build:tokens

# Build CSS bundles
npm run build:css

# Build JavaScript bundles  
npm run build:js

# Run performance analysis
npm run performance
```

### Build System Architecture

- **`build.js`** - Modern Node.js build script (replaces old `build.sh`)
- **`scripts/compile-tokens.js`** - Design token compiler
- **`scripts/performance-monitor.js`** - Bundle size and performance analysis
- **Legacy**: `archive/legacy-build.sh` - Old bash script (deprecated)

## 🎨 Theme Development

### Design Token System

Axiom01 uses a JSON-based design token system:

```bash
# Edit design tokens
vim design-tokens.json

# Compile tokens to CSS
npm run build:tokens

# Open theme customization wizard
npm run theme-wizard
```

### Adding New Themes

1. Edit `scripts/compile-tokens.js`
2. Add your theme generation function
3. Update `design-tokens.json` with new color values
4. Run `npm run build:tokens`

## 🧪 Development & Testing

### Development Server

```bash
# Start development server with auto-rebuild
npm run dev

# Open specific development tools
npm run playground     # Interactive component editor
npm run theme-wizard  # Theme customization tool
```

### Code Quality & Linting

```bash
# Run all linting
npm test

# Individual linters
npm run lint:css      # Stylelint
npm run lint:js       # ESLint
```

### Performance Monitoring

```bash
# Analyze current build performance
npm run performance

# Full build with performance report
npm run analyze
```

The performance monitor generates:
- `performance-report.json` - Machine-readable metrics
- `performance-report.md` - Human-readable analysis
- `performance-budget.json` - Budget configuration

## 🔧 Component Development

### Adding New Components

1. **Create component files:**
   ```bash
   # Component demo
   touch components/my-component.html
   
   # Component styles
   touch css/my-component.css
   
   # Component JavaScript
   touch js/my-component.js
   ```

2. **Add to build system:**
   Edit `build.js` and add your CSS/JS files to the appropriate arrays.

3. **Add to playground:**
   Edit `js/playground.js` and add component template to `componentTemplates`.

4. **Follow the component checklist:**
   See `AXIOM01_COMPONENT_CHECKLIST.md` for requirements.

### Component Standards

Every component must include:
- ✅ Semantic HTML structure
- ✅ Accessible ARIA attributes  
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Responsive design
- ✅ Dark mode support
- ✅ CSS custom properties
- ✅ JavaScript component registration

## 📦 Release Process

### Preparing a Release

1. **Update version numbers:**
   ```bash
   # Update package.json version
   npm version patch|minor|major
   ```

2. **Run full build and tests:**
   ```bash
   npm run analyze
   npm test
   ```

3. **Update documentation:**
   ```bash
   # Update CHANGELOG.md
   # Update README.md if needed
   # Verify all .md files are current
   ```

4. **Performance check:**
   ```bash
   npm run performance
   # Verify no performance regressions
   ```

### GitHub Release Process

1. **Create release branch:**
   ```bash
   git checkout -b release/v1.0.0
   git add .
   git commit -m "Prepare v1.0.0 release"
   git push origin release/v1.0.0
   ```

2. **Create GitHub release:**
   - Go to GitHub → Releases → New Release
   - Tag: `v1.0.0`
   - Title: `Axiom01 v1.0.0`
   - Include changelog and performance metrics
   - Attach `dist/` folder as release assets

3. **Publish to npm (if desired):**
   ```bash
   npm publish
   ```

### Release Checklist

- [ ] All tests passing
- [ ] Performance budget within limits
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version numbers updated
- [ ] Demo sites working
- [ ] Component playground functional
- [ ] Theme wizard operational

## 🏗 Local Development Environment

### Prerequisites

- Node.js 14+ 
- npm 6+
- Modern browser for testing
- Git

### First-time Setup

```bash
# Clone and setup
git clone https://github.com/yourusername/axiom01.git
cd axiom01
npm install

# Build everything
npm run build:themes

# Verify setup
npm test
npm run dev
```

### Development Workflow

1. **Make changes** to CSS, JS, or HTML files
2. **Test changes** using `npm run dev`
3. **Use development tools:**
   - Interactive Playground for component testing
   - Theme Wizard for design token changes
4. **Run performance analysis** with `npm run analyze`
5. **Lint code** with `npm test`
6. **Commit changes** following conventional commits

### Hot Reloading

The build system supports automatic rebuilding:
- CSS/JS changes trigger automatic rebuild
- Theme changes recompile design tokens
- Component changes update playground templates

## 📝 Documentation

### Key Documentation Files

- **README.md** - Main project readme (for end users)
- **DEVELOPER.md** - This file (for framework developers)  
- **AXIOM01_STYLING_GUIDE.md** - Component development guide
- **AXIOM01_COMPONENT_CHECKLIST.md** - Component requirements
- **AXIOM01_MASTER_TODO.md** - Development roadmap and progress

### Documentation Maintenance

- Keep component examples updated
- Update performance budgets when needed
- Maintain changelog for releases
- Update browser compatibility information

## 🤝 Contributing

### Code Style

- Follow existing patterns in the codebase
- Use semantic CSS class names
- Maintain accessibility standards
- Include comprehensive comments
- Follow the established file structure

### Pull Request Process

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes following our standards
4. Run full test suite: `npm test`
5. Run performance check: `npm run analyze` 
6. Submit pull request with detailed description

### Component Contribution Checklist

- [ ] Component follows semantic HTML structure
- [ ] Full accessibility implementation (WCAG 2.1 AA+)
- [ ] Responsive design with mobile-first approach
- [ ] Dark mode and theme support
- [ ] Comprehensive JavaScript integration
- [ ] Performance optimized
- [ ] Documentation and examples included
- [ ] Added to component playground

---

## 💡 Tips for Framework Developers

- **Use the playground** for rapid component development and testing
- **Check performance** regularly with `npm run analyze`
- **Test accessibility** with screen readers and keyboard-only navigation
- **Verify themes** using the theme wizard
- **Follow semantic patterns** established in existing components
- **Maintain backwards compatibility** when making changes

For end-user documentation, see the main [README.md](README.md).
