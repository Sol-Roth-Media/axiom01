(function (Drupal, once) {
  function showSlide(slides, indicators, index) {
    slides.forEach(function (slide, slideIndex) {
      var active = slideIndex === index;
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    indicators.forEach(function (indicator, indicatorIndex) {
      indicator.setAttribute('aria-current', indicatorIndex === index ? 'true' : 'false');
    });
  }

  Drupal.behaviors.axiom01CarouselBlock = {
    attach: function attach(context) {
      once('axiom01-carousel-block', '[data-axiom-carousel]', context).forEach(function (carousel) {
        var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-axiom-carousel-slide]'));
        if (!slides.length) {
          return;
        }

        var track = carousel.querySelector('[data-axiom-carousel-track]');
        var prevButton = carousel.querySelector('[data-axiom-carousel-prev]');
        var nextButton = carousel.querySelector('[data-axiom-carousel-next]');
        var indicators = Array.prototype.slice.call(carousel.querySelectorAll('[data-axiom-carousel-indicator]'));
        var currentIndex = 0;

        var setIndex = function setIndex(nextIndex) {
          currentIndex = (nextIndex + slides.length) % slides.length;
          showSlide(slides, indicators, currentIndex);
        };

        if (prevButton) {
          prevButton.addEventListener('click', function () {
            setIndex(currentIndex - 1);
          });
        }

        if (nextButton) {
          nextButton.addEventListener('click', function () {
            setIndex(currentIndex + 1);
          });
        }

        indicators.forEach(function (indicator) {
          indicator.addEventListener('click', function () {
            var target = Number(indicator.getAttribute('data-axiom-carousel-indicator'));
            if (!Number.isNaN(target)) {
              setIndex(target);
            }
          });
        });

        if (track) {
          track.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              setIndex(currentIndex - 1);
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              setIndex(currentIndex + 1);
            }
          });
        }

        var autoplay = carousel.getAttribute('data-autoplay') === 'true';
        var interval = Number(carousel.getAttribute('data-interval'));
        var timerId = null;

        if (autoplay) {
          timerId = window.setInterval(function () {
            setIndex(currentIndex + 1);
          }, Number.isFinite(interval) && interval > 0 ? interval : 5000);

          carousel.addEventListener('mouseenter', function () {
            if (timerId !== null) {
              window.clearInterval(timerId);
              timerId = null;
            }
          });

          carousel.addEventListener('mouseleave', function () {
            if (timerId === null) {
              timerId = window.setInterval(function () {
                setIndex(currentIndex + 1);
              }, Number.isFinite(interval) && interval > 0 ? interval : 5000);
            }
          });
        }

        showSlide(slides, indicators, currentIndex);
      });
    }
  };
})(Drupal, once);
