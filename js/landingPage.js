var pcMedia = window.matchMedia("(min-width: 701px)");
var activeMobile = document.querySelector(".mobile");
var burger = document.querySelector("#burger");
var burgerInput = document.querySelector("input");
var mobileMenu = document.querySelectorAll(".mobile a li");
//FUNCTION FOR MEDUA QUERY CHANGES EVENT
function medias(pcMedia){

        activeMobile.classList.remove("active");
        burgerInput.checked = false;
        
}

pcMedia.addEventListener("change",
() => {
    
    medias(pcMedia);

});

//FUNCTION FOR BURGER CLICK EVENT
burger.addEventListener("click", () => {

    activeMobile.classList.toggle("active");

});

//FUNCTION FOR NAVBAR SCROLL EVENT
window.addEventListener("scroll", () =>{

    document.querySelector("nav").classList.toggle("scroll",window.scrollY > 300);
    document.querySelector(".logo").classList.toggle("logoScroll",window.scrollY > 300);
    document.querySelector(".pop").classList.toggle("active",window.scrollY > 600);


});

//FUNCTION FOR MOBILE MENU CLICK EVENT
for(var menuCount =0; menuCount <= mobileMenu.length; menuCount++){

    mobileMenu[menuCount].addEventListener("click", ()=>{

        activeMobile.classList.toggle("active");

        burgerInput.checked = false;

});
};

