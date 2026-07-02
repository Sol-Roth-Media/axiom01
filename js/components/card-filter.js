export default {
	init(element) {
		if (!element) return null;

		const itemsSelector = element.getAttribute('data-filter-item-selector') || '[data-filter-item]';
		const itemsContainer = element.querySelector('[data-filter-items]') || element.querySelector('[data-filter-target]') || element;
		const categoryNav = element.querySelector('[data-filter-category-nav]');
		const searchInput = element.querySelector('[data-filter-search]');
		const summary = element.querySelector('[data-filter-summary]');
		const emptyState = element.querySelector('[data-filter-empty]');
		const defaultCategory = element.getAttribute('data-filter-default') || 'all';
		const allLabel = element.getAttribute('data-filter-all-label') || 'All';
		const emptyMessage = element.getAttribute('data-filter-empty-message') || 'No matching items.';
		const categoryAttributes = ['data-filter-category', 'data-filter-categories', 'data-category'];
		const searchAttributes = ['data-filter-search', 'data-filter-text', 'data-filter-keywords'];

		let currentCategory = defaultCategory;
		let currentQuery = (searchInput && searchInput.value ? searchInput.value : '').trim().toLowerCase();
		let categories = [];
		let rafId = 0;
		const observer = new MutationObserver(() => scheduleRefresh());

		function normalize(value) {
			return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
		}

		function splitValues(value) {
			return normalize(value)
				.split(/[\s,|]+/)
				.map(part => part.trim())
				.filter(Boolean);
		}

		function getItems() {
			return Array.from(itemsContainer.querySelectorAll(itemsSelector)).filter(item => element.contains(item));
		}

		function getItemCategories(item) {
			for (const attr of categoryAttributes) {
				const value = item.getAttribute(attr);
				if (value) return splitValues(value);
			}

			return [];
		}

		function getItemSearchText(item) {
			for (const attr of searchAttributes) {
				const value = item.getAttribute(attr);
				if (value) return normalize(value);
			}

			return normalize(item.textContent);
		}

		function getCategoryLabel(category) {
			return category
				.split(/[_-]+/)
				.map(part => part ? part.charAt(0).toUpperCase() + part.slice(1) : part)
				.join(' ');
		}

		function setCategory(nextCategory) {
			currentCategory = nextCategory || 'all';
			updateButtons();
			applyFilters();
		}

		function setQuery(nextQuery) {
			currentQuery = normalize(nextQuery);
			applyFilters();
		}

		function updateButtons() {
			if (!categoryNav) return;
			categoryNav.querySelectorAll('button[data-filter-category]').forEach(button => {
				button.setAttribute('aria-pressed', button.dataset.filterCategory === currentCategory ? 'true' : 'false');
			});
		}

		function renderButtons() {
			if (!categoryNav) return;

			const fragment = document.createDocumentFragment();
			const allButton = document.createElement('button');
			allButton.type = 'button';
			allButton.className = 'chip';
			allButton.dataset.filterCategory = 'all';
			allButton.setAttribute('aria-pressed', currentCategory === 'all' ? 'true' : 'false');
			allButton.textContent = allLabel;
			fragment.appendChild(allButton);

			categories.forEach(category => {
				const button = document.createElement('button');
				button.type = 'button';
				button.className = 'chip';
				button.dataset.filterCategory = category.key;
				button.setAttribute('aria-pressed', category.key === currentCategory ? 'true' : 'false');
				button.textContent = `${category.label} (${category.count})`;
				fragment.appendChild(button);
			});

			categoryNav.innerHTML = '';
			categoryNav.appendChild(fragment);
		}

		function renderCategoryData(items) {
			const counts = new Map();
			items.forEach(item => {
				getItemCategories(item).forEach(category => {
					counts.set(category, (counts.get(category) || 0) + 1);
				});
			});

			categories = Array.from(counts.entries())
				.map(([key, count]) => ({ key, count, label: getCategoryLabel(key) }))
				.sort((a, b) => a.label.localeCompare(b.label));

			if (currentCategory !== 'all' && !counts.has(currentCategory)) {
				currentCategory = 'all';
			}

			renderButtons();
		}

		function applyFilters() {
			const items = getItems();
			let visibleCount = 0;

			items.forEach(item => {
				const itemCategories = getItemCategories(item);
				const matchesCategory = currentCategory === 'all' || itemCategories.includes(currentCategory);
				const matchesQuery = !currentQuery || getItemSearchText(item).includes(currentQuery);
				const isVisible = matchesCategory && matchesQuery;

				item.hidden = !isVisible;
				if (isVisible) visibleCount += 1;
			});

			if (summary) {
				summary.textContent = visibleCount
					? `Showing ${visibleCount} of ${items.length} item${items.length === 1 ? '' : 's'}.`
					: emptyMessage;
			}

			if (emptyState) {
				emptyState.hidden = visibleCount !== 0;
			}
		}

		function refresh() {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				const items = getItems();
				renderCategoryData(items);
				updateButtons();
				applyFilters();
			});
		}

		function scheduleRefresh() {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(refresh);
		}

		function onCategoryClick(event) {
			const button = event.target.closest('button[data-filter-category]');
			if (!button || !categoryNav || !categoryNav.contains(button)) return;
			event.preventDefault();
			setCategory(button.dataset.filterCategory || 'all');
		}

		function onSearchInput(event) {
			setQuery(event.target.value);
		}

		if (categoryNav) {
			categoryNav.addEventListener('click', onCategoryClick);
		}

		if (searchInput) {
			searchInput.addEventListener('input', onSearchInput);
		}

		observer.observe(itemsContainer, { childList: true, subtree: false });
		refresh();

		return {
			refresh,
			setCategory,
			setQuery,
			destroy() {
				cancelAnimationFrame(rafId);
				observer.disconnect();
				if (categoryNav) categoryNav.removeEventListener('click', onCategoryClick);
				if (searchInput) searchInput.removeEventListener('input', onSearchInput);
			}
		};
	}
};

