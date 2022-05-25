function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}
// my code
process.stdin.resume();
process.stdin.setEncoding('utf8');
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function pascals(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    let result= [];
    for(let row = 1; row <=numRows; row++){
        let arr=[];
        for(let col = 0; col < row; col++){
            if(col === 0 || col === row-1){
                arr.push(1);
            } else{
                arr.push((result [row-2][col-1] + result[row -2][col]));
            }
        } 
        result.push(arr);
    }
    return result;
}
let numRows = parseInt(readLine());
let pascalTriangle = pascals(numRows);

// to print the nth element value;
let lastValue= pascalTriangle[numRows -1];
console.log(lastValue);

