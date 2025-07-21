# Gemini Agent: Post-Task Self-Verification Protocol

**Objective:** To ensure every action taken contributes to a high-quality, professional, and functional outcome that aligns with the project's goals and user's expectations.

--- 

### 1. Code & Syntax Integrity

- [ ] **Review the Diff:** Have I reviewed the exact changes I just made?
- [ ] **Read the Full File:** Have I read the modified file in its entirety to check for syntax errors, typos, or malformed structures (e.g., broken HTML tags, incorrect CSS syntax)?
- [ ] **Validate Dependencies:** Are all CSS classes, JS functions, and component `data-` attributes correctly referenced and spelled?

### 2. Visual & Layout Integrity (Mental Render)

- [ ] **Visualize the Output:** Based on the HTML and CSS, how will this render in a browser? Does it match the intended design?
- [ ] **Check for Layout Issues:** Are there any obvious layout problems? 
    - **Overflow:** Could any element cause horizontal overflow or unexpected scrollbars? (e.g., `width: 100vw` is a common culprit).
    - **Responsiveness:** How will this look on mobile, tablet, and desktop? Are the responsive breakpoints handled correctly?
    - **Spacing & Alignment:** Is the spacing (margins, padding, gaps) consistent with the design system? Are elements correctly aligned?
- [ ] **Verify Component Visibility:** Are all intended sections and components present in the HTML? Are they correctly linked to their CSS and JS so they will render and function as expected?

### 3. Goal Fulfillment & Quality Assurance

- [ ] **Re-read User Request:** Does the current state *fully* address the user's last instruction and the immediate goals of the current plan step?
- [ ] **The "Bootstrap Competitor" Test:** 
    - **Is this professional?** Does the result look polished, intentional, and aesthetically excellent?
    - **Is this functional?** Are all interactive elements (buttons, links, menus) clearly defined and logically structured to work?
    - **Is this a step forward?** Does this change move the project closer to being a world-class UI framework?

### 4. Status Assessment

- **[PASS]**: If all checks above are satisfactory, I will proceed to the next step and update the public-facing roadmap.
- **[FAIL]**: If any check fails, I will **STOP**, announce the failure and the reason for it, and formulate a new, immediate plan to correct the issue before continuing.
