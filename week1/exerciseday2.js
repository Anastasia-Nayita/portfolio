//1

function logType(r) {
    if (Number.isNaN(r)) {
        console.log("not a number!");
    } else if (typeof r == "number") {
        console.log("number!");
    } else if (typeof r === "undefined") {
        console.log("undefined!");
    } else if (typeof r == "string") {
        console.log("string!");
    } else if (typeof r == "bigint") {
        console.log("bigint!");
    } else if (typeof r == "function") {
        console.log("function!");
    } else if (r === null) {
        console.log("null!");
    } else if (Array.isArray(r)) {
        console.log("array!");
    } else if (typeof r == "object") {
        console.log("oblect!");
    } else if (typeof r == "boolean") {
        console.log("boolean!");
    } else {
        console.log("I have no idea!");
    }
}
logType(NaN);
logType(3);
logType("chikipiki");
logType(9007199777777254740991n);
logType(null);
logType(5);
logType([1, 2, 3]);
logType(true);
logType(function () {});
logType({});

//2

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {};
for (var c in a) {
    b[a[c]] = c;
}
console.log(b);

//3

for (var g = 10; g != 0; g--) {
    console.log(g);
}
