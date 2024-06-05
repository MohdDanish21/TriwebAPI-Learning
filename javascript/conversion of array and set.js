// Array to set conversion
// it will remove duplicate number
let arr = [1,2,3,4,5,6,5]
console.log(arr);

let setFromArray = new Set(arr);
console.log(setFromArray);


// set to array
let arrayFromSet=Array.from(setFromArray);
arrayFromSet.push(3);
console.log("Array from set",arrayFromSet);
console.log("..............................")

// using spread operator
let arrFromSetUsingSpreadOperator=[...setFromArray];
arrFromSetUsingSpreadOperator.push(3);
console.log(arrFromSetUsingSpreadOperator);
