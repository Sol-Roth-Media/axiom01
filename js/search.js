// Axiom Enhanced Search Component JS

class AxiomSearch {
    constructor(formElement) {
        console.log('AxiomSearch: Constructor called.');
        this.form = formElement;
        this.input = this.form.querySelector('input[type="search"]') || this.form.querySelector('input[type="text"]');
        this.resultsContainer = document.getElementById(this.form.dataset.resultsContainer);
        this.dataUrl = this.form.dataset.dataUrl;
        this.data = [];
        this.fuse = null;

        this.init();
    }

    async init() {
        console.log('AxiomSearch: init() called.');

        // Check if required elements exist
        if (!this.input) {
            console.error('AxiomSearch: No search input found in form');
            return;
        }

        if (!this.dataUrl) {
            console.error('AxiomSearch: No data URL specified in form data-data-url attribute');
            return;
        }

        await this.fetchData();

        if (typeof Fuse !== 'undefined') {
            this.fuse = new Fuse(this.data, {
                keys: ['title', 'content'],
                threshold: 0.3
            });
        } else {
            console.error('AxiomSearch: Fuse.js not loaded. Fuzzy search will not work.');
        }

        // Add event listeners only if elements exist
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.search();
        });

        this.input.addEventListener('input', () => this.search());

        console.log('AxiomSearch: Initialized successfully');
    }

    async fetchData() {
        console.log('AxiomSearch: Fetching search data from:', this.dataUrl);
        try {
            const response = await fetch(this.dataUrl);
            this.data = await response.json();
            console.log('AxiomSearch: Search data fetched successfully.', this.data);
        } catch (error) {
            console.error('AxiomSearch: Error fetching search data:', error);
        }
    }

    search() {
        const query = this.input.value;
        console.log('AxiomSearch: Performing search for query:', query);
        let results = [];
        if (this.fuse) {
            results = this.fuse.search(query);
        } else {
            results = this.data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        }
        this.renderResults(results);
    }

    renderResults(results) {
        console.log('AxiomSearch: Rendering search results:', results);
        if (!this.resultsContainer) {
            console.error('AxiomSearch: Results container not found.');
            return;
        }
        this.resultsContainer.innerHTML = '';
        if (results.length === 0) {
            this.resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        results.forEach(result => {
            const item = result.item || result;
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.innerHTML = `<strong>${item.title}</strong><br>${item.content ? item.content.substring(0, 100) + '...' : ''}`;
            li.appendChild(a);
            ul.appendChild(li);
        });
        this.resultsContainer.appendChild(ul);
    }
}

window.AxiomComponents = window.AxiomComponents || {};
AxiomComponents.Search = {
    init: function() {
        console.log('AxiomComponents.Search.init called.');
        const searchForms = document.querySelectorAll('form[role="search"]');
        searchForms.forEach(form => {
            new AxiomSearch(form);
        });
    }
};