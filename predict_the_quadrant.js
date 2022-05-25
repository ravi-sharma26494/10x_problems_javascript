let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let input_lines=parseInt(readLine());
for(let i=0; i<input_lines;i++){
    let coordinates= readLine().split(" ");
    let x=parseInt(coordinates[0]);
    let y=parseInt(coordinates[1]);

if (x > 0 && y > 0){ console.log("Q1");}
else if(x < 0 && y > 0){console.log("Q2");} 
else if(x < 0 && y < 0) {console.log("Q3");}
else { console.log("Q4");}
}