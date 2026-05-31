/**
 * Data List Component
 * Renders array of objects with toggle between grid/list views
 * Supports expand for full descriptions and dynamic updates
 */

export default {
    init(element) {
        const dataSource = element.getAttribute('data-source') || '[]';
        const viewMode = element.getAttribute('data-view') || 'grid'; // grid or list
        const allowExpand = element.getAttribute('data-expand') !== 'false';

        let items = [];
        let currentView = viewMode;
        let expandedItems = new Set();

        // Parse initial data
        try {
            items = JSON.parse(dataSource);
        } catch (e) {
            console.warn('Invalid data-source JSON', e);
        }

        // Create container structure
        const wrapper = document.createElement('div');
        wrapper.className = 'data-list';

        const controls = document.createElement('div');
        controls.className = 'data-list-controls';

        const viewToggle = document.createElement('div');
        viewToggle.className = 'view-toggle';

        const gridBtn = document.createElement('button');
        gridBtn.className = 'view-btn grid-view' + (currentView === 'grid' ? ' active' : '');
        gridBtn.setAttribute('aria-label', 'Grid view');
        gridBtn.title = 'Grid View';
        gridBtn.innerHTML = '<i class="fas fa-th"></i>';

        const listBtn = document.createElement('button');
        listBtn.className = 'view-btn list-view' + (currentView === 'list' ? ' active' : '');
        listBtn.setAttribute('aria-label', 'List view');
        listBtn.title = 'List View';
        listBtn.innerHTML = '<i class="fas fa-list"></i>';

        viewToggle.appendChild(gridBtn);
        viewToggle.appendChild(listBtn);
        controls.appendChild(viewToggle);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = `data-list-items data-list-${currentView}`;

        wrapper.appendChild(controls);
        wrapper.appendChild(itemsContainer);
        element.appendChild(wrapper);

        // Render items
        const renderItems = () => {
            itemsContainer.innerHTML = '';
            itemsContainer.className = `data-list-items data-list-${currentView}`;

            items.forEach((item, index) => {
                const itemEl = createItemElement(item, index);
                itemsContainer.appendChild(itemEl);
            });
        };

        const createItemElement = (item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'data-list-item';
            itemEl.setAttribute('data-item-id', item.id || index);

            const isExpanded = expandedItems.has(item.id || index);

            if (currentView === 'grid') {
                itemEl.innerHTML = `
                    <div class="item-header">
                        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="item-image">` : '<div class="item-image-placeholder"><i class="fas fa-image"></i></div>'}
                    </div>
                    <div class="item-content">
                        <h3 class="item-title">${item.title || 'Untitled'}</h3>
                        ${item.subtitle ? `<p class="item-subtitle">${item.subtitle}</p>` : ''}
                        ${item.description ? `<p class="item-preview">${item.description.substring(0, 100)}${item.description.length > 100 ? '...' : ''}</p>` : ''}
                        ${item.tags ? `<div class="item-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
                    </div>
                    ${allowExpand ? `<button class="expand-btn ${isExpanded ? 'expanded' : ''}" aria-label="Expand"><i class="fas fa-chevron-down"></i></button>` : ''}
                `;
            } else {
                itemEl.innerHTML = `
                    <div class="item-header">
                        <div class="item-main">
                            <h3 class="item-title">${item.title || 'Untitled'}</h3>
                            ${item.subtitle ? `<p class="item-subtitle">${item.subtitle}</p>` : ''}
                        </div>
                        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="item-image">` : ''}
                    </div>
                    ${isExpanded && item.description ? `<div class="item-details"><p>${item.description}</p></div>` : ''}
                    ${item.tags ? `<div class="item-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
                    ${allowExpand ? `<button class="expand-btn ${isExpanded ? 'expanded' : ''}" aria-label="Expand"><i class="fas fa-chevron-down"></i></button>` : ''}
                `;
            }

            if (allowExpand) {
                const expandBtn = itemEl.querySelector('.expand-btn');
                expandBtn.addEventListener('click', () => {
                    const id = item.id || index;
                    if (expandedItems.has(id)) {
                        expandedItems.delete(id);
                    } else {
                        expandedItems.add(id);
                    }
                    renderItems();
                });
            }

            return itemEl;
        };

        // View toggle handlers
        gridBtn.addEventListener('click', () => {
            currentView = 'grid';
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
            renderItems();
            element.dispatchEvent(new CustomEvent('view-changed', { detail: { view: 'grid' } }));
        });

        listBtn.addEventListener('click', () => {
            currentView = 'list';
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
            renderItems();
            element.dispatchEvent(new CustomEvent('view-changed', { detail: { view: 'list' } }));
        });

        renderItems();

        return {
            destroy() {
                wrapper.remove();
            },

            addItem(item) {
                items.push(item);
                renderItems();
                element.dispatchEvent(new CustomEvent('item-added', { detail: { item } }));
            },

            removeItem(id) {
                items = items.filter(item => (item.id || items.indexOf(item)) !== id);
                renderItems();
                element.dispatchEvent(new CustomEvent('item-removed', { detail: { id } }));
            },

            updateItems(newItems) {
                items = newItems;
                renderItems();
                element.dispatchEvent(new CustomEvent('items-updated', { detail: { items } }));
            },

            getItems() {
                return [...items];
            },

            setView(view) {
                if (view === 'grid' || view === 'list') {
                    currentView = view;
                    if (view === 'grid') {
                        gridBtn.classList.add('active');
                        listBtn.classList.remove('active');
                    } else {
                        listBtn.classList.add('active');
                        gridBtn.classList.remove('active');
                    }
                    renderItems();
                }
            }
        };
    }
};

