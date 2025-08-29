// bad-example.js

const fs = require("fs");

// badly named function
async function DoWork() {
    let data1 = fs.readFileSync("file1.txt", "utf8");
    let data2 = fs.readFileSync("file2.txt", "utf8");

    // code duplication
    let lines1 = data1.split("\n");
    for (let i = 0; i < lines1.length; i++) {
        for (let j = 0; j < lines1[i].length; j++) {
            if (lines1[i][j] === "a") {
                console.log("found a in file1");
            }
        }
    }

    let lines2 = data2.split("\n");
    for (let i = 0; i < lines2.length; i++) {
        for (let j = 0; j < lines2[i].length; j++) {
            if (lines2[i][j] === "a") {
                console.log("found a in file2");
            }
        }
    }

    // bad async handling
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
        }, 2000);
    });
    promise.then((result) => {
        console.log(result);
    });
}

DoWork();
