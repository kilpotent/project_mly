const images = document.querySelectorAll(".portfolio-grid img");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        console.log("Clicked image:", img.src);

        const fullImg = img.dataset.full || img.src;

        modal.style.display = "block";
        modalImg.src = fullImg;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

function filterImages(category) {
    const images = document.querySelectorAll(".portfolio-grid img");

    images.forEach(img => {
        if (!img.dataset.category) {
            img.style.display = "none";
            return;
        }

        const categories = img.dataset.category.split(" ");

        if (category === "all" || categories.includes(category)) {
            img.style.display = "block";
            img.style.opacity = "1";
        } else {
            img.style.opacity = "0";
            setTimeout(() => img.style.display = "none", 200);
        }
    });
}

function goToPortfolio(category) {
    filterImages(category);

    document.getElementById("portfolio").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

