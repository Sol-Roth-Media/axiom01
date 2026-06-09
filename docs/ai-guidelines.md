# AI Coding Guidelines for Axiom01 - Comprehensive Version

## Part 1: Guiding AI Agents to Write Semantic-First UI

As AI coding agents become more prevalent, it's crucial to guide them towards generating code that aligns with the Axiom01 philosophy. Large Language Models (LLMs) are trained on vast datasets of existing code, which often leads them to default to popular, but sometimes overly complex, patterns like extensive utility classes (e.g., Tailwind CSS) or heavy JavaScript frameworks (e.g., React) even when simpler, more semantic solutions are appropriate.

This guide provides principles and prompt engineering strategies to help you instruct AI agents to produce clean, semantic, and efficient UI code using Axiom01.

---

## SECTION A: Foundational Principles & Prompt Engineering

### 1. Reinforce Core Axiom01 Principles in Prompts

Explicitly state the foundational tenets of Axiom01 in your prompts. AI agents respond best to clear, unambiguous instructions.

*   **Semantic HTML First:** Emphasize the importance of using HTML elements for their intended meaning and structure, rather than solely for styling.
*   **Minimal Classes:** Instruct the AI to avoid excessive class usage. Prefer styling based on element types, attributes, and descendant selectors.
*   **CSS Variables for Theming:** Highlight the use of Axiom01's CSS variables for colors, spacing, and typography to ensure consistency and easy theming.
*   **Accessibility by Default:** Remind the AI to prioritize ARIA attributes, keyboard navigation, and proper semantic structure for inclusive design.

#### Example Prompt Snippet:
"Generate an HTML card component using Axiom01 principles. Ensure the HTML is semantic, uses minimal classes (ideally just one root class), and leverages Axiom01's CSS variables for styling. Prioritize WCAG 2.1 AA accessibility."

### 2. Provide Contextual Examples and Constraints

Show, don't just tell. When possible, provide small, correct examples of Axiom01 code within your prompts. Also, explicitly state what patterns to avoid.

*   **Reference Axiom01 Documentation:** Point the AI to specific sections of the Axiom01 documentation or styling guide.
*   **"Good vs. Bad" Examples:** Include mini examples of how Axiom01 prefers certain structures over others.
*   **Negative Constraints:** Explicitly tell the AI to *avoid* certain patterns (e.g., "Do not use utility classes for every style property").
*   **Anti-patterns List:** Provide a clear list of forbidden patterns.

#### Example Prompt Snippet:
"Create a responsive navigation bar. Adhere to Axiom01's semantic-first approach. Avoid adding classes to every `<li>` or `<a>` element. Instead, style descendants of a single `.main-nav` class. For example, instead of `<li class='nav-item'>`, use `<li>` and style `.main-nav li`. Do NOT use Tailwind-like utility classes. Do NOT use BEM notation (e.g., `nav__item--active`). Do NOT add unnecessary wrapper divs."

### 3. Focus on Structure and Intent, Not Just Appearance

Describe the *purpose* and *structure* of the UI element, and let Axiom01's inherent styling handle much of the visual details.

*   **Describe the Component's Role:** "I need a feedback message that indicates success." (Rather than "I need a green box with white text.")
*   **Specify Semantic Elements:** "Use an `article` for self-contained content blocks."
*   **Outline Relationships:** "The buttons should be grouped within a wrapper element."
*   **Describe Accessible Interactions:** "This component should be keyboard navigable, with focus management."

#### Example Prompt Snippet:
"Generate an alert component for a success message. It should be dismissible and include an icon. Use the `alert` and `success` classes as per Axiom01. The close button should be a native `button` element with appropriate ARIA attributes like `aria-label='Close alert'`. Include keyboard support (Escape to dismiss)."

### 4. Iterative Refinement & Code Review

Treat AI-generated code as a starting point. Use a conversational approach to refine the output.

*   **"Refactor this to be more Axiom01-compliant."**
*   **"Reduce the number of classes in this component—can you use more semantic selectors?"**
*   **"Ensure this component meets WCAG AA contrast requirements using Axiom01's color system."**
*   **"How would Axiom01 handle the responsive behavior of this grid? Show me the CSS."**
*   **"Is there unnecessary wrapper markup? Can semantic elements replace `<div>` tags?"**

### 5. Embrace Axiom01's CSS Variable System

Encourage the AI to think in terms of Axiom01's CSS variables for customization and theming.

*   **Color Variables:** `--a-color-primary`, `--a-color-on-surface`, `--a-color-primary-container`, `--a-color-success`, `--a-color-error`.
*   **Spacing Variables:** `--a-space-xs`, `--a-space-s`, `--a-space-m`, `--a-space-l`, `--a-space-xl`.
*   **Typography Variables:** `--a-font-size-h1` through `--a-font-size-h6`, `--a-line-height-base`, `--a-font-weight-bold`.
*   **Border Radius:** `--a-border-radius-small`, `--a-border-radius-medium`, `--a-border-radius-large`.

#### Example Prompt Snippet:
"When defining custom styles for this card, use Axiom01's spacing variables like `--a-space-l` for padding and `--a-space-m` for internal gaps. For colors, use `--a-color-surface` for the background and `--a-color-on-surface` for text. For border radius, use `--a-border-radius-medium`. Do not use hardcoded pixel values."

---

## SECTION B: Strict Compliance Standards & Anti-Patterns

### The Absolute & Forbidden Patterns (ZERO TOLERANCE)

These patterns MUST NEVER appear in Axiom01 code, whether AI-generated or human-written:

❌ **BEM Notation (Block__Element--Modifier)**
```html
<!-- FORBIDDEN -->
<div class="card__header--primary">...</div>
<li class="nav__item--active">...</li>
```

❌ **Dashed or Hyphenated Class Names (Except Single Adjectives)**
```html
<!-- FORBIDDEN -->
<div class="card-header">...</div>
<button class="btn-primary-large">...</button>

<!-- ALLOWED: Single adjectives for variants -->
<article class="card">...</article>
<button class="primary">...</button>
```

❌ **Utility Classes Stacked on Every Element**
```html
<!-- FORBIDDEN -->
<div class="flex items-center justify-between gap-4 p-4 bg-white rounded-lg">...</div>

<!-- ALLOWED: Minimal classes, descendant selectors in CSS -->
<div class="card">
  <div>...</div>
</div>
```

❌ **Nested Classes (Classes on Several Levels)**
```html
<!-- FORBIDDEN -->
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-content-title">...</h1>
  </div>
</section>

<!-- ALLOWED: One root class, style by semantic structure -->
<section class="hero">
  <div>
    <h1>...</h1>
  </div>
</section>
```

❌ **Non-Semantic Element Choices**
```html
<!-- FORBIDDEN -->
<div class="button">Click me</div>
<span class="heading">Title</span>
<div role="navigation">...</div>  <!-- When <nav> should be used -->

<!-- ALLOWED: Semantic elements -->
<button>Click me</button>
<h1>Title</h1>
<nav>...</nav>
```

❌ **Hardcoded Colors, Spacing, or Typography Values**
```css
/* FORBIDDEN */
.card {
  padding: 16px;
  margin-bottom: 24px;
  color: #333;
  background: #fff;
}

/* ALLOWED: CSS Variables */
.card {
  padding: var(--a-space-m);
  margin-bottom: var(--a-space-l);
  color: var(--a-color-on-surface);
  background: var(--a-color-surface);
}
```

❌ **Inline Styles in HTML**
```html
<!-- FORBIDDEN -->
<div style="padding: 16px; background: white;">...</div>

<!-- ALLOWED: CSS classes and external stylesheets -->
<div class="card">...</div>
```

❌ **Multiple Root Classes for Layout**
```html
<!-- FORBIDDEN -->
<section class="hero container">...</section>
<article class="card elevated shadow">...</article>

<!-- ALLOWED: One semantic root, variants as adjectives -->
<section class="hero">...</section>
<article class="card elevated">...</article>
```

---

## SECTION C: Compliance Verification Checklist

### Pre-Submission Code Review for AI-Generated Components

**Every component should be audited against this checklist:**

**Release gate commands (must pass):**
- `npm run audit:pre-release`
- `npm run audit:philosophy`
- `npm test`

#### HTML Structure
- [ ] Uses semantic elements (`<nav>`, `<article>`, `<button>`, `<section>`, etc.) appropriately
- [ ] No unnecessary `<div>` wrappers where semantic elements apply
- [ ] Minimal classes: typically just one root class on main container
- [ ] No BEM notation (Block__Element--Modifier)
- [ ] No hyphenated class names except single adjectives (primary, secondary, success, error, etc.)
- [ ] No inline `style` attributes
- [ ] Proper ARIA attributes for interactive elements (`aria-label`, `aria-expanded`, `aria-controls`, `role` where needed)
- [ ] Clear ID attributes for linked elements (labels, aria-labelledby, aria-controls)

#### CSS Implementation
- [ ] Uses CSS variables for ALL colors (no hardcoded hex/rgb values)
- [ ] Uses CSS variables for ALL spacing (no hardcoded px/rem values)
- [ ] Uses descendant selectors to style child elements (`.card h3`, `.card button`, etc.)
- [ ] No utility classes (no `.flex`, `.p-4`, `.gap-8` style classes)
- [ ] Component class selector exists (`.card`, `.alert`, `.button`, etc.)
- [ ] Variant classes are single adjectives (`.card.elevated`, `.button.primary`)
- [ ] No nested selectors beyond 2-3 levels
- [ ] Proper use of `:hover`, `:focus-visible`, `:active` states
- [ ] Responsive design uses media queries, not class-based breakpoints

#### Accessibility (WCAG 2.1 AA)
- [ ] Color contrast ratio ≥ 4.5:1 for normal text (using Axiom01's color system)
- [ ] Keyboard navigable: all interactive elements reachable via Tab key
- [ ] Focus states clearly visible (not just color change)
- [ ] `aria-hidden="true"` used for decorative icons only
- [ ] Form inputs have associated `<label>` elements
- [ ] Error messages accessible to screen readers
- [ ] Sufficient touch target size (minimum 44x44px on mobile)
- [ ] `prefers-reduced-motion` respected for animations

#### JavaScript Components
- [ ] Has both `init()` and `destroy()` methods for lifecycle management
- [ ] Event listeners properly cleaned up in `destroy()`
- [ ] No memory leaks (event handlers, timers, third-party instances cleaned up)
- [ ] Proper focus management for modals/dialogs/dropdowns
- [ ] Keyboard navigation (Escape to close, Tab trapping for modals, arrow keys where appropriate)
- [ ] Data attributes used for selectors (e.g., `data-component`, `data-modal-close`)
- [ ] No jQuery or heavy dependencies; vanilla JS preferred
- [ ] Comments explain complex logic

#### Documentation
- [ ] Component has accompanying `.html` documentation page in `docs/components/`
- [ ] Documentation includes multiple examples (basic, with variants, edge cases)
- [ ] Code examples are properly formatted and correct
- [ ] Accessibility notes are documented
- [ ] Usage guidelines provided
- [ ] Component is added to `docs/components-overview.html`
- [ ] For strict docs pages, no element uses more than two class tokens
- [ ] No `<a href="#">` action placeholders; use semantic `<button type="button">` for actions
- [ ] Starter-theme template updates introduce no new BEM (`__`/`--`) or multi-dash utility-style classes

---

## SECTION D: Code Examples - Compliant vs. Non-Compliant

### Example 1: Modal Component

**❌ NON-COMPLIANT (Over-engineered)**
```html
<div class="modal-container modal-visible">
  <div class="modal-overlay modal-overlay--active"></div>
  <div class="modal-dialog modal-dialog--large modal-dialog--center">
    <div class="modal-header modal-header--padding">
      <h2 class="modal-title modal-title--size-lg">Modal Title</h2>
      <button class="modal-close-btn modal-close-btn--icon">×</button>
    </div>
    <div class="modal-body modal-body--scrollable">
      <p>Modal content</p>
    </div>
    <div class="modal-footer modal-footer--justified">
      <button class="button button--secondary button--size-sm">Cancel</button>
      <button class="button button--primary button--size-sm">Confirm</button>
    </div>
  </div>
</div>
```

**✅ COMPLIANT (Clean, Semantic)**
```html
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div>
    <header>
      <h2 id="modal-title">Modal Title</h2>
      <button aria-label="Close modal">&times;</button>
    </header>
    <section>
      <p>Modal content</p>
    </section>
    <footer>
      <button class="secondary">Cancel</button>
      <button class="primary">Confirm</button>
    </footer>
  </div>
</div>
```

**CSS:**
```css
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal > div {
  background: var(--a-color-surface);
  border-radius: var(--a-border-radius-large);
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
}

.modal header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--a-space-l);
  border-bottom: 1px solid var(--a-color-outline);
}

.modal h2 {
  margin: 0;
}

.modal button {
  background: none;
  border: none;
  cursor: pointer;
}

.modal footer {
  padding: var(--a-space-l);
  border-top: 1px solid var(--a-color-outline);
  display: flex;
  gap: var(--a-space-m);
  justify-content: flex-end;
}
```

### Example 2: Form Component

**❌ NON-COMPLIANT (Too many classes)**
```html
<form class="form form--vertical">
  <div class="form-group form-group--horizontal">
    <label class="form-label form-label--required">Email</label>
    <div class="form-control form-control--input">
      <input type="email" class="input input--large input--with-icon" />
      <span class="input-icon input-icon--danger"></span>
    </div>
    <small class="form-help form-help--error">Invalid email</small>
  </div>
</form>
```

**✅ COMPLIANT (Minimal, semantic)**
```html
<form class="form">
  <fieldset class="form-group">
    <label for="email">Email</label>
    <input id="email" type="email" required aria-describedby="email-error">
    <small id="email-error">Invalid email</small>
  </fieldset>
</form>
```

**CSS:**
```css
.form {
  display: grid;
  gap: var(--a-space-l);
}

.form-group {
  display: grid;
  gap: var(--a-space-s);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-medium);
  padding: var(--a-space-l);
}

.form-group label {
  font-weight: var(--a-font-weight-bold);
}

.form-group input {
  padding: var(--a-space-m);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-small);
}

.form-group small {
  color: var(--a-color-on-surface-variant);
}
```

---

## SECTION E: Testing & Validation Requirements

### Automated Testing Checklist

When submitting AI-generated code, ensure:

- [ ] **CSS Lint:** No unknown properties, valid CSS syntax
- [ ] **HTML Validation:** Valid HTML5, no deprecated attributes
- [ ] **Accessibility Audit:** Run through WAVE, Axe, or Lighthouse
- [ ] **Color Contrast:** All text meets WCAG AA contrast ratios
- [ ] **Mobile Responsiveness:** Tested on widthsresponsive at: 320px, 768px, 1024px, 1440px+
- [ ] **Cross-Browser:** Tested in Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] **Performance:** CSS <50KB total when minified, JS components <10KB

### Manual Testing Checklist

- [ ] **Keyboard Navigation:** Tab through all interactive elements, test Escape/Enter/Space keys
- [ ] **Screen Reader:** Test with NVDA (Windows), VoiceOver (Mac), or JAWS
- [ ] **Theme Switching:** Verify component looks good in light and dark themes
- [ ] **Zoom:** Test at 200% zoom level—no horizontal scrolling, text readable
- [ ] **Touch:** On mobile device, ensure buttons are easily tappable
- [ ] **Edge Cases:** Test with long text, empty states, loading states

---

## SECTION F: Prompt Template for AI Agents

### Use This Template When Commissioning AI Code

```
You are an AI code generator for Axiom01, a semantic-first UI framework.

CRITICAL CONSTRAINTS:
1. Use semantic HTML. NO <div> for interactive elements.
2. Minimal classes: typically 1 root class + optional adjectives (primary, secondary, success, error)
3. NO BEM notation (e.g., no card__header--large)
4. NO dashed class names (except single adjectives)
5. NO utility classes (no flex, gap-4, p-8, etc.)
6. NO hardcoded colors/spacing—use CSS variables: --a-space-*, --a-color-*
7. All interactive components need init() and destroy() lifecycle methods
8. WCAG 2.1 AA accessibility: proper ARIA attributes, keyboard navigation, color contrast

TASK:
Create a [COMPONENT_NAME] component that [DESCRIPTION].

REQUIREMENTS:
- Semantic HTML structure
- CSS using Axiom01 variables
- [JavaScript initialization if interactive]
- Accessibility attributes (ARIA labels, roles, etc.)
- Mobile responsive
- Works in light and dark themes

EXAMPLES TO EMULATE:
[Paste 1-2 existing Axiom01 component examples that follow the pattern you want]

Deliver:
1. HTML structure
2. CSS stylesheet
3. [JavaScript component if interactive]
4. Brief explanation of semantic choices

VALIDATION: Run your code through the compliance checklist in the Axiom01 AI Guidelines.
```

---

## Conclusion

By consciously integrating Axiom01's principles into your prompts and engaging in iterative refinement, you can train your AI coding agents to become powerful allies in building clean, semantic, accessible, and maintainable user interfaces. This approach not only leverages the efficiency of AI but also upholds the core values that make Axiom01 a superior choice for modern web development.

**Remember:** The goal is not to make the AI compliant—it's to make compliance a prerequisite for submission.
