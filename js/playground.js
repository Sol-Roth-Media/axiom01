document.addEventListener('DOMContentLoaded', () => {
    const htmlEditorElement = document.getElementById('html-editor');
    const previewFrame = document.getElementById('preview-frame');
    const themeSelector = document.getElementById('theme-selector');
    const componentButtons = document.querySelectorAll('.component-item');

    // Initialize CodeMirror editor
    const editor = CodeMirror.fromTextArea(htmlEditorElement, {
        mode: 'htmlmixed',
        theme: 'monokai',
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
    });

    // Function to update the preview
    const updatePreview = () => {
        const content = editor.getValue();
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;

        previewDoc.open();
        previewDoc.write(`
            <!DOCTYPE html>
            <html lang="en" data-theme="${themeSelector.value}">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Axiom Preview</title>
                <link rel="stylesheet" href="dist/css/axiom.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
            </head>
            <body class="axiom-body" style="padding: 1rem;">
                ${content}
                <script src="dist/js/axiom.min.js" type="module"><\/script>
            </body>
            </html>
        `);
        previewDoc.close();
    };

    // Update preview on editor changes
    editor.on('change', updatePreview);

    // Update preview on theme change
    themeSelector.addEventListener('change', updatePreview);

    // Load component template on button click
    componentButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const componentName = button.dataset.component;
            try {
                const response = await fetch(`components/${componentName}.html`);
                if (!response.ok) {
                    throw new Error(`Could not load ${componentName}.html`);
                }
                const html = await response.text();
                // Extract body content from the component file
                const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
                editor.setValue(bodyContent ? bodyContent[1].trim() : 'Could not load component content.');
                updatePreview();
            } catch (error) {
                console.error('Axiom Playground: Error loading component:', error);
                editor.setValue(`<!-- Error loading component: ${componentName} -->`);
            }
        });
    });

    // Initial load
    // Trigger a click on the first component button to load it by default
    if (componentButtons.length > 0) {
        componentButtons[0].click();
    } else {
        updatePreview();
    }
});