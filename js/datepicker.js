// Axiom Datepicker Component JS

class Datepicker {
    constructor(inputElement) {
        this.input = inputElement;
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('datepicker-wrapper');
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        this.wrapper.appendChild(this.input);

        this.trigger = document.createElement('button');
        this.trigger.classList.add('datepicker-trigger');
        this.trigger.innerHTML = '...'; // Replace with an icon
        this.wrapper.appendChild(this.trigger);

        this.calendar = document.createElement('div');
        this.calendar.classList.add('datepicker-calendar');
        this.wrapper.appendChild(this.calendar);

        this.init();
    }

    init() {
        this.trigger.addEventListener('click', () => this.toggle());
        this.input.addEventListener('focus', () => this.open());
        document.addEventListener('click', (e) => {
            if (!this.wrapper.contains(e.target)) {
                this.close();
            }
        });

        this.renderCalendar(new Date());
    }

    toggle() {
        this.calendar.classList.toggle('open');
    }

    open() {
        this.calendar.classList.add('open');
    }

    close() {
        this.calendar.classList.remove('open');
    }

    renderCalendar(date) {
        // ... calendar rendering logic ...
        this.calendar.innerHTML = '...'; // Placeholder
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Datepicker = {
    init: function() {
        const datepickerInputs = document.querySelectorAll('input[type="date"]');
        datepickerInputs.forEach(input => {
            new Datepicker(input);
        });
    }
};

// document.addEventListener('DOMContentLoaded', () => {
//     AxiomComponents.Datepicker.init();
// });