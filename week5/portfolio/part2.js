module.exports.projectList = function () {
    const fs = require("fs");

    const folderPath = __dirname + "/projects";

    const readdir = fs.readdirSync(folderPath, { withFileTypes: true });
    let html = "";
    readdir.forEach((file) => {
        let name = file.name;
        //console.log("file.name aka name:", name);
        html += `<div><a href=' ${name}'><h2>${name}</h2></a></div>`;
        console.log(html);
    });
    return html;
};

// (err, with) => {
//     files.forEach((file) => {
//         if (err) {
//             console.log("err in files.forEach", err);
//         }

//         let html = "";
//         html += `<div><a href='${file}'><h2>${file}</h2></a></div>`;
//         return html;
//     });

//     console.log("files:", files);
// });

// res.setHeader("Content-Type", dynamicValue);
// let readstream = fs.createReadStream(filePath);
// readstream.on("error", (err) => {
//     console.log("error in readStream", err);
//     res.statusCode = "404";
//     res.end();
// });
// readstream.pipe(res);
// readSync and <a>
// get a list of all your projects that are inside your projects folder (you'll get an array of names)
// loop through your list and create a string of html and a link for each item in the directory
// / make sure you RETURN the completed html string
