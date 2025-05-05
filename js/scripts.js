const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Function to toggle the theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Store the theme preference
}

// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Attach event listener to the theme toggle button
    const themeToggleButtons = document.getElementsByClassName('theme-toggle');
    console.log(themeToggleButtons);

    // Add a click handler to each element
    for (let i = 0; i < themeToggleButtons.length; i++) {

        console.log(themeToggleButtons);

        themeToggleButtons[i].addEventListener("click", toggleTheme);

    }
    ;
// Tablist compontent
    document.addEventListener('DOMContentLoaded', () => {
        const tabLists = document.querySelectorAll('[role="tablist"]');

        tabLists.forEach((tabList) => {
            const tabs = tabList.querySelectorAll('[role="tab"]');
            const panels = tabList.parentElement.querySelectorAll('[role="tabpanel"]');

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    // Reset all tabs and panels
                    tabs.forEach((t) => {
                        t.setAttribute('aria-selected', 'false');
                        t.setAttribute('tabindex', '-1');
                    });
                    panels.forEach((panel) => panel.setAttribute('hidden', ''));

                    // Activate the selected tab
                    tab.setAttribute('aria-selected', 'true');
                    tab.setAttribute('tabindex', '0');
                    panels[index].removeAttribute('hidden');
                });

                // Keyboard navigation
                tab.addEventListener('keydown', (e) => {
                    let newIndex = index;

                    if (e.key === 'ArrowRight') {
                        newIndex = (index + 1) % tabs.length;
                    } else if (e.key === 'ArrowLeft') {
                        newIndex = (index - 1 + tabs.length) % tabs.length;
                    }

                    tabs[newIndex].focus();
                    tabs[newIndex].click();
                });
            });
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll('.accordion h3');

        accordions.forEach((header) => {
            const panel = header.nextElementSibling;

            header.setAttribute('role', 'button');
            header.setAttribute('aria-expanded', 'false');
            header.setAttribute('tabindex', '0');
            panel.setAttribute('hidden', '');

            header.addEventListener('click', () => {
                const isExpanded = header.getAttribute('aria-expanded') === 'true';
                header.setAttribute('aria-expanded', String(!isExpanded));

                if (isExpanded) {
                    panel.setAttribute('hidden', '');
                } else {
                    panel.removeAttribute('hidden');
                }
            });

            // Keyboard interaction
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    header.click();
                }
            });
        });
    });

// Drop Down Component
    document.querySelector('.dropdown-toggle').addEventListener('click', () => {
        const menu = document.querySelector('.dropdown-menu');
        const isOpen = menu.classList.contains('show');
        menu.classList.toggle('show', !isOpen);
        menu.setAttribute('aria-hidden', isOpen);
    });

// Progress Bar
    function setProgress(value) {
        const progressBar = document.querySelector('.progress');
        progressBar.style.width = `${value}%`;
        progressBar.parentElement.setAttribute('aria-valuenow', value);
    }

// Increase Progress Functionality
    document.addEventListener('DOMContentLoaded', () => {
        const progressBar = document.querySelector('.progress-bar .progress');
        const progressButton = document.querySelector('.progress-btn');
        let progressValue = 0;

        progressButton.addEventListener('click', () => {
            progressValue = Math.min(progressValue + 10, 100); // Increment by 10%, max 100%
            progressBar.style.width = `${progressValue}%`;
            progressBar.parentElement.setAttribute('aria-valuenow', progressValue);

            // Optional: Disable button when progress is complete
            if (progressValue === 100) {
                progressButton.textContent = 'Completed!';
                progressButton.disabled = true;
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('toggle-loading');
        const throbber = document.getElementById('loading-throbber');

        toggleButton.addEventListener('click', () => {
            const isLoading = throbber.classList.toggle('active');
            throbber.setAttribute('aria-hidden', !isLoading); // Update accessibility
            toggleButton.textContent = isLoading ? 'Stop Loading' : 'Start Loading'; // Update button text
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        // Ensure nav-links are hidden initially for smaller screens
        if (window.innerWidth <= 768) {
            navLinks.classList.add('hidden');
        }

        // Toggle navigation menu
        menuToggle.addEventListener('click', () => {
            const isHidden = navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('open', !isHidden);
            menuToggle.classList.toggle('open', !isHidden);
        });

        // Adjust visibility on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('hidden', 'open');
            } else {
                navLinks.classList.add('hidden');
            }
        });
    })
});
