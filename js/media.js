// Axiom Media Component JS

class Media {
    constructor(element) {
        this.element = element;
        this.isGallery = this.element.classList.contains('gallery');

        if (this.isGallery) {
            this.initGallery();
        }
    }

    initGallery() {
        this.images = this.element.querySelectorAll('img');
        this.images.forEach(image => {
            image.addEventListener('click', () => this.openLightbox(image));
        });
    }

    openLightbox(image) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.classList.add('open');

        const lightboxImage = document.createElement('img');
        lightboxImage.src = image.src;
        lightbox.appendChild(lightboxImage);

        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Media = {
    init: function() {
        const mediaElements = document.querySelectorAll('.gallery');
        mediaElements.forEach(element => {
            new Media(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.Media.init();
});