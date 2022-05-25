let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let sum=0;
while(n>0){
    sum= sum+n*n;
    n=n-1;
    if(n===0){
        break;
    }
    
}
console.log(sum);