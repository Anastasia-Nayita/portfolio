// console.log("this is a new node file...");
// console.log("__filename", __filename);
// console.log("process.argv", process.argv);
// console.log("process.argv[2]", process.argv[2]);
// let myStr = process.argv[2];

// let myStrUpperCaps = myStr.toUpperCase();
// console.log("myStrUpperCaps", myStrUpperCaps);
// console.log("module", module);

// sayHello();

// const importedstuff = require("./fun.js");

// const { sayHello, myNumber } = require("./fun.js");

// // console.log("importedstuff : ", importedstuff);
// // importedstuff.sayHello();

// sayHello();
// console.log("myNumber", myNumber);

// const url = require("url");
// const queryString = require("queryString");

// console.log("url: ", url);
// console.log("queryString: ", queryString);
// console.log(url.parse("http://nodejs.org/api/url.html?q=whaat"));
// console.log(queryString.parse("q=whaat"));

// const chalk = require("chalk");

// console.log(chalk.magenta("wanna be magenta"));
// console.log(chalk.bgMagenta("wanna ☁️be magenta background"));

//////   2 ways to deal with acynchronuous code //////
////  Event Emmiters  ////

// process.on("beforeExit", function () {
//     console.log("just about to exit program process");
// });

// console.log("this console is after the event");

/// if it's custom event///
// process.on("funckyChicken", function () {
//     console.log("FUNCKY CHICKEN!!");
// });

// process.emit("funckyChicken");

////////  Callbacks  /////////

function getUser(callback) {
    console.log("callback=", callback);

    setTimeout(function () {
        callback({
            name: "Bear",
            age: "5",
        });
    }, 2000);
}
getUser(function (userData) {
    console.log("hello", userData);
});

// const myUserData = getUser();
// console.log("myUserData", myUserData);
