const carousel = document.querySelector(".hero-section");
const slides = document.querySelectorAll(".image-box");

let currentSlide = 0;

function showSlide(index) {
    currentSlide = index;

    carousel.scrollTo({
        left: currentSlide * carousel.clientWidth,
        behavior: "smooth"
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}