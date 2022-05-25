let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let nums= readLine().split(" ");
let count = 0;
for(let i = 0;i<nums.length; i++){
	for(let j = i+1;j<nums.length; j++){
		if(nums[i] == nums[j]){
			count = count+1;
		}
	}
}
console.log(count);