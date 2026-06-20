/**
 * Code Copy Button Enhancement
 * Automatically adds copy buttons to all code blocks
 * Uses Axicons for visual consistency
 * Respects Axiom01 philosophy: minimal markup, semantic HTML
 */

(function() {
    'use strict';

    const MAX_RETRY_ATTEMPTS = 50;
    let retryCount = 0;

    function initCopyButtons() {
        // Find all code blocks
        const codeBlocks = document.querySelectorAll('pre code');
        
        if (codeBlocks.length === 0) {
            console.log('No code blocks found');
            return;
        }
        
        codeBlocks.forEach((codeBlock) => {
            const preElement = codeBlock.closest('pre');
            if (!preElement) return;

            // Skip if copy button already exists
            if (preElement.querySelector('.copy-code-button') || 
                preElement.closest('[data-copy-snippet]')) {
                return;
            }

            // Create wrapper for better positioning
            let wrapper = preElement.parentElement;
            if (!wrapper || !wrapper.classList.contains('code-block-wrapper')) {
                wrapper = document.createElement('div');
                wrapper.classList.add('code-block-wrapper');
                preElement.parentElement.insertBefore(wrapper, preElement);
                wrapper.appendChild(preElement);
            }

            // Create copy button
            const copyButton = createCopyButton(codeBlock);
            wrapper.insertBefore(copyButton, preElement);
        });

        // Render icons with retry logic
        attemptIconRender();
    }

    function attemptIconRender() {
        if (typeof axicons !== 'undefined' && axicons.length > 0) {
            renderCopyButtonIcons();
            console.log('Icons rendered successfully');
        } else if (retryCount < MAX_RETRY_ATTEMPTS) {
            retryCount++;
            setTimeout(attemptIconRender, 50);
        } else {
            console.warn('Axicons not available after retries - icons may not render');
        }
    }

    function renderCopyButtonIcons() {
        document.querySelectorAll('.copy-code-button .axicon.render').forEach(el => {
            if (el.innerHTML.trim().length > 0) return; // Already rendered
            
            const name = el.getAttribute('data-name');
            const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
            if (icon && icon.svgContent) {
                el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
            }
        });
    }

    function createCopyButton(codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        button.title = 'Copy code (Ctrl+C)';
        
        // Create icon container with proper structure
        const iconSpan = document.createElement('span');
        iconSpan.className = 'axicon render';
        iconSpan.setAttribute('data-name', 'Copy');
        iconSpan.setAttribute('aria-hidden', 'true');
        
        button.appendChild(iconSpan);

        button.addEventListener('click', (e) => {
            e.preventDefault();
            copyCodeToClipboard(button, codeBlock);
        });

        // Keyboard support: Ctrl+C when focused on the button
        button.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
                e.preventDefault();
                copyCodeToClipboard(button, codeBlock);
            }
        });

        return button;
    }

    function copyCodeToClipboard(button, codeBlock) {
        const text = codeBlock.textContent;
        
        navigator.clipboard.writeText(text)
            .then(() => {
                showCopySuccess(button);
            })
            .catch((err) => {
                console.error('Failed to copy code:', err);
                showCopyError(button);
            });
    }

    function showCopySuccess(button) {
        const originalHTML = button.innerHTML;
        const originalClass = button.className;

        // Update button to show success
        button.innerHTML = '✓ Copied';
        button.classList.add('copied', 'success');
        button.disabled = true;

        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.className = originalClass;
            button.disabled = false;

            // Re-render icons if needed
            renderCopyButtonIcons();
        }, 2000);
    }

    function showCopyError(button) {
        const originalHTML = button.innerHTML;
        
        button.innerHTML = '✗ Failed';
        button.classList.add('error');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('error');
        }, 2000);
    }

    // Initialize when DOM is ready, with retry for dynamic content
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initCopyButtons();
            // Re-run after content might be loaded
            setTimeout(initCopyButtons, 500);
        });
    } else {
        initCopyButtons();
        setTimeout(initCopyButtons, 500);
    }

    // Listen for dynamic content changes (Phase 2+ template additions)
    const observer = new MutationObserver(() => {
        clearTimeout(observer.debounce);
        observer.debounce = setTimeout(() => {
            initCopyButtons();
        }, 300);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
