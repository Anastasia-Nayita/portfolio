(function () {
    // var headlines = document.getElementById("headlines");
    var headlines = $("#headlines");
    console.log(headlines);
    // var left = headlines.offsetLeft;
    var left = headlines.offset().left;
    // var links = document.getElementsByTagName("a");
    // var links = $("a");
    var myReq;

    function goTop() {
        // var links = $("a");
        left--;
        if (left <= -headlines.find("a").eq(0).outerWidth()) {
            left += headlines.find("a").eq(0).outerWidth();
            // headlines.appendChild(links[0]);
            headlines.append(headlines.find("a").eq(0));
        }
        // headlines.style.left = left + "px";
        headlines.css({ left: left + "px" });
        myReq = requestAnimationFrame(goTop);
    }
    goTop();
})();

(function () {
    // var headlines = document.getElementById("headlines-bottom");
    var headlines = $("#headlines-bottom");
    //var right = headlines.offsetLeft + headlines.offsetWidth;
    var right = headlines.offset().left + headlines.offset().width;
    //var links = document.getElementsByTagName("a");
    // var links = $("a");

    function goBottom() {
        right--;
        if (right <= -headlines.find("a").eq(0).outerWidth()) {
            right += headlines.find("a").eq(0).outerWidth();
            headlines.append(headlines.find("a").eq(0));
        }
        headlines.css({ right: right + "px" });
        requestAnimationFrame(goBottom);
    }
    goBottom();
})();
