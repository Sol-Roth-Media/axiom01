// js/components/tooltip.js
export default {
    /**
     * Initializes tooltip behavior on a given tooltip container.
     * @param {HTMLElement} element The tooltip container element.
     * @returns {object|undefined} An object with a destroy method for cleanup.
     */
    init(element) {
        const trigger = element.querySelector('[data-tooltip-trigger], .tooltip-trigger');
        const content = element.querySelector('[role="tooltip"], .tooltip-content');

        if (!trigger || !content) {
            console.error('Axiom: Tooltip component: Missing trigger or tooltip content.', element);
            return;
        }

        const uniqueId = Math.random().toString(36).substr(2, 9);
        const triggerHadDescribedBy = trigger.hasAttribute('aria-describedby');
        const contentHadId = Boolean(content.id);
        const contentHadHidden = content.hasAttribute('aria-hidden');

        if (!content.id) {
            content.id = `axiom-tooltip-${uniqueId}`;
        }
        if (!triggerHadDescribedBy) {
            trigger.setAttribute('aria-describedby', content.id);
        }
        if (!contentHadHidden) {
            content.setAttribute('aria-hidden', 'true');
        }

        const showTooltip = () => {
            element.classList.add('is-visible');
            content.setAttribute('aria-hidden', 'false');
        };

        const hideTooltip = () => {
            element.classList.remove('is-visible');
            content.setAttribute('aria-hidden', 'true');
        };

        trigger.addEventListener('mouseenter', showTooltip);
        trigger.addEventListener('mouseleave', hideTooltip);
        trigger.addEventListener('focus', showTooltip);
        trigger.addEventListener('blur', hideTooltip);

        return {
            destroy() {
                trigger.removeEventListener('mouseenter', showTooltip);
                trigger.removeEventListener('mouseleave', hideTooltip);
                trigger.removeEventListener('focus', showTooltip);
                trigger.removeEventListener('blur', hideTooltip);

                element.classList.remove('is-visible');
                if (!triggerHadDescribedBy) {
                    trigger.removeAttribute('aria-describedby');
                }
                if (!contentHadId) {
                    content.removeAttribute('id');
                }
                if (!contentHadHidden) {
                    content.removeAttribute('aria-hidden');
                } else {
                    content.setAttribute('aria-hidden', 'true');
                }
            }
        };
    }
};
