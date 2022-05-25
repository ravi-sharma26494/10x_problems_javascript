let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// find lcm of 2 and N

let integer=parseInt(readLine());
let high_number=0;
if(integer<2){
    high_number=2;
} else{
    high_number=integer; 
}
while(true){
if(high_number%integer===0 && high_number%2===0){
    console.log(high_number);
    break;
}
high_number++;
}