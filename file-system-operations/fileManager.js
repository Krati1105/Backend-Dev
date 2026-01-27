const fs = require("fs");
const path = require("path");

const cmd = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

if (cmd === "read") {
  fs.readFile(arg1, "utf8", (e, d) => e ? console.log(e) : console.log(d));
}

if (cmd === "write") {
  fs.writeFile(arg1, arg2, e => e && console.log(e));
}

if (cmd === "copy") {
  fs.copyFile(arg1, arg2, e => e && console.log(e));
}

if (cmd === "delete") {
  fs.unlink(arg1, e => e && console.log(e));
}

if (cmd === "list") {
  fs.readdir(arg1 || ".", (e, f) => e ? console.log(e) : console.log(f));
}