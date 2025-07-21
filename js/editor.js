// js/editor.js

const Editor = {
    init(element) {
        const editorDiv = document.createElement('div');
        element.appendChild(editorDiv);

        ClassicEditor
            .create(editorDiv)
            .catch(error => {
                console.error('Axiom: Error initializing CKEditor.', error);
            });
    }
};

export default Editor;
