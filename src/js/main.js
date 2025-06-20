import.meta.glob("../styles/**/*.scss", { eager: true });

const mobileOverlay = document.getElementById('mobileOverlay');
const closeForm = mobileOverlay.querySelector('form');

closeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeSidebar();
});

document.querySelector('.header__burger-button')?.addEventListener('click', () => {
    mobileOverlay.hidden = false;
    requestAnimationFrame(() => {
        mobileOverlay.classList.add('mobile-overlay--visible');
        mobileOverlay.querySelector('.mobile-overlay__sidebar')
            .classList.add('mobile-overlay__sidebar--visible');
    });
});

function closeSidebar() {
    const sidebar = mobileOverlay.querySelector('.mobile-overlay__sidebar');
    sidebar.classList.remove('mobile-overlay__sidebar--visible');
    mobileOverlay.classList.remove('mobile-overlay--visible');
}

mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) {
        closeSidebar();
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
    spaceBetween: 30,
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
