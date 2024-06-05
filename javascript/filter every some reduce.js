// filter  even or odd

let arr =[1,2,3,4,5,6,7,8];
let arrFilter=arr.filter((element)=>element%2==0);

console.log(arrFilter);

// every 
console.log("...................................");
let arr1 =[1,3,5,7,9];
let status =arr1.every((e)=>e%2!=0);
console.log(status);

// some  in all array there is one at least 2 s divide krn p at least one even element hona chahiye.
console.log("...................................");
let arr2 =[1,3,5,7,9];
let status1 =arr2.some((e)=>e%2!=0);
console.log(status1);

//Reduce The purpose of the reducing the list of items down to a single value
console.log("...................................");
let a = [10,20,30];
let total =a.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)
console.log(total)