// burger menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".header__nav");

mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){ 
        mainMenu.classList.add("active-menu")
    } else{ 
        mainMenu.classList.remove("active-menu")
    }
});

$(".nav-mobile-menu").click(function () {
    $('body').toggleClass("overflow-hidden");
});

$(document).ready(function () {
    $(".select2").select2();
  });