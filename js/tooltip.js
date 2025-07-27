// js/tooltip.js
document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltipWrapper => {
        const tooltipElement = tooltipWrapper.querySelector('[role="tooltip"]');
        if (!tooltipElement) return;

        const showTooltip = () => {
            tooltipWrapper.classList.add('is-visible');
            tooltipElement.setAttribute('aria-hidden', 'false');
        };

        const hideTooltip = () => {
            tooltipWrapper.classList.remove('is-visible');
            tooltipElement.setAttribute('aria-hidden', 'true');
        };

        tooltipWrapper.addEventListener('mouseenter', showTooltip);
        tooltipWrapper.addEventListener('focusin', showTooltip);
        tooltipWrapper.addEventListener('mouseleave', hideTooltip);
        tooltipWrapper.addEventListener('focusout', hideTooltip);
    });
});

