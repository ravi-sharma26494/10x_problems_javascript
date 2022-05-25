let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let symbols=readLine();
let output=0;
for(let i=0;i<symbols.length;i++){
  if(symbols[i]==='+'){
    output=output+1;
  }
  else{
    output=output-1;
  }
}
console.log(output);