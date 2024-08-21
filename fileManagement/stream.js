const trial = require("fs");
const readStream = trial.createReadStream("./bloqs/bloq1.txt", { encoding: "utf8" })
const writeStream = trial.createWriteStream("./bloqs/bloq2.txt")
// readStream.on("data", (chunk) => writeStream.write(chunk))
readStream.pipe(writeStream)