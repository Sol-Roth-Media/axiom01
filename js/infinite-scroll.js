// Axiom Infinite Scroll Component JS

class InfiniteScroll {
    constructor(element) {
        this.element = element;
        this.content = this.element.querySelector('.infinite-scroll-content');
        this.loader = this.element.querySelector('.infinite-scroll-loader');
        this.dataUrl = this.element.dataset.dataUrl;
        this.page = 1;
        this.isLoading = false;

        this.init();
    }

    init() {
        this.element.addEventListener('scroll', () => {
            if (this.element.scrollTop + this.element.clientHeight >= this.element.scrollHeight - 5 && !this.isLoading) {
                this.loadMore();
            }
        });

        this.loadMore();
    }

    async loadMore() {
        this.isLoading = true;
        this.loader.style.display = 'block';

        try {
            const response = await fetch(`${this.dataUrl}?page=${this.page}`);
            const data = await response.json();

            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.textContent = item.title;
                this.content.appendChild(itemElement);
            });

            this.page++;
        } catch (error) {
            console.error('Error fetching infinite scroll data:', error);
        }

        this.isLoading = false;
        this.loader.style.display = 'none';
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.InfiniteScroll = {
    init: function() {
        const infiniteScrollElements = document.querySelectorAll('.infinite-scroll-container');
        infiniteScrollElements.forEach(element => {
            new InfiniteScroll(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.InfiniteScroll.init();
});