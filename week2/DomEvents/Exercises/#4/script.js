function changeColor(event) {
    var box = document.getElementById("box");
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box = event.target;
    box.style.backgroundColor = "#" + randomColor;
}

document.addEventListener("click", changeColor);
