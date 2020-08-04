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
        requestAnimationFrame(gogo);
    }
    gogo();
})();

(function () {
    var headlines = document.getElementById("headlines-bottom");
    var right = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");

    function ogog() {
        right--;
        if (right <= -links.length.offsetWidth) {
            right += links.length.offsetWidth;
            headlines.appendChild(right[0]);
        }
        headlines.style.right = right + "px";
        requestAnimationFrame(ogog);
    }
    ogog();
})();

(function () {
    var headlines = document.getElementById("headlines");
    var links = document.getElementsByTagName("a");
    for (var i = 0; i <= headlines.length; i++) {
        a[i].addEventListener("mouseenter"),
            function (event) {
                headlines = event.target.style.color = "white";
            };
    }
});
