let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let arr=[];
for(let i =0;i<n;i++){
    arr[i]=parseInt(readLine());
}
let folds= parseInt(readLine());

let noOfOperations = arr.length / 2;
let lastIndex = arr.length-1;
let new_arr = [];
if (arr.length %2 ===0){
    for(let i =0; i<noOfOperations;i++ ){
    new_arr[i] =arr[i] + arr[lastIndex];
    lastIndex --;
}
} else{
    noOfOperations = (arr.length / 2 ) -1;
    for(let i =0; i<noOfOperations;i++ ){
    new_arr[i] =arr[i] + arr[lastIndex];
    lastIndex --;
}
}
