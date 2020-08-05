function changeColor(event) {
    var cube = document.getElementById("cube");
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cube = event.target;
    var newColor = "#" + randomColor;
    cube.style.backgroundColor = newColor;
    console.log(newColor);
}
document.addEventListener("click", changeColor);

function searchForSame() {
    var cube = document.getElementById("cube");
    for (var i = 0; i < cube.length; i++) {
        if (
            cube[i].style.backgroundColor ==
                cube[i + 1].style.backgroundColor &&
            cube[i].style.backgroundColor == cube[i + 2].style.backgroundColor
        ) {
            console.log("👑wow");
        } else if (
            cube[i].style.backgroundColor ==
                cube[i + 3].style.backgroundColor &&
            cube[i].style.backgroundColor == cube[i + 6].style.backgroundColor
        ) {
            console.log("🐥");
        }
    }
}

searchForSame();
