// function xyz(){
//     console.log(this);
// }
// xyz();

// console.log("example 1........................................");

// const xyz=()=>{
//     console.log("xyz",this);
// }
// console.log("here",this);
// xyz();  // can not make constructor to array function bcoz arrow function
          // no constructor,arguments,new.target    // bcoz arrow function does not have  own this.


// console.log("example 2.............................................");
// expression bodies
// let arr=[1,2,3,4];
// const arrMap =arr.map(function(element){
//     return element*2;
// })
// console.log(arrMap); // map work on every element of array
// console.log("example 3.............................................");
// Arrow function
// const arrMap =arr.map(element=>element*2)
// console.log(arrMap);

// console.log("example 4.............................................");
console.log("...................................");
// let arr=[1,2,3,4];
// const retObj=(name,age)=>{
//     return{uname:name, age:age};
// }
// console.log("alex",30);
// console.log("example 5.............................................");

// const retObj =(name,age)=>({name:name,age:age})// This is object bodies same as function's bodies
// console.log("alex",30);


console.log("example 6.............................................");
const addTwoNumber=(num1,num2)=>num1+num2;
console.log(addTwoNumber(2,4));

console.log("example 7.............................................");

//statement bodies example 1

let arr=[1,2,3,4];
arr.forEach((e)=>{
    console.log(e," ");
})
