const fs = require("fs");

const stream = fs.createReadStream("app.log", "utf8");

let errors = 0;
let warnings = 0;
let total = 0;

stream.on("data", chunk => {
  const lines = chunk.split("\n");
  lines.forEach(l => {
    if (l.includes("ERROR")) errors++;
    if (l.includes("WARN")) warnings++;
    if (l.trim() !== "") total++;
  });
});

stream.on("end", () => {
  const summary = `Total: ${total}\nErrors: ${errors}\nWarnings: ${warnings}`;
  fs.writeFile("summary.txt", summary, () => {});
});