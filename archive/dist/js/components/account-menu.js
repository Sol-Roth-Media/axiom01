export default {
  init(element) {
    const button = element.querySelector('.account-button');
    const dropdown = element.querySelector('.account-dropdown');

    if (!button || !dropdown) {
      return null;
    }

    const uniqueId = Math.random().toString(36).slice(2, 11);
    const buttonHadId = Boolean(button.id);
    const dropdownHadId = Boolean(dropdown.id);
    const dropdownHadRole = dropdown.hasAttribute('role');
    const userName = button.querySelector('.account-name')?.textContent || 'User';

    button.id = button.id || `axiom-account-menu-button-${uniqueId}`;
    dropdown.id = dropdown.id || `axiom-account-menu-dropdown-${uniqueId}`;
    if (!dropdownHadRole) {
      dropdown.setAttribute('role', 'menu');
    }

    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-controls', dropdown.id);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', `Account menu for ${userName}`);
    dropdown.setAttribute('aria-labelledby', button.id);
    dropdown.setAttribute('aria-hidden', 'true');

    const getMenuItems = () => Array.from(dropdown.querySelectorAll('[role="menuitem"]'));

    const setDropdownOpen = (isOpen, { restoreFocus = false } = {}) => {
      button.setAttribute('aria-expanded', String(isOpen));
      dropdown.setAttribute('aria-hidden', String(!isOpen));
      dropdown.style.display = isOpen ? 'block' : 'none';

      if (restoreFocus) {
        button.focus();
      }
    };

    const clickHandler = (event) => {
      event.preventDefault();
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      const willOpen = !isOpen;
      setDropdownOpen(willOpen);
      if (willOpen) {
        getMenuItems()[0]?.focus();
      }
    };

    const documentClickHandler = (event) => {
      if (!element.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const documentKeydownHandler = (event) => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setDropdownOpen(false, { restoreFocus: true });
      }
    };

    const dropdownKeydownHandler = (event) => {
      const items = getMenuItems();
      if (!items.length) {
        return;
      }

      const currentIndex = items.indexOf(document.activeElement);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextIndex = currentIndex + 1 < items.length ? currentIndex + 1 : 0;
        items[nextIndex].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1;
        items[prevIndex].focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        items[0].focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        items[items.length - 1].focus();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setDropdownOpen(false, { restoreFocus: true });
      }
    };

    button.addEventListener('click', clickHandler);
    document.addEventListener('click', documentClickHandler);
    document.addEventListener('keydown', documentKeydownHandler);
    dropdown.addEventListener('keydown', dropdownKeydownHandler);

    setDropdownOpen(false);

    return {
      destroy() {
        button.removeEventListener('click', clickHandler);
        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keydown', documentKeydownHandler);
        dropdown.removeEventListener('keydown', dropdownKeydownHandler);

        if (!buttonHadId) {
          button.removeAttribute('id');
        }
        if (!dropdownHadId) {
          dropdown.removeAttribute('id');
        }
        if (!dropdownHadRole) {
          dropdown.removeAttribute('role');
        }

        button.removeAttribute('aria-haspopup');
        button.removeAttribute('aria-controls');
        button.removeAttribute('aria-expanded');
        button.removeAttribute('aria-label');
        dropdown.removeAttribute('aria-labelledby');
        dropdown.removeAttribute('aria-hidden');
        dropdown.style.removeProperty('display');
      }
    };
  }
};
