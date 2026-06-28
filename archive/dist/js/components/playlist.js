/**
 * Playlist Component
 * Works with audio/video players to manage queues
 * Features: add, remove, reorder, search, shuffle
 */

export default {
    init(element) {
        const playlistName = element.getAttribute('data-name') || 'Playlist';
        const items = JSON.parse(element.getAttribute('data-items') || '[]');

        let playlistItems = items;
        let currentIndex = -1;
        let isShuffled = false;
        let shuffledOrder = [];

        // Create structure
        const container = document.createElement('div');
        container.className = 'playlist-container';

        // Header
        const header = document.createElement('div');
        header.className = 'playlist-header';

        const titleEl = document.createElement('h3');
        titleEl.className = 'playlist-title';
        titleEl.textContent = playlistName;

        const controls = document.createElement('div');
        controls.className = 'playlist-controls';

        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.className = 'playlist-search';
        searchBox.placeholder = 'Search playlist...';

        const shuffleBtn = document.createElement('button');
        shuffleBtn.className = 'playlist-btn shuffle-btn';
        shuffleBtn.setAttribute('aria-label', 'Shuffle');
        shuffleBtn.innerHTML = '<i class="fas fa-random"></i>';
        shuffleBtn.title = 'Shuffle';

        const addBtn = document.createElement('button');
        addBtn.className = 'playlist-btn add-btn';
        addBtn.setAttribute('aria-label', 'Add item');
        addBtn.innerHTML = '<i class="fas fa-plus"></i>';

        controls.appendChild(searchBox);
        controls.appendChild(shuffleBtn);
        controls.appendChild(addBtn);
        header.appendChild(titleEl);
        header.appendChild(controls);

        // Items list
        const itemsList = document.createElement('ul');
        itemsList.className = 'playlist-items';

        // Stats
        const stats = document.createElement('div');
        stats.className = 'playlist-stats';

        container.appendChild(header);
        container.appendChild(itemsList);
        container.appendChild(stats);
        element.appendChild(container);

        // Render playlist
        const render = () => {
            itemsList.innerHTML = '';
            stats.innerHTML = `<span>${playlistItems.length} tracks</span>`;

            playlistItems.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'playlist-item' + (index === currentIndex ? ' active' : '');
                li.setAttribute('data-index', index);
                li.draggable = true;

                const content = document.createElement('div');
                content.className = 'item-content';
                content.innerHTML = `
                    <div class="item-index">${index + 1}</div>
                    <div class="item-details">
                        <div class="item-title">${item.title || 'Untitled'}</div>
                        <div class="item-artist">${item.artist || 'Unknown'}</div>
                    </div>
                    <div class="item-duration">${formatDuration(item.duration || 0)}</div>
                `;

                const removeBtn = document.createElement('button');
                removeBtn.className = 'item-remove';
                removeBtn.setAttribute('aria-label', 'Remove');
                removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    removeItem(index);
                });

                li.appendChild(content);
                li.appendChild(removeBtn);

                li.addEventListener('click', () => {
                    playItem(index);
                });

                // Drag and drop
                li.addEventListener('dragstart', (e) => {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', index);
                });

                li.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                    li.classList.add('drag-over');
                });

                li.addEventListener('dragleave', () => {
                    li.classList.remove('drag-over');
                });

                li.addEventListener('drop', (e) => {
                    e.preventDefault();
                    li.classList.remove('drag-over');
                    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                    if (fromIndex !== index) {
                        moveItem(fromIndex, index);
                    }
                });

                itemsList.appendChild(li);
            });
        };

        const formatDuration = (seconds) => {
            if (!seconds || isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${String(secs).padStart(2, '0')}`;
        };

        const playItem = (index) => {
            currentIndex = index;
            render();
            const item = playlistItems[index];
            element.dispatchEvent(new CustomEvent('playlist-item-selected', {
                detail: { item, index }
            }));
        };

        const removeItem = (index) => {
            playlistItems.splice(index, 1);
            if (currentIndex >= playlistItems.length) {
                currentIndex = playlistItems.length - 1;
            }
            render();
            element.dispatchEvent(new CustomEvent('playlist-updated', {
                detail: { items: playlistItems }
            }));
        };

        const moveItem = (from, to) => {
            const item = playlistItems.splice(from, 1)[0];
            playlistItems.splice(to, 0, item);
            if (currentIndex === from) {
                currentIndex = to;
            }
            render();
        };

        // Shuffle
        const toggleShuffle = () => {
            isShuffled = !isShuffled;
            shuffleBtn.classList.toggle('active', isShuffled);

            if (isShuffled) {
                shuffledOrder = playlistItems.map((_, i) => i);
                for (let i = shuffledOrder.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
                }
            }

            element.dispatchEvent(new CustomEvent('shuffle-toggled', {
                detail: { shuffled: isShuffled }
            }));
        };

        shuffleBtn.addEventListener('click', toggleShuffle);

        // Search
        searchBox.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = playlistItems.filter(item =>
                (item.title || '').toLowerCase().includes(term) ||
                (item.artist || '').toLowerCase().includes(term)
            );

            itemsList.innerHTML = '';
            filtered.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'playlist-item';
                li.innerHTML = `
                    <div class="item-content">
                        <div class="item-title">${item.title || 'Untitled'}</div>
                        <div class="item-artist">${item.artist || 'Unknown'}</div>
                    </div>
                    <div class="item-duration">${formatDuration(item.duration || 0)}</div>
                `;
                li.addEventListener('click', () => {
                    const fullIndex = playlistItems.indexOf(item);
                    playItem(fullIndex);
                    searchBox.value = '';
                    render();
                });
                itemsList.appendChild(li);
            });
        });

        // Add item dialog
        addBtn.addEventListener('click', () => {
            element.dispatchEvent(new CustomEvent('add-item-requested', {
                detail: {}
            }));
        });

        render();

        return {
            destroy() {
                container.remove();
            },

            addItem(item) {
                playlistItems.push(item);
                render();
                element.dispatchEvent(new CustomEvent('playlist-updated', {
                    detail: { items: playlistItems }
                }));
            },

            removeItem(index) {
                removeItem(index);
            },

            playNext() {
                const nextIndex = isShuffled
                    ? shuffledOrder[(shuffledOrder.indexOf(currentIndex) + 1) % shuffledOrder.length]
                    : (currentIndex + 1) % playlistItems.length;
                playItem(nextIndex);
            },

            playPrevious() {
                const prevIndex = isShuffled
                    ? shuffledOrder[(shuffledOrder.indexOf(currentIndex) - 1 + shuffledOrder.length) % shuffledOrder.length]
                    : (currentIndex - 1 + playlistItems.length) % playlistItems.length;
                playItem(prevIndex);
            },

            getCurrentItem() {
                return playlistItems[currentIndex];
            },

            getItems() {
                return [...playlistItems];
            },

            setItems(newItems) {
                playlistItems = newItems;
                currentIndex = -1;
                render();
            },

            clear() {
                playlistItems = [];
                currentIndex = -1;
                render();
            }
        };
    }
};

