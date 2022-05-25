let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let l=parseInt(readLine());
let b=parseInt(readLine());
    if(l>0 && b>0){
        let perimeter= 2*(l+b);
        console.log(perimeter);
    }
    else{
        console.log(0);
    }
