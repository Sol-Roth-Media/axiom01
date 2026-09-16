/**
 * Dynamic Content Helpers for Axiom01 Components
 *
 * Provides utilities for managing dynamic content in components like pagination,
 * lists, grids, and other data-driven UI elements.
 *
 * Usage:
 * import { DynamicListHelper, DynamicPaginationHelper } from './dynamic-content-helpers.js';
 *
 * const helper = new DynamicListHelper('.my-list');
 * helper.addItem({ id: 'new-1', title: 'New Item' });
 * helper.removeItem('item-id');
 */

/**
 * Helper class for managing dynamic list/grid content
 */
export class DynamicListHelper {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            throw new Error(`Container not found: ${containerSelector}`);
        }
        this.items = [];
    }

    /**
     * Add an item to the list with optional rendering function
     * @param {Object} itemData - The item data to add
     * @param {Function} renderFn - Optional render function. If not provided, uses default.
     */
    addItem(itemData, renderFn) {
        const itemId = itemData.id || `item-${Date.now()}`;
        itemData.id = itemId;
        this.items.push(itemData);

        const element = this._renderItem(itemData, renderFn);
        this.container.appendChild(element);

        this._dispatchEvent('dynamic-item-added', { item: itemData, element });
    }

    /**
     * Add multiple items at once
     * @param {Array} itemsData - Array of item data objects
     * @param {Function} renderFn - Optional render function
     */
    addItems(itemsData, renderFn) {
        itemsData.forEach(item => this.addItem(item, renderFn));
        this._dispatchEvent('dynamic-items-added', { count: itemsData.length });
    }

    /**
     * Remove an item by ID
     * @param {String} itemId - The ID of the item to remove
     */
    removeItem(itemId) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index > -1) {
            const removed = this.items.splice(index, 1)[0];
            const element = this.container.querySelector(`[data-item-id="${itemId}"]`);
            if (element) element.remove();
            this._dispatchEvent('dynamic-item-removed', { item: removed });
        }
    }

    /**
     * Remove all items
     */
    clear() {
        this.items = [];
        this.container.innerHTML = '';
        this._dispatchEvent('dynamic-list-cleared', {});
    }

    /**
     * Get all items
     */
    getItems() {
        return [...this.items];
    }

    /**
     * Update an item's data
     * @param {String} itemId - The ID of the item to update
     * @param {Object} updates - Object with properties to update
     * @param {Function} renderFn - Optional render function to re-render the item
     */
    updateItem(itemId, updates, renderFn) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index > -1) {
            this.items[index] = { ...this.items[index], ...updates };
            const element = this.container.querySelector(`[data-item-id="${itemId}"]`);
            if (element && renderFn) {
                const newElement = this._renderItem(this.items[index], renderFn);
                element.replaceWith(newElement);
            }
            this._dispatchEvent('dynamic-item-updated', { item: this.items[index] });
        }
    }

    /**
     * Find items matching a predicate
     * @param {Function} predicate - Function to test items
     */
    findItems(predicate) {
        return this.items.filter(predicate);
    }

    /**
     * Get item by ID
     * @param {String} itemId - The ID to search for
     */
    getItemById(itemId) {
        return this.items.find(item => item.id === itemId);
    }

    /**
     * Render an item element
     * @private
     */
    _renderItem(itemData, renderFn) {
        if (renderFn && typeof renderFn === 'function') {
            return renderFn(itemData);
        }

        // Default rendering
        const li = document.createElement('li');
        li.setAttribute('data-item-id', itemData.id);
        li.textContent = itemData.title || itemData.name || JSON.stringify(itemData);
        return li;
    }

    /**
     * Dispatch custom event
     * @private
     */
    _dispatchEvent(eventName, detail) {
        this.container.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}

/**
 * Helper class for managing dynamic pagination
 */
export class DynamicPaginationHelper {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            throw new Error(`Container not found: ${containerSelector}`);
        }
        this.pages = [];
        this.currentPage = 1;
    }

    /**
     * Add a page link at the end
     * @param {Object} pageData - Page data with label and optional href
     */
    addPageAtEnd(pageData) {
        const pageNum = this.pages.length + 1;
        pageData.number = pageNum;
        this.pages.push(pageData);
        this._updatePagination();
        this._dispatchEvent('pagination-page-added', { page: pageData, position: 'end' });
    }

    /**
     * Add a page at the beginning (before existing pages)
     * @param {Object} pageData - Page data with label and optional href
     */
    addPageAtStart(pageData) {
        pageData.number = 1;
        this.pages.unshift(pageData);
        // Re-number all pages
        this.pages.forEach((page, idx) => {
            page.number = idx + 1;
        });
        this._updatePagination();
        this._dispatchEvent('pagination-page-added', { page: pageData, position: 'start' });
    }

    /**
     * Remove the last page
     */
    removePageAtEnd() {
        if (this.pages.length > 0) {
            const removed = this.pages.pop();
            this._updatePagination();
            this._dispatchEvent('pagination-page-removed', { page: removed, position: 'end' });
        }
    }

    /**
     * Remove the first page
     */
    removePageAtStart() {
        if (this.pages.length > 0) {
            const removed = this.pages.shift();
            this.pages.forEach((page, idx) => {
                page.number = idx + 1;
            });
            this._updatePagination();
            this._dispatchEvent('pagination-page-removed', { page: removed, position: 'start' });
        }
    }

    /**
     * Remove a page by number
     * @param {Number} pageNumber - The page number to remove
     */
    removePageByNumber(pageNumber) {
        const index = this.pages.findIndex(p => p.number === pageNumber);
        if (index > -1) {
            const removed = this.pages.splice(index, 1)[0];
            this.pages.forEach((page, idx) => {
                page.number = idx + 1;
            });
            this._updatePagination();
            this._dispatchEvent('pagination-page-removed', { page: removed, number: pageNumber });
        }
    }

    /**
     * Get all pages
     */
    getPages() {
        return [...this.pages];
    }

    /**
     * Get total page count
     */
    getPageCount() {
        return this.pages.length;
    }

    /**
     * Set current active page
     * @param {Number} pageNumber - The page number to activate
     */
    setCurrentPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.pages.length) {
            this.currentPage = pageNumber;
            this._updatePagination();
            this._dispatchEvent('pagination-page-changed', { page: pageNumber });
        }
    }

    /**
     * Update pagination UI
     * @private
     */
    _updatePagination() {
        const list = this.container.querySelector('ul') || this.container;
        list.innerHTML = '';

        this.pages.forEach(page => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = page.href || '#';
            a.textContent = page.label || page.number;
            a.setAttribute('data-page', page.number);

            if (page.number === this.currentPage) {
                li.classList.add('active');
                a.setAttribute('aria-current', 'page');
            }

            li.appendChild(a);
            list.appendChild(li);
        });
    }

    /**
     * Dispatch custom event
     * @private
     */
    _dispatchEvent(eventName, detail) {
        this.container.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}

/**
 * Helper class for managing dynamic card/grid content
 */
export class DynamicGridHelper {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            throw new Error(`Container not found: ${containerSelector}`);
        }
        this.cards = [];
    }

    /**
     * Add a card to the grid
     * @param {Object} cardData - Card data with title, description, image, etc.
     * @param {Function} renderFn - Optional render function
     */
    addCard(cardData, renderFn) {
        const cardId = cardData.id || `card-${Date.now()}`;
        cardData.id = cardId;
        this.cards.push(cardData);

        const element = this._renderCard(cardData, renderFn);
        this.container.appendChild(element);

        this._dispatchEvent('grid-card-added', { card: cardData, element });
    }

    /**
     * Remove a card by ID
     * @param {String} cardId - The card ID to remove
     */
    removeCard(cardId) {
        const index = this.cards.findIndex(card => card.id === cardId);
        if (index > -1) {
            const removed = this.cards.splice(index, 1)[0];
            const element = this.container.querySelector(`[data-card-id="${cardId}"]`);
            if (element) element.remove();
            this._dispatchEvent('grid-card-removed', { card: removed });
        }
    }

    /**
     * Render a card element
     * @private
     */
    _renderCard(cardData, renderFn) {
        if (renderFn && typeof renderFn === 'function') {
            return renderFn(cardData);
        }

        // Default card rendering
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-card-id', cardData.id);

        let html = '';
        if (cardData.icon) html += `<i class="${cardData.icon}" aria-hidden="true"></i>`;
        if (cardData.title) html += `<h3>${cardData.title}</h3>`;
        if (cardData.description) html += `<p>${cardData.description}</p>`;

        card.innerHTML = html;
        return card;
    }

    /**
     * Dispatch custom event
     * @private
     */
    _dispatchEvent(eventName, detail) {
        this.container.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}

export default {
    DynamicListHelper,
    DynamicPaginationHelper,
    DynamicGridHelper
};

