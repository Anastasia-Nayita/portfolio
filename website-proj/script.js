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

var popup = $("#popup");
var container = $("#container");
var closePop = $("#closePop");

$(window).on("load", function () {
    console.log("container.eq(0):", container.eq(0));
    container.eq(0).toggle().delay(1400).fadeIn(500);
    popup.eq(0).toggle().delay(1000).fadeIn(500);
});

closePop.on("click", function fn(e) {
    container.eq(0).addClass("disappear");
    popup.eq(0).addClass("disappear");
});
