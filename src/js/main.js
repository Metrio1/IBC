import.meta.glob("../styles/**/*.scss", { eager: true });

const mobileOverlay = document.getElementById('mobileOverlay');

mobileOverlay.addEventListener('click', (e) => {
    const rect = mobileOverlay.getBoundingClientRect();
    const isClickOutside =
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top || e.clientY > rect.bottom;

    if (isClickOutside) {
        mobileOverlay.close();
    }
});

mobileOverlay.addEventListener('click', (event) => {
    if (event.target === mobileOverlay) {
        mobileOverlay.close();
    }
});

const swiper = new Swiper('.main-swiper', {
    loop: true,
    navigation: {
        nextEl: '[data-js-next]',
        prevEl: '[data-js-prev]',
    },
    on: {
        init(swiper) {
            updateHeroContent(swiper);
        },
        slideChange(swiper) {
            updateHeroContent(swiper);
        }
    }
});

function updateHeroContent(swiper) {
    const slide = swiper.slides[swiper.activeIndex];
    const title = slide.dataset.title;
    const desc = slide.dataset.desc;

    document.querySelector('[data-js-hero-title]').textContent = title || '';
    document.querySelector('[data-js-hero-description]').innerHTML = desc || '';
}

const objectsSwiper = new Swiper('.our-objects-swiper', {
    loop: true,
    pagination: {
        el: '[data-js-pagination]',
        clickable: true,
        bulletClass: 'pagination__button',
        bulletActiveClass: 'is-current',
        renderBullet(index, className) {
            return `
                <button class="${className}" type="button">
                    <span class="visually-hidden">Слайд ${index + 1}</span>
                </button>`;
        }
    }
});
