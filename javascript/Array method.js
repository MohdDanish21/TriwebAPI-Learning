let arr = ['a','b','c','d'];
let arr1 = ['1','2','3','4'];
console.log(arr.concat(arr1));

// join
console.log("........................................");

let str = arr.join(' ');
console.log(str);


//push
console.log("........................................");
let A =arr.push('e');
console.log("return form push",A);
console.log("array after push",arr);

//pop  Removes an array from last
console.log("........................................");
let elem =arr.pop();
console.log("return form pop",elem);
console.log("array after pop",arr);

//shift Remove an array from first.
console.log("........................................");
let elem1 =arr.shift();
console.log("return form shift",elem1);
console.log("array after shift",arr);

//unshift  Add one or more element to the front of  an array and return the new length of an array.
console.log("........................................");
let elem2 =arr.unshift('a');
console.log("return form unshift",elem2);
console.log("array after unshift",arr);

//slice cut an index copy kr k array Nikalta hai
console.log("........................................");
let arr2 =[1,2,3,4,5,6,7,8];
let arr3=arr2.slice(1,4);
console.log(arr3);

//splice cut an index then give an array
console.log("........................................");
let arr4 =[1,2,3,4,5,6,7,8];
let arr5=arr2.splice(1,4);
console.log(arr5);

//reverse
console.log("........................................");
let arr6=[1,2,3,4,5,6,7,8];
console.log(arr6.reverse());

//sort
console.log("........................................");
let arr7=[2,3,5,7,6,1];
arr7.sort();
console.log(arr7);

//indexof
console.log("........................................");
let arr8 =[2,3,5,7,6,1];
console.log(arr8.indexOf(3));