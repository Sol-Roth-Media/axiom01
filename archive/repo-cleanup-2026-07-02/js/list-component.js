/**
 * Axiom01 List Component
 * Advanced list with drag-and-drop, sorting, filtering, and multi-select
 * 
 * Usage:
 * new AxiomList(element, options)
 * 
 * Features:
 * - Drag & drop reordering
 * - Sortable columns
 * - Search/filter
 * - Multi-select with checkboxes
 * - Action buttons
 * - Keyboard navigation
 * - Accessibility (ARIA)
 * - Dark mode support
 */

class AxiomList {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            draggable: options.draggable !== false,
            sortable: options.sortable !== false,
            filterable: options.filterable !== false,
            selectable: options.selectable !== false,
            pageSize: options.pageSize || 10,
            ...options
        };

        this.items = [];
        this.filteredItems = [];
        this.selectedItems = new Set();
        this.currentPage = 0;
        this.draggedItem = null;
        this.draggedOverItem = null;

        this.init();
    }

    init() {
        // Get all list items
        this.items = Array.from(this.element.querySelectorAll('li'));
        this.filteredItems = [...this.items];

        // Make items focusable for keyboard nav
        this.items.forEach((item, index) => {
            if (!item.hasAttribute('tabindex')) {
                item.setAttribute('tabindex', '0');
            }
        });

        // Setup drag and drop if enabled
        if (this.options.draggable) {
            this.setupDragDrop();
        }

        // Setup sorting if enabled
        if (this.options.sortable) {
            this.setupSorting();
        }

        // Setup filtering if enabled
        if (this.options.filterable) {
            this.setupFiltering();
        }

        // Setup multi-select if enabled
        if (this.options.selectable) {
            this.setupSelection();
        }

        // Setup keyboard navigation
        this.setupKeyboardNav();

        // Setup action buttons
        this.setupActionButtons();

        // Add ARIA roles
        this.element.setAttribute('role', 'list');
        this.items.forEach(item => {
            item.setAttribute('role', 'listitem');
        });
    }

    setupDragDrop() {
        this.items.forEach(item => {
            item.setAttribute('draggable', 'true');
            
            item.addEventListener('dragstart', (e) => this.onDragStart(e));
            item.addEventListener('dragover', (e) => this.onDragOver(e));
            item.addEventListener('drop', (e) => this.onDrop(e));
            item.addEventListener('dragleave', (e) => this.onDragLeave(e));
            item.addEventListener('dragend', (e) => this.onDragEnd(e));
        });
    }

    onDragStart(e) {
        this.draggedItem = e.currentTarget;
        this.draggedItem.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.draggedItem.innerHTML);
        
        // Visual feedback
        const dragImage = this.draggedItem.cloneNode(true);
        dragImage.classList.add('drag-preview');
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, 0, 0);
        
        // Remove the image after drag starts
        setTimeout(() => dragImage.remove(), 0);
    }

    onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        if (e.currentTarget !== this.draggedItem) {
            this.draggedOverItem = e.currentTarget;
            this.element.classList.add('drag-over');
            
            const rect = e.currentTarget.getBoundingClientRect();
            const mid = rect.top + rect.height / 2;
            
            if (e.clientY < mid) {
                e.currentTarget.classList.add('drop-target-before');
                e.currentTarget.classList.remove('drop-target-after');
            } else {
                e.currentTarget.classList.add('drop-target-after');
                e.currentTarget.classList.remove('drop-target-before');
            }
        }
    }

    onDragLeave(e) {
        if (e.currentTarget === this.draggedOverItem) {
            e.currentTarget.classList.remove('drop-target-before', 'drop-target-after');
            this.draggedOverItem = null;
        }
    }

    onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.draggedItem && this.draggedOverItem && this.draggedItem !== this.draggedOverItem) {
            const rect = this.draggedOverItem.getBoundingClientRect();
            const mid = rect.top + rect.height / 2;
            
            if (e.clientY < mid) {
                this.draggedOverItem.parentNode.insertBefore(this.draggedItem, this.draggedOverItem);
            } else {
                this.draggedOverItem.parentNode.insertBefore(this.draggedItem, this.draggedOverItem.nextSibling);
            }
            
            // Update items array
            this.items = Array.from(this.element.querySelectorAll('li'));
            
            // Trigger custom event
            this.element.dispatchEvent(new CustomEvent('list-reordered', {
                detail: { items: this.items }
            }));
        }
    }

    onDragEnd(e) {
        this.draggedItem.classList.remove('dragging');
        this.items.forEach(item => {
            item.classList.remove('drop-target-before', 'drop-target-after');
        });
        this.element.classList.remove('drag-over');
        this.draggedItem = null;
        this.draggedOverItem = null;
    }

    setupSorting() {
        // Sortable headers implementation
        const headers = this.element.querySelectorAll('.list-featured-header');
        headers.forEach(header => {
            header.addEventListener('click', (e) => {
                headers.forEach(h => h.classList.remove('sorted'));
                header.classList.add('sorted');
                
                // Trigger custom event
                this.element.dispatchEvent(new CustomEvent('list-sorted', {
                    detail: { sortBy: header.dataset.sortBy }
                }));
            });
        });
    }

    setupFiltering() {
        const searchBox = this.element.querySelector('.list-featured-search input');
        if (!searchBox) return;

        searchBox.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.filterItems(query);
        });
    }

    filterItems(query) {
        this.filteredItems = this.items.filter(item => {
            const text = item.textContent.toLowerCase();
            return text.includes(query);
        });

        // Show/hide items
        this.items.forEach(item => {
            item.style.display = this.filteredItems.includes(item) ? '' : 'none';
        });

        // Show empty state if no results
        if (this.filteredItems.length === 0) {
            this.element.classList.add('empty');
        } else {
            this.element.classList.remove('empty');
        }

        // Trigger custom event
        this.element.dispatchEvent(new CustomEvent('list-filtered', {
            detail: { query, count: this.filteredItems.length }
        }));
    }

    setupSelection() {
        this.items.forEach(item => {
            // Create checkbox if not exists
            let checkbox = item.querySelector('.select-checkbox');
            if (!checkbox) {
                checkbox = document.createElement('div');
                checkbox.className = 'select-checkbox';
                item.insertBefore(checkbox, item.firstChild);
            }

            // Click handler
            item.addEventListener('click', (e) => {
                if (e.target === checkbox || e.target.closest('.select-checkbox')) {
                    this.toggleSelection(item);
                }
            });
        });
    }

    toggleSelection(item) {
        if (this.selectedItems.has(item)) {
            this.selectedItems.delete(item);
            item.classList.remove('selected');
            const checkbox = item.querySelector('.select-checkbox');
            if (checkbox) checkbox.classList.remove('checked');
        } else {
            this.selectedItems.add(item);
            item.classList.add('selected');
            const checkbox = item.querySelector('.select-checkbox');
            if (checkbox) checkbox.classList.add('checked');
        }

        // Trigger custom event
        this.element.dispatchEvent(new CustomEvent('list-selection-changed', {
            detail: { selected: Array.from(this.selectedItems) }
        }));
    }

    setupKeyboardNav() {
        this.items.forEach((item, index) => {
            item.addEventListener('keydown', (e) => {
                const itemIndex = this.items.indexOf(item);
                
                switch (e.key) {
                    case 'ArrowUp':
                        e.preventDefault();
                        if (itemIndex > 0) {
                            this.items[itemIndex - 1].focus();
                        }
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        if (itemIndex < this.items.length - 1) {
                            this.items[itemIndex + 1].focus();
                        }
                        break;
                    case ' ':
                    case 'Enter':
                        e.preventDefault();
                        if (this.options.selectable) {
                            this.toggleSelection(item);
                        }
                        break;
                }
            });
        });
    }

    setupActionButtons() {
        const buttons = this.element.querySelectorAll('.actions button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const item = button.closest('li');
                const action = button.dataset.action;
                
                this.element.dispatchEvent(new CustomEvent('list-action', {
                    detail: { action, item }
                }));
            });
        });
    }

    // Public methods
    getSelectedItems() {
        return Array.from(this.selectedItems);
    }

    clearSelection() {
        this.selectedItems.forEach(item => {
            item.classList.remove('selected');
            const checkbox = item.querySelector('.select-checkbox');
            if (checkbox) checkbox.classList.remove('checked');
        });
        this.selectedItems.clear();
    }

    selectAll() {
        this.filteredItems.forEach(item => {
            this.selectedItems.add(item);
            item.classList.add('selected');
            const checkbox = item.querySelector('.select-checkbox');
            if (checkbox) checkbox.classList.add('checked');
        });
    }

    getItems() {
        return this.items;
    }

    setLoading(isLoading) {
        if (isLoading) {
            this.element.classList.add('loading');
        } else {
            this.element.classList.remove('loading');
        }
    }

    destroy() {
        this.items.forEach(item => {
            item.removeAttribute('draggable');
            item.removeAttribute('tabindex');
            item.removeAttribute('role');
        });
        this.element.removeAttribute('role');
        this.items = [];
        this.selectedItems.clear();
    }
}

// Auto-initialize lists with data-list attribute
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-list]').forEach(element => {
        const options = {};
        
        // Parse data attributes
        if (element.dataset.draggable === 'false') options.draggable = false;
        if (element.dataset.sortable === 'false') options.sortable = false;
        if (element.dataset.filterable === 'false') options.filterable = false;
        if (element.dataset.selectable === 'false') options.selectable = false;
        if (element.dataset.pageSize) options.pageSize = parseInt(element.dataset.pageSize);
        
        new AxiomList(element, options);
    });
});
