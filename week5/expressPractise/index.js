var express = require("express");
var app = express();
const cookieParser = require("cookie-parser");

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(cookieParser()); // has to go first (before static)

app.use((req, res, next) => {
    ////// as general in the top-middle.
    // console.log("running middleware");
    //// if (req.path != "/cookie") {
    //     res.redirect("/cookie");
    // }
    if (!req.cookies.authenticated && req.path != "/cookie") {
        res.cookie("path", req.path);
        res.redirect("/cookie");
    } else {
        next();
    }
});

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.send("<h1>HOMEPAGE - Hello!</h1>");
});
app.get("/cookie", (req, res) => {
    console.log("req.cookies : ", req.cookies);
    res.send(`<h1>🍪 🍪 🍪 🍪</h1>
    <h2>To use this website you must accept cookies</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content:     space-between; width: 40%; height: 50%;">
            
            <div>
                <input type="checkbox" name="accept"><span>Accept</span>
            </div>
            <button> submit </submit>
        </form>`);
});

app.post("/cookie", (req, res) => {
    res.cookie("authenticated", true);
    const { accept } = req.body;
    if (accept) {
        res.redirect("/projects");
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
            <h2>  </h2>
        `);
    } else {
        res.redirect("/cookie");
    }
});

// app.get(__dirname, (req, res) => {
//     res.sendFile(req.path + "/index.html");
// });

app.listen(8080, () => console.log("server is listenning..."));
