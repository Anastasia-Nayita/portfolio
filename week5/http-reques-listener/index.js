const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in req: ", err));
    response.on("error", (err) => console.log("err in res: ", err));

    const addedData =
        new Date() +
        "\t" +
        request.method +
        "\t" +
        request.url +
        "\t" +
        request.headers["user-agent"] +
        "\n";

    fs.appendFile("requests.txt", addedData, (err) => {
        if (err) {
            console.log("error in appendFile: ", err);
        }
    });

    console.log("request url:", request.url);
    console.log("request method: ", request.method);
    console.log("request headers: ", request.headers);

    //header: content-type  -  tels the browser what type of file we're sending over
    if (request.method === "GET") {
        if (request.url === "/secret-page") {
            //gonna redirect
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end();
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;

            response.write(`
            <!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!</p>
            </html>`);
            response.end();
        }
    } else if (request.method === "PUT") {
        response.statusCode = 405;
        // response.end(`  <h1> this is PUT reques</h1>`);
    } else if (request.method === "POST") {
        console.log("This is POST request");

        let body = "";
        //fires when data gets send as part of request
        request.on("data", (chunk) => {
            body += chunk;
        });

        //will fire after all data came in
        request.on("end", () => {
            console.log("body : ", body);

            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end(`<h1>POST happend</h1>`);
        });
    } else if (request.method === "HEAD") {
        response.statusCode = 200;
        console.log("This is HEAD request");
    } else {
        response.statusCode = 405;
    }
});

server.listen(8080, () => console.log("server is listenning..."));
