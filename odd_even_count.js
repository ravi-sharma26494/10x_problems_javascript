let inputs=parseInt(readLine());
let even_count=0;
let odd_count=0;
for(let i=0;i<inputs;i++){
    let values=parseInt(readLine());
    if(values%2===0){
        even_count=even_count+1;
    }
    else{
        odd_count=odd_count+1
    }
}
console.log(odd_count);
console.log(even_count);