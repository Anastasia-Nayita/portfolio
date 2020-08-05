function changeColor(event) {
    var box = document.getElementById("box");
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box = event.target;
    var newColor = "#" + randomColor;
    box.style.backgroundColor = newColor;
    console.log(newColor);
}
document.addEventListener("click", changeColor);

function searchForSame() {
    var box = document.getElementById("box");
    for (var i = 0; i < box.length; i++) {
        if (
            box[i].style.backgroundColor == box[i + 1].style.backgroundColor &&
            box[i].style.backgroundColor == box[i + 2].style.backgroundColor
        ) {
            console.log("👑wow");
        } else if (
            box[i].style.backgroundColor == box[i + 3].style.backgroundColor &&
            box[i].style.backgroundColor == box[i + 6].style.backgroundColor
        ) {
            console.log("🐥");
        }
    }
}

searchForSame();
