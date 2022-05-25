let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let p=0;
let n= parseInt(readLine());
for(let i=0;i<n;i++){
    let x=parseInt(readLine());
    while(x>=2){
        x=x-n;
        p=p+1;
        if(x===1){
            console.log(p);
        }
        else if(x===0 || x<0){
            console.log(-1);

        }
    }
    console.log(p);
}
