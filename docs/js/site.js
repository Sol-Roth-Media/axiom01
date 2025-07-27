document.addEventListener('DOMContentLoaded', () => {
    const componentList = document.getElementById('component-list');
    const themeToggleButton = document.getElementById('theme-toggle');
    const searchInput = document.getElementById('docs-search');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.setAttribute('role', 'listbox');
    searchResults.setAttribute('aria-label', 'Search results');
    document.querySelector('.search-bar').appendChild(searchResults);

    // Professional search functionality
    let searchData = [];
    let currentFocusIndex = -1;

    // Load comprehensive search data
    const loadSearchData = async () => {
        try {
            const response = await fetch('../data/search.json');
            if (response.ok) {
                searchData = await response.json();
            } else {
                // Fallback search data for components
                searchData = [
                    { title: 'Accordion', url: 'docs/components/accordion.html', description: 'Collapsible content sections', category: 'Layout' },
                    { title: 'Alert', url: 'docs/components/alert.html', description: 'Contextual feedback messages', category: 'Feedback' },
                    { title: 'Badge', url: 'docs/components/badge.html', description: 'Small status indicators', category: 'Display' },
                    { title: 'Button', url: 'docs/components/button.html', description: 'Interactive action elements', category: 'Forms' },
                    { title: 'Card', url: 'docs/components/card.html', description: 'Content containers', category: 'Layout' },
                    { title: 'Dropdown', url: 'docs/components/dropdown.html', description: 'Contextual menu overlays', category: 'Navigation' },
                    { title: 'Forms', url: 'docs/components/forms.html', description: 'Input and form elements', category: 'Forms' },
                    { title: 'Modal', url: 'docs/components/modal.html', description: 'Dialog overlays', category: 'Overlay' },
                    { title: 'Navbar', url: 'docs/components/navbar.html', description: 'Navigation headers', category: 'Navigation' },
                    { title: 'Table', url: 'docs/components/table.html', description: 'Data tables', category: 'Display' },
                    { title: 'Tabs', url: 'docs/components/tabs.html', description: 'Tabbed content', category: 'Navigation' },
                    { title: 'Typography', url: 'guides/typography.html', description: 'Text styling and hierarchy', category: 'Guide' },
                    { title: 'Colors & Theming', url: 'guides/theming-colors.html', description: 'Color system and theme customization', category: 'Guide' },
                    { title: 'Introduction', url: 'guides/introduction.html', description: 'Getting started with Axiom', category: 'Guide' },
                    { title: 'Philosophy', url: 'guides/philosophy.html', description: 'Axiom design principles', category: 'Guide' }
                ];
            }
        } catch (error) {
            console.warn('Search data not available, using fallback');
        }
    };

    // Initialize search
    loadSearchData();

    // Search function with fuzzy matching
    const performSearch = (query) => {
        if (!query || query.length < 2) return [];

        const results = searchData.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(query);
            const descMatch = item.description.toLowerCase().includes(query);
            const categoryMatch = item.category.toLowerCase().includes(query);
            return titleMatch || descMatch || categoryMatch;
        }).slice(0, 8); // Limit to 8 results

        return results;
    };

    // Render search results
    const renderSearchResults = (results) => {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            searchResults.classList.add('visible');
            return;
        }

        const resultHTML = results.map((item, index) => `
            <div class="search-result" data-index="${index}" role="option" tabindex="-1">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-description">${item.description}</div>
                <div class="search-result-category">${item.category}</div>
            </div>
        `).join('');

        searchResults.innerHTML = resultHTML;
        searchResults.classList.add('visible');
        currentFocusIndex = -1;

        // Add click handlers - FIXED: Proper iframe navigation
        searchResults.querySelectorAll('.search-result').forEach((result, index) => {
            result.addEventListener('click', () => {
                const item = results[index];
                const iframe = document.querySelector('iframe[name="content-frame"]');
                if (iframe) {
                    iframe.src = item.url;
                    hideSearchResults();
                    searchInput.blur();
                } else {
                    // Fallback: open in same window if iframe not found
                    window.location.href = item.url;
                }
            });
        });
    };

    // Hide search results
    const hideSearchResults = () => {
        searchResults.classList.remove('visible');
        searchResults.innerHTML = '';
        currentFocusIndex = -1;
    };

    // Handle keyboard navigation
    const handleKeyboardNavigation = (e, results) => {
        const resultElements = searchResults.querySelectorAll('.search-result');

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentFocusIndex = Math.min(currentFocusIndex + 1, resultElements.length - 1);
                updateFocus(resultElements);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentFocusIndex = Math.max(currentFocusIndex - 1, -1);
                updateFocus(resultElements);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentFocusIndex >= 0 && results[currentFocusIndex]) {
                    const item = results[currentFocusIndex];
                    const iframe = document.querySelector('iframe[name="content-frame"]');
                    if (iframe) {
                        iframe.src = item.url;
                        hideSearchResults();
                        searchInput.blur();
                    } else {
                        window.location.href = item.url;
                    }
                }
                break;
            case 'Escape':
                hideSearchResults();
                searchInput.blur();
                break;
        }
    };

    // Update focus styling
    const updateFocus = (elements) => {
        elements.forEach((el, index) => {
            el.classList.toggle('focused', index === currentFocusIndex);
        });
    };

    // Enhanced search functionality with debouncing
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.toLowerCase().trim();

            if (!query) {
                hideSearchResults();
                return;
            }

            searchTimeout = setTimeout(() => {
                const results = performSearch(query);
                renderSearchResults(results);
            }, 150);
        });

        // Handle keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            const results = performSearch(searchInput.value.toLowerCase().trim());
            handleKeyboardNavigation(e, results);
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-bar')) {
                hideSearchResults();
            }
        });
    }
    // Component list loading - FIXED: Use only components that actually exis// FIXED: Component navigation loading - ALL 41 components
    const loadComponentNavigation = () => {
        if (!componentList) return;

        const components = [
            { title: 'Accordion', url: 'components/accordion.md' },
            { title: 'Alert', url: 'components/alert.html' },
            { title: 'Avatar', url: 'components/avatar.md' },
            { title: 'Badge', url: 'components/badge.html' },
            { title: 'Breadcrumb', url: 'components/breadcrumb.html' },
            { title: 'Button', url: 'components/button.html' },
            { title: 'Card', url: 'components/card.html' },
            { title: 'Carousel', url: 'components/carousel.html' },
            { title: 'Chat', url: 'components/chat.html' },
            { title: 'Commerce', url: 'components/commerce.html' },
            { title: 'Datepicker', url: 'components/datepicker.md' },
            { title: 'Drawer', url: 'components/drawer.md' },
            { title: 'Dropdown', url: 'components/dropdown.html' },
            { title: 'Empty State', url: 'components/empty-state.md' },
            { title: 'File Upload', url: 'components/file-upload.md' },
            { title: 'Footer', url: 'components/footer.md' },
            { title: 'Forms', url: 'components/forms.md' },
            { title: 'Hero', url: 'components/hero.md' },
            { title: 'Infinite Scroll', url: 'components/infinite-scroll.md' },
            { title: 'Input', url: 'components/input.html' },
            { title: 'Media', url: 'components/media.md' },
            { title: 'Modal', url: 'components/modal.html' },
            { title: 'Multi-Step Form', url: 'components/multi-step-form.md' },
            { title: 'Navbar', url: 'components/navbar.md' },
            { title: 'Navigation', url: 'components/navigation.md' },
            { title: 'Notification', url: 'components/notification.md' },
            { title: 'Pagination', url: 'components/pagination.md' },
            { title: 'Paywall', url: 'components/paywall.md' },
            { title: 'Progress', url: 'components/progress.md' },
            { title: 'Search', url: 'components/search.md' },
            { title: 'Sidebar', url: 'components/sidebar.md' },
            { title: 'Skeleton', url: 'components/skeleton.md' },
            { title: 'Slider', url: 'components/slider.md' },
            { title: 'Stepper', url: 'components/stepper.md' },
            { title: 'Tab Bar', url: 'components/tab-bar.md' },
            { title: 'Table', url: 'components/table.html' },
            { title: 'Tabs', url: 'components/tabs.html' },
            { title: 'Tag', url: 'components/tag.md' },
            { title: 'Timeline', url: 'components/timeline.md' },
            { title: 'Toggle', url: 'components/toggle.md' },
            { title: 'Tooltip', url: 'components/tooltip.md' }
        ];

        componentList.innerHTML = components.map(component =>
            `<li><a href="${component.url}" target="content-frame">${component.title}</a></li>`
        ).join('');
    };

    // FIXED: Theme toggle functionality
    const initializeThemeToggle = () => {
        if (!themeToggleButton) return;

        const html = document.documentElement;
        const themeIcon = themeToggleButton.querySelector('i');

        // Get current theme
        const getCurrentTheme = () => html.getAttribute('data-theme') || 'light';

        // Update icon based on theme
        const updateIcon = (theme) => {
            if (themeIcon) {
                themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
            themeToggleButton.setAttribute('aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        };

        // Toggle theme
        const toggleTheme = () => {
            const currentTheme = getCurrentTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('axiom-theme', newTheme);
            updateIcon(newTheme);

            // Also update the iframe content if it exists
            const iframe = document.querySelector('iframe[name="content-frame"]');
            if (iframe && iframe.contentDocument) {
                iframe.contentDocument.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        // Initialize theme from localStorage or default to light
        const savedTheme = localStorage.getItem('axiom-theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);

        // Add click handler
        themeToggleButton.addEventListener('click', toggleTheme);
    };

    // Initialize all functionality
    loadComponentNavigation();
    initializeThemeToggle();
});

// Add CSS for search highlighting
const style = document.createElement('style');
style.textContent = `
    .search-results mark {
        background-color: var(--docs-primary);
        color: var(--a-color-on-primary);
        padding: 0 2px;
        border-radius: 2px;
    }
    
    .nav-group a.active {
        background-color: var(--docs-primary);
        color: var(--a-color-on-primary);
    }

    .search-results {
        position: absolute;
        z-index: 1000;
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        background-color: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: none;
    }

    .search-results.visible {
        display: block;
    }

    .search-result {
        padding: 10px 15px;
        cursor: pointer;
        transition: background 0.2s;
    }

    .search-result:hover, .search-result.focused {
        background-color: var(--docs-primary);
        color: var(--a-color-on-primary);
    }

    .search-no-results {
        padding: 10px 15px;
        color: var(--color-text);
        text-align: center;
    }
`;
document.head.appendChild(style);
