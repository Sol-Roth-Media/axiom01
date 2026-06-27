// ============================================================================
// COMPONENT CODE COPY ENHANCEMENT
// ============================================================================

const ComponentCopy = (() => {
  const init = () => {
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-copy-html') || e.target.hasAttribute('data-copy-css')) {
        const codeId = e.target.hasAttribute('data-copy-html') ? 'component-html' : 'component-css';
        const codeEl = document.getElementById(codeId);
        if (codeEl) {
          const text = codeEl.textContent || '';
          copyCode(text, e.target);
        }
      }
    });
  };

  const copyCode = (text, button) => {
    navigator.clipboard.writeText(text).then(() => {
      showFeedback(button);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  const showFeedback = (button) => {
    const original = button.textContent;
    button.textContent = '✓ Copied!';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
    }, 2000);
  };

  return {
    init,
  };
})();

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ComponentCopy.init());
} else {
  ComponentCopy.init();
}
