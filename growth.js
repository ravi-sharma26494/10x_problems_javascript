let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let total_inputs=parseInt(readLine());
let sum=0;
for(let i=0;i<total_inputs;i++){
    let number=parseInt(readLine());
    sum=sum+number;
}
let avegrage=sum/total_inputs;
//console.log(avegrage);
if(avegrage>100){
    console.log("Excellent");
}
else{
    console.log("Not Excellent!");
}