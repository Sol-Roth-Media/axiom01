// js/index-page-manager.js

document.addEventListener('DOMContentLoaded', () => {

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
                // Re-render the icon
                if (typeof renderAxicons === 'function') {
                    setTimeout(renderAxicons, 0);
                }
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

        // All searchable items — title and category for matching
        const SEARCH_INDEX = [
            { title: 'Accordion',            cat: 'components', url: 'docs/components/accordion.html' },
            { title: 'Alert',                cat: 'components', url: 'docs/components/alert.html' },
            { title: 'Audio Player',         cat: 'components', url: 'docs/components/audio-player.html' },
            { title: 'Avatar',               cat: 'components', url: 'docs/components/avatar.html' },
            { title: 'Badge',                cat: 'components', url: 'docs/components/badge.html' },
            { title: 'Breadcrumb',           cat: 'components', url: 'docs/components/breadcrumb.html' },
            { title: 'Button',               cat: 'components', url: 'docs/components/button.html' },
            { title: 'Card',                 cat: 'components', url: 'docs/components/card.html' },
            { title: 'Carousel',             cat: 'components', url: 'docs/components/carousel.html' },
            { title: 'Chat',                 cat: 'components', url: 'docs/components/chat.html' },
            { title: 'Call to Action',       cat: 'components', url: 'docs/components/cta.html' },
            { title: 'Data List',            cat: 'components', url: 'docs/components/data-list.html' },
            { title: 'Drawer',               cat: 'components', url: 'docs/components/drawer.html' },
            { title: 'Dropdown',             cat: 'components', url: 'docs/components/dropdown.html' },
            { title: 'Editor',               cat: 'components', url: 'docs/components/editor.html' },
            { title: 'Empty State',          cat: 'components', url: 'docs/components/empty-state.html' },
            { title: 'Feature Grid',         cat: 'components', url: 'docs/components/feature-grid.html' },
            { title: 'File Upload',          cat: 'components', url: 'docs/components/file-upload.html' },
            { title: 'Footer',               cat: 'components', url: 'docs/components/footer.html' },
            { title: 'Forms',                cat: 'components', url: 'docs/components/forms.html' },
            { title: 'Hero',                 cat: 'components', url: 'docs/components/hero.html' },
            { title: 'Lightbox',             cat: 'components', url: 'docs/components/lightbox.html' },
            { title: 'List',                 cat: 'components', url: 'docs/components/list.html' },
            { title: 'Masonry',              cat: 'components', url: 'docs/components/masonry.html' },
            { title: 'Modal',                cat: 'components', url: 'docs/components/modal.html' },
            { title: 'Multi-Step Form',      cat: 'components', url: 'docs/components/multi-step-form.html' },
            { title: 'Navigation',           cat: 'components', url: 'docs/components/navigation.html' },
            { title: 'Notification',         cat: 'components', url: 'docs/components/notification.html' },
            { title: 'Pagination',           cat: 'components', url: 'docs/components/pagination.html' },
            { title: 'Playlist',             cat: 'components', url: 'docs/components/playlist.html' },
            { title: 'Popover',              cat: 'components', url: 'docs/components/popover.html' },
            { title: 'Progress',             cat: 'components', url: 'docs/components/progress.html' },
            { title: 'Rating',               cat: 'components', url: 'docs/components/rating.html' },
            { title: 'Search',               cat: 'components', url: 'docs/components/search.html' },
            { title: 'Segmented Control',    cat: 'components', url: 'docs/components/segmented-control.html' },
            { title: 'Settings',             cat: 'components', url: 'docs/components/settings.html' },
            { title: 'Sidebar',              cat: 'components', url: 'docs/components/sidebar.html' },
            { title: 'Skeleton',             cat: 'components', url: 'docs/components/skeleton.html' },
            { title: 'Slider',               cat: 'components', url: 'docs/components/slider.html' },
            { title: 'Stats',                cat: 'components', url: 'docs/components/stats.html' },
            { title: 'Steps',                cat: 'components', url: 'docs/components/steps.html' },
            { title: 'Table',                cat: 'components', url: 'docs/components/table.html' },
            { title: 'Tabs',                 cat: 'components', url: 'docs/components/tabs.html' },
            { title: 'Testimonial',          cat: 'components', url: 'docs/components/testimonial.html' },
            { title: 'Timeline',             cat: 'components', url: 'docs/components/timeline.html' },
            { title: 'Toggle',               cat: 'components', url: 'docs/components/toggle.html' },
            { title: 'Tooltip',              cat: 'components', url: 'docs/components/tooltip.html' },
            { title: 'Video Player',         cat: 'components', url: 'docs/components/video-player.html' },
            { title: 'Get Started',          cat: 'docs',       url: 'docs/overview-quickstart.html' },
            { title: 'All Components',       cat: 'docs',       url: 'docs/components-overview.html' },
            { title: 'Colors & Tokens',      cat: 'docs',       url: 'docs/colors-advanced.html' },
            { title: 'Typography',           cat: 'docs',       url: 'docs/typography-advanced.html' },
            { title: 'Layout',               cat: 'docs',       url: 'docs/layout-advanced.html' },
            { title: 'Animations',           cat: 'docs',       url: 'docs/animations.html' },
            { title: 'Icons / Axicons',      cat: 'docs',       url: 'docs/axicons.html' },
            { title: 'Styling Guide',        cat: 'docs',       url: 'docs/styling-guide.html' },
            { title: 'Form Elements',        cat: 'docs',       url: 'docs/form-elements.html' },
        ];

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
            return SEARCH_INDEX.filter(item =>
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
            return dialog;
        };

        const dialog = ensureDialog();
        const input = dialog.querySelector('#search-modal-input');
        const results = dialog.querySelector('#search-modal-results');
        const closeBtn = dialog.querySelector('header button');

        const open = () => {
            dialog.showModal();
            input.value = '';
            results.innerHTML = '';
            input.focus();
        };

        const close = () => {
            dialog.close();
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