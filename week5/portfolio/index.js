const http = require("http");
const fs = require("fs");
const path = require("path");

const { projectList } = require("./part2.js");

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in req: ", err));
    res.on("error", (err) => console.log("err in res: ", err));
    // handle errors on your request and response objects just like we did yesterday!

    // handles anything that's not a GET request
    if (req.method != "GET") {
        res.statusCode = 405; // method not allowed
        return res.end();
    }

    //console.log("req.url: ", req.url);

    // gives us the full path of where the user is trying to go to
    const filePath = __dirname + "/projects" + req.url;

    // this protects users for directory traversal attacks!
    // if user is trying to go ANYWHERE aside from our projects folder - we give them a 403
    if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
        res.statusCode = 403; // forbidden
        console.log("INTRUDER ALERT");
        return res.end();
    }

    // if url is a directory, serve the index.html file in there
    // otherwise, serve the file being requested
    fs.stat(filePath, (err, stats) => {
        // this err will run if what user is requesting doesn't exist
        if (err) {
            console.log(err);
            res.statusCode = 404; // not found
            return res.end();
        }

        if (stats.isFile()) {
            let dynamicValue;
            if (path.extname(filePath) === ".html") {
                dynamicValue = "text/html";
            }
            if (path.extname(filePath) === ".css") {
                dynamicValue = "text/css";
            }
            if (path.extname(filePath) === ".js") {
                dynamicValue = "text/javascript";
            }
            if (path.extname(filePath) === ".gif") {
                dynamicValue = "image/gif";
            }
            if (path.extname(filePath) === ".jpg") {
                dynamicValue = "image/jpg";
            }
            if (path.extname(filePath) === ".png") {
                dynamicValue = "image/png";
            }
            if (path.extname(filePath) === ".svg") {
                dynamicValue = "image/svg+xml";
            }

            res.setHeader("Content-Type", dynamicValue);
            let readstream = fs.createReadStream(filePath);
            readstream.on("error", (err) => {
                console.log("error in readStream", err);
                res.statusCode = "404";
                res.end();
            });
            readstream.pipe(res);
        } else {
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log(err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                res.statusCode = 302;
                res.setHeader("Location", req.url + "/");
                res.end();
            }
            if (req.url === "/") {
                res.setHeader("content-type", "text/html");
                res.statusCode = 200;
                res.end(projectList());
            }
        }
    });
}).listen(8080, () => console.log("portfolio server is running..."));
