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
                    { title: 'Accordion', url: 'components/accordion.html', description: 'Collapsible content sections', category: 'Layout' },
                    { title: 'Alert', url: 'components/alert.html', description: 'Contextual feedback messages', category: 'Feedback' },
                    { title: 'Badge', url: 'components/badge.html', description: 'Small status indicators', category: 'Display' },
                    { title: 'Button', url: 'components/button.html', description: 'Interactive action elements', category: 'Forms' },
                    { title: 'Card', url: 'components/card.html', description: 'Content containers', category: 'Layout' },
                    { title: 'Dropdown', url: 'components/dropdown.html', description: 'Contextual menu overlays', category: 'Navigation' },
                    { title: 'Forms', url: 'components/forms.html', description: 'Input and form elements', category: 'Forms' },
                    { title: 'Modal', url: 'components/modal.html', description: 'Dialog overlays', category: 'Overlay' },
                    { title: 'Navbar', url: 'components/navbar.html', description: 'Navigation headers', category: 'Navigation' },
                    { title: 'Table', url: 'components/table.html', description: 'Data tables', category: 'Display' },
                    { title: 'Tabs', url: 'components/tabs.html', description: 'Tabbed content', category: 'Navigation' },
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
        let currentResults = [];

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.toLowerCase().trim();

            if (!query) {
                hideSearchResults();
                return;
            }

            searchTimeout = setTimeout(() => {
                currentResults = performSearch(query);
                renderSearchResults(currentResults);
            }, 150);
        });

        searchInput.addEventListener('keydown', (e) => {
            if (searchResults.classList.contains('visible')) {
                handleKeyboardNavigation(e, currentResults);
            }
        });

        searchInput.addEventListener('focus', () => {
            const query = searchInput.value.toLowerCase().trim();
            if (query && currentResults.length > 0) {
                searchResults.classList.add('visible');
            }
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                hideSearchResults();
            }
        });
    }

    // Component list loading - FIXED: Use only components that actually exist
    if (componentList) {
        // These are the ONLY components that actually exist in /docs/components/
        const components = [
            'alert', 'badge', 'breadcrumb', 'button', 'card', 'carousel',
            'chat', 'commerce', 'dropdown', 'input', 'modal', 'table', 'tabs'
        ];

        components.forEach(component => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `components/${component}.html`;
            link.target = 'content-frame';
            link.textContent = component.charAt(0).toUpperCase() + component.slice(1);

            // Add click handler to ensure iframe navigation works
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const iframe = document.querySelector('iframe[name="content-frame"]');
                if (iframe) {
                    iframe.src = link.href;
                } else {
                    window.location.href = link.href;
                }
            });

            li.appendChild(link);
            componentList.appendChild(li);
        });
    }

    // Theme toggle functionality
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('axiom-theme', newTheme);

            const icon = themeToggleButton.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('axiom-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        const icon = themeToggleButton.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
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
