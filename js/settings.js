class AxiomSettings {
  constructor(element) {
    this.panel = element;
    this.saveButton = this.panel.querySelector('#save-settings-button');
    this.geminiApiKeyInput = this.panel.querySelector('#gemini-api-key');
    this.openaiApiKeyInput = this.panel.querySelector('#openai-api-key');
    this.huggingfaceApiKeyInput = this.panel.querySelector('#huggingface-api-key');

    this.loadSettings();
    this.saveButton.addEventListener('click', () => this.saveSettings());
  }

  saveSettings() {
    localStorage.setItem('gemini-api-key', this.geminiApiKeyInput.value);
    localStorage.setItem('openai-api-key', this.openaiApiKeyInput.value);
    localStorage.setItem('huggingface-api-key', this.huggingfaceApiKeyInput.value);
    alert('Settings saved!');
  }

  loadSettings() {
    this.geminiApiKeyInput.value = localStorage.getItem('gemini-api-key') || '';
    this.openaiApiKeyInput.value = localStorage.getItem('openai-api-key') || '';
    this.huggingfaceApiKeyInput.value = localStorage.getItem('huggingface-api-key') || '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const settingsPanel = document.querySelector('.settings-panel');
  if (settingsPanel) {
    new AxiomSettings(settingsPanel);
  }
});
