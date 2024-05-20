var pcMedia = window.matchMedia("(min-width: 701px)");
var activeMobile = document.querySelector(".mobile");
var burger = document.querySelector("#burger");
var burgerInput = document.querySelectorAll("input");
var mobileMenu = document.querySelectorAll(".mobile-list");
var toggleMode = document.querySelector(".container");
var toggleModes = document.querySelector(".input");
var body = document.querySelector("body");
var list = document.querySelectorAll("li");
var nav = document.querySelector("nav");
var aTag = document.querySelectorAll("a");
var spanTag = document.querySelectorAll("span");

//FUNCTION FOR MEDUA QUERY CHANGES EVENT BREAKPOINT
function medias(pcMedia){
        activeMobile.classList.remove("active");
        burgerInput[1].checked = false;
        toggleMode.classList.remove("mobile-container-toggle-button");

}
pcMedia.addEventListener("change",
() => {
    medias(pcMedia);
});


//CLICK EVENT
function click(burger){
    activeMobile.classList.toggle("active");
    if(document.querySelector(".light")){
        activeMobile.style.backgroundColor = "var(--whtie)";
    }
    
};
//FUNCTION FOR BURGER CLICK EVENT
burger.addEventListener("click", () => {
    click(burger);
});
function bodyLightMode(toggleModes){
    body.classList.toggle("light");
}
function liLightMode(toggleModes){
    for(var listHeader = 0; listHeader <= list.length; listHeader++){
        list[listHeader].classList.toggle("li-lightMode");
        aTag[listHeader].classList.toggle("nav-a-li-lightMode");
    };
    
};

toggleModes.addEventListener("click",()=>{
    bodyLightMode(toggleModes);
    if(document.querySelector(".light")){
        nav.classList.toggle("nav-lightMode");
        liLightMode(toggleModes);
        
    }
    else{
        nav.classList.remove("nav-lightMode");
        activeMobile.style.backgroundColor = "var(--darkgreen)";
        for(var listHeader = 0; listHeader <= list.length; listHeader++){
            list[listHeader].classList.remove("li-lightMode");
            aTag[listHeader].classList.remove("nav-a-li-lightMode");
        };

        // LIST INORDER BUTTON OFF
        for(var i = 0; i <= list.length; i++){
            document.querySelectorAll("li")[i].style.animationName = "listOff";
            document.querySelectorAll("li")[i].style.color = "var(--whtie)";
            
        };
    }

});

//FUNCTION FOR NAVBAR SCROLL EVENT
window.addEventListener("scroll", () =>{

    document.querySelector("nav").classList.toggle("scroll",window.scrollY > 300);
    toggleMode.classList.toggle("mobile-container-toggle-button",window.scrollY > 300)
    document.querySelector(".logo").classList.toggle("logoScroll",window.scrollY > 300);
    document.querySelector(".pop").classList.toggle("active",window.scrollY > 600);

});

//FUNCTION FOR MOBILE MENU CLICK EVENT
for(var menuCount =0; menuCount <= mobileMenu.length; menuCount++){

    mobileMenu[menuCount].addEventListener("click", ()=>{

        activeMobile.classList.toggle("active");
        burgerInput[1].checked = false;
        

});
};

