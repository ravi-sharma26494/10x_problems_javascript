let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let num=parseInt(readLine());
let pal=num;
let rev=0;
while(pal!=0){
let rem=pal%10;
rev=rev*10+rem;
pal=parseInt(pal/10);
}
if(num ===rev){
    console.log("True");

}
else{
    console.log("False");
}