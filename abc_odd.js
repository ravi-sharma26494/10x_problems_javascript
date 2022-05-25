let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let integers= readLine().split(" ");
// let int1 = parseInt(integers['0']);
// let int2 = parseInt(integers['1']);
// for(let i=1;i<=3;i++){
//     if((int1*int2*i)%2 == 1){
//         console.log("Yes");
//         break;
//     }
//     else{
//         console.log("No");
//     }
// }
let input =parseInt(readLine()); // TO GET THE VALUE OF N= HOW MAY NUMBERS ARE THERE
for(let i=1; i<=input; i++){
    let lines=parseInt(readLine()); // TO READ THE LINES AFTER GETING THE NUMBER OF LINE
    //console.log(lines);
    let output=lines - input;
}
