const carousel = document.querySelector(".hero-section");
const slides = document.querySelectorAll(".image-box");

let currentSlide = 0;
let isSliding = false;

function showSlide(index) {
    if (isSliding) return;

    currentSlide = index;
    isSliding = true;

    const start = carousel.scrollLeft;
    const target = currentSlide * carousel.clientWidth;

    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const ease = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        carousel.scrollLeft =
            start + (target - start) * ease;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            isSliding = false;

            // When clone of first image is reached
            if (currentSlide === slides.length - 1) {
                setTimeout(() => {
                    carousel.style.scrollBehavior = "auto";
                    carousel.scrollLeft = 0;
                    currentSlide = 0;

                    // Restore smooth behavior
                    setTimeout(() => {
                        carousel.style.scrollBehavior = "smooth";
                    }, 50);
                }, 100);
            }
        }
    }

    requestAnimationFrame(animate);
}

function nextSlide() {
    if (isSliding) return;

    currentSlide++;
    showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);