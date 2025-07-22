const Search = {
    fuse: null,
    data: [],
    initialized: false,

    async init(element) {
        if (this.initialized) return;
        this.initialized = true;

        await this.fetchData();

        if (typeof Fuse !== 'undefined') {
            this.fuse = new Fuse(this.data, {
                keys: ['title', 'description', 'tags'],
                includeScore: true,
                threshold: 0.4,
            });
        } else {
            console.error("Axiom: Fuse.js is not loaded. Search will not work.");
            return;
        }

        const searchInput = element.querySelector('#search-modal-input');
        const resultsContainer = element.querySelector('#search-modal-results');

        if (!searchInput || !resultsContainer) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 2) {
                const results = this.fuse.search(query);
                this.renderResults(results, resultsContainer);
            } else {
                resultsContainer.innerHTML = '';
            }
        });
    },

    async fetchData() {
        try {
            // Fixed: Use relative path to search.json
            const response = await fetch('data/search.json');
            if (response.ok) {
                this.data = await response.json();
            } else {
                // Fallback data if search.json fails to load
                this.data = [
                    { title: 'Breadcrumb', url: 'docs/components/breadcrumb.html', description: 'Navigation breadcrumbs showing page hierarchy', category: 'Navigation' },
                    { title: 'Button', url: 'docs/components/button.html', description: 'Interactive action elements', category: 'Forms' },
                    { title: 'Card', url: 'docs/components/card.html', description: 'Content containers', category: 'Layout' },
                    { title: 'Alert', url: 'docs/components/alert.html', description: 'Contextual feedback messages', category: 'Feedback' }
                ];
            }
        } catch (error) {
            console.error('Axiom: Error fetching search data:', error);
            // Use fallback data
            this.data = [
                { title: 'Breadcrumb', url: 'docs/components/breadcrumb.html', description: 'Navigation breadcrumbs showing page hierarchy', category: 'Navigation' },
                { title: 'Button', url: 'docs/components/button.html', description: 'Interactive action elements', category: 'Forms' }
            ];
        }
    },

    renderResults(results, container) {
        container.innerHTML = '';
        if (results.length === 0) {
            container.innerHTML = '<p>No results found.</p>';
            return;
        }

        // Fixed: Properly handle search results with descriptions
        results.forEach(result => {
            const item = result.item;
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result';
            resultElement.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.description || 'No description available'}</p>
                <span class="category">${item.category}</span>
            `;

            resultElement.addEventListener('click', () => {
                // Fixed: Proper navigation for search results
                window.location.href = item.url;
            });

            container.appendChild(resultElement);
        });
    }
};

export default Search;
