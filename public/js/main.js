// NavBar change color management

let navBar = document.querySelector("nav");
let logoBar = document.querySelector(".navLogo img");
let section2Start = document.querySelector("#About");

window.addEventListener("scroll",()=>{
    if(section2Start.getBoundingClientRect().top == 0){
        navBar.classList.remove("bg-transparent","navbar-light");
        navBar.classList.add("bg-dark","navbar-dark","text-light");
        logoBar.style.filter = "invert(1)"
    }else{}
})