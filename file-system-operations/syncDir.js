const fs = require("fs");
const path = require("path");

const dirA = process.argv[2];
const dirB = process.argv[3];

function readDir(d) {
  return fs.readdirSync(d).reduce((o, f) => {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    o[f] = { path: p, time: s.mtimeMs };
    return o;
  }, {});
}

function sync(a, b) {
  Object.keys(a).forEach(f => {
    if (!b[f] || a[f].time > b[f].time) {
      fs.copyFileSync(a[f].path, b[f] ? b[f].path : path.join(dirB, f));
    }
  });
}

const A = readDir(dirA);
const B = readDir(dirB);

sync(A, B);
sync(B, A);