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
