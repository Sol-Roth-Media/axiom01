/**
 * Global Axicon Renderer
 * Renders all .axicon.render elements across the page
 * Works with both viewBox="0 0 24 24" and viewBox="0 0 64 64" icons
 */

(function() {
    'use strict';

    function isIconObject(icon) {
        return Boolean(icon && typeof icon.name === 'string' && typeof icon.svgContent === 'string');
    }

    function flattenIconSets(iconSet) {
        if (!Array.isArray(iconSet)) return [];
        return iconSet.flatMap(entry => Array.isArray(entry) ? entry : [entry]).filter(isIconObject);
    }

    function isPremiumIconName(name) {
        return typeof name === 'string' && /(?:-Premium|Premium$)/i.test(name);
    }

    function renderAllAxicons() {
        // Wait for axicons to be loaded
        if (typeof window.axicons === 'undefined' || !Array.isArray(window.axicons)) {
            setTimeout(renderAllAxicons, 50);
            return;
        }

        const icons = flattenIconSets(window.axicons);
        if (!icons.length) {
            setTimeout(renderAllAxicons, 50);
            return;
        }

        document.querySelectorAll('.axicon.render').forEach(el => {
            // Skip if already rendered
            if (el.querySelector('svg')) return;

            const name = el.getAttribute('data-name');
            if (!name) return;

            // Prefer the most recently loaded icon set when names overlap.
            const icon = [...icons].reverse().find(i => i.name.toLowerCase() === name.toLowerCase());

            if (!icon || !icon.svgContent) return;

            el.classList.toggle('premium', isPremiumIconName(icon.name));

            // Extract viewBox from icon's svgContent, otherwise default to 24x24
            const viewBoxMatch = icon.svgContent.match(/viewBox="([^"]+)"/);
            const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

            // Remove viewBox from svgContent to avoid duplication
            const cleanSvgContent = icon.svgContent.replace(/\s*viewBox="[^"]*"/, '');

            // Render SVG with correct viewBox
            el.innerHTML = `<svg viewBox="${viewBox}" aria-hidden="true">${cleanSvgContent}</svg>`;
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAllAxicons);
    } else {
        renderAllAxicons();
    }

    // Re-render after short delay to catch async-loaded icons
    setTimeout(renderAllAxicons, 100);
    setTimeout(renderAllAxicons, 500);

    // Expose for manual re-rendering if needed
    window.renderAxicons = renderAllAxicons;
})();
