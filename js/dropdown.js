class AxiomDropdown {
      constructor(dropdownElement) {
        this.dropdown = dropdownElement;
        this.trigger = this.dropdown.querySelector('.dropdown-trigger');
        this.menu = this.dropdown.querySelector('.dropdown-menu');
        this.options = this.menu.querySelectorAll('[role="menuitem"], [role="option"]');
        this.isSelect = this.dropdown.classList.contains('select');
        this.isMultiSelect = this.dropdown.classList.contains('multi');
        this.currentFocus = -1;
        this.init();
      }

      init() {
        this.trigger.addEventListener('click', () => this.toggle());
        this.trigger.addEventListener('keydown', (e) => this.handleTriggerKeyDown(e));

        this.options.forEach((option, index) => {
          option.addEventListener('click', () => this.selectOption(index));
          option.addEventListener('keydown', (e) => this.handleOptionKeyDown(e, index));
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
          if (!this.dropdown.contains(e.target)) {
            this.close();
          }
        });

        // Initialize selection display for select dropdowns
        if (this.isSelect) {
          this.updateSelectionDisplay();
        }
      }

      toggle() {
        const isOpen = this.trigger.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      open() {
        this.trigger.setAttribute('aria-expanded', 'true');
        this.menu.removeAttribute('hidden');

        // Update trigger icon
        const icon = this.trigger.querySelector('.dropdown-icon');
        if (icon) icon.textContent = '▲';

        // Set initial focus
        this.currentFocus = this.findSelectedIndex();
        if (this.currentFocus === -1) this.currentFocus = 0;
        this.setFocus(this.currentFocus);

        // Position dropdown if needed
        this.positionDropdown();
      }

      close() {
        this.trigger.setAttribute('aria-expanded', 'false');
        this.menu.setAttribute('hidden', '');

        // Update trigger icon
        const icon = this.trigger.querySelector('.dropdown-icon');
        if (icon) icon.textContent = '▼';

        // Return focus to trigger
        this.trigger.focus();
        this.currentFocus = -1;
      }

      selectOption(index) {
        const option = this.options[index];
        const value = option.getAttribute('data-value') || option.textContent.trim();

        if (this.isSelect) {
          if (this.isMultiSelect) {
            // Toggle selection for multi-select
            const isSelected = option.getAttribute('aria-selected') === 'true';
            option.setAttribute('aria-selected', !isSelected);

            // Update checkbox icon
            const checkboxIcon = option.querySelector('.checkbox-icon');
            if (checkboxIcon) {
              checkboxIcon.textContent = !isSelected ? '☑' : '☐';
            }

            // Update focus but don't close
            this.setFocus(index);
          } else {
            // Single selection
            this.options.forEach(opt => {
              opt.setAttribute('aria-selected', 'false');
              opt.setAttribute('tabindex', '-1');
            });

            option.setAttribute('aria-selected', 'true');
            option.setAttribute('tabindex', '0');

            this.close();
          }

          this.updateSelectionDisplay();
        } else {
          // Menu item clicked
          this.close();
          this.handleMenuItemAction(option, value);
        }
      }

      handleMenuItemAction(option, value) {
        // Dispatch custom event for menu actions
        const event = new CustomEvent('dropdown:select', {
          detail: { option, value, dropdown: this.dropdown }
        });
        this.dropdown.dispatchEvent(event);

        console.log(`Menu action: ${value}`);
      }

      updateSelectionDisplay() {
        if (!this.isSelect) return;

        const selectedOptions = Array.from(this.options).filter(
          opt => opt.getAttribute('aria-selected') === 'true'
        );

        const selectedValue = this.trigger.querySelector('.selected-value');

        if (selectedOptions.length === 0) {
          selectedValue.textContent = this.isMultiSelect ? 'Select items...' : 'Choose option...';
        } else if (this.isMultiSelect) {
          const selectedTexts = selectedOptions.map(opt =>
            opt.textContent.trim().replace(/^[☐☑]\s*/, '')
          );
          selectedValue.textContent = selectedTexts.length > 2
            ? `${selectedTexts.length} selected`
            : selectedTexts.join(', ');
        } else {
          selectedValue.textContent = selectedOptions[0].textContent.trim()
            .replace(/^[🟢🟡🔴🚨]\s*/, '');
        }
      }

      handleTriggerKeyDown(e) {
        switch (e.key) {
          case 'ArrowDown':
          case 'ArrowUp':
            e.preventDefault();
            this.open();
            break;
          case 'Enter':
          case ' ':
            e.preventDefault();
            this.toggle();
            break;
        }
      }

      handleOptionKeyDown(e, index) {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            this.setFocus(index < this.options.length - 1 ? index + 1 : 0);
            break;
          case 'ArrowUp':
            e.preventDefault();
            this.setFocus(index > 0 ? index - 1 : this.options.length - 1);
            break;
          case 'Home':
            e.preventDefault();
            this.setFocus(0);
            break;
          case 'End':
            e.preventDefault();
            this.setFocus(this.options.length - 1);
            break;
          case 'Enter':
          case ' ':
            e.preventDefault();
            this.selectOption(index);
            break;
          case 'Escape':
            e.preventDefault();
            this.close();
            break;
          case 'Tab':
            this.close();
            break;
        }
      }

      setFocus(index) {
        if (index >= 0 && index < this.options.length) {
          this.options.forEach(opt => opt.setAttribute('tabindex', '-1'));
          this.options[index].setAttribute('tabindex', '0');
          this.options[index].focus();
          this.currentFocus = index;
        }
      }

      findSelectedIndex() {
        return Array.from(this.options).findIndex(
          opt => opt.getAttribute('aria-selected') === 'true'
        );
      }

      positionDropdown() {
        const rect = this.dropdown.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;

        // If not enough space below, position above
        if (spaceBelow < 200 && spaceAbove > spaceBelow) {
          this.menu.style.top = 'auto';
          this.menu.style.bottom = '100%';
        } else {
          this.menu.style.top = '100%';
          this.menu.style.bottom = 'auto';
        }
      }
    }

    // Initialize all dropdowns
    document.addEventListener('DOMContentLoaded', () => {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => {
        new AxiomDropdown(dropdown);
      });

      // Example event listener for menu actions
      document.addEventListener('dropdown:select', (e) => {
        const { option, value, dropdown } = e.detail;
        console.log(`Dropdown action: ${value} from dropdown:`, dropdown.id);

        // Handle specific actions
        if (value === 'delete') {
          if (confirm('Are you sure you want to delete this item?')) {
            console.log('Item deleted');
          }
        }
      });
    });