let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let input=parseInt(readLine());
let numbers=0;
for(let i=0;i<input;i++){
  numbers=numbers+input;
  console.log(numbers);
}
