const slide = document.querySelectorAll(".slide");

for (const image of slide) {
    image.addEventListener("click", () => {
        clearActiveSImages();
        image.classList.add("active");
    });
}

const clearActiveSImages = () => {
    slide.forEach(slide => {
        slide.classList.remove('active');
    });
}