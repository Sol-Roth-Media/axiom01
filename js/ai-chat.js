const AIChat = {
  init: function(element) {
    if (!element) return;

    const chatHTML = `
      <div class="ai-chat-panel is-hidden">
        <header>
          <h3>AI Assistant</h3>
          <button class="close-chat" aria-label="Close Chat">&times;</button>
        </header>
        <div class="ai-chat-messages" id="ai-chat-messages">
          <div class="ai-message assistant-message">Hello! How can I help you today?</div>
        </div>
        <footer class="ai-chat-input-area">
          <textarea id="ai-chat-input" placeholder="Type your message..."></textarea>
          <button id="ai-send-button" class="button primary">Send</button>
        </footer>
      </div>
    `;

    element.innerHTML = chatHTML;

    const chatPanel = element.querySelector('.ai-chat-panel');
    const closeButton = element.querySelector('.close-chat');
    const sendButton = element.querySelector('#ai-send-button');
    const chatInput = element.querySelector('#ai-chat-input');
    const chatToggleButton = document.getElementById('ai-chat-toggle-button');

    const toggleChatPanel = () => {
      chatPanel.classList.toggle('is-hidden');
      if (chatToggleButton) {
        chatToggleButton.classList.toggle('is-hidden');
      }
    };

    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        setTimeout(() => {
          addMessage('This is a simulated AI response.', 'assistant');
        }, 500);
      }
    };

    const addMessage = (text, sender) => {
      const messagesContainer = element.querySelector('.ai-chat-messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('ai-message', `${sender}-message`);
      messageElement.textContent = text;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    closeButton.addEventListener('click', toggleChatPanel);
    if (chatToggleButton) {
      chatToggleButton.addEventListener('click', toggleChatPanel);
    }

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
};

export default AIChat;