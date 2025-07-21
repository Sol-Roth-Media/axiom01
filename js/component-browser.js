const ComponentBrowser = {
    init: function(element) {
        const iframe = element.querySelector('#component-preview-iframe');
        const tabsContainer = element.querySelector('.tabs');
        const fullscreenButton = element.querySelector('#view-fullscreen-button');
        const componentCountSpan = element.querySelector('#component-count');
        const searchInput = element.querySelector('#component-search-input');
        const categoryFilter = element.querySelector('#component-category-filter');

        let allComponents = [];

        const renderComponents = (componentsToRender) => {
            tabsContainer.innerHTML = ''; // Clear existing tabs
            if (componentCountSpan) {
                componentCountSpan.textContent = componentsToRender.length;
            }

            componentsToRender.forEach((component, index) => {
                const button = document.createElement('button');
                button.dataset.src = component.src;
                button.textContent = component.name;
                if (index === 0) {
                    button.classList.add('active');
                    iframe.src = component.src; // Set initial iframe src
                }
                button.addEventListener('click', () => {
                    iframe.src = component.src;
                    tabsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                });
                tabsContainer.appendChild(button);
            });

            // If no components are rendered, clear the iframe
            if (componentsToRender.length === 0) {
                iframe.src = 'about:blank';
            } else if (!iframe.src || iframe.src === 'about:blank') {
                // If iframe is blank, load the first component
                iframe.src = componentsToRender[0].src;
            }
        };

        // Function to load components dynamically
        const loadComponents = async () => {
            try {
                const response = await fetch('data/components.json');
                allComponents = await response.json();

                // Populate categories
                const categories = [...new Set(allComponents.map(c => c.category))].sort();
                categories.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category;
                    categoryFilter.appendChild(option);
                });

                renderComponents(allComponents);
            } catch (error) {
                console.error('Error loading components:', error);
            }
        };

        // Filter and search logic
        const filterAndSearchComponents = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            const filteredComponents = allComponents.filter(component => {
                const matchesSearch = component.name.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });

            renderComponents(filteredComponents);
        };

        searchInput.addEventListener('input', filterAndSearchComponents);
        categoryFilter.addEventListener('change', filterAndSearchComponents);

        loadComponents();

        iframe.addEventListener('load', () => {
            if (iframe.contentWindow && iframe.contentWindow.ClassicEditor) {
                const editorElement = iframe.contentDocument.querySelector('#editor');
                if (editorElement) {
                    iframe.contentWindow.ClassicEditor
                        .create(editorElement)
                        .catch(error => {
                            console.error('Error initializing CKEditor in iframe:', error);
                        });
                }
            }
        });

        if (fullscreenButton) {
            fullscreenButton.addEventListener('click', () => {
                const src = iframe.src;
                window.open(src, '_blank');
            });
        }
    }
};

export default ComponentBrowser;
