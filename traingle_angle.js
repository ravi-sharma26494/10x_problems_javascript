const { ifError } = require("assert");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let a= parseInt(readLine());
let b= parseInt(readLine());
let area=a*b;

if(area>0 && a>0 && b>0){
console.log(area);
}
else{
    console.log(0);
}