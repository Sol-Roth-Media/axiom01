class Carousel {
    constructor(element) {
        this.element = element;
        this.items = this.element.querySelectorAll('.carousel-item');
        this.prev = this.element.querySelector('.carousel-control-prev');
        this.next = this.element.querySelector('.carousel-control-next');
        this.indicators = this.element.querySelectorAll('.carousel-indicators button');
        this.currentIndex = 0;

        this.init();
    }

    init() {
        if (this.prev) {
            this.prev.addEventListener('click', () => this.show(this.currentIndex - 1));
        }
        if (this.next) {
            this.next.addEventListener('click', () => this.show(this.currentIndex + 1));
        }
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.show(index));
        });

        this.show(this.currentIndex);
    }

    show(index) {
        if (index < 0) {
            index = this.items.length - 1;
        } else if (index >= this.items.length) {
            index = 0;
        }

        this.items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        this.currentIndex = index;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new Carousel(carousel);
    });
});