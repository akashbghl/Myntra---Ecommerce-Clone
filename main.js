    let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slideButtons = document.querySelectorAll('.sbtn');

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    // Set active class for current slide button
    slideButtons.forEach((button, index) => {
        if (index == currentSlide) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    // Scroll to the selected slide
    slides[slideIndex].scrollIntoView({ behavior: "smooth" , block: "end", inline: "nearest"});
}

// Automatically slide

let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}, 3000); // Change slide every 3 seconds



hamburger = document.getElementsByClassName("hamburger");
menu= document.querySelector("ul")
res_search=document.querySelector(".search-bar");

function toggleRes_search(){
    res_search.classList.toggle("show-search");
}

function res_menu(){
    if(menu.style.display=="none"){
        menu.style.display="flex";
        menu.style.flexDirection="column";
    }
    else{
        menu.style.display="none";
    }
}