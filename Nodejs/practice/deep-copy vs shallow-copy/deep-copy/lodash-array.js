
const _=require("lodash");
const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]];

const newArr=_.cloneDeep(arr); 
console.log("Before-arr",arr);
console.log("Before-newArr",arr);

arr[0][0]=11;

console.log("after-arr",arr);
console.log("after-newArr",newArr);