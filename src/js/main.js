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


