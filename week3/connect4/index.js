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

    /// same as below  console.log(__dirname + "/projects/connect4/style.css");

    const stream = fs.createReadStream(
        __dirname + "/projects/connect4/style.css"
    );

    stream.pipe(res);

    stream.on("error: ", (err) => {
        console.log(err);
        res.statusCode = 500;
        res.end();
    });


    
}).listen(8080, () => console.log("protfolio server is runnung...."));
