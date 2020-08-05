var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#719D8A";
ctx.lineWidth = 3;
//head
ctx.beginPath();

ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "beige";
ctx.fill();
//body
ctx.beginPath();

ctx.moveTo(300, 150);
ctx.lineTo(300, 150);
ctx.lineTo(300, 300);
ctx.stroke();

//hands
//left
ctx.beginPath();

ctx.moveTo(300, 200);
ctx.lineTo(300, 200);
ctx.lineTo(200, 150);
ctx.stroke();
//right
ctx.beginPath();

ctx.moveTo(300, 200);
ctx.lineTo(300, 200);
ctx.lineTo(400, 150);
ctx.stroke();

//legs
//left
ctx.beginPath();

ctx.moveTo(300, 300);
ctx.lineTo(300, 300);
ctx.lineTo(200, 450);
ctx.stroke();
//right
ctx.beginPath();

ctx.moveTo(300, 300);
ctx.lineTo(300, 300);
ctx.lineTo(400, 450);
ctx.stroke();

var canvasBig = document.getElementById("canvasBig");

var context = canvasBig.getContext("2d");
context.drawImage(canvas, 100, 100);

function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}

function moveIt(event) {
    // console.log("event:", event);
    if (event.keyCode === 38) {
        // up
        context.clearRect(0, 0, 800, 800);
        context.drawImage(canvas, 100, 100 - getRandomNumber());
    } else if (event.keyCode === 40) {
        //down
        context.clearRect(0, 0, 800, 800);
        context.drawImage(canvas, 100, 100 + getRandomNumber());
    } else if (event.keyCode === 39) {
        //right
        context.clearRect(0, 0, 800, 800);
        context.drawImage(canvas, 100 + getRandomNumber(), 100);
    } else if (event.keyCode === 37) {
        //left
        context.clearRect(0, 0, 800, 800);
        context.drawImage(canvas, 100 - getRandomNumber(), 100);
    }
}
document.addEventListener("keydown", moveIt);
