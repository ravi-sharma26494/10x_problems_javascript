// 1 .length
// 2 .push()--- to add element to the end
let ar1=[1,2,3,4,5];
let val=ar1.push(6); // to return the last pushed elemt
//console.log(ar1);// output= [ 1, 2, 3, 4, 5, 6 ]
//console.log(val);

// 2 .pop()-- to remove last elemt of the array
// same as push
//---------------------------------------------------

// 3 .toString()-- converting the lement to string
// only comma sepertaed array
let ar2=[1,2,3,4,5];
console.log(ar2.toString());
// 4. join()-- joins all array into string + can give the joiner
let ar=['saab','volvo'];
console.log(ar.join('**')); // output saab**volvo
//---------------------------------------------------------------------

///--shifting
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arf =fruits.shift();
console.log(arf); // output= Banana - the shifted element

/// unshift--
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const arf2 =fruits2.unshift("Grapes");
console.log(arf2);// this will return the new length of the array that is 5
//------------------------------------------------------------------------------

// concatenation-- can also do multiple concatenation
// can concatinate in any order
const fruits3 = ["Banana", "Orange"];
const fruits4 = ["Apple", "Mango"];
const fruits5 = ["Kiwi","Grapes"];
console.log(fruits4.concat(fruits3,fruits5));//[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//=========================================================================================
// SPLICE AND SLICE
//      splice()- add new element, has 3 parameter-1. (where) to add, (how many) to remove, (what) to add

let num=["one","two","three","four"];
let removed =num.splice(0,4);
console.log(num); ///[ 'three', 'four' ]

// slice()-- slices out the part
//  takes 1 or 2 arguments
//give new array
// doesnot affects the original array
const fruitsg = ["Banana", "Orange", 1,0.5,true, "Apple", "Mango"];
//const citrus = fruitsg.slice(1,3);
console.log(fruitsg.toString());

//=======================================================================
//== COMPARE FUNCTION FOR SORTING AN ARRAY
//==== FIND MIN AND MAX VALUE
// FUNCTION COMAPRE EVERY ELEMENT OF THE ARRAY
const points = [40, 100, 1, 5, 25, 10];
points.sort(
    function(a,b){
        return a-b;
    }
);
function mymax(myarr){
    return Math.min.apply(null,myarr);
}
console.log(points);// sorted array ascending order
console.log(points[0]);// min value
console.log(points[points.length-1]);// max value
console.log(mymax(points));
