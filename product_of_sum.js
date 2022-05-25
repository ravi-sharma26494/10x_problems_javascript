let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let num1=parseInt(readLine());
// let num2=num1;
// let sum=0;
// let prod=1;
// while(num1 !=0){
//     sum=sum+num1%10;
//     // if num1 is not made integer then -- value will be calculated  to decimal

//     num1=parseInt(num1/10);
// }
// //for product
// while(num2 !=0){
//     prod=prod*(num2%10);
//     num2=parseInt(num2/10);
// }
// console.log(prod-sum);
//



//-----method 2
let num=parseInt(readLine());
let remember_num=num;
let sum=0;
let product=1;
while(num>0){
  last_digit=num%10;
    sum=sum+last_digit;
    product=product*last_digit;
   num =Math.floor(num/10);
}
if(remember_num==0){
  console.log(0);
}
else{
  console.log(product-sum);

}

