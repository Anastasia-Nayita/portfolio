var burger = document.getElementById("menu");
var overlay = document.getElementsByClassName("overlay");
var nav = document.getElementsByClassName("side-nav");
//var disappear = document.getElementsByClassName("disappear");
var appear = document.getElementsByClassName("appear");

var xxx = document.getElementById("x");
// var sidelink = document.getElementsByClassName("side-nav-link");

burger.addEventListener("click", function () {
    overlay[0].classList.add("appear");
    nav[0].classList.add("appear");

    // sidelink[].classList.add("appear");
    // overlay[0].style.visibilyty = "visible";
    // nav[0].style.visibilyty = "visible";
});

// xxx[0].addEventListener("click", function () {
//     overlay[0].classList.remove("appear");
//     nav.classList.remove("appear");
// });
