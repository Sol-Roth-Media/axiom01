/**
 * Axiom01 Interactive Playground
 * Professional code editor with live preview and component library
 */

class AxiomPlayground {
  constructor() {
    this.editors = {};
    this.currentTheme = 'light';
    this.previewFrame = null;
    this.componentTemplates = {};
    this.currentComponent = null;

    this.init();
  }

  init() {
    this.initializeEditors();
    this.setupEventListeners();
    this.loadComponentTemplates();
    this.setupPreviewFrame();
    this.initializeConsole();
  }

  /**
   * Initialize CodeMirror editors
   */
  initializeEditors() {
    console.log('🚀 Initializing code editors...');

    // HTML Editor
    this.editors.html = CodeMirror.fromTextArea(document.getElementById('html-editor'), {
      mode: 'htmlmixed',
      theme: 'default',
      lineNumbers: true,
      autoCloseTags: true,
      autoCloseBrackets: true,
      indentUnit: 2,
      tabSize: 2,
      lineWrapping: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        'Cmd-S': () => this.updatePreview(),
        'Ctrl-S': () => this.updatePreview()
      }
    });

    // CSS Editor
    this.editors.css = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
      mode: 'css',
      theme: 'default',
      lineNumbers: true,
      autoCloseBrackets: true,
      indentUnit: 2,
      tabSize: 2,
      lineWrapping: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        'Cmd-S': () => this.updatePreview(),
        'Ctrl-S': () => this.updatePreview()
      }
    });

    // JavaScript Editor
    this.editors.js = CodeMirror.fromTextArea(document.getElementById('js-editor'), {
      mode: 'javascript',
      theme: 'default',
      lineNumbers: true,
      autoCloseBrackets: true,
      indentUnit: 2,
      tabSize: 2,
      lineWrapping: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        'Cmd-S': () => this.updatePreview(),
        'Ctrl-S': () => this.updatePreview()
      }
    });

    // Auto-update preview on changes
    Object.values(this.editors).forEach(editor => {
      editor.on('change', () => {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = setTimeout(() => this.updatePreview(), 500);
      });
    });

    console.log('✅ Code editors initialized');
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Theme selector
    document.getElementById('theme-selector')?.addEventListener('change', (e) => {
      this.currentTheme = e.target.value;
      this.updatePreview();
      this.updateEditorTheme();
    });

    // Editor tabs
    document.querySelectorAll('.editor-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.switchEditorTab(e.target.id.replace('-tab', ''));
      });
    });

    // Component library
    document.querySelectorAll('.component-item').forEach(item => {
      item.addEventListener('click', (e) => {
        this.loadComponent(e.target.dataset.component);
      });
    });

    // Component search
    document.getElementById('component-search')?.addEventListener('input', (e) => {
      this.filterComponents(e.target.value);
    });

    // Preview controls
    document.getElementById('refresh-preview')?.addEventListener('click', () => {
      this.updatePreview(true);
    });

    document.getElementById('fullscreen-preview')?.addEventListener('click', () => {
      this.toggleFullscreenPreview();
    });

    document.getElementById('preview-size')?.addEventListener('change', (e) => {
      this.setPreviewSize(e.target.value);
    });

    // Action buttons
    document.getElementById('share-code')?.addEventListener('click', () => this.shareCode());
    document.getElementById('export-code')?.addEventListener('click', () => this.exportCode());

    // Format buttons
    document.getElementById('format-html')?.addEventListener('click', () => this.formatCode('html'));
    document.getElementById('format-css')?.addEventListener('click', () => this.formatCode('css'));
    document.getElementById('format-js')?.addEventListener('click', () => this.formatCode('js'));

    // Copy buttons
    document.getElementById('copy-html')?.addEventListener('click', () => this.copyCode('html'));
    document.getElementById('copy-css')?.addEventListener('click', () => this.copyCode('css'));
    document.getElementById('copy-js')?.addEventListener('click', () => this.copyCode('js'));

    // Console controls
    document.getElementById('clear-console')?.addEventListener('click', () => this.clearConsole());
    document.getElementById('toggle-console')?.addEventListener('click', () => this.toggleConsole());
  }

  /**
   * Load component templates
   */
  loadComponentTemplates() {
    this.componentTemplates = {
      button: {
        html: `<button class="primary">Primary Button</button>
<button class="secondary">Secondary Button</button>
<button class="tertiary">Tertiary Button</button>
<button class="danger">Danger Button</button>
<button class="success">Success Button</button>`,
        css: `/* Custom button styles */
.custom-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
}`,
        js: `// Button interaction example
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    console.log('Button clicked:', e.target.textContent);
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    e.target.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});`
      },
      card: {
        html: `<article class="card">
  <header>
    <h3>Card Title</h3>
    <span class="badge">New</span>
  </header>
  <section>
    <p>This is a card component with semantic HTML structure. Cards are great for grouping related information.</p>
  </section>
  <footer>
    <button class="primary">Learn More</button>
    <button class="secondary">Share</button>
  </footer>
</article>`,
        css: `/* Card customization */
.card {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}`,
        js: `// Card interaction
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log('Card hovered');
  });
});`
      },
      modal: {
        html: `<button id="open-modal" class="primary">Open Modal</button>

<dialog class="modal" id="demo-modal" aria-labelledby="modal-title" aria-describedby="modal-desc">
  <article>
    <header>
      <h2 id="modal-title">Modal Title</h2>
      <button class="close" aria-label="Close modal">&times;</button>
    </header>
    <section id="modal-desc">
      <p>This is a fully accessible modal dialog with proper focus management and ARIA attributes.</p>
    </section>
    <footer>
      <button class="primary">Confirm</button>
      <button class="secondary">Cancel</button>
    </footer>
  </article>
</dialog>`,
        css: `/* Modal customization */
.modal {
  border: none;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  max-width: 500px;
}

.modal::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}`,
        js: `// Modal functionality
const openBtn = document.getElementById('open-modal');
const modal = document.getElementById('demo-modal');
const closeBtn = modal.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.showModal();
  console.log('Modal opened');
});

closeBtn.addEventListener('click', () => {
  modal.close();
  console.log('Modal closed');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});`
      },
      form: {
        html: `<form class="form" novalidate>
  <fieldset>
    <legend>Contact Information</legend>
    
    <div class="field">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required>
      <small class="help">Enter your full name</small>
    </div>
    
    <div class="field">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" required>
      <small class="help">We'll never share your email</small>
    </div>
    
    <div class="field">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>
    </div>
  </fieldset>
  
  <footer>
    <button type="submit" class="primary">Send Message</button>
    <button type="reset" class="secondary">Reset</button>
  </footer>
</form>`,
        css: `/* Form styling */
.form {
  max-width: 600px;
  margin: 0 auto;
}

.field {
  margin-bottom: 1.5rem;
}

.field input:focus,
.field textarea:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  border-color: var(--a-color-primary-500);
}`,
        js: `// Form validation
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted:', data);
  alert('Form submitted successfully!');
});

// Real-time validation
const inputs = form.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('blur', validateField);
});

function validateField(e) {
  const field = e.target;
  const isValid = field.checkValidity();
  
  if (!isValid) {
    field.style.borderColor = 'var(--a-color-error-500)';
  } else {
    field.style.borderColor = 'var(--a-color-success-500)';
  }
}`
      }
      // Add more component templates as needed
    };

    console.log('✅ Component templates loaded');
  }

  /**
   * Switch editor tab
   */
  switchEditorTab(tabName) {
    // Update tab states
    document.querySelectorAll('.editor-tab').forEach(tab => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    });

    document.querySelectorAll('.editor-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    // Activate selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    document.getElementById(`${tabName}-tab`).setAttribute('aria-selected', 'true');
    document.getElementById(`${tabName}-editor-panel`).classList.add('active');

    // Refresh editor
    if (this.editors[tabName]) {
      setTimeout(() => this.editors[tabName].refresh(), 100);
    }
  }

  /**
   * Load component into editors
   */
  loadComponent(componentName) {
    const template = this.componentTemplates[componentName];
    if (!template) {
      console.warn(`Template not found for component: ${componentName}`);
      return;
    }

    // Update active component button
    document.querySelectorAll('.component-item').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelector(`[data-component="${componentName}"]`).classList.add('active');

    // Load template code into editors
    this.editors.html.setValue(template.html || '');
    this.editors.css.setValue(template.css || '');
    this.editors.js.setValue(template.js || '');

    this.currentComponent = componentName;
    this.updatePreview();

    this.logToConsole(`Loaded ${componentName} component`, 'info');
  }

  /**
   * Setup preview frame
   */
  setupPreviewFrame() {
    this.previewFrame = document.getElementById('preview-frame');

    // Load initial content
    this.loadComponent('button');
  }

  /**
   * Update live preview
   */
  updatePreview(forced = false) {
    if (!this.previewFrame) return;

    this.setPreviewStatus('loading');

    const html = this.editors.html.getValue();
    const css = this.editors.css.getValue();
    const js = this.editors.js.getValue();

    // Build preview document
    const previewDoc = `
<!DOCTYPE html>
<html lang="en" data-theme="${this.currentTheme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/axiom.css">
  <link rel="stylesheet" href="../css/tokens/all-themes.css">
  <style>
    body {
      padding: 20px;
      font-family: var(--a-font-body);
      background: var(--a-color-surface);
      color: var(--a-color-text);
    }
    ${css}
  </style>
</head>
<body>
  ${html}
  
  <script>
    // Console proxy to capture logs
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.log = function(...args) {
      parent.postMessage({type: 'console', level: 'log', args}, '*');
      originalLog.apply(console, args);
    };
    
    console.error = function(...args) {
      parent.postMessage({type: 'console', level: 'error', args}, '*');
      originalError.apply(console, args);
    };
    
    console.warn = function(...args) {
      parent.postMessage({type: 'console', level: 'warn', args}, '*');
      originalWarn.apply(console, args);
    };
    
    // Error handling
    window.onerror = function(msg, url, line, col, error) {
      parent.postMessage({
        type: 'console',
        level: 'error',
        args: ['Error: ' + msg + ' at line ' + line]
      }, '*');
    };
    
    // Execute custom JavaScript
    try {
      ${js}
    } catch (error) {
      parent.postMessage({
        type: 'console',
        level: 'error',
        args: [error.message]
      }, '*');
    }
  </script>
</body>
</html>`;

    // Update iframe
    const blob = new Blob([previewDoc], { type: 'text/html' });
    this.previewFrame.src = URL.createObjectURL(blob);

    setTimeout(() => this.setPreviewStatus('success'), 500);
  }

  /**
   * Set preview status
   */
  setPreviewStatus(status) {
    const statusEl = document.querySelector('.preview-status');
    if (statusEl) {
      statusEl.textContent = status.charAt(0).toUpperCase() + status.slice(1);
      statusEl.className = `preview-status ${status}`;
    }
  }

  /**
   * Initialize console
   */
  initializeConsole() {
    // Listen for console messages from preview frame
    window.addEventListener('message', (e) => {
      if (e.data.type === 'console') {
        this.logToConsole(e.data.args.join(' '), e.data.level);
      }
    });

    this.logToConsole('Axiom01 Playground initialized', 'info');
  }

  /**
   * Log message to console
   */
  logToConsole(message, level = 'log') {
    const output = document.getElementById('console-output');
    const messageEl = document.createElement('div');
    messageEl.className = `console-message ${level}`;
    messageEl.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;

    output.appendChild(messageEl);
    output.scrollTop = output.scrollHeight;
  }

  /**
   * Clear console
   */
  clearConsole() {
    document.getElementById('console-output').innerHTML = '';
  }

  /**
   * Toggle console visibility
   */
  toggleConsole() {
    const console = document.getElementById('console-panel');
    const button = document.getElementById('toggle-console');

    if (console.style.display === 'none') {
      console.style.display = 'flex';
      button.textContent = 'Hide';
    } else {
      console.style.display = 'none';
      button.textContent = 'Show';
    }
  }

  /**
   * Filter components based on search
   */
  filterComponents(query) {
    const items = document.querySelectorAll('.component-item');
    const lowerQuery = query.toLowerCase();

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const category = item.closest('.category');

      if (text.includes(lowerQuery)) {
        item.style.display = 'block';
        category.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Hide empty categories
    document.querySelectorAll('.category').forEach(category => {
      const visibleItems = category.querySelectorAll('.component-item[style="display: block"], .component-item:not([style])');
      category.style.display = visibleItems.length > 0 ? 'block' : 'none';
    });
  }

  /**
   * Copy code to clipboard
   */
  async copyCode(type) {
    const code = this.editors[type].getValue();

    try {
      await navigator.clipboard.writeText(code);
      this.logToConsole(`${type.toUpperCase()} code copied to clipboard`, 'info');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  /**
   * Format code (basic implementation)
   */
  formatCode(type) {
    const editor = this.editors[type];
    const cursor = editor.getCursor();

    // Basic formatting - in a real implementation, you'd use proper formatters
    editor.setValue(editor.getValue());
    editor.setCursor(cursor);

    this.logToConsole(`${type.toUpperCase()} code formatted`, 'info');
  }

  /**
   * Share code functionality
   */
  shareCode() {
    const modal = document.getElementById('share-modal');
    const urlInput = document.getElementById('share-url');
    const embedInput = document.getElementById('embed-code');

    // Generate shareable URL (in real implementation, this would save to a backend)
    const shareableURL = `${window.location.origin}/playground?code=${btoa(JSON.stringify({
      html: this.editors.html.getValue(),
      css: this.editors.css.getValue(),
      js: this.editors.js.getValue(),
      theme: this.currentTheme
    }))}`;

    const embedCode = `<iframe src="${shareableURL}" width="100%" height="500" frameborder="0"></iframe>`;

    urlInput.value = shareableURL;
    embedInput.value = embedCode;

    modal.showModal();
  }

  /**
   * Export code as files
   */
  exportCode() {
    const html = this.editors.html.getValue();
    const css = this.editors.css.getValue();
    const js = this.editors.js.getValue();

    // Create zip file (simplified - in real implementation, use JSZip)
    const files = [
      { name: 'index.html', content: html },
      { name: 'styles.css', content: css },
      { name: 'script.js', content: js }
    ];

    files.forEach(file => {
      const blob = new Blob([file.content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();

      URL.revokeObjectURL(url);
    });

    this.logToConsole('Code exported as files', 'info');
  }
}

// Initialize playground when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomPlayground = new AxiomPlayground();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomPlayground;
}
