// js/components/rating.js
export default {
    /**
     * Initializes the rating component on a given DOM element.
     * Provides star-based rating with hover preview and click selection.
     * @param {HTMLElement} element The main DOM element for the rating component.
     * @returns {object} An object with a destroy method for cleanup.
     */
    init(element) {
        const starCount = parseInt(element.getAttribute('data-count') || '5', 10);
        const isReadonly = element.getAttribute('data-readonly') !== null;

        // Create star buttons
        for (let i = 1; i <= starCount; i++) {
            const button = document.createElement('button');
            button.setAttribute('aria-label', `Rate ${i} star${i !== 1 ? 's' : ''}`);
            button.setAttribute('role', 'radio');
            button.setAttribute('aria-checked', 'false');
            button.setAttribute('data-value', i);
            button.className = 'star';
            button.textContent = '★';
            button.type = 'button';

            if (isReadonly) {
                button.disabled = true;
            }

            element.appendChild(button);
        }

        const stars = element.querySelectorAll('.star');
        let currentRating = 0;

        const setRating = (value) => {
            currentRating = value;
            stars.forEach((star, index) => {
                if (index < value) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
                star.setAttribute('aria-checked', String(index + 1 === value));
            });
            element.setAttribute('aria-valuenow', value);

            // Dispatch custom event for external listeners
            element.dispatchEvent(new CustomEvent('rating-changed', {
                detail: { rating: value }
            }));
        };

        const resetRating = () => {
            stars.forEach(star => star.classList.remove('active', 'hover'));
        };

        const hoverHandler = (e) => {
            if (!isReadonly && e.target.classList.contains('star')) {
                resetRating();
                const value = parseInt(e.target.getAttribute('data-value'), 10);
                stars.forEach((star, index) => {
                    if (index < value) {
                        star.classList.add('hover');
                    }
                });
            }
        };

        const clickHandler = (e) => {
            if (!isReadonly && e.target.classList.contains('star')) {
                const value = parseInt(e.target.getAttribute('data-value'), 10);
                setRating(value);
            }
        };

        const leaveHandler = () => {
            resetRating();
            if (currentRating > 0) {
                stars.forEach((star, index) => {
                    if (index < currentRating) {
                        star.classList.add('active');
                    }
                });
            }
        };

        const keydownHandler = (e) => {
            if (isReadonly) return;

            const value = parseInt(e.target.getAttribute('data-value'), 10);
            let newValue = value;

            if ((e.key === 'Enter' || e.key === ' ') && value >= 1) {
                e.preventDefault();
                setRating(value);
                return;
            }

            if (e.key === 'ArrowRight' && value < starCount) {
                newValue = value + 1;
            } else if (e.key === 'ArrowLeft' && value > 1) {
                newValue = value - 1;
            } else {
                return;
            }

            e.preventDefault();
            const newStar = element.querySelector(`[data-value="${newValue}"]`);
            if (newStar) {
                newStar.focus();
                setRating(newValue);
            }
        };

        // Set initial ARIA attributes
        element.setAttribute('role', 'radiogroup');
        element.setAttribute('aria-label', 'Rating');
        element.setAttribute('aria-valuenow', '0');
        element.setAttribute('aria-valuemin', '1');
        element.setAttribute('aria-valuemax', starCount);

        // Event listeners
        element.addEventListener('mouseover', hoverHandler);
        element.addEventListener('mouseleave', leaveHandler);
        element.addEventListener('click', clickHandler);
        element.addEventListener('keydown', keydownHandler);

        return {
            /**
             * Cleans up the rating component by removing event listeners.
             */
            destroy() {
                element.removeEventListener('mouseover', hoverHandler);
                element.removeEventListener('mouseleave', leaveHandler);
                element.removeEventListener('click', clickHandler);
                element.removeEventListener('keydown', keydownHandler);
            },

            /**
             * Get current rating value
             */
            getRating() {
                return currentRating;
            },

            /**
             * Set rating programmatically
             */
            setRating(value) {
                if (value >= 1 && value <= starCount) {
                    setRating(value);
                }
            }
        };
    }
};

