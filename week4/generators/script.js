/// 1 ///

// function* fn() {
//     for (var i = 1; i < 101; i++) {
//         if (i % 15 == 0) yield "fizzbuzz";
//         else if (i % 3 == 0) yield "fizz";
//         else if (i % 5 == 0) yield "buzz";
//         else console.log(i);
//     }
// }

// for (const i of fn()) {
//     console.log(i);
// }

/// 2 ///

function* fn(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield [...arr].reverse()[i];
    }
}

let arr1 = [1, 2, 3];
let vals = fn(arr1);

console.log(vals.next().value, vals.next().value, vals.next().value);

// for (var i of fn()) {
//     console.log(vals.next().value);
// }
