const R=require("ramda");

const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]];

const newArr=R.clone(arr);  //deep-copy vs shallow-copy\deep-copy> npm install ramda
console.log("Before-arr",arr);
console.log("Before-newArr",arr);

arr[0][0]=11;

console.log("after-arr",arr);
console.log("after-newArr",newArr);