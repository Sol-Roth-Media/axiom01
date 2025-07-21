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
                keys: ['title', 'content', 'keywords'],
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
            const response = await fetch('/data/search.json');
            this.data = await response.json();
        } catch (error) {
            console.error('Axiom: Error fetching search data:', error);
        }
    },

    renderResults(results, container) {
        container.innerHTML = '';
        if (results.length === 0) {
            container.innerHTML = '<p>No results found.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        results.slice(0, 10).forEach(result => {
            const item = result.item;
            const resultEl = document.createElement('div');
            resultEl.classList.add('result-item');
            resultEl.innerHTML = `
                <h4><a href="${item.url}">${item.title}</a></h4>
                <p>${item.content}</p>
            `;
            fragment.appendChild(resultEl);
        });
        container.appendChild(fragment);
    }
};

export default Search;
