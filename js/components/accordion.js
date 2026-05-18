// js/components/accordion.js
export default {
    init(accordionElement) {
        const headers = accordionElement.querySelectorAll('.accordion-header');

        headers.forEach(header => {
            const button = header.querySelector('button');
            const content = header.nextElementSibling; // Assuming content is immediately after header

            if (!button || !content) {
                console.error('Accordion component: Missing button or content for header.', header);
                return;
            }

            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            content.style.display = isExpanded ? 'block' : 'none';

            button.addEventListener('click', () => {
                const currentlyExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !currentlyExpanded);
                content.style.display = currentlyExpanded ? 'none' : 'block';
            });
        });
    }
};
