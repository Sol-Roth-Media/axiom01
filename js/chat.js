class Chat {
    constructor(element) {
        this.element = element;
        this.history = this.element.querySelector('.chat-history');
        this.form = this.element.querySelector('.chat-form');
        this.input = this.element.querySelector('.chat-input');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = this.input.value.trim();
            if (message) {
                this.appendMessage(message, 'user');
                this.input.value = '';
                // Simulate bot response
                setTimeout(() => {
                    this.appendMessage('This is a simulated bot response.', 'bot');
                }, 1000);
            }
        });
    }

    appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        this.history.appendChild(messageElement);
        this.history.scrollTop = this.history.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const chatWidgets = document.querySelectorAll('.chat-widget');
    chatWidgets.forEach(widget => {
        new Chat(widget);
    });
});
