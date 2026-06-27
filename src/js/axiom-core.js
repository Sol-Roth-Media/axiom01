/**
 * AXIOM01 v3 - Core Framework JavaScript
 * The Semantic Rebellion: The Mathematics of Design
 * 
 * Minimal, focused on:
 * - Route management for the unified SPA
 * - Configuration and theme switching
 * - Content database for embedded resources
 */

// ============================================================================
// NAVIGATION & ROUTING
// ============================================================================

const Navigation = (() => {
  let currentView = 'hero';

  const views = {
    hero: 'view-hero',
    docs: 'view-docs',
    book: 'view-book',
  };

  const init = () => {
    // Set up click handlers for navigation buttons
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = el.getAttribute('data-nav');
        navigate(target);
      });
    });

    // Handle browser back button
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.view) {
        switchView(e.state.view);
      }
    });
  };

  const navigate = (viewName) => {
    if (views[viewName]) {
      currentView = viewName;
      switchView(viewName);
      
      // Update browser history
      window.history.pushState({ view: viewName }, '', `#${viewName}`);
    }
  };

  const switchView = (viewName) => {
    // Hide all views
    Object.values(views).forEach((viewId) => {
      const el = document.getElementById(viewId);
      if (el) el.classList.add('hidden');
    });

    // Show selected view
    const viewEl = document.getElementById(views[viewName]);
    if (viewEl) viewEl.classList.remove('hidden');

    // Update active nav state
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.setAttribute('aria-current', el.getAttribute('data-nav') === viewName ? 'page' : 'false');
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    init,
    navigate,
    getCurrentView: () => currentView,
  };
})();

// ============================================================================
// CONFIGURATION & THEME
// ============================================================================

const Config = (() => {
  const storagePrefix = 'axiom01-v3-';

  const init = () => {
    // Load persisted settings
    const savedTheme = localStorage.getItem(`${storagePrefix}theme`);
    const savedSpacing = localStorage.getItem(`${storagePrefix}spacing`);

    if (savedTheme) setTheme(savedTheme);
    if (savedSpacing) setSpacing(savedSpacing);

    // Set up theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }

    // Set up spacing toggle
    const spacingToggle = document.getElementById('spacing-toggle');
    if (spacingToggle) {
      spacingToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-spacing') || 'normal';
        const next = current === 'compact' ? 'normal' : 'compact';
        setSpacing(next);
      });
    }
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(`${storagePrefix}theme`, theme);
    updateThemeButton(theme);
  };

  const setSpacing = (spacing) => {
    document.documentElement.setAttribute('data-spacing', spacing);
    localStorage.setItem(`${storagePrefix}spacing`, spacing);
    updateSpacingButton(spacing);
  };

  const updateThemeButton = (theme) => {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', `Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`);
      btn.setAttribute('title', `Current: ${theme} mode`);
    }
  };

  const updateSpacingButton = (spacing) => {
    const btn = document.getElementById('spacing-toggle');
    if (btn) {
      btn.setAttribute('aria-label', `Toggle ${spacing === 'compact' ? 'normal' : 'compact'} spacing`);
      btn.setAttribute('title', `Current: ${spacing} spacing`);
    }
  };

  return {
    init,
    setTheme,
    setSpacing,
  };
})();

// ============================================================================
// SEARCH & FILTER (for Docs Hub)
// ============================================================================

const Search = (() => {
  const init = () => {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      filterComponents(query);
    });
  };

  const filterComponents = (query) => {
    const items = document.querySelectorAll('[data-component-name]');
    items.forEach((item) => {
      const name = item.getAttribute('data-component-name').toLowerCase();
      const description = item.getAttribute('data-component-description')?.toLowerCase() || '';
      const matches = name.includes(query) || description.includes(query);
      item.style.display = matches ? 'block' : 'none';
    });
  };

  return {
    init,
  };
})();

// ============================================================================
// CONTENT LOADER
// ============================================================================

const Content = (() => {
  const loadComponentPreview = (componentName) => {
    const stage = document.getElementById('component-stage');
    if (!stage) return;

    // This would load component data
    // For now, just show a loading state
    stage.innerHTML = `<p>Loading ${componentName}...</p>`;

    // In a real implementation, fetch from DB_COMPONENTS
    if (window.DB_COMPONENTS && window.DB_COMPONENTS[componentName]) {
      stage.innerHTML = window.DB_COMPONENTS[componentName];
    }
  };

  const loadBookChapter = (chapterId) => {
    const stage = document.getElementById('book-stage');
    if (!stage) return;

    if (window.DB_BOOK && window.DB_BOOK[chapterId]) {
      stage.innerHTML = window.DB_BOOK[chapterId];
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateTableOfContents = () => {
    const stage = document.getElementById('book-stage');
    if (!stage) return;

    const headings = stage.querySelectorAll('h1, h2, h3');
    const toc = document.getElementById('book-toc');
    if (!toc) return;

    const list = document.createElement('ul');
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      const level = parseInt(heading.tagName[1]);
      const li = document.createElement('li');
      li.style.marginLeft = `${(level - 1) * 1.5}em`;

      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = heading.textContent;
      link.style.cursor = 'pointer';
      link.addEventListener('click', (e) => {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth' });
      });

      li.appendChild(link);
      list.appendChild(li);
    });

    toc.innerHTML = '';
    toc.appendChild(list);
  };

  return {
    loadComponentPreview,
    loadBookChapter,
    updateTableOfContents,
  };
})();

// ============================================================================
// CODE SNIPPET COPY
// ============================================================================

const CodeSnippet = (() => {
  const init = () => {
    document.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-copy-code')) {
        const codeBlock = e.target.closest('[data-code-block]');
        if (codeBlock) {
          const code = codeBlock.querySelector('code')?.textContent || '';
          copyToClipboard(code);
          showCopyFeedback(e.target);
        }
      }
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Success feedback handled in showCopyFeedback
    });
  };

  const showCopyFeedback = (button) => {
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

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all systems
  Navigation.init();
  Config.init();
  Search.init();
  CodeSnippet.init();

  // Log that framework is loaded
  console.log('AXIOM01 v3 Framework loaded - The Semantic Rebellion: The Mathematics of Design');
});

// Expose global API for manual navigation if needed
window.Axiom = {
  navigate: Navigation.navigate,
  setTheme: Config.setTheme,
  setSpacing: Config.setSpacing,
  loadComponent: Content.loadComponentPreview,
  loadChapter: Content.loadBookChapter,
};
