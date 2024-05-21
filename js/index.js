var checked = document.querySelector("#burger");
var menu = document.querySelector(".mobile");
var burgerInput = document.querySelector("input");

checked.addEventListener("click",
() => {

    document.querySelector(".mobile").classList.toggle("active");

});

for(var count = 0; count <= 2; count++){
    document.querySelectorAll("li")[count].addEventListener("click", ()=>{

        menu.classList.toggle("active");
        burgerInput.checked = false;
    });
};

