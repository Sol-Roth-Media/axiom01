/**
 * Advanced Table Component
 * Features: Sorting, Filtering, Search, Pagination
 */

export default {
    init(element) {
        const table = element.matches('table') ? element : element.querySelector('table');
        if (!table) return { destroy: () => {} };
        const host = table.parentElement;
        if (!host) return { destroy: () => {} };

        let allData = [];
        let filteredData = [];
        let sortColumn = null;
        let sortDirection = 'asc';
        let currentPage = 1;
        let itemsPerPage = 10;
        let filters = {};
        let searchTerm = '';

        // Extract data from table
        const extractTableData = () => {
            const headers = [];
            const rows = [];

            table.querySelectorAll('thead th').forEach((th, index) => {
                headers.push({
                    key: th.textContent.toLowerCase().replace(/\s+/g, '_'),
                    label: th.textContent,
                    index: index
                });
            });

            table.querySelectorAll('tbody tr').forEach(tr => {
                const row = {};
                tr.querySelectorAll('td').forEach((td, index) => {
                    if (headers[index]) {
                        row[headers[index].key] = td.textContent.trim();
                    }
                });
                rows.push(row);
            });

            return { headers, rows };
        };

        const { headers, rows } = extractTableData();
        allData = rows;
        filteredData = [...allData];

        // Create controls
        const controls = document.createElement('section');
        controls.className = 'table-controls';
        controls.setAttribute('data-advanced-table-controls', '');
        controls.setAttribute('aria-label', 'Table controls');

        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.className = 'table-search';
        searchBox.placeholder = 'Search...';
        searchBox.setAttribute('aria-label', 'Search table');

        const filterContainer = document.createElement('fieldset');
        filterContainer.className = 'table-filters';
        filterContainer.setAttribute('data-advanced-table-filters', '');

        const filterLegend = document.createElement('legend');
        filterLegend.textContent = 'Filters';
        filterContainer.appendChild(filterLegend);

        headers.forEach(header => {
            const uniqueValues = [...new Set(allData.map(row => row[header.key]))];
            if (uniqueValues.length > 0 && uniqueValues.length <= 20) {
                const filterSelect = document.createElement('select');
                filterSelect.className = 'table-filter';
                filterSelect.setAttribute('data-column', header.key);
                filterSelect.innerHTML = `<option value="">All ${header.label}</option>`;

                uniqueValues.forEach(value => {
                    const option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    filterSelect.appendChild(option);
                });

                filterSelect.addEventListener('change', (e) => {
                    filters[header.key] = e.target.value;
                    applyFilters();
                });

                filterContainer.appendChild(filterSelect);
            }
        });

        controls.appendChild(searchBox);
        controls.appendChild(filterContainer);
        host.insertBefore(controls, table);

        // Search handler
        searchBox.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            applyFilters();
        });

        // Sorting handler
        table.querySelectorAll('thead th').forEach((th, index) => {
            const header = headers[index];
            th.style.cursor = 'pointer';
            th.classList.add('sortable');

            th.addEventListener('click', () => {
                if (sortColumn === header.key) {
                    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    sortColumn = header.key;
                    sortDirection = 'asc';
                }
                updateTableDisplay();
                updateSortIndicators();
            });
        });

        const updateSortIndicators = () => {
            table.querySelectorAll('thead th').forEach((th, index) => {
                th.classList.remove('sort-asc', 'sort-desc');
                if (headers[index] && headers[index].key === sortColumn) {
                    th.classList.add(sortDirection === 'asc' ? 'sort-asc' : 'sort-desc');
                }
            });
        };

        const applyFilters = () => {
            filteredData = allData.filter(row => {
                // Apply search
                if (searchTerm) {
                    const matchesSearch = Object.values(row).some(value =>
                        String(value).toLowerCase().includes(searchTerm)
                    );
                    if (!matchesSearch) return false;
                }

                // Apply filters
                for (const [column, value] of Object.entries(filters)) {
                    if (value && row[column] !== value) {
                        return false;
                    }
                }

                return true;
            });

            currentPage = 1;
            updateTableDisplay();
        };

        const updateTableDisplay = () => {
            // Sort
            if (sortColumn) {
                filteredData.sort((a, b) => {
                    let aVal = a[sortColumn];
                    let bVal = b[sortColumn];

                    // Try numeric sort
                    const aNum = parseFloat(aVal);
                    const bNum = parseFloat(bVal);
                    if (!isNaN(aNum) && !isNaN(bNum)) {
                        return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
                    }

                    // String sort
                    aVal = String(aVal).toLowerCase();
                    bVal = String(bVal).toLowerCase();
                    return sortDirection === 'asc'
                        ? aVal.localeCompare(bVal)
                        : bVal.localeCompare(aVal);
                });
            }

            // Update table body
            const tbody = table.querySelector('tbody');
            tbody.innerHTML = '';

            const startIdx = (currentPage - 1) * itemsPerPage;
            const pageData = filteredData.slice(startIdx, startIdx + itemsPerPage);

            pageData.forEach(row => {
                const tr = document.createElement('tr');
                headers.forEach(header => {
                    const td = document.createElement('td');
                    td.textContent = row[header.key] || '';
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });

            updatePagination();
            updateSortIndicators();
        };

        // Pagination
        const paginationContainer = document.createElement('nav');
        paginationContainer.className = 'table-pagination';
        paginationContainer.setAttribute('aria-label', 'Table pagination');
        paginationContainer.setAttribute('data-advanced-table-pagination', '');
        host.appendChild(paginationContainer);

        const updatePagination = () => {
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            paginationContainer.innerHTML = '';

            const pageInfo = document.createElement('span');
            pageInfo.className = 'pagination-info';
            pageInfo.textContent = `Page ${currentPage} of ${totalPages} (${filteredData.length} results)`;
            paginationContainer.appendChild(pageInfo);

            const nav = document.createElement('div');
            nav.className = 'pagination-nav';

            if (currentPage > 1) {
                const prevBtn = document.createElement('button');
                prevBtn.textContent = '← Previous';
                prevBtn.addEventListener('click', () => {
                    currentPage--;
                    updateTableDisplay();
                });
                nav.appendChild(prevBtn);
            }

            if (currentPage < totalPages) {
                const nextBtn = document.createElement('button');
                nextBtn.textContent = 'Next →';
                nextBtn.addEventListener('click', () => {
                    currentPage++;
                    updateTableDisplay();
                });
                nav.appendChild(nextBtn);
            }

            paginationContainer.appendChild(nav);
        };

        updateTableDisplay();

        return {
            destroy() {
                controls.remove();
                paginationContainer.remove();
            },

            setData(newData) {
                allData = newData;
                filteredData = [...allData];
                applyFilters();
            },

            getFilteredData() {
                return [...filteredData];
            },

            clearFilters() {
                filters = {};
                searchTerm = '';
                searchBox.value = '';
                filterContainer.querySelectorAll('select').forEach(sel => sel.value = '');
                applyFilters();
            },

            setItemsPerPage(count) {
                itemsPerPage = count;
                currentPage = 1;
                updateTableDisplay();
            }
        };
    }
};
