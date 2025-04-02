// Select all gallery images
const images = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open Lightbox when image is clicked
images.forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// Close Lightbox when clicking the close button
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// Close Lightbox when clicking outside the image
lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
