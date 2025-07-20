/**
 * Axiom01 Pagination Component
 * Provides accessible pagination with keyboard navigation and screen reader support
 */

class AxiomPagination {
  constructor() {
    this.currentPage = 1;
    this.totalPages = 25;
    this.pageSize = 25;
    this.totalItems = 1247;
    this.init();
  }

  init() {
    this.setupInteractiveDemo();
    this.setupJumpToPage();
    this.setupPageSize();
    this.registerComponent();
  }

  /**
   * Generate pagination structure
   * @param {Object} options - Configuration options
   * @returns {Element} - Pagination nav element
   */
  create(options = {}) {
    const {
      currentPage = 1,
      totalPages = 10,
      maxVisible = 5,
      showEllipsis = true,
      size = 'default',
      ariaLabel = 'Pagination navigation'
    } = options;

    const nav = document.createElement('nav');
    nav.className = `pagination${size !== 'default' ? ` pagination--${size}` : ''}`;
    nav.setAttribute('aria-label', ariaLabel);
    nav.setAttribute('role', 'navigation');

    const ul = document.createElement('ul');

    // Previous button
    if (currentPage > 1) {
      const prevLi = document.createElement('li');
      const prevLink = document.createElement('a');
      prevLink.href = `#page-${currentPage - 1}`;
      prevLink.className = 'pagination-prev';
      prevLink.setAttribute('aria-label', 'Go to previous page');
      prevLink.setAttribute('rel', 'prev');
      prevLink.textContent = 'Previous';
      prevLi.appendChild(prevLink);
      ul.appendChild(prevLi);
    }

    // Page numbers with ellipsis logic
    const pages = this.calculateVisiblePages(currentPage, totalPages, maxVisible, showEllipsis);

    pages.forEach(page => {
      const li = document.createElement('li');

      if (page === '...') {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.setAttribute('aria-hidden', 'true');
        ellipsis.textContent = '…';
        li.appendChild(ellipsis);
      } else if (page === currentPage) {
        const current = document.createElement('span');
        current.setAttribute('aria-current', 'page');
        current.setAttribute('aria-label', `Current page, page ${page}`);
        current.textContent = page;
        li.appendChild(current);
      } else {
        const link = document.createElement('a');
        link.href = `#page-${page}`;
        link.setAttribute('aria-label', `Go to page ${page}`);
        link.textContent = page;
        li.appendChild(link);
      }

      ul.appendChild(li);
    });

    // Next button
    if (currentPage < totalPages) {
      const nextLi = document.createElement('li');
      const nextLink = document.createElement('a');
      nextLink.href = `#page-${currentPage + 1}`;
      nextLink.className = 'pagination-next';
      nextLink.setAttribute('aria-label', 'Go to next page');
      nextLink.setAttribute('rel', 'next');
      nextLink.textContent = 'Next';
      nextLi.appendChild(nextLink);
      ul.appendChild(nextLi);
    }

    nav.appendChild(ul);
    return nav;
  }

  /**
   * Calculate which page numbers to show with ellipsis
   */
  calculateVisiblePages(current, total, maxVisible, showEllipsis) {
    if (!showEllipsis || total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = [];
    const halfVisible = Math.floor(maxVisible / 2);

    // Always show first page
    if (current > halfVisible + 2) {
      pages.push(1);
      if (current > halfVisible + 3) {
        pages.push('...');
      }
    }

    // Show pages around current
    const start = Math.max(1, current - halfVisible);
    const end = Math.min(total, current + halfVisible);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Always show last page
    if (current < total - halfVisible - 1) {
      if (current < total - halfVisible - 2) {
        pages.push('...');
      }
      pages.push(total);
    }

    return pages;
  }

  /**
   * Update pagination to show different page
   */
  goToPage(pagination, pageNumber, totalPages = this.totalPages) {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    const newPagination = this.create({
      currentPage: pageNumber,
      totalPages: totalPages,
      maxVisible: 5,
      showEllipsis: true
    });

    pagination.innerHTML = newPagination.innerHTML;
    this.currentPage = pageNumber;

    // Announce page change to screen readers
    this.announceToScreenReader(`Navigated to page ${pageNumber} of ${totalPages}`);

    // Update any status elements
    const statusElement = document.getElementById('current-page-status');
    if (statusElement) {
      statusElement.textContent = pageNumber;
    }
  }

  /**
   * Setup interactive demo
   */
  setupInteractiveDemo() {
    const interactivePagination = document.getElementById('interactive-pagination');
    const firstButton = document.getElementById('goto-first');
    const lastButton = document.getElementById('goto-last');
    const toggleEllipsisButton = document.getElementById('toggle-ellipsis');

    if (!interactivePagination) return;

    // Initialize with first page
    this.goToPage(interactivePagination, 1, this.totalPages);

    // Add click listeners to pagination links
    interactivePagination.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');

        if (href && href.includes('#page-')) {
          const pageNum = parseInt(href.replace('#page-', ''), 10);
          if (!isNaN(pageNum)) {
            this.goToPage(interactivePagination, pageNum, this.totalPages);
          }
        } else if (e.target.classList.contains('pagination-prev')) {
          this.goToPage(interactivePagination, this.currentPage - 1, this.totalPages);
        } else if (e.target.classList.contains('pagination-next')) {
          this.goToPage(interactivePagination, this.currentPage + 1, this.totalPages);
        }
      }
    });

    // Keyboard navigation
    interactivePagination.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'A') {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            if (this.currentPage > 1) {
              this.goToPage(interactivePagination, this.currentPage - 1, this.totalPages);
            }
            break;
          case 'ArrowRight':
            e.preventDefault();
            if (this.currentPage < this.totalPages) {
              this.goToPage(interactivePagination, this.currentPage + 1, this.totalPages);
            }
            break;
          case 'Home':
            e.preventDefault();
            this.goToPage(interactivePagination, 1, this.totalPages);
            break;
          case 'End':
            e.preventDefault();
            this.goToPage(interactivePagination, this.totalPages, this.totalPages);
            break;
        }
      }
    });

    // Demo control buttons
    if (firstButton) {
      firstButton.addEventListener('click', () => {
        this.goToPage(interactivePagination, 1, this.totalPages);
      });
    }

    if (lastButton) {
      lastButton.addEventListener('click', () => {
        this.goToPage(interactivePagination, this.totalPages, this.totalPages);
      });
    }

    if (toggleEllipsisButton) {
      let showEllipsis = true;
      toggleEllipsisButton.addEventListener('click', () => {
        showEllipsis = !showEllipsis;
        const newPagination = this.create({
          currentPage: this.currentPage,
          totalPages: this.totalPages,
          maxVisible: showEllipsis ? 5 : this.totalPages,
          showEllipsis: showEllipsis
        });

        interactivePagination.innerHTML = newPagination.innerHTML;
        toggleEllipsisButton.textContent = showEllipsis ? 'Hide Ellipsis' : 'Show Ellipsis';
      });
    }
  }

  /**
   * Setup jump to page functionality
   */
  setupJumpToPage() {
    const jumpInput = document.getElementById('jump-to-page');
    const jumpButton = document.getElementById('jump-button');

    if (!jumpInput || !jumpButton) return;

    const handleJump = () => {
      const pageNum = parseInt(jumpInput.value, 10);
      if (pageNum >= 1 && pageNum <= 25) {
        // Find the pagination element
        const pagination = jumpInput.closest('.component-demo').querySelector('.pagination');
        if (pagination) {
          this.goToPage(pagination, pageNum, 25);
          jumpInput.value = pageNum;
        }
      } else {
        this.announceToScreenReader('Invalid page number. Please enter a number between 1 and 25.', 'assertive');
        jumpInput.focus();
      }
    };

    jumpButton.addEventListener('click', handleJump);

    jumpInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleJump();
      }
    });

    // Validate input as user types
    jumpInput.addEventListener('input', () => {
      const pageNum = parseInt(jumpInput.value, 10);
      jumpButton.disabled = isNaN(pageNum) || pageNum < 1 || pageNum > 25;
    });
  }

  /**
   * Setup page size functionality
   */
  setupPageSize() {
    const pageSizeSelect = document.getElementById('page-size');
    if (!pageSizeSelect) return;

    pageSizeSelect.addEventListener('change', (e) => {
      this.pageSize = parseInt(e.target.value, 10);
      this.updatePageInfo();
      this.announceToScreenReader(`Page size changed to ${this.pageSize} items per page`);
    });
  }

  /**
   * Update pagination info display
   */
  updatePageInfo() {
    const infoElement = document.querySelector('.pagination-info p[aria-live]');
    if (infoElement) {
      const start = (this.currentPage - 1) * this.pageSize + 1;
      const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
      infoElement.textContent = `Showing ${start}-${end} of ${this.totalItems.toLocaleString()} results`;
    }
  }

  /**
   * Announce message to screen readers using ARIA live region
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
      AxiomComponents.register('pagination', {
        init: () => {
          console.log('Pagination component initialized');
        },
        create: this.create.bind(this),
        goToPage: this.goToPage.bind(this)
      });
    }
  }
}

// Initialize pagination component
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomPagination = new AxiomPagination();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomPagination;
}
