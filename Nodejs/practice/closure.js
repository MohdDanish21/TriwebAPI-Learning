// const outerFunction=()=>{
//     // return "12";
//     return innerFunction=()=>{

//     };        // It will return inner function  [Function: innerFunction]
// }
// const xyz=outerFunction();
// console.log(xyz);

// const outerFunction=()=>{
   
//     return innerFunction=()=>{
//         return "12";
//     };        //  
// }
// const xyz=outerFunction();
// console.log(xyz());// here xyz is inner function despite of it it will return 12.

const outerFunction=()=>{
    sommeVariable=34;
    return innerFunction=()=>{
       return sommeVariable;
    };        //  
}
const xyz=outerFunction();
console.log(xyz());// here xyz is inner function and declare value in outer scope despite of it ,
//it will return variable value.

const generatorPowerFunction=(power)=>{
    return(number)=>{
        return number**power;
    };
}
const square=generatorPowerFunction(2);
const cube=generatorPowerFunction(3);
const quad=generatorPowerFunction(4);

console.log(square(2));
console.log(cube(3));
console.log(quad(4));