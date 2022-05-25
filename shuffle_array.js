// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
// 	idx++;
// 	return data[idx - 1];
// }
// let n = parseInt(readLine());
// let left_half=[];
// let right_half=[];
// if(n === 1){
// 	console.log(parseInt(readLine()));
// 	console.log(parseInt(readLine()));

// } else{
// for(let i =0; i<n;i++){
// 	left_half.push(parseInt(readLine()))
// }
// for(let i =0; i<n;i++){
// 	right_half.push(parseInt(readLine()))
// }
// // console.log(left_half);
// // console.log(right_half);
// for(let i =0; i<n;i++){
// 	console.log(left_half[i]);
// 	console.log(right_half[i]);
// }
// }

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function shuffle(arr){
    //Implement this function
	let shuffled_array= [];
	for(let i =0; i<n;i++){
        shuffled_array.push(arr[i]);
		shuffled_array.push(arr[i+n]);
	}
	return shuffled_array;
}

// Do not edit anything below
let n = parseInt(readLine());
let nums = [];
for(let index=0;index<2*n;index++){
        nums.push(parseInt(readLine()));
}
let res=shuffle(nums);
for(elem of res){
  console.log(elem);
}