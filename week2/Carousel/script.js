(function () {
    var kitties = document.getElementsByTagName("img");
    // other option : document.querySelectorAll('.kitties-container img')
    var i = 0;
    // moveKitties();
    // setTimeout(moveKitties, 3000);
    // setTimeout(moveKitties, 6000);
    function moveKitties() {
        console.log("ha ha");
        kitties[i].classList.remove("onscreen");
        kitties[i].classList.add("offscreen-left");
        i++;
        if (i == 4) {
            i = 0;
        }
        kitties[i].classList.add("onscreen");
        setTimeout(moveKitties, 3000);
    }
    setTimeout(moveKitties, 3000);
    document.addEventListener("transitionend", function (event) {
        // setTimeout(moveKitties, 3000);
        // kitties[i] = event.target;
        // if (kitties[i].offscreen-left = true)
        if (event.target.classList.contains("offscreen-left")) {
            event.target.classList.remove("offscreen-left");
            console.log("Transition ended");
        }
    });

    // moveKitties();

    // e.object
})();

// function moveKitties() {
//         // this removes the current kitty from the screen
//         kitties[0].classList.remove("onscreen");
//         kitties[0].classList.add("offscreen-left");

//         // this puts the next kitty in the queue onscreen
//         kitties[1].classList.add("onscreen");
//     }

//     setTimeout(moveKitties, 3000);

//     // for removing the offscreen-left class...
//     document.addEventListener('transitionend', function(e) {
//         // "transitionend" will fire (run) whenever a CSS transition ends
//         /*
//             problem: there are TWO transitions that happens in this project:
//                 1. default -> onscreen
//                     a. if this transition is the one that just ended - do nothing!
//                 2. onscreen -> offscreen-left
//                     a. if this transition is the one that just ended - remove the "offscreen-left" class from the kitty that has it!
//                 the second transition is the one we care about!
//             solution: we have to somehow, in this event listener, detect which transition just ended.
//             hint: look at the event (e) object
//         */
