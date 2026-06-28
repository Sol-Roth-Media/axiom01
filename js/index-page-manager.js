// js/index-page-manager.js

document.addEventListener('DOMContentLoaded', () => {
  const safeRenderAxicons = () => {
    if (typeof window.renderAxicons === 'function') {
      window.setTimeout(() => window.renderAxicons(), 0);
    }
  };

  const searchData = [
    { title: "Accordion", cat: "components", url: "docs/components/accordion.html" },
    { title: "Account Menu", cat: "components", url: "docs/components/account-menu.html" },
    { title: "Advanced Table", cat: "components", url: "docs/components/advanced-table.html" },
    { title: "AI Chat", cat: "components", url: "docs/components/ai-chat.html" },
    { title: "AI Image Generator", cat: "components", url: "docs/components/ai-image-generator.html" },
    { title: "Alert", cat: "components", url: "docs/components/alert.html" },
    { title: "Audio Player", cat: "components", url: "docs/components/audio-player.html" },
    { title: "Autocomplete", cat: "components", url: "docs/components/autocomplete.html" },
    { title: "Avatar", cat: "components", url: "docs/components/avatar.html" },
    { title: "Badge", cat: "components", url: "docs/components/badge.html" },
    { title: "Breadcrumb", cat: "components", url: "docs/components/breadcrumb.html" },
    { title: "Button", cat: "components", url: "docs/components/button.html" },
    { title: "Card", cat: "components", url: "docs/components/card.html" },
    { title: "Carousel", cat: "components", url: "docs/components/carousel.html" },
    { title: "Chat", cat: "components", url: "docs/components/chat.html" },
    { title: "Chip Input", cat: "components", url: "docs/components/chip-input.html" },
    { title: "Component Browser", cat: "components", url: "docs/components/component-browser.html" },
    { title: "Commerce", cat: "components", url: "docs/components/commerce.html" },
    { title: "CTA", cat: "components", url: "docs/components/cta.html" },
    { title: "Data List", cat: "components", url: "docs/components/data-list.html" },
    { title: "Datepicker", cat: "components", url: "docs/components/datepicker.html" },
    { title: "Drawer", cat: "components", url: "docs/components/drawer.html" },
    { title: "Dropdown", cat: "components", url: "docs/components/dropdown.html" },
    { title: "Editor", cat: "components", url: "docs/components/editor.html" },
    { title: "Empty State", cat: "components", url: "docs/components/empty-state.html" },
    { title: "Feature Grid", cat: "components", url: "docs/components/feature-grid.html" },
    { title: "Field Validation", cat: "components", url: "docs/components/field-validation.html" },
    { title: "File Display & Download", cat: "components", url: "docs/components/file-display-download.html" },
    { title: "File Upload", cat: "components", url: "docs/components/file-upload.html" },
    { title: "Footer", cat: "components", url: "docs/components/footer.html" },
    { title: "Forms", cat: "components", url: "docs/components/forms.html" },
    { title: "Hero", cat: "components", url: "docs/components/hero.html" },
    { title: "Hierarchy", cat: "components", url: "docs/components/hierarchy.html" },
    { title: "Lightbox", cat: "components", url: "docs/components/lightbox.html" },
    { title: "List", cat: "components", url: "docs/components/list.html" },
    { title: "Masonry", cat: "components", url: "docs/components/masonry.html" },
    { title: "Mobile Navbar", cat: "components", url: "docs/components/mobile-navbar.html" },
    { title: "Modal", cat: "components", url: "docs/components/modal.html" },
    { title: "Multi-Step Form", cat: "components", url: "docs/components/multi-step-form.html" },
    { title: "Multimedia Picker", cat: "components", url: "docs/components/multimedia-picker.html" },
    { title: "Navigation", cat: "components", url: "docs/components/navigation.html" },
    { title: "Notification", cat: "components", url: "docs/components/notification.html" },
    { title: "Pagination", cat: "components", url: "docs/components/pagination.html" },
    { title: "Playlist", cat: "components", url: "docs/components/playlist.html" },
    { title: "Popover", cat: "components", url: "docs/components/popover.html" },
    { title: "Progress", cat: "components", url: "docs/components/progress.html" },
    { title: "Pull to Refresh", cat: "components", url: "docs/components/pull-to-refresh.html" },
    { title: "Rating", cat: "components", url: "docs/components/rating.html" },
    { title: "Search", cat: "components", url: "docs/components/search.html" },
    { title: "Segmented Control", cat: "components", url: "docs/components/segmented-control.html" },
    { title: "Settings", cat: "components", url: "docs/components/settings.html" },
    { title: "Sidebar", cat: "components", url: "docs/components/sidebar.html" },
    { title: "Skeleton", cat: "components", url: "docs/components/skeleton.html" },
    { title: "Slider", cat: "components", url: "docs/components/slider.html" },
    { title: "Spacing Demo", cat: "components", url: "docs/components/spacing-demo.html" },
    { title: "Stats", cat: "components", url: "docs/components/stats.html" },
    { title: "Steps", cat: "components", url: "docs/components/steps.html" },
    { title: "Stopwatch and Countdown", cat: "components", url: "docs/components/stopwatch-countdown.html" },
    { title: "Story View", cat: "components", url: "docs/components/story-view.html" },
    { title: "Swiping Card Interface", cat: "components", url: "docs/components/swiping-card-interface.html" },
    { title: "Table", cat: "components", url: "docs/components/table.html" },
    { title: "Tabs", cat: "components", url: "docs/components/tabs.html" },
    { title: "Testimonial", cat: "components", url: "docs/components/testimonial.html" },
    { title: "Timeline", cat: "components", url: "docs/components/timeline.html" },
    { title: "Toggle", cat: "components", url: "docs/components/toggle.html" },
    { title: "Tooltip", cat: "components", url: "docs/components/tooltip.html" },
    { title: "Touch Components", cat: "components", url: "docs/components/touch-components.html" },
    { title: "Video Player", cat: "components", url: "docs/components/video-player.html" },
    { title: "Axicons", cat: "docs", url: "docs/axicons.html" },
    { title: "Animations", cat: "docs", url: "docs/animations.html" },
    { title: "Colors & Tokens", cat: "docs", url: "docs/colors-advanced.html" },
    { title: "Components Overview", cat: "docs", url: "docs/components-overview.html" },
    { title: "Form Elements", cat: "docs", url: "docs/form-elements.html" },
    { title: "Integrations", cat: "docs", url: "docs/integrations.html" },
    { title: "Layout", cat: "docs", url: "docs/layout-advanced.html" },
    { title: "Media", cat: "docs", url: "docs/media-advanced.html" },
    { title: "Overview & Quickstart", cat: "docs", url: "docs/overview-quickstart.html" },
    { title: "Responsive Design", cat: "docs", url: "docs/responsive-design-guide.html" },
    { title: "Styling Guide", cat: "docs", url: "docs/styling-guide.html" },
    { title: "Typography", cat: "docs", url: "docs/typography-advanced.html" }
  ];

    // Helper function to apply theme
    const applyTheme = (themeName) => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
    };

    // Helper function to update the theme toggle button icon
    const updateThemeToggleButtonIcon = (themeName) => {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('.axicon');
            if (icon) {
                if (themeName === 'dark') {
                    icon.setAttribute('data-name', 'Sun');
                } else {
                    icon.setAttribute('data-name', 'Moon');
                }
                safeRenderAxicons();
            }
        }
    };

// 2. Theme Toggling (Header Toggle Button)
    const initHeaderThemeToggle = () => {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check system preference if no saved theme
        let currentTheme = localStorage.getItem('theme');
        if (!currentTheme) {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            currentTheme = prefersDark ? 'dark' : 'light';
        }
        
        applyTheme(currentTheme);
        updateThemeToggleButtonIcon(currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const modeInDOM = htmlElement.getAttribute("data-theme") || "light";
                const newTheme = modeInDOM === "light" ? 'dark' : 'light';
                applyTheme(newTheme);
                updateThemeToggleButtonIcon(newTheme);

                // Update theme explorer select if it exists
                const themeSelect = document.getElementById('theme-select');
                if (themeSelect) {
                    themeSelect.value = newTheme;
                    updateThemeDescription(newTheme);
                }
            });
        }
    };

    // 3. Spacing Demo
    const initSpacingDemo = () => {
        const spaceUnitSlider = document.getElementById('space-unit-slider');
        const spaceUnitValueSpan = document.getElementById('space-unit-value');

        if (spaceUnitSlider && spaceUnitValueSpan) {
            // Apply initial value
            document.documentElement.style.setProperty('--a-space-unit', `${spaceUnitSlider.value}rem`);
            spaceUnitValueSpan.textContent = spaceUnitSlider.value;

            spaceUnitSlider.addEventListener('input', (event) => {
                const value = event.target.value;
                document.documentElement.style.setProperty('--a-space-unit', `${value}rem`);
                spaceUnitValueSpan.textContent = value;
            });
        }
    };

    // 4. Component Browser
    const initComponentBrowser = () => {
        const componentTabsContainer = document.querySelector('.component-browser .tabs');
        const componentPreviewIframe = document.getElementById('component-preview-iframe');
        const componentCountSpan = document.getElementById('component-count');
        const componentSearchInput = document.getElementById('component-search-input');
        const componentCategoryFilter = document.getElementById('component-category-filter');
        const viewFullscreenButton = document.getElementById('view-fullscreen-button');

        const allComponentButtons = componentTabsContainer ? Array.from(componentTabsContainer.querySelectorAll('.tab-button')) : [];

        if (componentTabsContainer && componentPreviewIframe) {
            // Initialize iframe with the active tab's src
            const activeTab = componentTabsContainer.querySelector('.tab-button.active');
            if (activeTab) {
                componentPreviewIframe.src = activeTab.dataset.src;
            }

            componentTabsContainer.addEventListener('click', (event) => {
                const targetButton = event.target.closest('.tab-button');
                if (targetButton && !targetButton.classList.contains('active')) {
                    // Remove active from previous
                    const currentActive = componentTabsContainer.querySelector('.tab-button.active');
                    if (currentActive) {
                        currentActive.classList.remove('active');
                        currentActive.setAttribute('aria-selected', 'false');
                    }

                    // Add active to new
                    targetButton.classList.add('active');
                    targetButton.setAttribute('aria-selected', 'true');
                    componentPreviewIframe.src = targetButton.dataset.src;
                }
            });

            // Component Search and Filter
            const filterComponents = () => {
                const searchTerm = componentSearchInput.value.toLowerCase();
                const category = componentCategoryFilter.value;
                let visibleCount = 0;

                allComponentButtons.forEach(button => {
                    const componentName = button.textContent.toLowerCase();
                    const componentCategory = button.dataset.category || 'all'; // Assuming categories can be set via data-category

                    const matchesSearch = componentName.includes(searchTerm);
                    const matchesCategory = (category === 'all' || componentCategory === category);

                    if (matchesSearch && matchesCategory) {
                        button.style.display = '';
                        visibleCount++;
                    } else {
                        button.style.display = 'none';
                    }
                });
                if (componentCountSpan) {
                    componentCountSpan.textContent = visibleCount;
                }
            };

            if (componentSearchInput) {
                componentSearchInput.addEventListener('input', filterComponents);
            }
            if (componentCategoryFilter) {
                componentCategoryFilter.addEventListener('change', filterComponents);
            }
            // Initial filter to set count
            filterComponents();

            // View Fullscreen Button
            if (viewFullscreenButton) {
                viewFullscreenButton.addEventListener('click', () => {
                    const activeTab = componentTabsContainer.querySelector('.tab-button.active');
                    if (activeTab && activeTab.dataset.src) {
                        window.open(activeTab.dataset.src, '_blank');
                    }
                });
            }
        }
    };

    // 5. Search Modal — pure native, zero dependencies
    const initSearchModal = () => {
        const searchToggle = document.querySelector('.search.toggle');
        if (!searchToggle) return;

        // Resolve URL relative to current page location
        const resolveUrl = (url) => {
            if (!url || /^(https?:|#)/.test(url)) return url;
            const path = window.location.pathname;
            if (path.includes('/docs/components/')) return `../../${url}`;
            if (path.includes('/docs/'))            return `../${url}`;
            return url;
        };

        // Native search — case-insensitive substring match on title and category
        const search = (query) => {
            const q = query.toLowerCase().trim();
            if (!q) return [];
            return searchData.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.cat.toLowerCase().includes(q)
            );
        };

        // Build and inject the search dialog once
        const ensureDialog = () => {
            let dialog = document.getElementById('search-modal');
            if (dialog) return dialog;
            dialog = document.createElement('dialog');
            dialog.id = 'search-modal';
            dialog.setAttribute('aria-label', 'Search documentation');
            dialog.innerHTML = `
                <header>
                    <h2>Search</h2>
                    <button type="button" aria-label="Close search">
                        <span class="axicon render" data-name="X"></span>
                    </button>
                </header>
                <input type="search" id="search-modal-input"
                       placeholder="Search components and docs…"
                       aria-label="Search documentation" autocomplete="off">
                <div id="search-modal-results" role="status" aria-live="polite"></div>
            `;
            document.body.appendChild(dialog);
			safeRenderAxicons();
            return dialog;
        };

        const dialog = ensureDialog();
        const input = dialog.querySelector('#search-modal-input');
        const results = dialog.querySelector('#search-modal-results');
        const closeBtn = dialog.querySelector('header button');

        const open = () => {
			if (typeof dialog.showModal === 'function') {
				dialog.showModal();
			} else {
				dialog.setAttribute('open', 'true');
			}
            input.value = '';
            results.innerHTML = '';
            input.focus();
        };

        const close = () => {
			if (typeof dialog.close === 'function') {
				dialog.close();
			} else {
				dialog.removeAttribute('open');
			}
            searchToggle.focus();
        };

        // Render results list
        const render = (items) => {
            results.innerHTML = '';
            if (!input.value.trim()) return;
            if (!items.length) {
                results.innerHTML = '<p>No results found.</p>';
                return;
            }
            const ul = document.createElement('ul');
            items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = resolveUrl(item.url);
                a.textContent = item.title;
                a.addEventListener('click', () => dialog.close());
                li.appendChild(a);
                ul.appendChild(li);
            });
            results.appendChild(ul);
        };

        searchToggle.setAttribute('aria-controls', 'search-modal');
        searchToggle.addEventListener('click', open);
        closeBtn.addEventListener('click', close);
        input.addEventListener('input', () => render(search(input.value)));

        // Native dialog handles Escape and backdrop click automatically
        dialog.addEventListener('click', e => { if (e.target === dialog) close(); });
    };

          const initCurrentPageNavState = () => {
            const normalizePath = (value) => {
              if (!value) return '/';
              let path = value.split('#')[0].split('?')[0];
              path = path.replace(/\/index\.html$/, '/');
              path = path.replace(/\/$/, '');
              return path || '/';
            };

            const currentPath = normalizePath(window.location.pathname);
            const anchors = document.querySelectorAll('header.main a[href], footer a[href]');

            anchors.forEach((anchor) => {
              const href = anchor.getAttribute('href');
              if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return;

              const resolvedPath = normalizePath(new URL(href, window.location.href).pathname);
              if (resolvedPath === currentPath) {
                anchor.setAttribute('aria-current', 'page');
              } else if (!anchor.closest('.links') && anchor.getAttribute('aria-current') === 'page') {
                anchor.removeAttribute('aria-current');
              }
            });
          };

          const initCodeCopying = () => {
            document.querySelectorAll('[data-copy-snippet]').forEach((button) => {
              button.addEventListener('click', async () => {
                const pre = button.closest('article')?.querySelector('pre code');
                if (!pre) return;

                try {
                  await navigator.clipboard.writeText(pre.textContent || '');
                  const iconSpan = button.querySelector('.axicon');
                  if (iconSpan) {
                    const previousIcon = iconSpan.getAttribute('data-name');
                    iconSpan.setAttribute('data-name', 'Check');
                    safeRenderAxicons();
                    window.setTimeout(() => {
                      iconSpan.setAttribute('data-name', previousIcon || 'Copy');
                      safeRenderAxicons();
                    }, 2000);
                  }
                } catch (error) {
                  console.error('Failed to copy text:', error);
                }
              });
            });
          };

          const themeDescriptions = {
            "light": "A clean, professional, and modern theme perfect for corporate websites and applications.",
            "dark": "A sleek, low-light theme designed to reduce eye strain and provide a sophisticated look.",
            "corporate-clean": "A refined theme with a focus on clarity and professionalism, ideal for business applications.",
            "synthwave-84": "An energetic theme inspired by 80s aesthetics, featuring vibrant neons and dark backgrounds.",
            "nordic-calm": "A serene theme with muted colors and natural tones, evoking a sense of peace and simplicity.",
            "vintage-paper": "A classic, warm theme reminiscent of old books and documents, with sepia tones and textured backgrounds.",
            "dracula": "A dark, moody theme with deep purples and contrasting accents, popular among developers.",
            "solarized-light": "A carefully crafted light theme with a precise color palette for optimal readability and aesthetics.",
            "solarized-dark": "A carefully crafted dark theme with a precise color palette for optimal readability and aesthetics.",
            "luxe-black": "A luxurious dark theme with deep blacks and subtle gold accents, exuding elegance.",
            "minty-fresh": "A bright and invigorating theme with refreshing mint greens and clean whites.",
            "desert-sunset": "A warm theme inspired by desert landscapes, featuring oranges, reds, and earthy tones.",
            "deep-ocean": "A calming theme with deep blues and greens, reminiscent of the ocean's depths.",
            "gruvbox-dark": "The popular retro groove theme for developers.",
            "sakura-blossom": "A delicate theme inspired by cherry blossoms, with soft pinks and light pastels.",
            "matcha-green": "A soothing, earthy theme featuring various shades of green, inspired by matcha tea.",
            "monokai-pro": "A popular dark theme known for its vibrant and distinct syntax highlighting, great for developers.",
            "slate-gray": "A sophisticated theme with cool grays and blues, offering a modern and understated look.",
            "tropical-splash": "A lively theme with bright, contrasting colors inspired by tropical fruits and scenery.",
            "candy-pop": "A fun and playful theme with a burst of bright, cheerful colors.",
            "rose-pine": "A cozy, pastel-inspired dark theme with soft colors for a comfortable coding experience.",
            "midnight-moss": "A deep, earthy theme with dark greens and browns, inspired by a moonlit forest."
          };

          const updateThemeDescription = (selectedTheme) => {
            const themeDescriptionDisplay = document.getElementById('description-display');
            const paragraph = themeDescriptionDisplay?.querySelector('p');
            if (paragraph) {
              paragraph.textContent = themeDescriptions[selectedTheme] || 'No description available for this theme.';
            }
          };

          const initThemeExplorer = () => {
            const themeSelect = document.getElementById('theme-select');
            const htmlElement = document.documentElement;

            if (themeSelect) {
              themeSelect.value = htmlElement.getAttribute('data-theme') || 'light';
              updateThemeDescription(themeSelect.value);
              themeSelect.addEventListener('change', (event) => {
                const selectedTheme = event.target.value;
                applyTheme(selectedTheme);
                updateThemeDescription(selectedTheme);
                updateThemeToggleButtonIcon(selectedTheme);
              });
            }
          };

          const initSmoothScrolling = () => {
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
              anchor.addEventListener('click', function (event) {
                const targetSelector = this.getAttribute('href');
                if (!targetSelector || targetSelector === '#') return;
                const target = document.querySelector(targetSelector);
                if (target) {
                  event.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              });
            });
          };

          const initSidebarHighlighting = () => {
            const sidebarLinks = document.querySelectorAll('.sidebar nav a[href]');
            const currentPath = window.location.pathname;

            sidebarLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (!href || href.startsWith('#') || href.startsWith('http')) return;
              const absoluteLinkPath = new URL(href, window.location.href).pathname;
              const isActive = currentPath === absoluteLinkPath || currentPath.endsWith(href.replace(/^\.\.\//, ''));
              link.classList.toggle('active', isActive);
              if (isActive) {
                link.setAttribute('aria-current', 'page');
              }
            });
          };

          const initDynamicCopyrightYear = () => {
            const currentYear = String(new Date().getFullYear());
            document.querySelectorAll('#current-year, [data-current-year]').forEach((el) => {
              el.textContent = currentYear;
            });
          };

          const initDropdowns = () => {
            document.querySelectorAll('.dropdown[data-component="dropdown"]').forEach((dropdown) => {
              const toggle = dropdown.querySelector('.dropdown-toggle');
              if (!toggle) return;

              toggle.addEventListener('click', (event) => {
                event.stopPropagation();
                document.querySelectorAll('.dropdown.is-open').forEach((openDropdown) => {
                  if (openDropdown !== dropdown) {
                    openDropdown.classList.remove('is-open');
                    openDropdown.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
                  }
                });

                dropdown.classList.toggle('is-open');
                toggle.setAttribute('aria-expanded', String(dropdown.classList.contains('is-open')));
              });
            });

            document.addEventListener('click', (event) => {
              document.querySelectorAll('.dropdown.is-open').forEach((openDropdown) => {
                if (!openDropdown.contains(event.target)) {
                  openDropdown.classList.remove('is-open');
                  openDropdown.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
                }
              });
            });
          };

          const initTabs = () => {
            document.querySelectorAll('.tabs').forEach((tabsContainer) => {
              const tabButtons = tabsContainer.querySelectorAll('[role="tab"]');
              const tabPanels = tabsContainer.querySelectorAll('[role="tabpanel"]');

              tabButtons.forEach((button) => {
                button.addEventListener('click', () => {
                  tabButtons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));
                  tabPanels.forEach((panel) => {
                    panel.hidden = true;
                    panel.removeAttribute('aria-selected');
                  });

                  button.setAttribute('aria-selected', 'true');
                  const controlsId = button.getAttribute('aria-controls');
                  const targetPanel = controlsId ? document.getElementById(controlsId) : null;
                  if (targetPanel) {
                    targetPanel.hidden = false;
                    targetPanel.setAttribute('aria-selected', 'true');
                  }
                });
              });
            });
          };

          const initCascadeVisualization = () => {
            const slider = document.getElementById('cascade-slider');
            const valueDisplay = document.getElementById('cascade-value');
            const componentBox = document.querySelector('.component-box');
            const subcomponentBox = document.querySelector('.subcomponent-box');

            if (!slider || !valueDisplay) return;

            slider.addEventListener('input', (event) => {
              const value = parseFloat(event.target.value);
              valueDisplay.textContent = String(value);

              if (componentBox) {
                componentBox.style.padding = `calc(var(--a-space-l) * ${value})`;
              }
              if (subcomponentBox) {
                subcomponentBox.style.padding = `calc(var(--a-space-m) * ${value})`;
              }
            });
          };

    initHeaderThemeToggle();
    initSpacingDemo();
    initComponentBrowser();
    initSearchModal();
    initCurrentPageNavState();
    initCodeCopying();
    initThemeExplorer();
    initSmoothScrolling();
    initSidebarHighlighting();
    initDynamicCopyrightYear();
    initDropdowns(); // Initialize dropdowns
    initTabs(); // Initialize semantic tabs component
    initCascadeVisualization(); // Initialize cascade visualization
});