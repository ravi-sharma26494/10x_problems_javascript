let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let front_face=parseInt(readLine());
let back_face=7-front_face;
console.log(back_face);
