
import Fuse from 'fuse.js';

export default class Search {
    constructor(element) {
        this.element = element;
        this.toggleButton = document.querySelector('[data-search.toggle]');
        this.closeButton = this.element.querySelector('[data-search-close]');
        this.searchInput = this.element.querySelector('[data-search-input]');
        this.searchResultsContainer = this.element.querySelector('[data-search-results]');
        this.focusableElements = []; // To store focusable elements for trapping
        this.previouslyFocusedElement = null;

        this.fuse = null;
        if (window.searchData && Array.isArray(window.searchData)) {
            this.fuse = new Fuse(window.searchData, {
                keys: ['title', 'content'],
                threshold: 0.3, // Adjust for fuzziness
                includeMatches: true,
                includeScore: true,
            });
        } else {
            console.warn('window.searchData is not defined or not an array. Search functionality may be limited.');
        }

        this.boundHandleKeydown = this.handleKeydown.bind(this);
        this.boundHandleInput = this.handleInput.bind(this);
        this.boundHandleClick = this.handleClick.bind(this);
        this.boundHandleFocus = this.handleFocus.bind(this);

        this.init();
    }

    init() {
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', this.boundHandleClick);
        }
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.boundHandleClick);
        }
        if (this.searchInput) {
            this.searchInput.addEventListener('input', this.boundHandleInput);
        }
        document.addEventListener('keydown', this.boundHandleKeydown);

        // Initial ARIA setup
        this.element.setAttribute('aria-hidden', 'true');
        if (this.toggleButton) {
            this.toggleButton.setAttribute('aria-expanded', 'false');
        }
    }

    handleClick(event) {
        if (event.currentTarget === this.toggleButton) {
            this.openSearch();
        } else if (event.currentTarget === this.closeButton) {
            this.closeSearch();
        }
    }

    handleInput(event) {
        const query = event.target.value;
        this.performSearch(query);
    }

    handleKeydown(event) {
        if (event.key === 'Escape' && this.element.classList.contains('is-open')) {
            this.closeSearch();
        } else if (event.key === 'Tab' && this.element.classList.contains('is-open')) {
            this.handleTabKey(event);
        } else if (['ArrowUp', 'ArrowDown', 'Enter'].includes(event.key) && this.element.classList.contains('is-open')) {
            this.handleArrowKeys(event);
        }
    }

    handleTabKey(event) {
        const focusable = this.getFocusableElements();
        if (focusable.length === 0) {
            event.preventDefault();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) { // Shift + Tab
            if (document.activeElement === first) {
                last.focus();
                event.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === last) {
                first.focus();
                event.preventDefault();
            }
        }
    }

    handleArrowKeys(event) {
        const results = Array.from(this.searchResultsContainer.querySelectorAll('li'));
        if (results.length === 0) return;

        let currentIndex = results.findIndex(li => li.classList.contains('is-active'));

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % results.length;
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            currentIndex = (currentIndex - 1 + results.length) % results.length;
        } else if (event.key === 'Enter' && currentIndex !== -1) {
            event.preventDefault();
            results[currentIndex].querySelector('a').click();
            return;
        }

        results.forEach((li, index) => {
            if (index === currentIndex) {
                li.classList.add('is-active');
                li.focus(); // Make the LI focusable for screen readers
            } else {
                li.classList.remove('is-active');
            }
        });
    }

    openSearch() {
        this.previouslyFocusedElement = document.activeElement;
        this.element.classList.add('is-open');
        this.element.setAttribute('aria-hidden', 'false');
        if (this.toggleButton) {
            this.toggleButton.setAttribute('aria-expanded', 'true');
        }
        this.searchInput.value = ''; // Clear previous search
        this.searchResultsContainer.innerHTML = ''; // Clear previous results
        this.searchInput.focus();
        this.trapFocus();
    }

    closeSearch() {
        this.element.classList.remove('is-open');
        this.element.setAttribute('aria-hidden', 'true');
        if (this.toggleButton) {
            this.toggleButton.setAttribute('aria-expanded', 'false');
        }
        this.releaseFocus();
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
            this.previouslyFocusedElement = null;
        }
    }

    performSearch(query) {
        if (!this.fuse || !query) {
            this.renderResults([]);
            return;
        }
        const results = this.fuse.search(query);
        this.renderResults(results);
    }

    renderResults(results) {
        this.searchResultsContainer.innerHTML = '';
        const ul = document.createElement('ul');

        if (results.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No results found.';
            this.searchResultsContainer.appendChild(li);
            return;
        }

        results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.item.url;
            a.innerHTML = `<strong>${result.item.title}</strong> <small>${result.item.url}</small>`;
            // Optionally add content snippet
            if (result.item.content) {
                const snippet = document.createElement('small');
                snippet.textContent = result.item.content.substring(0, 100) + '...'; // First 100 chars
                a.appendChild(snippet);
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        this.searchResultsContainer.appendChild(ul);
    }

    getFocusableElements() {
        const focusableSelectors = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
        return Array.from(this.element.querySelectorAll(focusableSelectors));
    }

    trapFocus() {
        this.focusableElements = this.getFocusableElements();
        if (this.focusableElements.length > 0) {
            this.focusableElements[0].focus();
            this.element.addEventListener('focusin', this.boundHandleFocus);
        }
    }

    releaseFocus() {
        this.element.removeEventListener('focusin', this.boundHandleFocus);
    }

    handleFocus(event) {
        if (this.element.classList.contains('is-open') && !this.element.contains(event.target)) {
            const focusable = this.getFocusableElements();
            if (focusable.length > 0) {
                focusable[0].focus();
            }
        }
    }

    destroy() {
        if (this.toggleButton) {
            this.toggleButton.removeEventListener('click', this.boundHandleClick);
            this.toggleButton.removeAttribute('aria-expanded');
        }
        if (this.closeButton) {
            this.closeButton.removeEventListener('click', this.boundHandleClick);
        }
        if (this.searchInput) {
            this.searchInput.removeEventListener('input', this.boundHandleInput);
        }
        document.removeEventListener('keydown', this.boundHandleKeydown);
        this.releaseFocus();

        this.element.removeAttribute('aria-hidden');
        this.element.classList.remove('is-open');
        this.searchInput.value = '';
        this.searchResultsContainer.innerHTML = '';
        console.log('Search component destroyed.');
    }
}
