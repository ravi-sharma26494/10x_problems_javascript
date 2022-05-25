let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let inputs=parseInt(readLine());
let input_1=parseInt(readLine());
let count=1;
for(let i=0;i<inputs;i++){
    let values=parseInt(readLine());
    if(input_1 === values){
        count=count + 1;
    }
}
console.log(count);