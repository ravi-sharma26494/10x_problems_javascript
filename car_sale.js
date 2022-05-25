let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `CarSell`.
// Your method should be named `getPromisingCustomers`
// Your method should return the indices of customers who are willing to pay greater than or equal to 90% of the car value
class CarSell{
    constructor(proposals){
        this.proposals=proposals
    }
    getPromisingCustomers(){
        let options=[];
        for(let i=0; i<this.proposals.length;i++){
            if(this.proposals[i] >= 900000){
                options.push(i);
            }
        }
        if(options.length === 0){
            options.push(-1)
        }
        return options;
    }
};


let numCustomers = parseInt(readLine());
let customerProposals = [];
for (let i = 0; i < numCustomers; i++) {
  customerProposals.push(parseInt(readLine()));
}

let car = new CarSell(customerProposals);
for (let j of car.getPromisingCustomers()) {
  console.log(j);
}