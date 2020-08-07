(function () {
    var kitties = document.getElementsByTagName("img");
    var dots = document.getElementsByClassName(".dots-container .dot");
    console.log("DOTS", dots);
    var timer;
    var isTransitioning = false;
    //

    var i = 0;

    function moveKitties(index) {
        isTransitioning = true;
        //console.log("index:", index);
        kitties[i].classList.remove("onscreen");
        kitties[i].classList.add("offscreen-left");
        i++;
        if (i == 4) {
            i = 0;
        }
        kitties[i].classList.add("onscreen");
        timer = setTimeout(moveKitties, 3000);
    }
    timer = setTimeout(moveKitties, 3000);
    document.addEventListener("transitionend", function (event) {
        if (event.target.classList.contains("offscreen-left")) {
            isTransitioning = false;
            event.target.classList.remove("offscreen-left");
            // console.log("Transition ended");
        }
    });

    for (var j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", clickHandler(j));
    }

    function clickHandler(dotIndex) {
        ///run whenever dot is clicked
        console.log("dot was clicked!");
        console.log("index:", dotIndex);
        return function () {
            if (isTransitioning === true) {
                //do nothing
                return;
            }
            //     console.log("dotIndex", dotIndex);
            clearTimeout(timer);
            moveKitties(dotIndex);
        };
    }
})();
