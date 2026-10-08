import { imageData } from "./data.js";

const imageContainer = document.querySelector(".Images-Show-Case");

showImages();

function showImages(category = "All") {

    let html = "";

    const filteredImages = category === "All"
        ? imageData
        : imageData.filter(image => image.category.includes(category));

    filteredImages.forEach((image) => {

        html += `
            <div class="image-card">

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
}

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

