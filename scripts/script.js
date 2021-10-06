// JavaScript Document

// de function voor de interactie
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    // activeert de nav-active wanneer er geklikt wordt
    burger.addEventListener("click",()=> {
        // toggle Nav
            nav.classList.toggle ("nav-active");

        // animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // menu animation toggle
        burger.classList.toggle("toggle");

    });
    
}
// voort de functie uit
navSlide();