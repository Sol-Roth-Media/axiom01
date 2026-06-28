// js/index-page-manager.js

document.addEventListener('DOMContentLoaded', () => {
  const safeRenderAxicons = () => {
    if (typeof window.renderAxicons === 'function') {
      window.setTimeout(() => window.renderAxicons(), 0);
    }
  };

  const resolveProjectRootAsset = (assetPath) => {
    const path = window.location.pathname;
    if (path.includes('/docs/components/')) return `../../${assetPath}`;
    if (path.includes('/docs/')) return `../${assetPath}`;
    return assetPath;
  };

  let releaseInfoPromise;
  const loadReleaseInfo = async () => {
    if (!releaseInfoPromise) {
      releaseInfoPromise = fetch(resolveProjectRootAsset('release-info.json')).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load release metadata: ${response.status}`);
        }
        return response.json();
      });
    }
    return releaseInfoPromise;
  };

  const resolveSafeAssetUrl = (value) => {
    if (!value) return null;
    try {
      const url = new URL(value, window.location.href);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
      return url.href;
    } catch (error) {
      return null;
    }
  };

  const searchData = [
    { title: "Accordion", cat: "components", url: "docs/components/accordion.html" },
    { title: "Account Menu", cat: "components", url: "docs/components/account-menu.html" },
    { title: "Action Group", cat: "components", url: "docs/components/action-group.html" },
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

          const initReleaseMetadata = () => {
            const hasReleaseTargets = document.querySelector(
              '[data-release-version], [data-release-date], [data-release-components], [data-release-tokens], [data-release-css-gzip], [data-release-js-gzip], [data-release-total-gzip]'
            );
            if (!hasReleaseTargets) return;

            loadReleaseInfo()
              .then((releaseInfo) => {
                const mappings = [
                  ['data-release-version', releaseInfo.version],
                  ['data-release-date', releaseInfo.releaseDateFormatted],
                  ['data-release-components', String(releaseInfo.features.components)],
                  ['data-release-tokens', String(releaseInfo.features.designTokens)],
                  ['data-release-css-gzip', releaseInfo.bundle.css.sizeGzipped],
                  ['data-release-js-gzip', releaseInfo.bundle.js.sizeGzipped],
                  ['data-release-total-gzip', releaseInfo.bundle.total.sizeGzipped],
                ];

                mappings.forEach(([attribute, value]) => {
                  document.querySelectorAll(`[${attribute}]`).forEach((element) => {
                    element.textContent = value;
                  });
                });
              })
              .catch((error) => {
                console.warn('Could not load release-info.json:', error);
              });
          };

          const initBackToTop = () => {
            const scrollTopBtn = document.querySelector('[data-scroll-top], #scroll-to-top');
            if (!scrollTopBtn) return;

            const updateVisibility = () => {
              scrollTopBtn.hidden = window.pageYOffset <= 300;
            };

            scrollTopBtn.hidden = true;
            updateVisibility();
            window.addEventListener('scroll', updateVisibility, { passive: true });
            scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
          };

          const initDemoActions = () => {
            const openDialog = (dialog) => {
              if (!dialog) return;
              if (typeof dialog.showModal === 'function') {
                dialog.showModal();
              } else {
                dialog.setAttribute('open', 'true');
              }
            };

            const closeDialog = (dialog) => {
              if (!dialog) return;
              if (typeof dialog.close === 'function') {
                dialog.close();
              } else {
                dialog.removeAttribute('open');
              }
            };

            const createToast = (trigger) => {
              const regionId = trigger.getAttribute('data-toast-target');
              const region = regionId ? document.getElementById(regionId) : null;
              if (!region) return;

              const type = trigger.getAttribute('data-toast-type') || 'info';
              const title = trigger.getAttribute('data-toast-title') || 'Notice';
              const message = trigger.getAttribute('data-toast-message') || '';
              const toast = document.createElement('div');
              const content = document.createElement('div');
              const heading = document.createElement('strong');
              const body = document.createElement('p');
              const close = document.createElement('button');
              const icon = document.createElement('span');

              toast.className = `alert ${type}`;
              toast.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');

              heading.textContent = title;
              body.textContent = message;
              content.appendChild(heading);
              content.appendChild(body);

              close.type = 'button';
              close.className = 'close';
              close.setAttribute('aria-label', 'Dismiss');
              close.setAttribute('data-remove-closest', '.alert');

              icon.className = 'axicon render';
              icon.setAttribute('data-name', 'X');
              close.appendChild(icon);

              toast.appendChild(content);
              toast.appendChild(close);
              region.appendChild(toast);
              safeRenderAxicons();

              window.setTimeout(() => toast.remove(), 5000);
            };

            document.addEventListener('click', (event) => {
              const openTrigger = event.target.closest('[data-dialog-open]');
              if (openTrigger) {
                event.preventDefault();
                openDialog(document.getElementById(openTrigger.getAttribute('data-dialog-open')));
                return;
              }

              const closeTrigger = event.target.closest('[data-dialog-close]');
              if (closeTrigger) {
                event.preventDefault();
                const dialog = closeTrigger.getAttribute('data-dialog-close')
                  ? document.getElementById(closeTrigger.getAttribute('data-dialog-close'))
                  : closeTrigger.closest('dialog');
                closeDialog(dialog);
                return;
              }

              const removeTrigger = event.target.closest('[data-remove-closest]');
              if (removeTrigger) {
                event.preventDefault();
                const target = removeTrigger.closest(removeTrigger.getAttribute('data-remove-closest'));
                if (target?.classList.contains('alert')) {
                  target.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                  target.style.opacity = '0';
                  target.style.transform = 'translateX(100%)';
                  window.setTimeout(() => target.remove(), 250);
                } else {
                  target?.remove();
                }
                return;
              }

              const alertTrigger = event.target.closest('[data-alert-message]');
              if (alertTrigger) {
                event.preventDefault();
                window.alert(alertTrigger.getAttribute('data-alert-message'));
                return;
              }

              const lightboxTrigger = event.target.closest('[data-lightbox-dialog]');
              if (lightboxTrigger) {
                event.preventDefault();
                const dialog = document.getElementById(lightboxTrigger.getAttribute('data-lightbox-dialog'));
                const image = dialog?.querySelector('img');
                if (dialog && image) {
                  const imageSrc = resolveSafeAssetUrl(lightboxTrigger.getAttribute('data-lightbox-src'));
                  if (!imageSrc) return;
                  image.src = imageSrc;
                  image.alt = lightboxTrigger.getAttribute('data-lightbox-alt') || '';
                  openDialog(dialog);
                }
                return;
              }

              const toastTrigger = event.target.closest('[data-toast-target]');
              if (toastTrigger) {
                event.preventDefault();
                createToast(toastTrigger);
              }
            });
          };

          const initCarouselDemos = () => {
            document.querySelectorAll('[data-carousel-step]').forEach((button) => {
              button.addEventListener('click', () => {
                const trackId = button.getAttribute('aria-controls');
                const track = trackId ? document.getElementById(trackId) : null;
                if (!track) return;

                const slides = Array.from(track.children);
                if (!slides.length) return;

                const direction = Number(button.getAttribute('data-carousel-step') || '0');
                const currentIndex = Number(track.getAttribute('data-carousel-index') || '0');
                const nextIndex = (currentIndex + direction + slides.length) % slides.length;

                track.setAttribute('data-carousel-index', String(nextIndex));
                track.style.transform = `translateX(-${nextIndex * 100}%)`;
              });
            });
          };

          const initComponentsOverview = () => {
            const overview = document.querySelector('[data-component="components-overview"]');
            if (!overview) return;

            const searchInput = overview.querySelector('#component-search');
            const searchResults = overview.querySelector('#search-results');
            const allComponentLinks = overview.querySelectorAll('.components-nav .category-items a[href*="components/"]');
            const categoryToggles = overview.querySelectorAll('.category-toggle');

            categoryToggles.forEach((toggle) => {
              toggle.addEventListener('click', () => {
                const expanded = toggle.getAttribute('aria-expanded') === 'true';
                const controlsId = toggle.getAttribute('aria-controls');
                const content = controlsId ? document.getElementById(controlsId) : null;

                toggle.setAttribute('aria-expanded', String(!expanded));
                if (content) {
                  content.hidden = expanded;
                }
              });
            });

            if (searchInput && searchResults) {
              searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase().trim();
                let visibleCount = 0;
                const visibleCategories = new Set();

                allComponentLinks.forEach((link) => {
                  const text = link.textContent.toLowerCase();
                  const label = link.getAttribute('aria-label')?.toLowerCase() || '';
                  const matches = query === '' || text.includes(query) || label.includes(query);

                  link.hidden = !matches;
                  if (matches && query !== '') {
                    visibleCount += 1;
                    const category = link.closest('[data-category]');
                    if (category) visibleCategories.add(category);
                  }
                });

                categoryToggles.forEach((toggle) => {
                  const controlsId = toggle.getAttribute('aria-controls');
                  const content = controlsId ? document.getElementById(controlsId) : null;
                  const category = toggle.closest('[data-category]');
                  const shouldExpand = query === '' || visibleCategories.has(category);
                  toggle.setAttribute('aria-expanded', String(shouldExpand));
                  if (content) {
                    content.hidden = !shouldExpand;
                  }
                });

                searchResults.textContent = query
                  ? `Found ${visibleCount} component${visibleCount === 1 ? '' : 's'}`
                  : '';
              });
            }

            const applyResponsiveState = () => {
              if (window.innerWidth >= 768) {
                categoryToggles.forEach((toggle) => {
                  toggle.setAttribute('aria-expanded', 'true');
                  const controlsId = toggle.getAttribute('aria-controls');
                  const content = controlsId ? document.getElementById(controlsId) : null;
                  if (content) content.hidden = false;
                });
                return;
              }

              categoryToggles.forEach((toggle) => {
                const category = toggle.closest('[data-category]');
                const expanded = category?.getAttribute('data-category') === 'feedback';
                toggle.setAttribute('aria-expanded', String(expanded));
                const controlsId = toggle.getAttribute('aria-controls');
                const content = controlsId ? document.getElementById(controlsId) : null;
                if (content) content.hidden = !expanded;
              });
            };

            applyResponsiveState();
            window.addEventListener('resize', applyResponsiveState);
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

              const activateTab = (button) => {
                tabButtons.forEach((btn) => {
                  btn.setAttribute('aria-selected', String(btn === button));
                  btn.tabIndex = btn === button ? 0 : -1;
                });
                tabPanels.forEach((panel) => {
                  const isTarget = panel.id === button.getAttribute('aria-controls');
                  panel.hidden = !isTarget;
                  if (isTarget) {
                    panel.setAttribute('aria-selected', 'true');
                  } else {
                    panel.removeAttribute('aria-selected');
                  }
                });
              };

              tabButtons.forEach((button) => {
                button.tabIndex = button.getAttribute('aria-selected') === 'true' ? 0 : -1;
                button.addEventListener('click', () => activateTab(button));
                button.addEventListener('keydown', (event) => {
                  const buttons = Array.from(tabButtons);
                  const currentIndex = buttons.indexOf(button);
                  if (currentIndex === -1) return;

                  let nextIndex = currentIndex;
                  if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % buttons.length;
                  if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                  if (event.key === 'Home') nextIndex = 0;
                  if (event.key === 'End') nextIndex = buttons.length - 1;
                  if (nextIndex !== currentIndex) {
                    event.preventDefault();
                    buttons[nextIndex].focus();
                    activateTab(buttons[nextIndex]);
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
    initReleaseMetadata();
    initCurrentPageNavState();
    initCodeCopying();
    initThemeExplorer();
    initSmoothScrolling();
    initSidebarHighlighting();
    initDynamicCopyrightYear();
    initBackToTop();
    initDemoActions();
    initCarouselDemos();
    initComponentsOverview();
    initDropdowns(); // Initialize dropdowns
    initTabs(); // Initialize semantic tabs component
    initCascadeVisualization(); // Initialize cascade visualization
});