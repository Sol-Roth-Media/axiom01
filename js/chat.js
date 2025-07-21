document.addEventListener('DOMContentLoaded', function() {
    const chatForm = document.querySelector('.chat-form');
    const chatInput = document.querySelector('.chat-input');
    const chatHistory = document.querySelector('.chat-history');

    if (chatForm && chatInput && chatHistory) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                appendMessage(message, 'user');
                chatInput.value = '';
                // Simulate bot response
                setTimeout(() => {
                    appendMessage('This is a simulated bot response.', 'bot');
                }, 1000);
            }
        });
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});