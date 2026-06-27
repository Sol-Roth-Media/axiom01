/**
 * AXIOM01 v3 - Core Framework JavaScript
 * Pure semantic HTML + minimal JS. No frameworks. No dependencies.
 */

// ============================================================================
// NAVIGATION MODULE
// ============================================================================

const Navigation = (() => {
  let currentView = 'hero';

  const init = () => {
    document.querySelectorAll('[data-nav]').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const viewName = button.getAttribute('data-nav');
        navigate(viewName);
      });
    });
  };

  const navigate = (viewName) => {
    // Hide all views
    document.querySelectorAll('main > section').forEach((section) => {
      section.classList.add('hidden');
    });

    // Show selected view
    const view = document.getElementById(`view-${viewName}`);
    if (view) {
      view.classList.remove('hidden');
    }

    currentView = viewName;

    // Update nav buttons
    document.querySelectorAll('[data-nav]').forEach((el) => {
      el.setAttribute('aria-current', el.getAttribute('data-nav') === viewName ? 'page' : 'false');
    });

    // Close mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Initialize view-specific code
    if (viewName === 'docs') {
      setTimeout(() => ComponentLibrary.init(), 50);
    } else if (viewName === 'book') {
      setTimeout(() => BookLibrary.init(), 50);
    }
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
// MOBILE MENU
// ============================================================================

const MobileMenu = (() => {
  const init = () => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isOpen);
        menu.classList.toggle('hidden');
      });
    }
  };

  return { init };
})();

// ============================================================================
// COMPONENT LIBRARY MODULE
// ============================================================================

const ComponentLibrary = (() => {
  let allComponents = [];
  let categories = [];

  const init = async () => {
    try {
      // Load components data
      const response = await fetch('./content/components/index.json');
      if (!response.ok) throw new Error('Failed to load components');
      
      const data = await response.json();
      allComponents = data.components || [];
      categories = data.categories || [];

      // Populate UI
      populateCategories();
      populateSearch();

    } catch (error) {
      console.error('Error initializing component library:', error);
    }
  };

  const populateCategories = () => {
    const nav = document.getElementById('components-nav');
    if (!nav) return;

    nav.innerHTML = '';

    categories.forEach((category) => {
      const categoryComponents = allComponents.filter(c => c.category === category.name);
      if (categoryComponents.length === 0) return; // Skip empty categories

      const categoryId = `category-${category.id}`;

      const section = document.createElement('section');
      section.className = 'component-category';
      section.setAttribute('data-category', category.id);

      const header = document.createElement('header');
      const button = document.createElement('button');
      button.className = 'category-toggle';
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-controls', categoryId);

      button.innerHTML = `
        <span class="category-title">${category.name}</span>
        <span class="category-count">${categoryComponents.length} component${categoryComponents.length !== 1 ? 's' : ''}</span>
        <span class="category-chevron" aria-hidden="true">▼</span>
      `;

      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        categoryContent.hidden = expanded;
      });

      header.appendChild(button);
      section.appendChild(header);

      const categoryContent = document.createElement('nav');
      categoryContent.id = categoryId;
      categoryContent.className = 'category-items';
      categoryContent.hidden = false;

      categoryComponents.forEach((comp) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = comp.name;
        link.setAttribute('aria-label', `${comp.name} - ${comp.description || 'Component'}`);
        link.setAttribute('data-component', comp.id);

        link.addEventListener('click', (e) => {
          e.preventDefault();
          showComponentPreview(comp);
        });

        categoryContent.appendChild(link);
      });

      section.appendChild(categoryContent);
      nav.appendChild(section);
    });
  };

  const populateSearch = () => {
    const searchInput = document.getElementById('component-search');
    const searchResults = document.getElementById('search-results');
    const categoryToggles = document.querySelectorAll('.category-toggle');
    const allComponentLinks = document.querySelectorAll('[data-component]');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      let visibleCount = 0;
      const visibleCategories = new Set();

      // Filter component links
      allComponentLinks.forEach((link) => {
        const text = link.textContent.toLowerCase();
        const matches = text.includes(query) || query === '';

        if (matches && query !== '') {
          link.style.display = '';
          visibleCount++;
          const category = link.closest('.component-category');
          if (category) visibleCategories.add(category);
        } else if (query === '') {
          link.style.display = '';
        } else {
          link.style.display = 'none';
        }
      });

      // Update categories
      categoryToggles.forEach((toggle) => {
        const controlsId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(controlsId);
        const category = toggle.closest('.component-category');

        if (query === '') {
          toggle.setAttribute('aria-expanded', 'true');
          if (content) content.hidden = false;
        } else if (visibleCategories.has(category)) {
          toggle.setAttribute('aria-expanded', 'true');
          if (content) content.hidden = false;
        } else {
          toggle.setAttribute('aria-expanded', 'false');
          if (content) content.hidden = true;
        }
      });

      // Update results count
      if (query) {
        searchResults.textContent = `Found ${visibleCount} component${visibleCount !== 1 ? 's' : ''}`;
      } else {
        searchResults.textContent = '';
      }
    });
  };

  const showComponentPreview = (component) => {
    console.log('View component:', component.name);
  };

  return {
    init,
  };
})();

// ============================================================================
// BOOK LIBRARY MODULE
// ============================================================================

const BookLibrary = (() => {
  let allChapters = [];
  let currentChapterIndex = 0;

  const init = async () => {
    try {
      // Load chapters data
      const response = await fetch('./content/chapters/all-chapters.json');
      if (!response.ok) throw new Error('Failed to load chapters');
      
      const data = await response.json();
      allChapters = data.chapters || [];

      // Populate UI
      populateChapters();
      showChapter(0);

    } catch (error) {
      console.error('Error initializing book library:', error);
    }
  };

  const populateChapters = () => {
    const list = document.getElementById('chapters-list');
    if (!list) return;

    list.innerHTML = '';

    allChapters.forEach((chapter, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = chapter.title;
      a.setAttribute('data-chapter', index);

      a.addEventListener('click', (e) => {
        e.preventDefault();
        showChapter(index);
      });

      li.appendChild(a);
      list.appendChild(li);
    });
  };

  const showChapter = (index) => {
    if (index < 0 || index >= allChapters.length) return;

    currentChapterIndex = index;
    const chapter = allChapters[index];
    const stage = document.getElementById('book-stage');
    const metaDesc = document.getElementById('chapter-meta-desc');
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');

    if (stage) {
      stage.innerHTML = `
        <article>
          ${chapter.content ? chapter.content : ''}
        </article>
      `;
    }

    if (metaDesc) {
      metaDesc.textContent = chapter.title;
    }

    // Update chapter links
    document.querySelectorAll('#chapters-list a').forEach((link) => {
      link.classList.remove('active');
      if (parseInt(link.getAttribute('data-chapter')) === index) {
        link.classList.add('active');
      }
    });

    // Update prev/next buttons
    if (prevBtn) {
      prevBtn.disabled = index === 0;
      prevBtn.onclick = null;
      prevBtn.addEventListener('click', () => showChapter(index - 1));
    }

    if (nextBtn) {
      nextBtn.disabled = index === allChapters.length - 1;
      nextBtn.onclick = null;
      nextBtn.addEventListener('click', () => showChapter(index + 1));
    }
  };

  return {
    init,
  };
})();

// ============================================================================
// MAIN INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Config.init();
  MobileMenu.init();

  console.log('AXIOM01 v3 - The Semantic Rebellion initialized');
});

window.Axiom = {
  navigate: Navigation.navigate,
  setTheme: Config.setTheme,
};
