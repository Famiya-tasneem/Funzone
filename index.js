var image = document.querySelector(".home .backimg");
var imwidth = image.querySelector('img').offsetWidth;

image.computedStyleMap.left = imwidth + "px";

setTimeout(() => {
    image.style.left = '0px';
}, 1000);

document.querySelector(".home").classList.add("bg");

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetPage = this.getAttribute("data-target");
            window.location.href = targetPage;
        });
    });
});