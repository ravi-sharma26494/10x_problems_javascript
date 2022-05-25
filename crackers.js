let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// let input=readLine().split(" ");
// let input_1=parseInt(input[0]);
// let input_2=parseInt(input[1]);
// let sum=input_1+input_2;
// if(sum%12===0){
// 	console.log(12)
// }
// else{
// 	console.log(sum%12);
// }



let input=readLine().split(" ");
let crackers=parseInt(input[0]);
let users=parseInt(input[1]);
let common_distribution=crackers/users;
let remainder=crackers%users;
// if equally distributed
if(remainder===0){
  console.log(0);
}
else if(remainder>0){
  // IF THE REMAINDER IS GREATER THAN ZERO THEN THE DIFFERENCE OF HIGHEST AND LOWEST WILL ALWAYS BE 1
console.log(1);
}