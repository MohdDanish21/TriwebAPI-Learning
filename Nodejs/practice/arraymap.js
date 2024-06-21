let arr=[1,2,3,4,5,6,7,8,9,10]

// this program is without function and with logic. 

let newArr2=[]
for (let i =0; i<8;i++){
    console.log(arr[i]);
}

console.log("...................");

for (let i =0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log("..................................................");

for (let i =0; i<8;i++){
    // newArr2[i]=arr[i]*2;
    newArr2.push(arr[i]*2);
}
console.log(newArr2);//index is sequential and Array  is sequential data types 
console.log(".......................using map...........................");

// map function()

let newArr3=arr.map((element)=>element*2);
console.log(newArr3);
// Map creates a new array with the results of calling a function for every array element.
//The map methods call the provided function once for each element in array.
// Map function does not execute the function for array element without values.