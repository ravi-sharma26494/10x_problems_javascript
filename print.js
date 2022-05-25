
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// // let a = parseInt(readLine());
// // let b = parseInt(readLine());

// // console.log(parseInt(a+b));
// // console.log(parseInt(a-b));
// // console.log(parseInt(a*b));
// // console.log(parseInt(a-b));
// // console.log(parseInt(a*b));
// //
// // let input= readLine().split(" ");
// // let n=parseInt(input[0]);
// // let i=parseInt(input[1]);
// // let j= parseInt((n-i)+1);
// // //let i= parseInt(readLine());
// // console.log(j);
// //-------- rating(control_flow)
// // let r_1="ABC";
// // let r_2="ARC";
// // let r_3="AGC";
// // let input=parseInt(readLine());
// // if(input<1200){
// //   console.log(r_1);
// // }
// // else if(input<2800){
// //   console.log(r_2);
// // }
// // else{
// // console.log(r_3);
// // }
// //-------rea of rectangle
// // let length=parseInt(readLine());
// // let breadth=parseInt(readLine());
// // let area= parseInt(length*breadth);
// // let null


// // //console.log(area);
// // if(area>0){
// //   console.log(area);
// // }
// // else {
// // console.log('0');
// // }

// //------------VECTOR CASE--------------------
// let i=j=k=1;
// //console.log(k);
// let vector_1=readLine().split(" ");
// let a1=parseInt(vector_1['0']);
// let a2=parseInt(vector_1['1']);
// let a3=parseInt(vector_1['2']);


// let vector_2=readLine().split(" ");
// let b1=parseInt(vector_2['0']);
// let b2=parseInt(vector_2['1']);
// let b3=parseInt(vector_2['2']);

// //parallel case A x B
// let parallel = ((a2*b3) - (a3*b2))*i-((a1*b3) - (a3*b1))*j + ((a1*b2) - (a2*b1))*k;

// let perp= (a1*b1) + (a2*b2) + (a3*b3);
// // + (a2*b2) + (a3*b3);
// //console.log(perp);
// if(parallel==0){
//   console.log(1);
// } else if(perp==0){
//   console.log(2);
// }
// else{
//   console.log(0);
// }
var reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
      isNegative = true;
      x = -x;
  }
  let reverse = 0;
  while (x > 0) {
      reverse = reverse * 10 + x % 10;
      x = parseInt(x / 10);
  }
  
  return isNegative ? -reverse : reverse;
};