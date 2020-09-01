const fs = require("fs");
const { readdir, stat } = require("fs").promises;

const myPath = __dirname;
//console.log(myPath);

function logSizes(myPath) {
    Promise.all([readdir, stat]).then(
        fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
            if (err) {
                return "err in readdir:", err;
            }
            for (let i = 0; i < files.length; i++) {
                const dirPath = myPath + "/" + files[i].name;
                //console.log("file name: ", files[i].name);
                if (files[i].isFile()) {
                    fs.stat(dirPath, (err, stat) => {
                        if (err) {
                            reject("err in the stat", err);
                        }
                        console.log(
                            __dirname + "/" + files[i].name + " : " + stat.size
                        );
                    });
                } else if (files[i].isDirectory()) {
                    //const itsDir = files[i].isDirectory();
                    //console.log("files[i].name", files[i].name);
                    //const dirPath = myPath + "/" + files[i].name;
                    // console.log("dirPath", dirPath);

                    return logSizes(dirPath);
                }
            }
        })
    );
}

// logSizes("/Users/naya/Code/cumin-code/week4/fun-with-fs");

function mapSizes(path) {
    const files = fs.readdirSync(path, { withFileTypes: true }); //doesn't take callbacks!!

    //  console.log("files after readdirSync", files);

    var obj = {};

    for (let i = 0; i < files.length; i++) {
        //const dirPath = myPath + "/" + files[i].name;
        // console.log("files[i].name", files[i].name);
        //const myStat = fs.statSync(dirPath);
        // console.log("files[i].isFile()", files[i].isFile());
        if (files[i].isFile()) {
            const myStat = fs.statSync(path);

            let name = files[i].name;
            let valSize = myStat.size;
            obj[name] = valSize;

            // console.log("obj", obj);
        } else if (files[i].isDirectory()) {
            const name = files[i].name;
            const dirPath = path + "/" + name;
            console.log("dirPath = ", dirPath);
            // obj[fileName] = mapSizes(dirPath);

            obj = { ...obj, [name]: mapSizes(dirPath) };
            //console.log("obj", obj);
        }
    }
    // console.log("obj", obj);
    return obj;
}

const strObj = JSON.stringify(mapSizes(myPath));
//console.log(strObj);

fs.writeFileSync(myPath + "/mapSize.json", strObj);
console.log(" done!");
///its readdirSync, statSync and writeFileSync methods in Part 2.
//let obj = {...obj, name: newvalue}

// let obj1 = {
//     name: "x",
//     last: "y",
// };

// let obj2 = { ...obj1 };
// console.log("obj2", obj2);
