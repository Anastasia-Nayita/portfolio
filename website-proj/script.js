var burger = document.getElementById("menu");
var overlay = document.getElementsByClassName("overlay");
var nav = document.getElementsByClassName("side-nav");
console.log(burger);
console.log(overlay);
console.log(nav);
//var disappear = document.getElementsByClassName("disappear");

var close = document.getElementById("close");
// var sidelink = document.getElementsByClassName("side-nav-link");

burger.addEventListener("click", function () {
    overlay[0].classList.remove("disappear");
    nav[0].classList.remove("disappear");

    // sidelink[].classList.add("appear");
    // overlay[0].style.visibilyty = "visible";
    // nav[0].style.visibilyty = "visible";
});

close.addEventListener("click", function () {
    overlay[0].classList.add("disappear");
    nav[0].classList.add("disappear");
});
