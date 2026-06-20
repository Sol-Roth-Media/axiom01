/**
 * Code Copy Button Enhancement
 * Automatically adds copy buttons to all code blocks
 * Uses Axicons for visual consistency
 * Respects Axiom01 philosophy: minimal markup, semantic HTML
 */

(function() {
    'use strict';

    function initCopyButtons() {
        // Find all code blocks
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach((codeBlock) => {
            const preElement = codeBlock.closest('pre');
            if (!preElement) return;

            // Skip if copy button already exists (data-copy-snippet or .copy-code-button)
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

        // Re-render axicons after creating buttons
        renderCopyButtonIcons();
    }

    function renderCopyButtonIcons() {
        // Wait for axicons to be available
        const attemptRender = () => {
            if (typeof axicons !== 'undefined' && axicons.length > 0) {
                document.querySelectorAll('.copy-code-button .axicon.render').forEach(el => {
                    const name = el.getAttribute('data-name');
                    const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
                    if (icon) {
                        el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
                    }
                });
            } else {
                // Retry if axicons not loaded yet
                setTimeout(attemptRender, 50);
            }
        };
        
        attemptRender();
    }

    function createCopyButton(codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        button.title = 'Copy to clipboard (Ctrl+C when focused)';
        
        // Use Axicon (Copy icon)
        button.innerHTML = '<span class="axicon render" data-name="Copy" aria-hidden="true"></span>';

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

            // Re-render axicons if needed
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

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCopyButtons);
    } else {
        // DOM already loaded, initialize immediately
        setTimeout(initCopyButtons, 100);
    }
})();
