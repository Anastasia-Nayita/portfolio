const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const projects = require("./projects.json");

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        projects,
    });
});

app.get("/projects/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projects.find(({ name }) => name === project);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    res.render("description", {
        layout: "main",
        selectedProject,
        projects,
        helpers: {
            checkCurrent(text) {
                if (text === selectedProject.name) {
                    return text.toUpperCase();
                } else {
                    return text;
                }
            },
        },
    });
});

app.listen(8080, console.log("sever is listenning..."));
