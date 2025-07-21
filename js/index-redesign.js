
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    const componentTabs = document.querySelectorAll('.component-tab');
    const iframe = document.getElementById('component-preview-iframe');

    if (componentTabs && iframe) {
        componentTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const src = tab.getAttribute('data-src');
                iframe.src = src;

                componentTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

    // Load the AI Chat component
    const chatContainer = document.getElementById('ai-chat-component');
    if (chatContainer) {
        fetch('components/ai-chat.html')
            .then(response => response.text())
            .then(html => {
                chatContainer.innerHTML = html;
                // If the chat component has its own JS, you might need to load it here
                // For example:
                // const script = document.createElement('script');
                // script.src = 'js/ai-chat.js';
                // document.body.appendChild(script);
            });
    }
});
