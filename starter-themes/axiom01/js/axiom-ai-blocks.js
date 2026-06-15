(function (Drupal, once) {
  function appendMessage(list, text, role) {
    var item = document.createElement('li');
    item.setAttribute('data-role', role);
    item.textContent = text;
    list.appendChild(item);
    list.scrollTop = list.scrollHeight;
  }

  async function postJson(endpoint, payload) {
    var response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    return response.json();
  }

  Drupal.behaviors.axiom01AiChatBlock = {
    attach: function attach(context) {
      once('axiom01-ai-chat-block', '[data-axiom-ai-chat]', context).forEach(function (panel) {
        var endpoint = panel.getAttribute('data-endpoint');
        var providerMode = panel.getAttribute('data-provider-mode') || 'auto';
        var systemPrompt = panel.getAttribute('data-system-prompt') || '';
        var form = panel.querySelector('[data-axiom-ai-chat-form]');
        var input = form ? form.querySelector('input[name="message"]') : null;
        var list = panel.querySelector('[data-axiom-ai-chat-messages]');
        var status = panel.querySelector('[data-axiom-ai-chat-status]');

        if (!form || !input || !list || !status) {
          return;
        }

        form.addEventListener('submit', async function (event) {
          event.preventDefault();
          var message = input.value.trim();
          if (!message) {
            return;
          }

          appendMessage(list, message, 'user');
          status.textContent = 'Sending...';
          input.value = '';

          if (!endpoint) {
            status.textContent = 'AI service unavailable.';
            appendMessage(list, 'The AI service is not available right now.', 'assistant');
            return;
          }

          try {
            var payload = {
              message: message,
              providerMode: providerMode,
              systemPromptPreset: systemPrompt
            };
            var data = await postJson(endpoint, payload);
            var reply = data.reply || data.message || data.output || 'No response received.';
            appendMessage(list, String(reply), 'assistant');
            status.textContent = 'Response ready.';
          }
          catch (error) {
            status.textContent = 'AI unavailable.';
            appendMessage(list, 'The AI service is currently unavailable.', 'assistant');
          }
        });
      });
    }
  };

  Drupal.behaviors.axiom01AiImageBlock = {
    attach: function attach(context) {
      once('axiom01-ai-image-block', '[data-axiom-ai-image]', context).forEach(function (panel) {
        var endpoint = panel.getAttribute('data-endpoint');
        var modelPreset = panel.getAttribute('data-model-preset') || '';
        var form = panel.querySelector('[data-axiom-ai-image-form]');
        var status = panel.querySelector('[data-axiom-ai-image-status]');
        var result = panel.querySelector('[data-axiom-ai-image-result]');

        if (!form || !status || !result) {
          return;
        }

        form.addEventListener('submit', async function (event) {
          event.preventDefault();

          var prompt = form.querySelector('[name="prompt"]').value.trim();
          var style = form.querySelector('[name="style"]').value;
          var size = form.querySelector('[name="size"]').value;
          if (!prompt) {
            return;
          }

          status.textContent = 'Generating image...';
          result.textContent = '';

          if (!endpoint) {
            status.textContent = 'Image service unavailable.';
            result.textContent = 'The AI image service is not available right now.';
            return;
          }

          try {
            var payload = {
              prompt: prompt,
              stylePreset: style,
              outputSizePreset: size,
              modelPreset: modelPreset
            };
            var data = await postJson(endpoint, payload);
            var imageUrl = data.imageUrl || data.url || '';

            if (imageUrl) {
              var image = document.createElement('img');
              image.src = imageUrl;
              image.alt = data.alt || prompt;
              result.innerHTML = '';
              result.appendChild(image);
              status.textContent = 'Image ready.';
            }
            else {
              status.textContent = 'No image returned.';
              result.textContent = 'The AI service returned no image.';
            }
          }
          catch (error) {
            status.textContent = 'Image generation unavailable.';
            result.textContent = 'The AI image service is currently unavailable.';
          }
        });
      });
    }
  };
})(Drupal, once);
