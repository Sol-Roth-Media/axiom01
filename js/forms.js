// Axiom Forms Component JS

class FormStateManager {
    constructor(formId) {
        this.formId = formId;
        this.form = document.getElementById(formId);
        this.storageKey = `form_state_${formId}`;
        this.init();
    }

    init() {
        if (!this.form) return;

        this.loadState();
        this.form.addEventListener('input', () => this.saveState());
        this.form.addEventListener('change', () => this.saveState());
    }

    saveState() {
        const formData = new FormData(this.form);
        const state = {};

        for (let [key, value] of formData.entries()) {
            if (state[key]) {
                if (Array.isArray(state[key])) {
                    state[key].push(value);
                } else {
                    state[key] = [state[key], value];
                }
            } else {
                state[key] = value;
            }
        }

        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }

    loadState() {
        const savedState = localStorage.getItem(this.storageKey);
        if (!savedState) return;

        try {
            const state = JSON.parse(savedState);

            Object.keys(state).forEach(key => {
                const elements = this.form.querySelectorAll(`[name="${key}"]`);
                elements.forEach(element => {
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        element.checked = Array.isArray(state[key]) ?
                            state[key].includes(element.value) :
                            state[key] === element.value;
                    } else {
                        element.value = state[key];
                    }
                });
            });
        } catch (error) {
            console.error('Error loading form state:', error);
        }
    }
}

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.form.addEventListener('input', (e) => this.handleInput(e));
        this.form.addEventListener('blur', (e) => this.handleBlur(e), true);
    }

    handleSubmit(e) {
        e.preventDefault();
        const isValid = this.validateForm();

        if (isValid) {
            alert('Form submitted successfully!');
            // In real implementation, submit the form data
        }

        return isValid;
    }

    handleInput(e) {
        if (e.target.matches('input, select, textarea')) {
            this.clearFieldError(e.target);
        }
    }

    handleBlur(e) {
        if (e.target.matches('input[required], select[required], textarea[required]')) {
            this.validateField(e.target);
        }
    }

    validateForm() {
        const fields = this.form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();

        if (field.hasAttribute('required') && !value) {
            this.showFieldError(field, 'This field is required');
            return false;
        }

        if (field.type === 'email' && value && !this.isValidEmail(value)) {
            this.showFieldError(field, 'Please enter a valid email address');
            return false;
        }

        this.clearFieldError(field);
        return true;
    }

    showFieldError(field, message) {
        const fieldGroup = field.closest('.form-group');
        const errorElement = fieldGroup?.querySelector('.error-message');

        fieldGroup?.classList.add('error');
        field.setAttribute('aria-invalid', 'true');

        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    clearFieldError(field) {
        const fieldGroup = field.closest('.form-group');
        const errorElement = fieldGroup?.querySelector('.error-message');

        fieldGroup?.classList.remove('error');
        field.removeAttribute('aria-invalid');

        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Forms = {
    init: function() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            new FormStateManager(form.id);
            new FormValidator(form.id);
        });
    }
};

// document.addEventListener('DOMContentLoaded', () => {
//     AxiomComponents.Forms.init();
// });