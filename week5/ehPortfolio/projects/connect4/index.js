const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    /////handle potential err

    if (req.method != "GET") {
        res.statusCode = 405;
        return res.end;
    }
    //////readstream - when we read a file - allows node to read data
    //////writestream - send response - allows node to send/write data
    ///////piping - allows us to send

    console.log(__dirname);
}).listen(8080, () => console.log("protfolio server is runnung...."));
