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

           
            if (currentSlide === slides.length - 1) {
                setTimeout(() => {
                    carousel.style.scrollBehavior = "auto";
                    carousel.scrollLeft = 0;
                    currentSlide = 0;

      
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


setInterval(() => {
    nextSlide();
}, 3000);


const authOverlay = document.querySelector(".auth-overlay");
const authBox = document.querySelector(".auth-box");

const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");

const closeAuth = document.querySelector(".close-auth");

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const switchSignup = document.querySelector(".switch-signup");
const switchLogin = document.querySelector(".switch-login");

function openLogin() {

    authOverlay.style.visibility = "visible";

    gsap.to(authOverlay, {
        opacity: 1,
        duration: 0.3
    });

    gsap.fromTo(
        authBox,
        {
            opacity: 0,
            scale: 0.8,
            y: 40
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        }
    );
}

function openSignup() {

    loginForm.style.display = "none";
    signupForm.style.display = "block";

    authOverlay.style.visibility = "visible";

    gsap.to(authOverlay, {
        opacity: 1,
        duration: 0.3
    });

    gsap.fromTo(
        authBox,
        {
            opacity: 0,
            scale: 0.8,
            y: 40
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        }
    );
}

loginBtn.addEventListener("click", () => {

    loginForm.style.display = "block";
    signupForm.style.display = "none";

    openLogin();

});


signupBtn.addEventListener("click", () => {

    openSignup();

});

switchSignup.addEventListener("click", () => {

    gsap.to(authBox, {
        x: -30,
        opacity: 0,
        duration: 0.2,

        onComplete: () => {

            loginForm.style.display = "none";
            signupForm.style.display = "block";

            gsap.fromTo(
                authBox,
                {
                    x: 30,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.3
                }
            );

        }
    });

});


switchLogin.addEventListener("click", () => {

    gsap.to(authBox, {
        x: 30,
        opacity: 0,
        duration: 0.2,

        onComplete: () => {

            signupForm.style.display = "none";
            loginForm.style.display = "block";

            gsap.fromTo(
                authBox,
                {
                    x: -30,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.3
                }
            );

        }
    });

});

closeAuth.addEventListener("click", () => {

    gsap.to(authBox, {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.25
    });

    gsap.to(authOverlay, {
        opacity: 0,
        duration: 0.3,

        onComplete: () => {
            authOverlay.style.visibility = "hidden";
        }
    });

});