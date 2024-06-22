const arr=[1,2,3];

const newArr=[]; 
Object.assign(newArr,arr);
console.log("Before-arr",arr);
console.log("Before-newArr",arr);

arr[0]=8;

console.log("after-arr",arr);
console.log("after-newArr",newArr);