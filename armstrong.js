
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let number =parseInt(readLine());
// sum=0;
// //remember your number
// let rem_num=number;
// while(number<0){
//     number=-1*number;
//     let remainder=number%10;
//     sum=sum+remainder*remainder*remainder;
//     number=parseInt(number/10);
// }


// while(number>0){
//     number=-1*number;
// let remainder=number%10;
// sum=sum+remainder*remainder*remainder;
// number=parseInt(number/10);
// }
// if(sum===rem_num){
//     console.log("Yes");
// }
// else{
//     console.log("No"); 
// }
//let num=parseInt(readLine());
// let number=num;
// let digits=0;
// while(n>0){
//     digits=digits+1;
//     num=parseInt(num/10);
// }
// num=number;
// let sum=0;
// let digit=num%10;
// sum=sum+Math.pow(digit,digits);
// num=parseInt(num/10);
let num=parseInt(readLine());
let total=0;
let x= num;
while(x!=0){
    let rem=x%10;
    total=total+rem*rem*rem;
    x=parseInt(x/10);
}
if(num===total){
    console.log("Yes");
}
else{
    console.log("No");
}