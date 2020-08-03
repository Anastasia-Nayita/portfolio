(function () {
    var h = document.getElementById("headlines");
    var left = h.offsetLeft;
    var links = document.getElementsByTagName("a");

    function gogogo() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += first.offsetWidth;
            headlines.appendChild(first);
        }
        headlines.style.left = left + "px";
        requestAnimationFrame(gogogo);
    }
    gogogo();
})();
