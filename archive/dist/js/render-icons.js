/**
 * Global Axicon Renderer
 * Renders all .axicon.render elements across the page
 * Works with both viewBox="0 0 24 24" and viewBox="0 0 64 64" icons
 */

(function() {
    'use strict';

    function renderAllAxicons() {
        // Wait for axicons to be loaded
        if (typeof window.axicons === 'undefined' || !Array.isArray(window.axicons)) {
            setTimeout(renderAllAxicons, 50);
            return;
        }

        document.querySelectorAll('.axicon.render').forEach(el => {
            // Skip if already rendered
            if (el.querySelector('svg')) return;

            const name = el.getAttribute('data-name');
            if (!name) return;

            // Find the icon (case-insensitive)
            const icon = window.axicons.find(i => 
                i && i.name && i.name.toLowerCase() === name.toLowerCase()
            );

            if (!icon || !icon.svgContent) return;

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
