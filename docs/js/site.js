document.addEventListener('DOMContentLoaded', () => {
    const componentList = document.getElementById('component-list');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Fetch and populate component list
    fetch('../data/components.json')
        .then(response => response.json())
        .then(data => {
            if (componentList) {
                data.components.forEach(component => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `../components/${component.file}`;
                    a.textContent = component.name;
                    a.target = 'content-frame';
                    li.appendChild(a);
                    componentList.appendChild(li);
                });
            }
        })
        .catch(error => console.error('Axiom Docs: Error loading components.json', error));

    // Theme toggle logic
    if (themeToggleButton) {
        const htmlElement = document.documentElement;
        const moonIcon = '<i class="fas fa-moon"></i>';
        const sunIcon = '<i class="fas fa-sun"></i>';

        const setTheme = (theme) => {
            htmlElement.setAttribute('data-theme', theme);
            if (theme === 'dark') {
                themeToggleButton.innerHTML = sunIcon;
            } else {
                themeToggleButton.innerHTML = moonIcon;
            }
        };

        setTheme(htmlElement.getAttribute('data-theme') || 'light');

        themeToggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }
});
