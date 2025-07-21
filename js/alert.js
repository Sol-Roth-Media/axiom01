// Axiom Alert Component JS

class AxiomAlert {
    static container = null;

    static init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'alert-toast-container';
            document.body.appendChild(this.container);
        }

        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-alert-close]')) {
                this.dismissAlert(e.target.closest('.alert'));
            }
        });
    }

    static show(type, message, options = {}) {
        const alert = this.createAlert(type, message, options);
        this.container.appendChild(alert);

        if (options.autoDismiss) {
            alert.style.setProperty('--toast-duration', `${options.autoDismiss / 1000}s`);
            setTimeout(() => this.dismissAlert(alert), options.autoDismiss);
        }
    }

    static createAlert(type, message, options) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        if (options.dismissible !== false) {
            alert.classList.add('alert-dismissible');
        }
        alert.setAttribute('role', 'alert');

        const icon = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-exclamation-circle',
        };

        alert.innerHTML = `
            <i class="fas ${icon[type]} alert-icon"></i>
            <div class="alert-content">${message}</div>
            ${options.dismissible !== false ? '<button class="alert-close" data-alert-close>&times;</button>' : ''}
        `;
        return alert;
    }

    static dismissAlert(alert) {
        if (alert) {
            alert.remove();
        }
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Alert = AxiomAlert;
AxiomComponents.Alert.init();