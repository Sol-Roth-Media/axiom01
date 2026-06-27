/**
 * AXIOM01 v3 - Core Framework JavaScript
 * The Semantic Rebellion: The Mathematics of Design
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
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = el.getAttribute('data-nav');
        navigate(target);
      });
    });

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
      window.history.pushState({ view: viewName }, '', `#${viewName}`);
    }
  };

  const switchView = (viewName) => {
    Object.values(views).forEach((viewId) => {
      const el = document.getElementById(viewId);
      if (el) el.classList.add('hidden');
    });

    const viewEl = document.getElementById(views[viewName]);
    if (viewEl) viewEl.classList.remove('hidden');

    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.setAttribute('aria-current', el.getAttribute('data-nav') === viewName ? 'page' : 'false');
    });

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
    const savedTheme = localStorage.getItem(`${storagePrefix}theme`);
    if (savedTheme) setTheme(savedTheme);

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
    
    if (!menuToggle || !mobileMenu) return;

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

    document.querySelectorAll('#mobile-menu button[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  };

  return {
    init,
  };
})();

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
    const items = document.querySelectorAll('#component-grid article[data-category]');

    items.forEach((item) => {
      const h3 = item.querySelector('h3');
      const p = item.querySelector('p');
      const text = ((h3?.textContent || '') + ' ' + (p?.textContent || '')).toLowerCase();

      const matches = !searchQuery || text.includes(searchQuery);
      item.style.display = matches ? '' : 'none';
    });
  };

  return {
    init,
    filterComponents,
  };
})();

// ============================================================================
// CONTENT LOADER
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
    const categories = [
      'buttons', 'cards', 'forms', 'alerts', 'layouts', 'misc',
      'typography', 'navigation', 'data', 'interactive'
    ];
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

  return {
    loadJSON,
    loadComponents,
    loadAllComponents,
    loadChapters,
    loadChapter,
  };
})();

// ============================================================================
// HUB NAV - COMPONENT & CHAPTER NAVIGATION
// ============================================================================

const HubNav = (() => {
  let currentChapter = 'intro';
  let currentCategory = 'buttons';

  const init = () => {
    document.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-category') && e.target.closest('[data-category]')) {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        currentCategory = category;
        filterByCategory(category);
        updateCategoryActive(e.target);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-component')) {
        e.preventDefault();
        const componentId = e.target.getAttribute('data-component');
        showComponentDetails(componentId);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-chapter')) {
        e.preventDefault();
        const chapter = e.target.getAttribute('data-chapter');
        currentChapter = chapter;
        loadChapter(chapter);
        updateChapterActive(e.target);
      }
    });

    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) prevBtn.addEventListener('click', () => goToChapter('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => goToChapter('next'));
  };

  const showComponentDetails = async (componentId) => {
    const preview = document.getElementById('component-preview');
    if (!preview) return;

    preview.innerHTML = '<p style="opacity: 0.6;">Loading component...</p>';

    try {
      const allComponents = await ContentLoader.loadAllComponents();
      const component = allComponents.find(c => c.id === componentId);

      if (!component) {
        preview.innerHTML = '<p style="color: var(--a-text-muted);">Component not found.</p>';
        return;
      }

      let livePreviewHTML = '';
      try {
        livePreviewHTML = `<div class="live-preview">${component.html}</div>`;
      } catch (e) {
        livePreviewHTML = '';
      }

      let styleTag = document.getElementById('component-preview-styles');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'component-preview-styles';
        document.head.appendChild(styleTag);
      }
      styleTag.textContent = `${component.css}`;

      preview.innerHTML = `
        <article>
          <h3>${component.name}</h3>
          <p><small>${component.description}</small></p>

          ${livePreviewHTML}

          <div style="margin-top: var(--a-space-lg); border-top: 1px solid var(--a-border); padding-top: var(--a-space-md);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--a-space-sm);">
              <h4 style="font-size: var(--a-text-sm); margin: 0;">HTML</h4>
              <button data-copy-html style="padding: 4px 8px; font-size: 12px; background: var(--a-surface-base); border: 1px solid var(--a-border); border-radius: var(--a-radius-sm); cursor: pointer;">Copy</button>
            </div>
            <code id="component-html" style="display: block; background: var(--a-surface-base); padding: var(--a-space-sm); border-radius: var(--a-radius-md); font-size: var(--a-text-xs); overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; margin-bottom: var(--a-space-md); font-family: 'Menlo', 'Monaco', 'Courier New', monospace;">${escapeHtml(component.html)}</code>
          </div>

          <div style="border-top: 1px solid var(--a-border); padding-top: var(--a-space-md);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--a-space-sm);">
              <h4 style="font-size: var(--a-text-sm); margin: 0;">CSS</h4>
              <button data-copy-css style="padding: 4px 8px; font-size: 12px; background: var(--a-surface-base); border: 1px solid var(--a-border); border-radius: var(--a-radius-sm); cursor: pointer;">Copy</button>
            </div>
            <code id="component-css" style="display: block; background: var(--a-surface-base); padding: var(--a-space-sm); border-radius: var(--a-radius-md); font-size: var(--a-text-xs); overflow-x: auto; white-space: pre-wrap; word-wrap: break-word; margin-bottom: var(--a-space-md); font-family: 'Menlo', 'Monaco', 'Courier New', monospace;">${escapeHtml(component.css)}</code>
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

      const htmlBtn = preview.querySelector('[data-copy-html]');
      const cssBtn = preview.querySelector('[data-copy-css]');
      
      if (htmlBtn) {
        htmlBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const codeEl = document.getElementById('component-html');
          if (codeEl) {
            const text = codeEl.textContent || '';
            navigator.clipboard.writeText(text);
            const orig = htmlBtn.textContent;
            htmlBtn.textContent = '✓ Copied!';
            htmlBtn.disabled = true;
            setTimeout(() => {
              htmlBtn.textContent = orig;
              htmlBtn.disabled = false;
            }, 2000);
          }
        });
      }
      
      if (cssBtn) {
        cssBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const codeEl = document.getElementById('component-css');
          if (codeEl) {
            const text = codeEl.textContent || '';
            navigator.clipboard.writeText(text);
            const orig = cssBtn.textContent;
            cssBtn.textContent = '✓ Copied!';
            cssBtn.disabled = true;
            setTimeout(() => {
              cssBtn.textContent = orig;
              cssBtn.disabled = false;
            }, 2000);
          }
        });
      }

    } catch (error) {
      console.error('Error loading component:', error);
      preview.innerHTML = '<p style="color: var(--a-text-muted);">Error loading component details.</p>';
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
    const items = document.querySelectorAll('#component-grid article[data-category]');
    items.forEach((item) => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all') {
        item.style.display = '';
      } else {
        item.style.display = itemCategory === category ? '' : 'none';
      }
    });
  };

  const updateCategoryActive = (link) => {
    document.querySelectorAll('aside [data-category]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
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
      stage.innerHTML = '<p style="color: var(--a-text-muted);">Error loading chapter.</p>';
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

// ============================================================================
// COMPONENT LIBRARY INITIALIZATION
// ============================================================================

const ComponentLibrary = (() => {
  const init = async () => {
    await populateComponentCards();
    await populateCategories();
  };

  const populateComponentCards = async () => {
    const gridContainer = document.getElementById('component-grid');
    if (!gridContainer) return;

    try {
      const allComponents = await ContentLoader.loadAllComponents();

      allComponents.forEach(component => {
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-category', component.category);
        card.innerHTML = `
          <h3>${component.name}</h3>
          <p>${component.description}</p>
          <footer>
            <button class="primary" data-component="${component.id}">View</button>
          </footer>
        `;
        gridContainer.appendChild(card);
      });

      HubNav.filterByCategory('buttons');

    } catch (error) {
      console.error('Error populating component cards:', error);
    }
  };

  const populateCategories = async () => {
    const categoryList = document.getElementById('categories-list');
    if (!categoryList) return;

    const categories = [
      { id: 'buttons', label: 'Buttons' },
      { id: 'cards', label: 'Cards' },
      { id: 'forms', label: 'Forms' },
      { id: 'alerts', label: 'Alerts' },
      { id: 'layouts', label: 'Layouts' },
      { id: 'misc', label: 'Misc' },
      { id: 'typography', label: 'Typography' },
      { id: 'navigation', label: 'Navigation' },
      { id: 'data', label: 'Data & Lists' },
      { id: 'interactive', label: 'Interactive' }
    ];

    categories.forEach(cat => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.setAttribute('data-category', cat.id);
      a.textContent = cat.label;
      
      a.addEventListener('click', (e) => {
        e.preventDefault();
        HubNav.filterByCategory(cat.id);
        HubNav.updateCategoryActive(a);
      });

      li.appendChild(a);
      categoryList.appendChild(li);
    });
  };

  return {
    init,
  };
})();

// ============================================================================
// INITIALIZE WHEN DOCS VIEW IS SHOWN
// ============================================================================

const originalNavigate = Navigation.navigate;
Navigation.navigate = function(viewName) {
  originalNavigate.call(this, viewName);
  
  if (viewName === 'docs') {
    setTimeout(() => {
      ComponentLibrary.init();
    }, 100);
  }
};

// ============================================================================
// MAIN INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Config.init();
  MobileMenu.init();
  HubNav.init();
  ComponentSearch.init();

  console.log('AXIOM01 v3 - The Semantic Rebellion: The Mathematics of Design');
});

window.Axiom = {
  navigate: Navigation.navigate,
  setTheme: Config.setTheme,
  filterByCategory: HubNav.filterByCategory,
  showComponentDetails: HubNav.showComponentDetails,
  loadChapter: HubNav.loadChapter,
};
