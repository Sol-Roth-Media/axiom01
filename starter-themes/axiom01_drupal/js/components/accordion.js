// js/components/accordion.js
export default {
    /**
     * Initializes the accordion component on a given DOM element.
     * Sets up event listeners and initial ARIA attributes.
     * @param {HTMLElement} accordionElement The main DOM element for the accordion.
     * @returns {object} An object with a destroy method for cleanup.
     */
    init(accordionElement) {
        // Use event delegation on the main accordion element
        const clickHandler = (event) => {
            const button = event.target.closest('button');

            // Check if the clicked element is a button directly within an accordion item
            // and that its parent is the accordionElement itself (or a direct child of it)
            // This ensures we only act on the intended accordion toggle buttons.
            if (button && accordionElement.contains(button)) {
                // Find the content panel associated with this button
                // Assuming content is the next sibling element after the button
                const content = button.nextElementSibling;

                if (!content) {
                    console.error('Axiom: Accordion button has no sibling content panel.', button);
                    return;
                }

                const currentlyExpanded = button.getAttribute('aria-expanded') === 'true';

                // Toggle aria-expanded attribute
                button.setAttribute('aria-expanded', !currentlyExpanded);
                // Toggle aria-hidden attribute on content for accessibility
                content.setAttribute('aria-hidden', currentlyExpanded);

                // Toggle content visibility
                if (currentlyExpanded) {
                    content.style.maxHeight = '0'; // Collapse
                } else {
                    // Set maxHeight to scrollHeight to allow CSS transition to work
                    content.style.maxHeight = content.scrollHeight + 'px';
                }

                // Optional: Rotate icon if present (handled by CSS based on is-open class)
                accordionElement.classList.toggle('is-open', !currentlyExpanded);
            }
        };

        accordionElement.addEventListener('click', clickHandler);

        // --- Accessibility Enhancements (Initial Setup) ---
        // Ensure each button and content panel has necessary ARIA attributes and IDs
        const buttons = accordionElement.querySelectorAll('button');
        buttons.forEach((button, index) => {
            const content = button.nextElementSibling;
            if (content) {
                // Generate unique IDs if not already present
                const buttonId = button.id || `axiom-accordion-button-${index}`;
                const contentId = content.id || `axiom-accordion-content-${index}`;

                button.id = buttonId;
                content.id = contentId;

                button.setAttribute('aria-controls', contentId);
                content.setAttribute('role', 'region');
                content.setAttribute('aria-labelledby', buttonId);

                // Set initial state for content visibility
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                content.setAttribute('aria-hidden', !isExpanded);
                content.style.maxHeight = isExpanded ? content.scrollHeight + 'px' : '0';
            }
        });

        // --- Keyboard Navigation (Commented for future implementation/guidance) ---
        // For a group of accordions, one might add keyboard navigation:
        // - Up/Down arrow keys to move focus between accordion buttons.
        // - Home/End keys to move focus to first/last accordion button.
        // - Space/Enter to activate (toggle) the focused accordion button.
        // This would typically be handled by a separate keyboard navigation utility
        // or directly within this component if it manages a group of accordions.

        return {
            /**
             * Cleans up the accordion component by removing event listeners.
             */
            destroy() {
                accordionElement.removeEventListener('click', clickHandler);
                // Optionally reset ARIA attributes if elements are not being removed from DOM
                buttons.forEach(button => {
                    button.removeAttribute('aria-controls');
                    button.removeAttribute('aria-expanded');
                    const content = button.nextElementSibling;
                    if (content) {
                        content.removeAttribute('id');
                        content.removeAttribute('role');
                        content.removeAttribute('aria-labelledby');
                        content.removeAttribute('aria-hidden');
                        content.style.maxHeight = ''; // Reset inline style
                    }
                });
            }
        };
    }
};
