/**
 * AXIOM01 v3 - Core Framework JavaScript
 * The Semantic Rebellion: The Mathematics of Design
 * 
 * Minimal, focused on:
 * - Route management for the unified SPA
 * - Configuration and theme switching
 * - Hub navigation for Docs and Book
 * - Component preview and chapter loading
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
// HUB NAVIGATION - Docs and Book Reader
// ============================================================================

const HubNav = (() => {
  let currentChapter = 'intro';

  const init = () => {
    // Category navigation in Docs Hub
    document.querySelectorAll('[data-category]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        filterByCategory(category);
        updateCategoryActive(link);
      });
    });

    // Chapter navigation in Book Reader
    document.querySelectorAll('[data-chapter]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const chapter = link.getAttribute('data-chapter');
        currentChapter = chapter;
        loadChapter(chapter);
        updateChapterActive(link);
      });
    });

    // Component viewing
    document.querySelectorAll('[data-component]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const component = btn.getAttribute('data-component');
        showComponentPreview(component);
      });
    });

    // Chapter navigation buttons
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) prevBtn.addEventListener('click', () => goToChapter('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => goToChapter('next'));
  };

  const filterByCategory = (category) => {
    const items = document.querySelectorAll('[data-category]');
    items.forEach((item) => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all') {
        item.style.display = '';
      } else {
        item.style.display = itemCategory === category || itemCategory === 'all' ? '' : 'none';
      }
    });
  };

  const updateCategoryActive = (link) => {
    document.querySelectorAll('[data-category]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  };

  const showComponentPreview = (componentName) => {
    const preview = document.getElementById('component-preview');
    if (!preview) return;
    
    const displayName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    preview.innerHTML = `
      <h3>${displayName}</h3>
      <p>Code examples and live preview for the <strong>${displayName}</strong> component.</p>
    `;
  };

  const loadChapter = (chapterId) => {
    const stage = document.getElementById('book-stage');
    if (!stage) return;

    // Map chapter IDs to content
    const chapters = {
      'intro': {
        title: 'Introduction',
        content: 'Welcome to AXIOM01 v3: The Semantic Rebellion - The Mathematics of Design. This is the introduction chapter.'
      },
      'chapter-1': {
        title: '1. Semantic First',
        content: 'Learn why semantic HTML is the foundation of modern web design.'
      },
      'chapter-2': {
        title: '2. The Philosophy',
        content: 'Explore the core principles that drive AXIOM01 v3.'
      },
      'conclusion': {
        title: 'Conclusion',
        content: 'The future of semantic web design starts here.'
      }
    };

    const chapter = chapters[chapterId] || { title: 'Chapter', content: 'Chapter content here.' };
    stage.innerHTML = `<article><h2>${chapter.title}</h2><p>${chapter.content}</p></article>`;
  };

  const updateChapterActive = (link) => {
    document.querySelectorAll('[data-chapter]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  };

  const goToChapter = (direction) => {
    const chapters = Array.from(document.querySelectorAll('[data-chapter]'));
    const currentIndex = chapters.findIndex(ch => ch.getAttribute('data-chapter') === currentChapter);
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (chapters[newIndex]) {
      chapters[newIndex].click();
      chapters[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return {
    init,
    filterByCategory,
    showComponentPreview,
    loadChapter,
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
  HubNav.init();
  CodeSnippet.init();

  // Log that framework is loaded
  console.log('AXIOM01 v3 Framework loaded - The Semantic Rebellion: The Mathematics of Design');
});

// Expose global API for manual navigation if needed
window.Axiom = {
  navigate: Navigation.navigate,
  setTheme: Config.setTheme,
  setSpacing: Config.setSpacing,
  filterByCategory: HubNav.filterByCategory,
  showComponentPreview: HubNav.showComponentPreview,
  loadChapter: HubNav.loadChapter,
};
