const fs = require("fs");

const myPath = __dirname;

function logSizes(myPath) {
    fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            return console.log("err in readdir:", err);
        }
        for (let i = 0; i < files.length; i++) {
            const dirPath = myPath + "/" + files[i].name;
            //console.log("file name: ", files[i].name);
            if (files[i].isFile()) {
                fs.stat(dirPath, (err, stat) => {
                    if (err) {
                        return console.log("err in the stat", err);
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
                logSizes(dirPath);
                //logSize((myPath + '/' +files[i]).isDirectory());
            }
        }
    });
}

// logSizes("/Users/naya/Code/cumin-code/week4/fun-with-fs");

function mapSizes(myPath) {
    const files = fs.readdirSync(myPath, { withFileTypes: true }); //doesn't take callbacks!!

    //  console.log("files after readdirSync", files);

    const objF = {};
    const
    for (let i = 0; i < files.length; i++) {
        //const dirPath = myPath + "/" + files[i].name;
        // console.log("files[i].name", files[i].name);
        //const myStat = fs.statSync(dirPath);
        const myStat = fs.statSync(myPath);
        // console.log("files[i].isFile()", files[i].isFile());
        if (files[i].isFile()) {
            let fileName = files[i].name;
            let valSize = myStat.size;
            objF[fileName] = valSize;
            // return obj;
            console.log("obj", obj);
        }
        else if (files[i].isDirectory()) {
            let fileName = files[i].name;
            //const dirPath = myPath + "/" + files[i].name;
            //console.log("dirPath = ", dirPath);
           // obj[fileName] = mapSizes(dirPath);
           // return obj;
            
         console.log("obj", obj);
        }
    }
}

//let obj = mapSizes();
//fs.writeFileSync(myPath + "/mapSize.json", JSON.stringify(obj, null, 4));
mapSizes("/Users/naya/Code/cumin-code/week4/fun-with-fs");
///its readdirSync, statSync and writeFileSync methods in Part 2.
//let obj = {...obj, name: newvalue}

// let obj1 = {
//     name: "x",
//     last: "y",
// };

// let obj2 = { ...obj1 };
// console.log("obj2", obj2);
