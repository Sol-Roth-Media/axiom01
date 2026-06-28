/**
 * Masonry Layout Component
 * Dynamic grid layout with cascading item positioning
 * Includes file view and gallery modes
 */

export default {
    init(element) {
        const columns = parseInt(element.getAttribute('data-columns') || '3', 10);
        const gap = element.getAttribute('data-gap') || 'var(--a-space-l)';
        const mode = element.getAttribute('data-mode') || 'masonry'; // masonry, files, gallery

        let items = [];
        const container = document.createElement('div');
        container.className = `masonry-container masonry-${columns}-col masonry-${mode}`;
        container.style.setProperty('--masonry-columns', columns);
        container.style.setProperty('--masonry-gap', gap);

        element.appendChild(container);

        // For file view mode
        if (mode === 'files') {
            container.style.display = 'grid';
            container.style.gridTemplateColumns = `repeat(auto-fill, minmax(150px, 1fr))`;
            container.style.gap = gap;
        }
        // For gallery mode
        else if (mode === 'gallery') {
            container.style.display = 'grid';
            container.style.gridTemplateColumns = `repeat(auto-fit, minmax(250px, 1fr))`;
            container.style.gap = gap;
        }
        // For masonry mode (default)
        else {
            container.style.display = 'grid';
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            container.style.gap = gap;
            container.style.gridAutoRows = 'auto';
            container.style.gridAutoFlow = 'dense';
        }

        const renderItems = () => {
            container.innerHTML = '';

            items.forEach((item, index) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'masonry-item';
                itemEl.setAttribute('data-item-id', item.id || index);

                if (mode === 'files') {
                    itemEl.innerHTML = `
                        <div class="file-icon">
                            <i class="${getFileIcon(item.type || 'file')}"></i>
                        </div>
                        <p class="file-name">${item.name || 'File'}</p>
                        ${item.size ? `<p class="file-size">${formatFileSize(item.size)}</p>` : ''}
                    `;
                    itemEl.addEventListener('click', () => {
                        element.dispatchEvent(new CustomEvent('file-selected', {
                            detail: { item, index }
                        }));
                    });
                } else if (mode === 'gallery') {
                    const isWide = item.aspect === 'wide' || (Math.random() > 0.6);
                    const isTall = item.aspect === 'tall' || (Math.random() > 0.8);

                    if (isWide) itemEl.style.gridColumn = 'span 2';
                    if (isTall) itemEl.style.gridRow = 'span 2';

                    itemEl.innerHTML = `
                        <img src="${item.image || 'https://via.placeholder.com/300'}" 
                             alt="${item.title || 'Gallery item'}" 
                             class="gallery-image">
                        <div class="gallery-overlay">
                            <h3>${item.title || 'Untitled'}</h3>
                            ${item.description ? `<p>${item.description}</p>` : ''}
                        </div>
                    `;
                    itemEl.style.cursor = 'pointer';
                    itemEl.addEventListener('click', () => {
                        element.dispatchEvent(new CustomEvent('gallery-selected', {
                            detail: { item, index }
                        }));
                    });
                } else {
                    // Masonry mode
                    itemEl.innerHTML = `
                        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : '<div class="masonry-placeholder"><i class="fas fa-image"></i></div>'}
                        <div class="masonry-content">
                            <h3>${item.title || 'Item'}</h3>
                            ${item.description ? `<p>${item.description}</p>` : ''}
                        </div>
                    `;
                }

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'masonry-delete';
                deleteBtn.setAttribute('aria-label', 'Delete');
                deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    items.splice(index, 1);
                    renderItems();
                    element.dispatchEvent(new CustomEvent('item-removed', {
                        detail: { item, index }
                    }));
                });
                itemEl.appendChild(deleteBtn);

                container.appendChild(itemEl);
            });
        };

        const getFileIcon = (type) => {
            const iconMap = {
                'image': 'fas fa-image',
                'video': 'fas fa-video',
                'audio': 'fas fa-music',
                'document': 'fas fa-file-alt',
                'pdf': 'fas fa-file-pdf',
                'folder': 'fas fa-folder',
                'file': 'fas fa-file'
            };
            return iconMap[type] || iconMap['file'];
        };

        const formatFileSize = (bytes) => {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        };

        renderItems();

        return {
            destroy() {
                container.remove();
            },

            addItem(item) {
                items.push(item);
                renderItems();
                element.dispatchEvent(new CustomEvent('item-added', { detail: { item } }));
            },

            removeItem(id) {
                items = items.filter(item => (item.id || items.indexOf(item)) !== id);
                renderItems();
            },

            setItems(newItems) {
                items = newItems;
                renderItems();
            },

            getItems() {
                return [...items];
            },

            setColumns(newColumns) {
                container.style.setProperty('--masonry-columns', newColumns);
                if (mode === 'masonry') {
                    container.style.gridTemplateColumns = `repeat(${newColumns}, 1fr)`;
                }
            },

            setMode(newMode) {
                // Change container styling based on mode
                container.className = `masonry-container masonry-${columns}-col masonry-${newMode}`;
                renderItems();
            }
        };
    }
};

