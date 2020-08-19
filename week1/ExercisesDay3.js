//1
function sum(a) {
    var summy = 0;
    if (arguments.length == 1) {
        var summy = a;
        //return summy;
    } else {
        for (var i = 0; i < arguments.length; i++) {
            summy += arguments[i];
        }
        //return summy;
    }
}

sum(5);

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200);

///2

setTimeout(function () {
    //return "Goodbye!";
    setTimeout(function () {
        //return "Hello!";
    }, 1500);
}, 1500);

///3

var bigNumber = function (num) {
    if (Number.isNaN(num) && num <= 0) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        return bigNumber((num = num * 10));
    }
};
//console.log(bigNumber(6));
