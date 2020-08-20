const url = require("url");
const querystring = require("querystring");
const arguments = process.argv[2];
console.log("url: ", url);
// console.log("queryString: ", queryString);
// console.log(url.parse("http://127.0.0.1:8080/test?a=100&b=200"));
//
function getData(callback) {}

// "http://127.0.0.1:8080/test?a=100&b=200"
// The protocol is http:
// The host is 127.0.0.1:8080
// The hostname is 127.0.0.1
// The port is 8080
// The pathname is /test
// The query is a=100&b=200
// The value of the a parameter is 100
// The value of the b parameter is 200
