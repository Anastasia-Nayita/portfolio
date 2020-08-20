function sayHello() {
    console.log("fun.js says Hello!");
}

// console.log("module.exports before:", module.exports);
module.exports.sayHello = sayHello;
module.exports.myNumber = 54;

// console.log("module.exports after:", module.exports);
