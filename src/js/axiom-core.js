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

// ============================================================================
// COMPONENT DATA - Expandable database for component documentation
// ============================================================================

const COMPONENTS_DB = {
  button: {
    title: 'Button',
    description: 'Interactive button component',
    code: '<button class="primary">Click me</button>'
  },
  'link-button': {
    title: 'Link Button',
    description: 'Anchor styled as button',
    code: '<a href="#" class="primary">Link</a>'
  },
  card: {
    title: 'Card',
    description: 'Container component',
    code: '<article class="card"><h3>Title</h3><p>Content</p></article>'
  },
  'card-image': {
    title: 'Card with Image',
    description: 'Card with image overlay',
    code: '<article class="card"><img src="image.jpg"><h3>Title</h3></article>'
  },
  input: {
    title: 'Form Input',
    description: 'Text input field',
    code: '<input type="text" placeholder="Enter text">'
  },
  select: {
    title: 'Form Select',
    description: 'Dropdown select',
    code: '<select><option>Option 1</option><option>Option 2</option></select>'
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Checkbox input',
    code: '<input type="checkbox"><label>Label</label>'
  },
  radio: {
    title: 'Radio Button',
    description: 'Radio input group',
    code: '<input type="radio" name="group"><label>Option</label>'
  },
  'alert-info': {
    title: 'Alert Info',
    description: 'Informational alert',
    code: '<div class="alert alert-info"><p>Info message</p></div>'
  },
  'alert-success': {
    title: 'Alert Success',
    description: 'Success alert',
    code: '<div class="alert alert-success"><p>Success!</p></div>'
  },
  'alert-warning': {
    title: 'Alert Warning',
    description: 'Warning alert',
    code: '<div class="alert alert-warning"><p>Warning</p></div>'
  },
  'alert-error': {
    title: 'Alert Error',
    description: 'Error alert',
    code: '<div class="alert alert-error"><p>Error!</p></div>'
  },
  'grid-auto': {
    title: 'Grid Auto-fit',
    description: 'Responsive auto-fit grid',
    code: '<div class="grid"><article class="card">Item</article></div>'
  },
  'grid-cols': {
    title: 'Grid Columns',
    description: 'Fixed column grid',
    code: '<div class="grid"><article>Item 1</article><article>Item 2</article></div>'
  },
  'table-basic': {
    title: 'Table Basic',
    description: 'Semantic table',
    code: '<table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Data</td></tr></tbody></table>'
  },
  'table-striped': {
    title: 'Table Striped',
    description: 'Table with row colors',
    code: '<table><tr><td>Row 1</td></tr><tr><td>Row 2</td></tr></table>'
  },
  'badge-primary': {
    title: 'Badge Primary',
    description: 'Primary badge',
    code: '<span class="badge badge-primary">New</span>'
  },
  'badge-secondary': {
    title: 'Badge Secondary',
    description: 'Secondary badge',
    code: '<span class="badge">Label</span>'
  },
  container: {
    title: 'Container',
    description: 'Max-width layout container',
    code: '<div class="container"><p>Centered content</p></div>'
  },
  typography: {
    title: 'Typography',
    description: 'Text and heading styles',
    code: '<h1>Heading</h1><p>Paragraph text</p>'
  }
};

const CHAPTERS_DB = {
  intro: {
    title: 'Introduction',
    subtitle: 'Getting started with semantic-first design'
  },
  'chapter-1': {
    title: '1. Semantic First',
    subtitle: 'The foundation of modern web design'
  },
  'chapter-2': {
    title: '2. The Philosophy',
    subtitle: 'Core principles of AXIOM01'
  },
  'chapter-3': {
    title: '3. OKLCH Colors',
    subtitle: 'Perceptually uniform color space'
  },
  'chapter-4': {
    title: '4. Design Tokens',
    subtitle: 'Mathematical design system'
  },
  'chapter-5': {
    title: '5. CSS Layers',
    subtitle: 'Override-free cascade architecture'
  },
  'chapter-6': {
    title: '6. Components',
    subtitle: 'Building semantic components'
  },
  'chapter-7': {
    title: '7. Responsive',
    subtitle: 'Mobile-first design approach'
  },
  'chapter-8': {
    title: '8. Accessibility',
    subtitle: 'Built-in accessibility from day one'
  },
  'chapter-9': {
    title: '9. Dark Mode',
    subtitle: 'Automatic dark mode with tokens'
  },
  'chapter-10': {
    title: '10. Typography',
    subtitle: 'Fluid font sizing and scaling'
  },
  'chapter-11': {
    title: '11. Spacing',
    subtitle: 'Mathematical spacing system'
  },
  'chapter-12': {
    title: '12. Forms',
    subtitle: 'Semantic form elements'
  },
  'chapter-13': {
    title: '13. Grids',
    subtitle: 'CSS Grid layouts'
  },
  'chapter-14': {
    title: '14. Layouts',
    subtitle: 'Common layout patterns'
  },
  'chapter-15': {
    title: '15. Advanced',
    subtitle: 'Advanced techniques and patterns'
  },
  'chapter-16': {
    title: '16. Examples',
    subtitle: 'Real-world examples'
  },
  conclusion: {
    title: 'Conclusion',
    subtitle: 'The future of semantic design'
  }
};


// ============================================================================
// COMPONENT PREVIEW ENRICHMENT
// ============================================================================

// Extend HubNav with database lookups (added after HubNav initialization)
const EnhancedComponentPreview = (() => {
  const showPreview = (componentName) => {
    const component = COMPONENTS_DB[componentName];
    if (!component) return;

    const preview = document.getElementById('component-preview');
    if (!preview) return;

    const displayName = component.title;
    const description = component.description;
    const code = component.code;

    preview.innerHTML = `
      <h3>${displayName}</h3>
      <p>${description}</p>
      <div style="margin-top: var(--a-space-md);">
        <code style="display: block; background: var(--a-surface-base); padding: var(--a-space-sm); border-radius: var(--a-radius-sm); font-size: var(--a-text-xs); overflow-x: auto;">${code}</code>
      </div>
    `;
  };

  return {
    showPreview
  };
})();

// Extend chapter loading with database
const EnhancedChapterLoader = (() => {
  const loadChapter = (chapterId) => {
    const chapter = CHAPTERS_DB[chapterId];
    const stage = document.getElementById('book-stage');
    if (!stage || !chapter) return;

    stage.innerHTML = `
      <article>
        <h2>${chapter.title}</h2>
        <p><em>${chapter.subtitle}</em></p>
        <p>Chapter content for ${chapter.title} will be loaded here.</p>
      </article>
    `;

    // Update metadata
    const meta = document.getElementById('book-meta');
    if (meta) {
      meta.innerHTML = `
        <h3>${chapter.title}</h3>
        <p>${chapter.subtitle}</p>
        <nav>
          <button class="outline" id="prev-chapter">← Previous</button>
          <button class="outline" id="next-chapter">Next →</button>
        </nav>
      `;

      // Re-attach button listeners
      const prevBtn = meta.querySelector('#prev-chapter');
      const nextBtn = meta.querySelector('#next-chapter');
      if (prevBtn) prevBtn.addEventListener('click', () => HubNav.goToChapter('prev'));
      if (nextBtn) nextBtn.addEventListener('click', () => HubNav.goToChapter('next'));
    }
  };

  return {
    loadChapter
  };
})();


// ============================================================================
// OVERRIDE HubNav WITH ENHANCED VERSIONS
// ============================================================================

// Store original methods
const _originalShowComponentPreview = HubNav.showComponentPreview;
const _originalLoadChapter = HubNav.loadChapter;

// Override with database-aware versions
HubNav.showComponentPreview = (componentName) => {
  if (COMPONENTS_DB[componentName]) {
    EnhancedComponentPreview.showPreview(componentName);
  } else {
    _originalShowComponentPreview(componentName);
  }
};

HubNav.loadChapter = (chapterId) => {
  if (CHAPTERS_DB[chapterId]) {
    EnhancedChapterLoader.loadChapter(chapterId);
  } else {
    _originalLoadChapter(chapterId);
  }
};


// ============================================================================
// CONFIGURATOR - Live token adjustment (future feature)
// ============================================================================

const Configurator = (() => {
  let isOpen = false;

  const init = () => {
    // This module is prepared for future implementation
    // It will allow users to:
    // - Adjust primary hue (0-360)
    // - Adjust spacing multiplier (0.8-1.5)
    // - Save configurations to localStorage
    // - Live-update all colors and spacing
    
    console.log('Configurator ready for expansion');
  };

  const toggle = () => {
    isOpen = !isOpen;
    const configurator = document.getElementById('configurator');
    if (configurator) {
      configurator.classList.toggle('open', isOpen);
    }
  };

  const setHue = (hue) => {
    document.documentElement.style.setProperty('--a-hue-primary', hue);
    localStorage.setItem('axiom01-v3-hue', hue);
  };

  const setSpacingMultiplier = (multiplier) => {
    // Would adjust spacing scale
    localStorage.setItem('axiom01-v3-spacing-mult', multiplier);
  };

  const reset = () => {
    setHue(250); // Default hue
    setSpacingMultiplier(1); // Default multiplier
  };

  return {
    init,
    toggle,
    setHue,
    setSpacingMultiplier,
    reset,
  };
})();


// ============================================================================
// UPDATE INITIALIZATION WITH CONFIGURATOR
// ============================================================================

// Add to DOMContentLoaded after other modules (update existing line)
// Configurator.init();

// Add to global Axiom API (update existing)
window.Axiom.configurator = {
  toggle: Configurator.toggle,
  setHue: Configurator.setHue,
  reset: Configurator.reset,
};


// ============================================================================
// SEARCH & FILTER FOR COMPONENTS
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
    const items = document.querySelectorAll('[data-component]');
    let visibleCount = 0;

    items.forEach((item) => {
      const card = item.closest('[data-category]');
      if (!card) return;

      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      const text = (h3?.textContent + ' ' + p?.textContent).toLowerCase();

      const matches = !searchQuery || text.includes(searchQuery);
      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    // Update count display
    const countEl = document.getElementById('component-count');
    if (countEl) {
      countEl.textContent = `${visibleCount} components found`;
    }
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

