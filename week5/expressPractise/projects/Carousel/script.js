(function () {
    var kitties = document.getElementsByTagName("img");
    var dots = document.getElementsByClassName("dot");
    console.log("DOTS", dots);
    var timer;
    var isTransitioning = false;
    //

    var i = 0;

    function moveKitties(index) {
        isTransitioning = true;
        console.log("index:", index);
        kitties[i].classList.remove("onscreen");
        dots[i].classList.remove("on");
        kitties[i].classList.add("offscreen-left");
        i++;
        if (i == 4) {
            i = 0;
        }
        if (typeof index === "number") {
            isTransitioning = false;

            kitties[index].classList.add("onscreen");
            dots[index].classList.add("on");
            timer = setTimeout(moveKitties, 3000);
            // moveDots();
        }
        kitties[i].classList.add("onscreen");
        dots[i].classList.add("on");
    }

    timer = setTimeout(moveKitties, 3000);

    // function moveDots(dotIndex) {
    //     console.log("dotIndex", dotIndex);
    //     dots[j].classList.remove("on");
    //     j++;
    //     if (j == 4) {
    //         j = 0;
    //     }
    //     dots[j].classList.add("on");
    // }

    document.addEventListener("transitionend", function (event) {
        if (event.target.classList.contains("offscreen-left")) {
            isTransitioning = false;
            event.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 3000);
        }
    });

    for (var j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", clickHandler(j));
    }

    function clickHandler(dotIndex) {
        ///run whenever dot is clicked

        return function () {
            if (isTransitioning === true) {
                //  do nothing
                return;
            }
            console.log("dotIndex", dotIndex);

            clearTimeout(timer);
            moveKitties(dotIndex);
        };
    }
})();
