# AXIOM01 v3 - Comprehensive Build Plan

## 🎯 Vision Summary

Build a complete redesign of AXIOM01 from the v2 codebase, incorporating:
- **Modern CSS Standards**: Native `@layer`, `:has()`, container queries, OKLCH color space
- **Semantic Rebellion**: Eliminate utility classes entirely (class density limit: $D_c \le 1.0$)
- **Production SPA Portal**: Single unified HTML page replacing ALL separate documentation/website pages
- **Comprehensive Content**: Integrate "The Semantic Rebellion" book with full chapters, projects, and philosophy
- **Web Components Infrastructure**: Custom elements for icon rendering, routing, form validation
- **Zero Build Complexity**: Pure CSS + HTML + vanilla JS (no frameworks, no build tools required)

---

## 📊 Current State (v2)

| Aspect | v2 Status |
|--------|-----------|
| Framework CSS | 13,391 lines across multiple files |
| Components | 77 semantic components |
| Website | Multi-page HTML (index.html + 79 component docs) |
| Philosophy | Semantic-first but unclear in documentation |
| Build Process | Custom npm scripts |
| Bundle Size | 13.3 KB CSS (gzipped) |

---

## 🚀 v3 Target State

| Aspect | v3 Target |
|--------|-----------|
| Framework CSS | 2-3 core files (~8-10 KB gzipped), organized by @layer batches |
| Components | Same 77 components, refactored with :has(), container queries |
| Website | **SINGLE unified HTML file** (production-hub.html equivalent) |
| Philosophy | Crystal-clear book + interactive demos + component system |
| Build Process | Zero build - pure CSS, HTML, JS (export to dist/) |
| Bundle Size | <15 KB total (CSS + JS + HTML) |
| DX Experience | Hot-swappable design tokens, live configurator, accessible navigation |

---

## 🏗️ Architecture Overview

### Core Framework (@layer structure)

```
@layer axiom.reset       (normalize, box-sizing, root resets)
@layer axiom.tokens      (OKLCH color, spacing, typography, transitions)
@layer axiom.base        (HTML elements: a, p, h1-h6, form inputs)
@layer axiom.layout      (grid, container, navbar, sidebar, hub-layout)
@layer axiom.components  (buttons, cards, tables, accordions, forms, etc. - Batches A-J)
@layer axiom.utilities   (responsive, dark mode, print, accessibility)
```

### CSS File Organization

```
v3/
├── css/
│   ├── axiom.css (MAIN: all @layer batches consolidated)
│   ├── axiom.min.css (production minified)
│   └── themes/ (optional theme overrides - not required)
├── js/
│   ├── axiom-core.js (routing, config, helpers)
│   ├── axicons.js (icon rendering engine)
│   └── form-validation.js (if needed)
├── dist/
│   ├── index.html (built from source)
│   ├── axiom.css (symlink or copy of minified)
│   └── assets/
└── index.html (unified SPA: hero + docs hub + book reader)
```

### Single HTML Page Structure

One `index.html` file contains:
1. **Header/Navigation** - Navbar with theme/spacing toggles
2. **Hero Section** - Landing page with philosophy intro
3. **Docs Hub View** - Sidebar nav + content stage for all 77 components
4. **Book Reader View** - Sidebar TOC + chapters (13 chapters + appendix)
5. **Hidden Modals** - Notifications, alerts, confirmations
6. All embedded CSS/JS (no external dependencies)

---

## 📋 Phase-by-Phase Build Plan

### **PHASE 1: Foundation & Architecture (Days 1-3)**

#### 1.1 Consolidate CSS into Single @layer Structure
- **Goal**: Refactor v2's scattered CSS files into single `axiom.css` with proper @layer batches
- **Tasks**:
  - Read existing CSS from v3planning files (Axiom.css.txt, Axiom-a.css.txt, etc.)
  - Map v2 components into Batches A-J (@layer axiom.components)
  - Extract token system into @layer axiom.tokens (OKLCH variables)
  - Create @layer axiom.base with normalized element styles
  - Create @layer axiom.layout with grid, container, hub-layout patterns
  - Ensure all :has(), container queries, and modern CSS is properly organized
  - Test: Verify no CSS conflicts, proper cascade isolation
- **Output**: `/css/axiom.css` (~8-10 KB unminified)

#### 1.2 Refactor v2 Components Using v3 Patterns
- **Goal**: Update all 77 components to use :has(), container queries, eliminate arbitrary breakpoints
- **Key Changes**:
  - Cards: Use `@container` instead of media queries
  - Forms: Use `:has(:invalid)` for state management (no JS)
  - Buttons: Maintain semantic simplicity (1 class rule)
  - Accordions/Details: Leverage native `<details>` element
  - Tables: Use container queries for responsive wrapping
  - Navigation: Sticky positioning + sidebar drawer patterns
- **Tools**: Migrate component CSS from v2 → Batches A-J in axiom.css
- **Test**: Build component showcase page, verify all 77 work with new patterns

#### 1.3 Establish Web Foundation
- **Goal**: Create minimal HTML skeleton, set up routing infrastructure
- **Tasks**:
  - Create `index.html` with header, three view containers (hero, docs, book)
  - Set up CSS `<style>` block with all @layer axiom definitions
  - Create `<script>` section with Navigation, Config, Content objects
  - Build route switching logic (Navigation.view('docs'), etc.)
  - Implement theme/spacing toggle functions (Config.toggleTheme())
- **Test**: Theme switching works, routes swap views cleanly

---

### **PHASE 2: Interactive Portal Architecture (Days 4-6)**

#### 2.1 Build Docs Hub (Component Documentation)
- **Goal**: Create interactive documentation for all 77 components
- **Tasks**:
  - Design sidebar navigation tree for components (grouped by category)
  - Create content template for each component (show current documentation)
  - Implement copy-to-clipboard code snippets
  - Add live component previews inline
  - Build table-of-contents auto-generation from headings
  - Implement search/filter functionality for sidebar
- **Navigation Structure**:
  - Forms & Input (10 components)
  - Layout & Navigation (8 components)
  - Data Display (6 components)
  - Content & Media (8 components)
  - Interactive (7 components)
  - Advanced/Specialized (38 components)
- **Test**: All 77 component docs load, search works, code copy works

#### 2.2 Build Book Reader (The Semantic Rebellion)
- **Goal**: Embed full book chapters with navigation
- **Content Structure**:
  - Frontispiece/Introduction
  - Part I: Philosophy (Chapters 1-2)
  - Part II: Theory (Chapters 3-5)
  - Part III: CSS Fundamentals (Chapters 6-9)
  - Part IV: Production & Architecture (Chapters 10-12)
  - Part V: Praxis & Projects (Chapters 13-16)
  - Appendix: Resources & References
- **Tasks**:
  - Convert PDF content to semantic HTML chapters
  - Build chapter navigation (prev/next buttons)
  - Create table of contents sidebar
  - Implement math notation rendering (katex or display as code)
  - Add syntax highlighting for code examples (with Prism or basic highlighting)
  - Implement chapter-level typography (drop-caps, hanging punctuation, orphan control)
- **Test**: All 17 chapters load, typography renders correctly

#### 2.3 Create Live Configurator
- **Goal**: Allow users to adjust design tokens in real-time
- **Tasks**:
  - Add hue slider (--a-hue-primary: 0-360)
  - Add spacing multiplier slider (--a-space-unit scaling)
  - Add radius control (--a-radius preset or slider)
  - Display live updates across entire site
  - Show calculated values (e.g., "Accent hue: (primary + 180)°")
  - Persist settings to localStorage
- **Test**: All sliders work, changes apply globally

---

### **PHASE 3: Hero Section & Landing Page (Days 7-8)**

#### 3.1 Design Hero Section
- **Goal**: Create compelling landing page showcasing AXIOM01's philosophy
- **Sections**:
  - Hero banner with headline + CTA buttons
  - "Pillars of Design" grid (showing 3-4 key concepts with icons)
  - Comparative code examples (utility-first vs. Axiom01)
  - Feature callouts with component previews
  - Call-to-action: "Explore Components" + "Read the Book"
- **Tasks**:
  - Create hero image/background (CSS gradient or SVG)
  - Add component grid showcasing cards, buttons, forms in context
  - Embed live configurator sandbox
  - Add smooth scroll animations (CSS transitions)
- **Test**: Mobile, tablet, desktop viewports

#### 3.2 Build Mobile Responsive Shell
- **Goal**: Ensure SPA works perfectly on all devices
- **Tasks**:
  - Mobile hamburger menu (checkbox-based toggle, no JS)
  - Sidebar drawer animation
  - Responsive grid layout (full-width on mobile)
  - Touch-friendly button sizes (48px+ minimum)
  - Readable text sizes (16px+ on mobile)
- **Test**: iOS Safari, Android Chrome, desktop browsers

---

### **PHASE 4: Web Components & Advanced Features (Days 9-11)**

#### 4.1 Icon Engine (Axicons)
- **Goal**: Implement zero-layout-shift, lazy-loaded icon system
- **Tasks**:
  - Create icon data object (embed SVG definitions for ~50 core icons)
  - Build intersection observer for lazy rendering
  - Auto-accessibility: set `aria-hidden` or `role="img"`
  - Support icon variants (color, inverted, sizes)
  - Enable dynamic rendering via `[data-axicon="Name"]` attributes
- **Test**: Icons render without layout shift, lazy loading works

#### 4.2 Form Validation & State Management
- **Goal**: Pure CSS form validation using :has() and :invalid
- **Tasks**:
  - Create form component with fieldset/legend structure
  - Implement :has(:invalid:not(:placeholder-shown)) error states
  - Add visual error indicators (red border, error message styling)
  - Disable submit button when form is invalid
  - Test with various input types (email, password, text, number, checkbox, radio)
- **Test**: All validation scenarios work, no custom JS needed

#### 4.3 Advanced Responsive Patterns
- **Goal**: Implement all modern CSS features from v3planning
- **Tasks**:
  - Container queries for card layouts (@container min-width)
  - :has() relational selectors for parent styling
  - View transitions for smooth page navigation (if supported)
  - Scroll progress bar (track scroll position)
  - Sticky positioning for navigation + sidebars
- **Test**: All patterns work on modern browsers

---

### **PHASE 5: Performance & Optimization (Days 12-13)**

#### 5.1 CSS Minification & Tree-Shaking
- **Goal**: Minimize bundle size
- **Tasks**:
  - Remove unused CSS (verify all 77 components are used)
  - Minify axiom.css → axiom.min.css
  - Remove unnecessary comments and whitespace
  - Consolidate duplicate selectors
- **Target**: < 10 KB gzipped CSS

#### 5.2 JavaScript Optimization
- **Goal**: Keep JS minimal and performant
- **Tasks**:
  - Minify axiom-core.js + axicons.js
  - Remove console logs, debug code
  - Test performance metrics (Lighthouse scores)
  - Optimize for Core Web Vitals (LCP, FID, CLS)
- **Target**: < 5 KB gzipped JS

#### 5.3 Asset Optimization
- **Goal**: Ensure images, fonts load efficiently
- **Tasks**:
  - Use system fonts (no custom font downloads)
  - Embed SVG icons as data URIs or inline
  - Optimize any raster images
  - Set proper cache headers

---

### **PHASE 6: Quality Assurance & Testing (Days 14-15)**

#### 6.1 Cross-Browser Testing
- **Goal**: Verify compatibility with all modern browsers
- **Browsers**:
  - Chrome/Edge (Chromium) - latest
  - Firefox - latest
  - Safari - latest
  - Mobile browsers (iOS Safari, Chrome Android)
- **Test Cases**:
  - All views render correctly
  - Theme switching works
  - Forms validate properly
  - Icons render
  - Responsive layouts work
  - Animations smooth (60fps)

#### 6.2 Accessibility Audit
- **Goal**: Ensure WCAG 2.1 AA compliance
- **Tests**:
  - Keyboard navigation (Tab, Enter, Escape)
  - Screen reader testing (NVDA, JAWS, VoiceOver)
  - Color contrast verification (7:1+ for text)
  - Focus indicators visible
  - Semantic HTML structure
  - ARIA labels where needed
- **Tools**: axe DevTools, WAVE, Lighthouse Accessibility

#### 6.3 Performance Testing
- **Goal**: Achieve excellent Lighthouse scores
- **Metrics**:
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 90
  - SEO: > 95
- **Tasks**:
  - Fix any Lighthouse warnings
  - Optimize CLS (cumulative layout shift)
  - Ensure FCP < 1.5s, LCP < 2.5s
  - Minimize JavaScript execution time

#### 6.4 Content Review
- **Goal**: Verify all documentation is accurate and complete
- **Tasks**:
  - Review all 77 component descriptions
  - Check all book chapters for errors
  - Verify code examples are functional
  - Test all interactive demos
  - Proof-read all text content

---

### **PHASE 7: Final Polish & Deployment (Days 16-17)**

#### 7.1 Visual Design & UX Refinement
- **Tasks**:
  - Refine hero section design
  - Ensure consistent spacing across all pages
  - Add subtle animations where appropriate
  - Test dark mode aesthetic
  - Optimize mobile navigation UX
  - Add helpful tooltips and hints

#### 7.2 Documentation Generation
- **Tasks**:
  - Create v3 changelog (migration guide from v2)
  - Update README with v3 features
  - Create quick-start guide
  - Document all tokens and their purposes
  - Create developer reference guide
- **Output**: README, CHANGELOG, DEVELOPER.md, TOKEN_REFERENCE.md

#### 7.3 Build & Deployment
- **Tasks**:
  - Copy final files to `/dist` directory
  - Verify dist build is complete and working
  - Create production CSS/JS (minified)
  - Set up git branch (version3) with all changes
  - Document version 3.0.0 release notes
- **Output**: Production-ready `/dist` folder

#### 7.4 Launch Preparation
- **Tasks**:
  - Create migration guide (v2 → v3)
  - Update package.json with v3 version
  - Tag repository with v3.0.0
  - Prepare announcement/blog post
  - Test deployment process
- **Ready**: v3.0.0 release

---

## 🎯 Success Criteria

By end of Phase 7, v3 must meet these criteria:

### Functionality
- ✅ Single HTML file works as full SPA (hero + docs + book)
- ✅ All 77 components documented and working
- ✅ Full book content (17 chapters) embedded and readable
- ✅ Theme switching (light/dark) working
- ✅ Spacing configurator working (live token adjustments)
- ✅ Mobile responsive across all pages
- ✅ All forms validate without custom JS

### Performance
- ✅ CSS < 10 KB gzipped
- ✅ JS < 5 KB gzipped
- ✅ Total HTML < 500 KB
- ✅ Lighthouse scores > 90
- ✅ First Contentful Paint < 1.5s
- ✅ Largest Contentful Paint < 2.5s
- ✅ Cumulative Layout Shift < 0.1

### Quality
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Cross-browser tested (Chrome, Firefox, Safari, Edge)
- ✅ Mobile tested (iOS, Android)
- ✅ No console errors or warnings
- ✅ All animations smooth (60fps)
- ✅ Semantic HTML throughout
- ✅ Zero utility classes (class density $D_c \le 1.0$)

### Documentation
- ✅ All 77 components documented with examples
- ✅ All 17 book chapters embedded
- ✅ Migration guide from v2 created
- ✅ Developer reference guide created
- ✅ Token reference documented

---

## 📅 Timeline Estimate

| Phase | Duration | Days |
|-------|----------|------|
| Phase 1: Foundation | 3 days | 1-3 |
| Phase 2: Portal Architecture | 3 days | 4-6 |
| Phase 3: Hero & Landing | 2 days | 7-8 |
| Phase 4: Web Components | 3 days | 9-11 |
| Phase 5: Optimization | 2 days | 12-13 |
| Phase 6: QA & Testing | 2 days | 14-15 |
| Phase 7: Polish & Deploy | 2 days | 16-17 |
| **Total** | **17 days** | **1-17** |

*Estimate assumes 8-hour development days with focus*

---

## 🛠️ Development Workflow

### Branch Strategy
```
main (v2.x stable)
└── version3 (development branch for v3)
    ├── feature/css-consolidation
    ├── feature/components-refactor
    ├── feature/portal-build
    ├── feature/book-integration
    ├── feature/web-components
    └── release/v3.0.0
```

### File Structure During Development
```
axiom01/ (version3 branch)
├── src/
│   ├── css/
│   │   ├── axiom.css (consolidated from v3planning files)
│   │   ├── axiom-original-v2.css (for reference)
│   │   └── themes/ (future theme overrides)
│   ├── js/
│   │   ├── axiom-core.js
│   │   ├── axicons.js
│   │   └── form-validation.js
│   ├── index.html (unified SPA)
│   ├── assets/ (icons, images, etc.)
│   └── content/
│       ├── book-chapters.js (embedded book data)
│       └── component-docs.js (embedded component data)
├── dist/
│   ├── index.html (production build)
│   ├── css/ (minified)
│   ├── js/ (minified)
│   └── assets/
├── docs/
│   ├── README.md
│   ├── CHANGELOG.md
│   ├── MIGRATION.md (v2 → v3)
│   └── DEVELOPER.md
├── v3planning/ (reference - original planning files)
└── package.json
```

### Build Commands (npm scripts)
```json
{
  "build": "npm run build:css && npm run build:js && npm run copy:assets",
  "build:css": "cleancss -o dist/axiom.min.css src/css/axiom.css",
  "build:js": "terser src/js/*.js -o dist/axiom.min.js",
  "copy:assets": "cp src/index.html dist/ && cp -r src/assets/* dist/assets/",
  "dev": "http-server src -p 8080",
  "test": "lighthouse http://localhost:8080 --view",
  "serve": "http-server dist -p 8080"
}
```

---

## 🎨 AXIOM01 Philosophy Maintained in v3

Throughout the build, maintain these core principles:

1. **Semantic-First**: Each component has ONE semantic class (card, button, form, etc.)
2. **No Utilities**: NEVER add utility classes; use tokens and component-level CSS instead
3. **Framework-Level**: All responsive behavior in framework CSS, not page hacks
4. **Mobile-First**: Default styles for mobile, enhanced for larger screens
5. **Accessibility Native**: WCAG 2.1 AA built-in, not bolted on
6. **Token-Driven**: All values (colors, spacing, typography) from CSS variables
7. **Zero Build Complexity**: Pure CSS + HTML + vanilla JS
8. **Progressive Enhancement**: Works without JavaScript; enhanced with JS features

---

## 📝 Next Step

After this plan is reviewed and approved:
1. **Confirm scope** with any adjustments needed
2. **Begin Phase 1** by consolidating CSS from v3planning files
3. **Create development branch** (version3)
4. **Start with axiom.css** consolidation and component refactor
5. **Daily commits** with clear messages

Ready to proceed with Phase 1 when you give the signal! 🚀

---

**Plan Created**: Session 14 Extended  
**Framework**: AXIOM01 v3  
**Status**: Ready for Approval & Implementation  
**Confidence Level**: High (based on v3planning reference materials and v2 foundation)
