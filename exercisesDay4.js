//1
function each(objOrArr, callback) {
    if (objOrArr.isArray) {
        //array
        for (var i = 0; i <= objOrArr.length - 1; i++) {
            callback(objOrArr[i], i);
        }
    } //object
    else
        for (var prop in objOrArr) {
            callback(objOrArr[prop], prop);
        }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

//2

function likeReverse(a) {
    var b = [];
    for (var i = a.length - 1; i >= 0; i--) {
        b.push(a[i]);
    }
    return a;
    return b;
    //console.log(a);
    //console.log(b);
}
likeReverse([1, 2, 3, 4]);

//3

function getLessThanZero(alle) {
    var reallyLessThanZero = [];
    for (var i = 0; i <= alle.length; i++) {
        if (alle[i] < 0) {
            reallyLessThanZero.push(alle[i]);
        }
    }
    return reallyLessThanZero;
    //console.log(reallyLessThanZero);
}

getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]
