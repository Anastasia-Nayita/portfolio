var express = require("express");
var app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser()); // has to go first (before static)

app.use((req, res, next) => {
    if (!req.cookies.authenticated && req.url !== "/cookie") {
        res.cookie("path", req.url);
        res.redirect("/cookie");
    } else {
        next();
    }
});

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if ((req.path = __dirname + "/projects/connect4")) {
        if (!creds || creds.name != "123" || creds.pass != "123") {
            res.setHeader(
                "WWW-Authenticate",
                'Basic realm="Enter your credentials to see this stuff."'
            );
            res.sendStatus(401);
        } else {
            next();
        }
    }
};
app.use("/connect4", auth);

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.redirect("/panes");
});

app.get("/cookie", (req, res) => {
    console.log("req.cookies : ", req.cookies);
    console.log("res.cookies : ", res.cookies);
    // console.log("req.cookie path : ", req.cookie("path"));
    res.send(`<h1> 🍪 🍪 🍪 🍪 🍪 🍪 </h1>
    <h2>To use this website you must accept cookies</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <div>
                <input type="checkbox" name="accept"><span>Accept</span>
            </div>
            <button> submit </submit>
        </form>`);
});

app.post("/cookie", (req, res) => {
    const { accept } = req.body;
    if (accept) {
        res.cookie("authenticated", true);
        res.redirect(req.cookies.path); //read cookie and take to original loc they tryid to go
    } else {
        res.send(`
            <h1>Think again about accepting cookies..</h1>
        `);
    }
});

app.get("/projects", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        res.send(`
            <h1>⚰️ ✋🏻 TOP SECRET POJECTS ⛔️ 🤐</h1>
        `);
    } else {
        res.redirect("/cookie");
    }
});

// const pathToProj = __dirname + "/projects";
// console.log("pathToProj = ", pathToProj);

app.listen(8080, () => console.log("server is listenning..."));
