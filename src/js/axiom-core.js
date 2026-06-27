/**
 * AXIOM01 v3 - Core Framework JavaScript
 * The Semantic Rebellion: The Mathematics of Design
 * 
 * Minimal, focused on:
 * - Route management for the unified SPA
 * - Configuration and theme switching
 * - Hub navigation for Docs and Book
 * - Component preview and chapter loading
 * - Mobile menu management
 * - ContentLoader integration for JSON-driven content
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
    // Load persisted theme setting
    const savedTheme = localStorage.getItem(`${storagePrefix}theme`);
    if (savedTheme) setTheme(savedTheme);

    // Set up theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(`${storagePrefix}theme`, theme);
    updateThemeButton(theme);
  };

  const updateThemeButton = (theme) => {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', `Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`);
      btn.setAttribute('title', `Current: ${theme} mode`);
    }
  };

  return {
    init,
    setTheme,
  };
})();

// ============================================================================
// MOBILE MENU MANAGEMENT
// ============================================================================

const MobileMenu = (() => {
  const init = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (!menuToggle || !mobileMenu) return;

    // Toggle menu open/close
    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuToggle.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when nav button clicked
    document.querySelectorAll('#mobile-menu button[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Mobile theme toggle
    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        Config.setTheme(next);
        updateMobileThemeButton(next);
      });
    }

    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  };

  const updateMobileThemeButton = (theme) => {
    const btn = document.getElementById('mobile-theme-toggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
  };

  return {
    init,
  };
})();

// ============================================================================
// HUB NAVIGATION - Docs and Book Reader
// ============================================================================

const HubNav = (() => {
  let currentChapter = 'intro';
  let currentCategory = 'buttons';

  const init = () => {
    // Category navigation in Docs Hub
    document.querySelectorAll('aside [data-category]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        currentCategory = category;
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

    // Component viewing - integrated with ContentLoader
    document.querySelectorAll('[data-component]').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const componentName = btn.getAttribute('data-component');
        await showComponentPreview(componentName);
      });
    });

    // Chapter navigation buttons
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) prevBtn.addEventListener('click', () => goToChapter('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => goToChapter('next'));
  };

  const filterByCategory = (category) => {
    const items = document.querySelectorAll('#component-stage [data-category]');
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
    document.querySelectorAll('aside [data-category]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  };

  const showComponentPreview = async (componentName) => {
    const preview = document.getElementById('component-preview');
    const previewContent = document.getElementById('preview-content');
    
    if (!preview || !previewContent) return;

    // Show loading state
    preview.style.opacity = '0.6';
    
    try {
      // Load component data from JSON
      let component = null;
      
      // Try to find in current category first
      const components = await ContentLoader.loadComponents(currentCategory);
      component = components.find(c => c.id === `${componentName}-primary` || c.name.toLowerCase().includes(componentName));
      
      if (!component && currentCategory !== 'buttons') {
        // Fallback: search in buttons category
        const buttonComponents = await ContentLoader.loadComponents('buttons');
        component = buttonComponents.find(c => c.id === `${componentName}-primary` || c.name.toLowerCase().includes(componentName));
      }

      if (component) {
        // Update preview with actual component data
        document.getElementById('preview-name').textContent = component.name;
        document.getElementById('preview-description').textContent = component.description;
        document.getElementById('preview-html').textContent = component.html;
        document.getElementById('preview-css').textContent = component.css;
        document.getElementById('preview-usage').textContent = component.usage;
        document.getElementById('preview-accessibility').textContent = component.accessibility;
        
        // Show preview content
        previewContent.style.display = 'block';
      } else {
        // Fallback if component not found
        const displayName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
        document.getElementById('preview-name').textContent = displayName;
        document.getElementById('preview-description').textContent = 'Loading component details...';
        previewContent.style.display = 'block';
      }
    } catch (error) {
      console.error('Error loading component:', error);
      document.getElementById('preview-name').textContent = 'Error';
      document.getElementById('preview-description').textContent = 'Failed to load component details.';
      previewContent.style.display = 'block';
    } finally {
      preview.style.opacity = '1';
    }
  };

  const loadChapter = async (chapterId) => {
    const stage = document.getElementById('book-stage');
    const bookMeta = document.getElementById('book-meta');
    
    if (!stage) return;

    // Show loading state
    stage.style.opacity = '0.6';
    
    try {
      // Load chapter from ContentLoader
      const chapter = await ContentLoader.loadChapter(chapterId);
      
      if (chapter) {
        // Update book stage with chapter content
        stage.innerHTML = chapter.content;
        
        // Update chapter metadata
        if (bookMeta) {
          const metaDescription = bookMeta.querySelector('p');
          if (metaDescription && chapter.title) {
            metaDescription.textContent = `${chapter.title} - Chapter ${chapter.number}`;
          }
        }
      } else {
        // Fallback content
        stage.innerHTML = `<article><h2>Chapter Not Found</h2><p>This chapter could not be loaded.</p></article>`;
      }
    } catch (error) {
      console.error('Error loading chapter:', error);
      stage.innerHTML = `<article><h2>Error</h2><p>Failed to load chapter content.</p></article>`;
    } finally {
      stage.style.opacity = '1';
    }
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
  MobileMenu.init();
  HubNav.init();
  CodeSnippet.init();

  // Log that framework is loaded
  console.log('AXIOM01 v3 Framework loaded - The Semantic Rebellion: The Mathematics of Design');
});

// Expose global API for manual navigation if needed
window.Axiom = {
  navigate: Navigation.navigate,
  setTheme: Config.setTheme,
  filterByCategory: HubNav.filterByCategory,
  showComponentPreview: HubNav.showComponentPreview,
  loadChapter: HubNav.loadChapter,
};

// ============================================================================
// COMPONENT SEARCH & FILTER
// ============================================================================

const ComponentSearch = (() => {
  let searchQuery = '';

  const init = () => {
    const searchInput = document.getElementById('component-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      filterComponents();
    });
  };

  const filterComponents = () => {
    const items = document.querySelectorAll('[data-category]');
    let visibleCount = 0;

    items.forEach((item) => {
      const h3 = item.querySelector('h3');
      const p = item.querySelector('p');
      const text = (h3?.textContent + ' ' + p?.textContent).toLowerCase();

      const matches = !searchQuery || text.includes(searchQuery);
      item.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });
  };

  const reset = () => {
    searchQuery = '';
    const searchInput = document.getElementById('component-search');
    if (searchInput) searchInput.value = '';
    filterComponents();
  };

  return {
    init,
    filterComponents,
    reset,
  };
})();

// ============================================================================
// CONTENT LOADER - JSON file loading with caching
// ============================================================================

const ContentLoader = (() => {
  const cache = {};
  const baseUrl = './content';

  const loadJSON = async (path) => {
    if (cache[path]) {
      return cache[path];
    }

    try {
      const url = `${baseUrl}/${path}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status}`);
      }

      const data = await response.json();
      cache[path] = data;
      return data;
    } catch (error) {
      console.error(`ContentLoader error loading ${path}:`, error);
      return null;
    }
  };

  const loadComponents = async (category) => {
    const data = await loadJSON(`components/${category}.json`);
    return data ? data.components : [];
  };

  const loadAllComponents = async () => {
    const categories = ['buttons', 'cards', 'forms', 'alerts', 'layouts', 'misc'];
    const allComponents = [];

    for (const category of categories) {
      const components = await loadComponents(category);
      allComponents.push(...components);
    }

    return allComponents;
  };

  const loadChapters = async () => {
    const data = await loadJSON('chapters/all-chapters.json');
    return data ? data.chapters : [];
  };

  const loadChapter = async (chapterId) => {
    const chapters = await loadChapters();
    return chapters.find(ch => ch.id === chapterId) || null;
  };

  const clearCache = (path) => {
    if (path) {
      delete cache[path];
    } else {
      Object.keys(cache).forEach(key => delete cache[key]);
    }
  };

  return {
    loadJSON,
    loadComponents,
    loadAllComponents,
    loadChapters,
    loadChapter,
    clearCache,
  };
})();

// ============================================================================
// HUB NAV - ENHANCED WITH CONTENTLOADER INTEGRATION
// ============================================================================

// Override previous HubNav with enhanced version
const HubNavEnhanced = (() => {
  let currentChapter = 'intro';
  let currentComponent = null;

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

    // Component view buttons
    document.querySelectorAll('[data-component]').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const componentId = btn.getAttribute('data-component');
        await showComponentDetails(componentId);
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

    // Chapter navigation buttons
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) prevBtn.addEventListener('click', () => goToChapter('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => goToChapter('next'));
  };

  const showComponentDetails = async (componentId) => {
    const preview = document.getElementById('component-preview');
    if (!preview) return;

    // Show loading state
    preview.innerHTML = '<p style="opacity: 0.6;">Loading component...</p>';

    try {
      // Find component in all categories
      const allComponents = await ContentLoader.loadAllComponents();
      const component = allComponents.find(c => c.id === componentId);

      if (!component) {
        preview.innerHTML = '<p style="color: var(--a-error);">Component not found.</p>';
        return;
      }

      // Display component details
      preview.innerHTML = `
        <article>
          <h3>${component.name}</h3>
          <p><small>${component.description}</small></p>

          <div style="margin-top: var(--a-space-lg); border-top: 1px solid var(--a-border); padding-top: var(--a-space-md);">
            <h4 style="font-size: var(--a-text-sm); margin-top: 0;">HTML</h4>
            <code style="display: block; background: var(--a-surface-base); padding: var(--a-space-sm); border-radius: var(--a-radius-md); font-size: var(--a-text-xs); overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; margin-bottom: var(--a-space-md);">${escapeHtml(component.html)}</code>
          </div>

          <div style="border-top: 1px solid var(--a-border); padding-top: var(--a-space-md);">
            <h4 style="font-size: var(--a-text-sm); margin-top: 0;">CSS</h4>
            <code style="display: block; background: var(--a-surface-base); padding: var(--a-space-sm); border-radius: var(--a-radius-md); font-size: var(--a-text-xs); overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; margin-bottom: var(--a-space-md);">${escapeHtml(component.css)}</code>
          </div>

          <div style="border-top: 1px solid var(--a-border); padding-top: var(--a-space-md);">
            <h4 style="font-size: var(--a-text-sm); margin-top: 0; margin-bottom: var(--a-space-xs);">Usage</h4>
            <p style="font-size: var(--a-text-xs); margin: 0 0 var(--a-space-md) 0; color: var(--a-text-secondary);">${component.usage}</p>
          </div>

          <div style="border-top: 1px solid var(--a-border); padding-top: var(--a-space-md);">
            <h4 style="font-size: var(--a-text-sm); margin-top: 0; margin-bottom: var(--a-space-xs);">Accessibility</h4>
            <p style="font-size: var(--a-text-xs); margin: 0; color: var(--a-text-secondary);">${component.accessibility}</p>
          </div>
        </article>
      `;

      currentComponent = component;
    } catch (error) {
      console.error('Error loading component:', error);
      preview.innerHTML = '<p style="color: var(--a-error);">Error loading component details.</p>';
    }
  };

  const escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
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
    document.querySelectorAll('[data-category]').forEach((l) => {
      if (l.tagName === 'A') l.classList.remove('active');
    });
    if (link.tagName === 'A') link.classList.add('active');
  };

  const loadChapter = async (chapterId) => {
    const stage = document.getElementById('book-stage');
    const metaDesc = document.getElementById('chapter-meta-desc');
    if (!stage) return;

    try {
      const chapter = await ContentLoader.loadChapter(chapterId);
      
      if (!chapter) {
        stage.innerHTML = '<p>Chapter not found.</p>';
        return;
      }

      stage.innerHTML = chapter.content;
      if (metaDesc) {
        metaDesc.textContent = `${chapter.title} - Chapter ${chapter.number}`;
      }
    } catch (error) {
      console.error('Error loading chapter:', error);
      stage.innerHTML = '<p style="color: var(--a-error);">Error loading chapter.</p>';
    }
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
    showComponentDetails,
    loadChapter,
  };
})();

// Replace HubNav with HubNavEnhanced
window.HubNav = HubNavEnhanced;

// Update initialization to use enhanced version
const originalInit = document.addEventListener;
document.removeEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Config.init();
  MobileMenu.init();
  HubNav.init();
  ComponentSearch.init();
  CodeSnippet.init();
});

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Config.init();
  MobileMenu.init();
  HubNavEnhanced.init();
  ComponentSearch.init();
  CodeSnippet.init();

  console.log('AXIOM01 v3 Framework loaded with ContentLoader integration');
});

