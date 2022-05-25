let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let inputs=parseInt(readLine());
// let input_array=[];
// let i=0;//counter
// while(i<inputs){
//     input_array[i]=parseInt(readLine());
//     i++;
// }
// let result="False";
// for(let i=0; i<inputs;i++){
//     if(input_array[i]+input_array[i-1]>100)
//   result="True";
//   break;
// }
let input=parseInt(readLine());
let input_array=[];
let i=0;
while(i<input){
    input_array[i]=parseInt(readLine());
    i++;
}
let result="False";
for(let i=0;i<input;i++){
    if(input_array[i]+input_array[i-1]>100){
        result="True";
        break;
    }
}
console.log(result);