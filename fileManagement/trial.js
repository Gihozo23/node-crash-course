// const trial = require("os");
// console.log(trial.platform())
const trial = require("fs");
// console.log(trial.readFile("./bloqs/mystery.txt", (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data.toString())
// }))
// console.log("last line")
// console.log(trial.writeFile("./bloqs/bloq1.txt", "I created both the file and the content from this line of code",
//     () => console.log("done")))
if (!trial.existsSync("./assets")) {
    trial.mkdir("./assets", (err) => {
        if (err) console.log(err)
            console.log("folder created")
    })
}
else trial.rmdir("./assets", (err) => {
        if (err) console.log(err)
            console.log("folder deleted")
    })