let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let number=parseInt(readLine());
let remember_n= number;// remembering the value of number
let reverse=0;
if(number<0){
	number=-1*number;}
while(number>0){
	last_digit=number%10;
	reverse=reverse*10 + last_digit;
	number=Math.floor(number/10);
} 
if(remember_n<0){
	console.log(-1*reverse)
}
else{
 console.log(reverse);
}