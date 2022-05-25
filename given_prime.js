let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let input=parseInt(readLine());
for(let i=0; i<input;i++){
    let indicator=0;
    let number=parseInt(readLine());
    for(let j=2;j<number;j++){
        if(number%j===0){
            indicator=1;
        }
    }
    if(indicator==0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}