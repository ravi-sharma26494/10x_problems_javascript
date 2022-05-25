let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as changeDiagonal and it should take list as input
function changeDiagonal(matrix){
	for(let i =0; i<matrix.length;i++){
		for(let j =0; j<matrix[i].length;j++){
             if(i == j){
				 if(matrix[i][j] >= 0){
					matrix[i][j] = 1;
				 } else{
					matrix[i][j]=0;
				 }
			 }
		} 
	} return matrix;
	}

// Do not change anything below this line.

//Converting string to intger
function ConvertoInteger(arr){
	for(let index=0;index<arr.length;index++){
		arr[index]=parseInt(arr[index]);
	}
	return arr;
}


let n = parseInt(readLine());
let matrix = [];
for(let index=0;index<n;index++){
  let row=readLine().split(" ");
  row = ConvertoInteger(row);
  matrix.push(row);
}
let newMatrix = changeDiagonal(matrix);
for(row of newMatrix){
  console.log(...row);
}