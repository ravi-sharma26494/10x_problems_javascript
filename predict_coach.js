let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let test_cases=parseInt(readLine());
while(test_cases>0){
 let inputs=readLine().split(" ");;
 let berth=parseInt(inputs[0]);
 let seats=parseInt(inputs[1]);
 if(seats>berth){
   console.log("Invalid");
 }
 else{
   rem=seats%8;
   if(rem===1 || rem===4){ console.log("L"); }
   else if(rem===2 || rem===5){ console.log("M"); }
   else if(rem===3 || rem===6){ console.log("U"); }
   else if(rem===7){ console.log("SL"); }
   else { console.log("SU");}
 }


 test_cases=test_cases-1;
}
