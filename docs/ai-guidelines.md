# AI Coding Guidelines for Axiom01

## Guiding AI Agents to Write Semantic-First UI

As AI coding agents become more prevalent, it's crucial to guide them towards generating code that aligns with the Axiom01 philosophy. Large Language Models (LLMs) are trained on vast datasets of existing code, which often leads them to default to popular, but sometimes overly complex, patterns like extensive utility classes (e.g., Tailwind CSS) or heavy JavaScript frameworks (e.g., React) even when simpler, more semantic solutions are appropriate.

This guide provides principles and prompt engineering strategies to help you instruct AI agents to produce clean, semantic, and efficient UI code using Axiom01.

### 1. Reinforce Core Axiom01 Principles in Prompts

Explicitly state the foundational tenets of Axiom01 in your prompts. AI agents respond best to clear, unambiguous instructions.

*   **Semantic HTML First:** Emphasize the importance of using HTML elements for their intended meaning and structure, rather than solely for styling.
*   **Minimal Classes:** Instruct the AI to avoid excessive class usage. Prefer styling based on element types, attributes, and descendant selectors.
*   **CSS Variables for Theming:** Highlight the use of Axiom01's CSS variables for colors, spacing, and typography to ensure consistency and easy theming.
*   **Accessibility by Default:** Remind the AI to prioritize ARIA attributes, keyboard navigation, and proper semantic structure for inclusive design.

#### Example Prompt Snippet:
"Generate an HTML card component using Axiom01 principles. Ensure the HTML is semantic, uses minimal classes, and leverages Axiom01's CSS variables for styling. Prioritize accessibility."

### 2. Provide Contextual Examples and Constraints

Show, don't just tell. When possible, provide small, correct examples of Axiom01 code within your prompts. Also, explicitly state what patterns to avoid.

*   **Reference Axiom01 Documentation:** Point the AI to specific sections of the Axiom01 documentation or styling guide.
*   **"Good vs. Bad" Examples:** Include mini examples of how Axiom01 prefers certain structures over others.
*   **Negative Constraints:** Explicitly tell the AI to *avoid* certain patterns (e.g., "Do not use utility classes for every style property").

#### Example Prompt Snippet:
"Create a responsive navigation bar. Adhere to Axiom01's semantic-first approach. Avoid adding classes to every `<li>` or `<a>` element. Instead, style descendants of a single `.main-nav` class. For example, instead of `<li class='nav-item'>`, use `<li>` and style `.main-nav li`. Do not use Tailwind-like utility classes."

### 3. Focus on Structure and Intent, Not Just Appearance

Describe the *purpose* and *structure* of the UI element, and let Axiom01's inherent styling handle much of the visual details.

*   **Describe the Component's Role:** "I need a feedback message that indicates success." (Rather than "I need a green box with white text.")
*   **Specify Semantic Elements:** "Use an `article` for self-contained content blocks."
*   **Outline Relationships:** "The buttons should be grouped within an `actions` div."

#### Example Prompt Snippet:
"Generate an alert component for a success message. It should be dismissible and include an icon. Use the `alert` and `success` classes as per Axiom01. The close button should be a native `button` element with appropriate ARIA attributes."

### 4. Iterative Refinement

Treat AI-generated code as a starting point. Use a conversational approach to refine the output.

*   **"Refactor this to be more Axiom01-compliant."**
*   **"Reduce the number of classes in this component."**
*   **"Ensure this component meets WCAG AA contrast requirements using Axiom01's color system."**
*   **"How would Axiom01 handle the responsive behavior of this grid?"**

### 5. Embrace Axiom01's CSS Variable System

Encourage the AI to think in terms of Axiom01's CSS variables for customization and theming.

*   **Color Variables:** `--a-color-primary`, `--a-color-on-surface`, `--a-color-primary-container`, `--a-color-on-gradient`.
*   **Spacing Variables:** `--a-space-s`, `--a-space-m`, `--a-space-l`.
*   **Typography Variables:** `--a-font-size-h1`, `--a-line-height-base`.

#### Example Prompt Snippet:
"When defining custom styles for this card, use Axiom01's spacing variables like `--a-space-l` for padding and `--a-space-m` for internal gaps. For colors, use `--a-color-surface` for the background and `--a-color-on-surface` for text."

### Conclusion

By consciously integrating Axiom01's principles into your prompts and engaging in iterative refinement, you can train your AI coding agents to become powerful allies in building clean, semantic, accessible, and maintainable user interfaces. This approach not only leverages the efficiency of AI but also upholds the core values that make Axiom01 a superior choice for modern web development.