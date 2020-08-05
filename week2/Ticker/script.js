(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");

    function gogo() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        myReq = requestAnimationFrame(gogo);
    }
    gogo();
})();

(function () {
    var headlines = document.getElementById("headlines-bottom");
    var right = headlines.offsetLeft + headlines.offsetWidth;
    var links = document.getElementsByTagName("a");

    function ogog() {
        right--;
        if (right <= -links[0].offsetWidth) {
            right += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.right = right + "px";
        requestAnimationFrame(ogog);
    }
    ogog();
})();

// var headlines = document.getElementById("headlines");
// var links = document.getElementsByTagName("a");
// for (var i = 0; i <= headlines.length; i++) {
//     links[i].addEventListener("mouseenter", function (event) {
//         cancelAnimationFrame(myReq);
//     });
//     links[i].addEventListener("mouseleave", function (event) {
//         myReq = requestAnimationFrame(gogo);
//     });
// }
