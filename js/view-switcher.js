// js/view-switcher.js

const ViewSwitcher = {
    init(element) {
        const buttons = element.querySelectorAll('.view-switcher-actions button');
        const content = element.querySelector('.view-switcher-content');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const view = button.dataset.view;
                content.className = `view-switcher-content ${view}`;

                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
};

export default ViewSwitcher;
