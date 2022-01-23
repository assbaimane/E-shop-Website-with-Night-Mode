//------------------------------ HEADER ------------------------------ 

// NavBar change color management
let navBar = document.querySelector("nav");
let logoBar = document.querySelector(".navLogo img");
let aboutSection = document.querySelector("#About");

window.addEventListener("scroll", () => {
    if (aboutSection.getBoundingClientRect().top <= 0) {
        navBar.classList.remove("bg-transparent", "navbar-light");
        navBar.classList.add("bg-dark", "navbar-dark", "text-light");
        logoBar.style.filter = "invert(1)"
    } else { }
})

// Night mode
let nightMode = document.querySelector(".fa-moon");
let homeSection = document.querySelector("#Home");
let sectionAll = document.querySelectorAll("section");
let beigeSection = document.querySelectorAll(".beige")

nightMode.addEventListener("click", () => {
    homeSection.classList.add("night");
    homeSection.style.backgroundImage = "url('./public/img/collect/one-page-slider-dark.png')";
    document.querySelector("body").classList.add("night");

    sectionAll.forEach(element => {
        element.style.backgroundColor = "black"
    });
    beigeSection.forEach(element => {
        element.style.backgroundColor = "#1e1e1e"
    });
})

// Login Modal
let userButton = document.querySelector(".fa-user");
userButton.addEventListener("click", () => {
    userButton.dataBsToggle = "modal"
    userButton.dataBsTarget = "#exampleModal"
});


//-------------------------  SECTION SHOP ------------------------- 

import {Clothes} from "./class.js"

// Product creation
var productGrid = document.querySelector("#productGrid");
let clothes = [
    new Clothes("Textured Sweater","","$50.00","./public/img/fashion/fashion-recent-products-01-1-1.jpg","./public/img/fashion/fashion-recent-products-01-a-1-1.jpg"),
    new Clothes("Traveller Shirt","","$510.00","./public/img/fashion/fashion-recent-products-02-1-1.jpg","./public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg"),
    new Clothes("Crewneck Sweatshirt","","$20.00 - $50.00","./public/img/fashion/fashion-recent-products-01-b.jpg","./public/img/fashion/fashion-recent-products-03-a-1-1.jpg"),
    new Clothes("Skinny Trousers","$200.00","$160.00","./public/img/fashion/fashion-recent-products-04.jpg","./public/img/fashion/fashion-recent-products-04-a-1.jpg"),
    new Clothes("High Neck Sweater","$40.00","$35.00","./public/img/fashion/fashion-recent-products-05-1.jpg","./public/img/fashion/fashion-recent-products-05-a-1.jpg"),
    // Row 2
    new Clothes("Sleeve Sweater","$140.00","$120.00","./public/img/fashion/fashion-recent-products-06-1.jpg","./public/img/fashion/fashion-recent-products-06-a-1.jpg"),
    new Clothes("Pocket Sweatshirt","","$410.00","./public/img/fashion/fashion-recent-products-07-1.jpg","./public/img/fashion/fashion-recent-products-07-a-1.jpg"),
    new Clothes("Top With Pleated","","$20.00 - $50.00","./public/img/fashion/fashion-recent-products-08-1.jpg","./public/img/fashion/fashion-recent-products-08-a.jpg"),
    new Clothes("Cotton Sweater","$180.00","$155.00","./public/img/fashion/fashion-recent-products-01-d.jpg","./public/img/fashion/fashion-recent-products-09-a-1-1.jpg"),
    new Clothes("Texture Plain Regular","$85.00","$70.00","./public/img/fashion/fashion-recent-products-10-1.jpg","./public/img/fashion/fashion-recent-products-10-a-1.jpg")
];

clothes.forEach(element => {
    element.addItem();
});


// Show button favourites & cart
let clothesPic = document.querySelectorAll(".clothesPic");

clothesPic.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.nextElementSibling.hidden = false;
        element.parentElement.classList.remove("mb-4");
    })
    element.addEventListener("mouseout",()=>{
        element.nextElementSibling.hidden = true;
        element.parentElement.classList.add("mb-4");
    })
});


// Carousel on testimonials 
let carouselItem = document.querySelectorAll(".carouselItem");
let carousel = document.querySelector("#testimonialCarousel");
let previousTestimonial = document.querySelector("#previousTestimonial");
let nextTestimonial = document.querySelector("#nextTestimonial");

previousTestimonial.addEventListener("click",()=>{
    carousel.appendChild(carousel.children[0]);
});

nextTestimonial.addEventListener("click",()=>{
    carousel.insertBefore(carousel.children[carouselItem.length-1],carousel.children[0])
});