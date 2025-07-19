// Axiom Notification Component JS

class Notification {
    constructor(options) {
        this.options = Object.assign({}, {
            message: '',
            type: 'info', // info, success, error
            duration: 3000
        }, options);

        this.container = document.querySelector('.notification-container');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.classList.add('notification-container');
            document.body.appendChild(this.container);
        }

        this.notification = document.createElement('div');
        this.notification.classList.add('notification');
        this.notification.classList.add(this.options.type);
        this.notification.setAttribute('role', 'alert');
        this.notification.innerHTML = `
            <span>${this.options.message}</span>
            <button class="notification-close" aria-label="Close notification">&times;</button>
        `;

        this.container.appendChild(this.notification);

        this.init();
    }

    init() {
        setTimeout(() => {
            this.notification.classList.add('open');
        }, 100);

        if (this.options.duration) {
            setTimeout(() => {
                this.close();
            }, this.options.duration);
        }

        this.notification.querySelector('.notification-close').addEventListener('click', () => this.close());
    }

    close() {
        this.notification.classList.remove('open');
        setTimeout(() => {
            this.notification.remove();
        }, 300);
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Notification = {
    show: function(options) {
        new Notification(options);
    }
};