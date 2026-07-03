
// Add overflow hidden during animations to prevent scrollbar flicker
(function() {
    const html = document.documentElement;
    const body = document.body;
    
    // Store scroll position
    const startHidingScrollbar = () => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (scrollbarWidth > 0) {
            body.style.marginRight = scrollbarWidth + 'px';
        }
        html.style.overflowY = 'hidden';
    };
    
    const restoreScrollbar = () => {
        body.style.marginRight = '';
        html.style.overflowY = '';
    };
    
    // Apply during load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            startHidingScrollbar();
            setTimeout(restoreScrollbar, 1000);
        });
    } else {
        startHidingScrollbar();
        setTimeout(restoreScrollbar, 1000);
    }
    
    // Also apply when metrics grid animates
    window.addEventListener('load', () => {
        const metricsGrid = document.querySelector('.metrics-grid');
        if (metricsGrid) {
            // Grid animations complete after ~500ms, add buffer
            setTimeout(restoreScrollbar, 600);
        }
    });
})();
