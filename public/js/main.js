// NavBar change color management
let navBar = document.querySelector("nav");
let logoBar = document.querySelector(".navLogo img");
let aboutSection = document.querySelector("#About");

window.addEventListener("scroll",()=>{
    if(aboutSection.getBoundingClientRect().top <= 0){
        navBar.classList.remove("bg-transparent","navbar-light");
        navBar.classList.add("bg-dark","navbar-dark","text-light");
        logoBar.style.filter ="invert(1)"
    }else{}
})

// Night mode
let nightMode = document.querySelector(".fa-moon");
let homeSection = document.querySelector("#Home");
let sectionAll = document.querySelectorAll("section");
let beigeSection = document.querySelectorAll(".beige")

nightMode.addEventListener("click",()=>{
    homeSection.classList.add("night"); //adding a filter on home background-image
    homeSection.style.backgroundImage = "url('./public/img/collect/one-page-slider-dark.png')";
    document.querySelector("body").classList.add("night");

    sectionAll.forEach(element => {
        element.style.backgroundColor = "black"
    });
    beigeSection.forEach(element => {
        element.style.backgroundColor = "#1e1e1e"
    });
})