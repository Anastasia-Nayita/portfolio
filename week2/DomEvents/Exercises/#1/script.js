var box = document.getElementsByClassName("box")[0];

console.log(box[0]);
function moveBox(e) {
    var y, x;

    x = e.clientX;
    y = e.clientY;

    box.style.top = y - 50 + "px";
    box.style.left = x - 50 + "px";
}

document.addEventListener("mousemove", moveBox);
