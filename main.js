let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slideButtons = document.querySelectorAll('.sbtn');

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    slideButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentSlide);
    });
    slides[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

// Auto-slide
let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}, 3000);

// Optional: Add manual control
slideButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(index);
    });
});

const hamburger = document.getElementsByClassName("hamburger");
const menu = document.querySelector("ul");
const res_search = document.querySelector(".search-bar");

function toggleRes_search() {
    if (res_search) res_search.classList.toggle("show-search");
}

function res_menu() {
    if (menu) menu.classList.toggle("hidden"); // use CSS .hidden class
}
