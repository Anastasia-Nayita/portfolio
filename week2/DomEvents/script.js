var button = document.getElementById("first-button");
var input = document.querySelector("input");
var newDiv = document.getElementsByClassName("new-div")[0];

var newbackground = document.querySelector("body");

button.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("button was clicked");
    newbackground.style.backgroundColor = "grey";
});

document.addEventListener("keydown", function (event) {
    console.log("key was pressed");
    console.log("event", event);
    if (event.keyCode === 80) {
        document.body.style.backgroundColor = "coral";
        console.log("P was pressed");
    }
});

input.addEventListener("input", function (event) {
    console.log("input is being add");
    event.target.value = "Hey hey";
});

newDiv.addEventListener("click", function () {
    newDiv.style.backgroundColor = "gold";
});
