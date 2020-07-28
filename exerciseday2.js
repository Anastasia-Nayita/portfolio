//1

function LogType(r) {
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
    } else if (Boolean(r)) {
        console.log("boolean!");
    }
}
LogType(NaN);
LogType(3);
LogType();
LogType("chikipiki");
LogType(9007199777777254740991n);
LogType(null);
LogType(5);
LogType([1, 2, 3]);
LogType(true);
LogType(function () {});
LogType({});

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
