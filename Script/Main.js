import { imageData } from "./data.js";
gsap.registerPlugin(ScrollTrigger);

const imageContainer = document.querySelector(".Images-Show-Case");

showImages();

function showImages(category = "All") {

    let html = "";

    const filteredImages = category === "All"
        ? imageData
        : imageData.filter(image => image.category.includes(category));

    filteredImages.forEach((image) => {

        html += `
            <div class="image-card" data-product-id="${image.id}">

                <img src="${image.src}" alt="Image">

                <div class="image-actions">
                    <button title="Like">
                        <i class="fa-regular fa-heart"></i>
                    </button>

                    <button title="Dislike">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>

                    <button title="Comment">
                        <i class="fa-regular fa-comment"></i>
                    </button>
                </div>

            </div>
        `;
    });

    imageContainer.innerHTML = html;

   gsap.from(".image-card", {
    opacity: 0,
    y: 80,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".Images-Show-Case",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
}

const filterButtons = document.querySelectorAll(".image-Option button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        gsap.fromTo(
            button,
            {
                scale: 0.9
            },
            {
                scale: 1,
                duration: 0.3,
                ease: "back.out(2)"
            }
        );

    });

}); 

document.querySelector(".All").addEventListener("click", () => {
    showImages("All");
});

document.querySelector(".Trending").addEventListener("click", () => {
    showImages("Trending");
});

document.querySelector(".Relatable").addEventListener("click", () => {
    showImages("Relatable");
});

document.querySelector(".Random").addEventListener("click", () => {
    showImages("Random");
});

document.querySelector(".Dark-Humor").addEventListener("click", () => {
    showImages("Dark-Humor");
});

