/**
 * Axiom01 File Upload Component
 * Modern file upload with drag & drop, progress tracking, and full accessibility
 */

class AxiomFileUpload {
  constructor() {
    this.uploads = new Map();
    this.fileTypes = {
      'image/jpeg': { icon: '🖼️', name: 'JPEG Image' },
      'image/png': { icon: '🖼️', name: 'PNG Image' },
      'image/gif': { icon: '🖼️', name: 'GIF Image' },
      'application/pdf': { icon: '📄', name: 'PDF Document' },
      'application/msword': { icon: '📝', name: 'Word Document' },
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': { icon: '📝', name: 'Word Document' },
      'text/plain': { icon: '📄', name: 'Text File' },
      'application/zip': { icon: '🗜️', name: 'ZIP Archive' },
      'default': { icon: '📎', name: 'File' }
    };
    this.init();
  }

  init() {
    this.setupFileUploads();
    this.setupInteractiveDemo();
    this.registerComponent();
  }

  /**
   * Setup all file upload components on the page
   */
  setupFileUploads() {
    const fileUploads = document.querySelectorAll('.file-upload');
    fileUploads.forEach(upload => this.initializeUpload(upload));
  }

  /**
   * Initialize a single file upload component
   * @param {Element} uploadElement - The file upload container
   */
  initializeUpload(uploadElement) {
    const dropzone = uploadElement.querySelector('.file-upload-dropzone');
    const input = uploadElement.querySelector('.file-upload-input');
    const button = uploadElement.querySelector('.file-upload-button');
    const fileList = uploadElement.querySelector('.file-upload-list');

    if (!dropzone || !input || !fileList) return;

    const uploadId = this.generateUploadId();
    this.uploads.set(uploadId, {
      element: uploadElement,
      dropzone,
      input,
      fileList,
      files: new Map(),
      maxFiles: parseInt(uploadElement.dataset.maxFiles) || Infinity,
      maxSize: parseInt(uploadElement.dataset.maxSize) || Infinity,
      accept: input.accept
    });

    // Setup event listeners
    this.setupDropzoneEvents(uploadId);
    this.setupInputEvents(uploadId);
    this.setupButtonEvents(uploadId);
  }

  /**
   * Setup dropzone drag & drop events
   */
  setupDropzoneEvents(uploadId) {
    const upload = this.uploads.get(uploadId);
    const { dropzone } = upload;

    // Drag events
    dropzone.addEventListener('dragenter', (e) => {
      e.preventDefault();
      dropzone.classList.add('drag-over');
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    dropzone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      if (!dropzone.contains(e.relatedTarget)) {
        dropzone.classList.remove('drag-over');
      }
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');

      const files = Array.from(e.dataTransfer.files);
      this.handleFiles(uploadId, files);
    });

    // Keyboard events
    dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        upload.input.click();
      }
    });

    // Click events
    dropzone.addEventListener('click', (e) => {
      if (e.target === dropzone || e.target.closest('.file-upload-content')) {
        upload.input.click();
      }
    });
  }

  /**
   * Setup file input events
   */
  setupInputEvents(uploadId) {
    const upload = this.uploads.get(uploadId);

    upload.input.addEventListener('change', (e) => {
      const files = Array.from(e.target.files);
      this.handleFiles(uploadId, files);
      e.target.value = ''; // Reset input
    });
  }

  /**
   * Setup button events
   */
  setupButtonEvents(uploadId) {
    const upload = this.uploads.get(uploadId);
    const button = upload.element.querySelector('.file-upload-button');

    if (button) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        upload.input.click();
      });
    }
  }

  /**
   * Handle selected/dropped files
   */
  handleFiles(uploadId, files) {
    const upload = this.uploads.get(uploadId);
    const validFiles = [];
    const errors = [];

    files.forEach(file => {
      const validation = this.validateFile(file, upload);
      if (validation.valid) {
        validFiles.push(file);
      } else {
        errors.push(validation.error);
      }
    });

    // Check total file count
    const currentFileCount = upload.files.size;
    const newFileCount = currentFileCount + validFiles.length;

    if (newFileCount > upload.maxFiles) {
      const allowed = upload.maxFiles - currentFileCount;
      errors.push(`Maximum ${upload.maxFiles} files allowed. You can add ${allowed} more file${allowed !== 1 ? 's' : ''}.`);
      validFiles.splice(allowed);
    }

    // Display errors
    if (errors.length > 0) {
      this.showValidationErrors(upload.element, errors);
    } else {
      this.hideValidationErrors(upload.element);
    }

    // Add valid files
    validFiles.forEach(file => {
      const fileId = this.generateFileId();
      upload.files.set(fileId, file);
      this.addFileToList(uploadId, fileId, file);
    });

    // Announce to screen readers
    if (validFiles.length > 0) {
      this.announceToScreenReader(
        `${validFiles.length} file${validFiles.length !== 1 ? 's' : ''} added for upload`
      );
    }
  }

  /**
   * Validate a file
   */
  validateFile(file, upload) {
    // Check file size
    if (file.size > upload.maxSize) {
      return {
        valid: false,
        error: `"${file.name}" is too large. Maximum size is ${this.formatFileSize(upload.maxSize)}.`
      };
    }

    // Check file type if accept attribute is set
    if (upload.accept) {
      const acceptTypes = upload.accept.split(',').map(type => type.trim());
      const isValid = acceptTypes.some(acceptType => {
        if (acceptType.startsWith('.')) {
          return file.name.toLowerCase().endsWith(acceptType.toLowerCase());
        } else if (acceptType.includes('*')) {
          const baseType = acceptType.split('/')[0];
          return file.type.startsWith(baseType + '/');
        } else {
          return file.type === acceptType;
        }
      });

      if (!isValid) {
        return {
          valid: false,
          error: `"${file.name}" is not a supported file type.`
        };
      }
    }

    return { valid: true };
  }

  /**
   * Add file to the display list
   */
  addFileToList(uploadId, fileId, file) {
    const upload = this.uploads.get(uploadId);
    const fileItem = this.createFileItem(uploadId, fileId, file);

    upload.fileList.appendChild(fileItem);

    // Start upload simulation if this is the demo
    if (upload.element.id === 'demo-upload') {
      setTimeout(() => this.simulateUpload(uploadId, fileId), 500);
    }
  }

  /**
   * Create file item element
   */
  createFileItem(uploadId, fileId, file) {
    const upload = this.uploads.get(uploadId);
    const isImagePreview = upload.element.classList.contains('file-upload--image-preview');
    const isCompact = upload.element.classList.contains('file-upload--compact');

    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.setAttribute('data-file-id', fileId);
    fileItem.setAttribute('role', 'listitem');

    const fileInfo = this.getFileInfo(file);

    // Create preview or icon
    if (isImagePreview && file.type.startsWith('image/')) {
      const preview = document.createElement('div');
      preview.className = 'file-item-preview';
      preview.setAttribute('aria-hidden', 'true');

      const img = document.createElement('img');
      img.alt = '';
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
      fileItem.appendChild(preview);
    } else {
      const icon = document.createElement('div');
      icon.className = 'file-item-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = fileInfo.icon;
      fileItem.appendChild(icon);
    }

    // Create file info
    const info = document.createElement('div');
    info.className = 'file-item-info';

    const name = document.createElement('div');
    name.className = 'file-item-name';
    name.textContent = file.name;
    name.title = file.name;

    const meta = document.createElement('div');
    meta.className = 'file-item-meta';
    meta.textContent = `${fileInfo.name} • ${this.formatFileSize(file.size)}`;

    info.appendChild(name);
    if (!isCompact) {
      info.appendChild(meta);
    }
    fileItem.appendChild(info);

    // Create actions
    const actions = document.createElement('div');
    actions.className = 'file-item-actions';

    const removeButton = document.createElement('button');
    removeButton.className = 'file-item-remove';
    removeButton.textContent = '×';
    removeButton.setAttribute('aria-label', `Remove ${file.name}`);
    removeButton.addEventListener('click', () => {
      this.removeFile(uploadId, fileId);
    });

    actions.appendChild(removeButton);
    fileItem.appendChild(actions);

    // Add progress bar for uploads with progress
    if (upload.element.classList.contains('file-upload--with-progress')) {
      const progress = document.createElement('div');
      progress.className = 'file-item-progress';
      progress.setAttribute('aria-hidden', 'true');

      const progressBar = document.createElement('div');
      progressBar.className = 'file-item-progress-bar';
      progressBar.style.width = '0%';

      progress.appendChild(progressBar);
      fileItem.appendChild(progress);
    }

    return fileItem;
  }

  /**
   * Remove file from upload
   */
  removeFile(uploadId, fileId) {
    const upload = this.uploads.get(uploadId);
    const fileItem = upload.fileList.querySelector(`[data-file-id="${fileId}"]`);
    const file = upload.files.get(fileId);

    if (fileItem) {
      // Clean up object URL if it exists
      const img = fileItem.querySelector('img');
      if (img && img.src.startsWith('blob:')) {
        URL.revokeObjectURL(img.src);
      }

      fileItem.remove();
      upload.files.delete(fileId);

      this.announceToScreenReader(`File "${file.name}" removed`);
    }
  }

  /**
   * Simulate file upload progress
   */
  simulateUpload(uploadId, fileId) {
    const upload = this.uploads.get(uploadId);
    const fileItem = upload.fileList.querySelector(`[data-file-id="${fileId}"]`);
    const progressBar = fileItem?.querySelector('.file-item-progress-bar');

    if (!progressBar) return;

    fileItem.classList.add('file-item--uploading');
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 15;

      if (progress >= 100) {
        progress = 100;
        progressBar.style.width = '100%';
        fileItem.classList.remove('file-item--uploading');
        fileItem.classList.add('file-item--success');
        clearInterval(interval);

        const file = upload.files.get(fileId);
        this.announceToScreenReader(`Upload complete: ${file.name}`);
      } else {
        progressBar.style.width = progress + '%';
      }
    }, 100 + Math.random() * 200);
  }

  /**
   * Get file type information
   */
  getFileInfo(file) {
    return this.fileTypes[file.type] || this.fileTypes.default;
  }

  /**
   * Format file size for display
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 B';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  /**
   * Show validation errors
   */
  showValidationErrors(uploadElement, errors) {
    let validationContainer = uploadElement.querySelector('.file-upload-validation');

    if (!validationContainer) {
      validationContainer = document.createElement('div');
      validationContainer.className = 'file-upload-validation';
      validationContainer.setAttribute('aria-live', 'assertive');
      validationContainer.setAttribute('aria-atomic', 'true');
      uploadElement.appendChild(validationContainer);
    }

    const errorList = document.createElement('ul');
    errorList.className = 'file-upload-errors';
    errorList.setAttribute('role', 'list');

    errors.forEach(error => {
      const errorItem = document.createElement('li');
      errorItem.textContent = error;
      errorList.appendChild(errorItem);
    });

    validationContainer.innerHTML = '';
    validationContainer.appendChild(errorList);
  }

  /**
   * Hide validation errors
   */
  hideValidationErrors(uploadElement) {
    const validationContainer = uploadElement.querySelector('.file-upload-validation');
    if (validationContainer) {
      validationContainer.remove();
    }
  }

  /**
   * Setup interactive demo
   */
  setupInteractiveDemo() {
    const simulateUploadBtn = document.getElementById('simulate-upload');
    const simulateErrorBtn = document.getElementById('simulate-error');
    const clearFilesBtn = document.getElementById('clear-files');
    const demoUpload = document.getElementById('demo-upload');

    if (!demoUpload) return;

    const demoUploadId = Array.from(this.uploads.keys()).find(id =>
      this.uploads.get(id).element === demoUpload
    );

    if (simulateUploadBtn) {
      simulateUploadBtn.addEventListener('click', () => {
        const demoFiles = [
          new File([''], 'document.pdf', { type: 'application/pdf' }),
          new File([''], 'image.jpg', { type: 'image/jpeg' }),
          new File([''], 'readme.txt', { type: 'text/plain' })
        ];

        this.handleFiles(demoUploadId, demoFiles);
      });
    }

    if (simulateErrorBtn) {
      simulateErrorBtn.addEventListener('click', () => {
        const largeFile = new File(['x'.repeat(15000000)], 'large-file.zip', { type: 'application/zip' });
        this.handleFiles(demoUploadId, [largeFile]);
      });
    }

    if (clearFilesBtn) {
      clearFilesBtn.addEventListener('click', () => {
        const upload = this.uploads.get(demoUploadId);
        upload.fileList.innerHTML = '';
        upload.files.clear();
        this.hideValidationErrors(upload.element);
        this.announceToScreenReader('All files cleared');
      });
    }
  }

  /**
   * Generate unique upload ID
   */
  generateUploadId() {
    return 'upload-' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Generate unique file ID
   */
  generateFileId() {
    return 'file-' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Announce message to screen readers
   */
  announceToScreenReader(message, priority = 'polite') {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;

    document.body.appendChild(liveRegion);
    setTimeout(() => liveRegion.remove(), 1000);
  }

  /**
   * Register component with Axiom system
   */
  registerComponent() {
    if (window.AxiomComponents) {
      AxiomComponents.register('fileUpload', {
        init: () => {
          console.log('File Upload component initialized');
        },
        initializeUpload: this.initializeUpload.bind(this),
        handleFiles: this.handleFiles.bind(this),
        removeFile: this.removeFile.bind(this)
      });
    }
  }
}

// Initialize file upload component
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomFileUpload = new AxiomFileUpload();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomFileUpload;
}
