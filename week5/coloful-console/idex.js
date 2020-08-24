const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");

console.log(chalk.cyan("this is the colour cyan"));
console.log(chalk.magenta("this is the colour magenta"));

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in the request: ", err));
    res.on("error", (err) => console.log("err in the response: ", err));

    if (req.method === "GET") {
        res.write(`
            <!doctype html>
            <html>
            <title>Colors</title>
                <form method="POST">
                    <input type="text" name="first" placeholder="First Name" autocomplete="off">
                    <select name="color">
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="magenta">magenta</option>
                        <option value="cyan">cyan</option>
                    </select>
                    <button type="submit">Go</button>
                </form>
                <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            </html>
        `);
        res.end();
    }

    if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            let parsedBody = querystring.parse(body);
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.write(`
                <p style="color:${parsedBody.color};">Hello ${parsedBody.first}!!!</p>
            `);
            res.end();
            const chosenColor = parsedBody.color;
            console.log(
                chalk.chosenColor(parsedBody.first) + "just clicked submit"
            );
        });
    }
});

server.listen(8080, () => console.log("server listening"));
