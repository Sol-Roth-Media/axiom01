// js/carousel.js
class AxiomCarousel {
    constructor(element) {
        this.element = element;
        this.items = this.element.querySelectorAll('.carousel-item');
        this.prevButton = this.element.querySelector('.carousel-control-prev');
        this.nextButton = this.element.querySelector('.carousel-control-next');
        this.indicators = this.element.querySelectorAll('.carousel-indicators button');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.prev());
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.next());
        }
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });
        this.show(this.currentIndex);
    }

    show(index) {
        this.items.forEach(item => item.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));

        this.items[index].classList.add('active');
        if (this.indicators[index]) {
            this.indicators[index].classList.add('active');
            this.indicators[index].setAttribute('aria-current', 'true');
        }
        this.currentIndex = index;
    }

    prev() {
        let newIndex = this.currentIndex - 1;
        if (newIndex < 0) {
            newIndex = this.items.length - 1;
        }
        this.show(newIndex);
    }

    next() {
        let newIndex = this.currentIndex + 1;
        if (newIndex >= this.items.length) {
            newIndex = 0;
        }
        this.show(newIndex);
    }

    goTo(index) {
        this.show(index);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new AxiomCarousel(carousel));
});

