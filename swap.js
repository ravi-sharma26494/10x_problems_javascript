const { Console } = require("console");
let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// swap the given index and then print
// space seperated value of the array
// input = 8 3 // 8 elements and swap 3 fromt the left with third from the right
//         1 2 3 4 5 6 7 8
// output = space seperated => 1 2 6 4 5 3 7 8
let input = readLine().split(' ');

let n = parseInt(input[0]);
let targetIndex = parseInt(input[1]);
let  i = targetIndex - 1;
let j = n - targetIndex;
let arr=readLine().split(' ');

// remember ther value
let k = arr[i];
 
 if(arr.length > 1){
   arr[i] = arr[j];
   arr[j] = k;
 } if(arr.length == 1){
   console.log(arr[0]);
 }
 let value ="";
 for(let index = 0; index<arr.length; index++){
   value += arr[index] 
   
 } console.log(value.split('').join(' '))
