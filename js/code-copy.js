/**
 * Code Copy Button Enhancement
 * Automatically adds copy buttons to all code blocks
 * Uses Axicons for visual consistency
 * Respects Axiom01 philosophy: minimal markup, semantic HTML
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCopyButtons);
    } else {
        initCopyButtons();
    }

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

        // Re-render axicons if the function exists
        if (typeof window.renderAxicons === 'function') {
            window.renderAxicons();
        }
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
            if (typeof window.renderAxicons === 'function') {
                window.renderAxicons();
            }
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
})();
