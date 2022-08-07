const images = document.querySelectorAll("image");

for (const image of images) {
    image.addEventListener("click", () => {
        image.classList.add("active");
    });
}

const clearActiveSImages = () => {
    images.forEach(image => {
        image.classList.remove('active');
    })
}