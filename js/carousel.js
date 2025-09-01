let isDragging = false;
let startX;
let scrollLeft;
let velocity = 0;
let rafId;

const carousel = document.querySelector('.carousel');
document.querySelectorAll('.nav-pages').forEach(navPages => {
    navPages.addEventListener('mousemove', (e) => {
        const rect = navPages.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        if (mouseX < rect.width * 0.2) {
            navPages.scrollBy({ left: -30, behavior: 'auto' });
        } else if (mouseX > rect.width * 0.8) {
            navPages.scrollBy({ left: 30, behavior: 'auto' });
        }
    });
});
// Drag-based scrolling with momentum
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    cancelMomentumTracking(); // Stop any ongoing momentum
});

carousel.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        carousel.classList.remove('active');
        startMomentumTracking(); // Start momentum scrolling
    }
});

carousel.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        carousel.classList.remove('active');
        startMomentumTracking(); // Start momentum scrolling
    }
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust multiplier for smoother scrolling
    carousel.scrollLeft = scrollLeft - walk;
    velocity = walk; // Track velocity for momentum
});

// Momentum scrolling
function startMomentumTracking() {
    cancelMomentumTracking();
    rafId = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
    cancelAnimationFrame(rafId);
}

function momentumLoop() {
    carousel.scrollLeft -= velocity;
    velocity *= 0.95; // Reduce velocity by 5% each frame
    if (Math.abs(velocity) > 0.5) {
        rafId = requestAnimationFrame(momentumLoop);
    }
}

// Hover-based scrolling for navigation menu
// navPages.addEventListener('mousemove', (e) => {
//     const rect = navPages.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;

//     if (mouseX < rect.width * 0.2) {
//         navPages.scrollBy({ left: -30, behavior: 'auto' }); // Slower, smoother scroll
//     } else if (mouseX > rect.width * 0.8) {
//         navPages.scrollBy({ left: 30, behavior: 'auto' }); // Slower, smoother scroll
//     }
// });

document.querySelectorAll('.nav-pages').forEach(navPages => {
    navPages.addEventListener('mousemove', (e) => {
        const rect = navPages.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        if (mouseX < rect.width * 0.2) {
            navPages.scrollBy({ left: -30, behavior: 'auto' });
        } else if (mouseX > rect.width * 0.8) {
            navPages.scrollBy({ left: 30, behavior: 'auto' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('Articulos-Container');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');

    // Amount to scroll: one container width, or adjust as needed
    const scrollAmount = carousel.offsetWidth * 0.5;

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}); 






// CAROUSEL DE IMAGENES DE FEATS


document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    carousel.querySelector('.carousel-arrow.left').onclick = () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    };

    carousel.querySelector('.carousel-arrow.right').onclick = () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    };

    updateCarousel();
});