class AxiomAIImageGenerator {
  constructor(element) {
    this.generator = element;
    this.promptInput = this.generator.querySelector('#image-prompt');
    this.generateButton = this.generator.querySelector('#generate-image-button');
    this.imageDisplay = this.generator.querySelector('#generated-image');

    this.generateButton.addEventListener('click', () => this.generateImage());
  }

  generateImage() {
    const prompt = this.promptInput.value.trim();
    if (prompt) {
      // In a real application, you would send the prompt to an image generation service.
      // For demonstration, we'll use a placeholder image.
      this.imageDisplay.src = `https://via.placeholder.com/500x300.png?text=${encodeURIComponent(prompt)}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const imageGenerator = document.querySelector('.ai-image-generator');
  if (imageGenerator) {
    new AxiomAIImageGenerator(imageGenerator);
  }
});
