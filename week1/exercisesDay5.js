//1
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
var rec1 = new Rectangle(5, 6);
rec1.getArea();

function Square(num) {
    this.width = this.height = num;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
var square1 = new Square(3);
square1.getArea();
// console.log(square1.constructor);
// console.log(square1 instanceof Square, square1 instanceof Rectangle);

2;
function invertCase(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

invertCase("humble ARRRR!");
