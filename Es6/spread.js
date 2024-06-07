let arr=[1,2,3,4,5,6];
let arr1=[11,23];

let combined_arr=[...arr,...arr1];
console.log(combined_arr);

console.log("................use here spread....................");
console.log(...arr); // spread parameter array s bahar nikal deta haii.


let objStudent ={name:"Amir",age:18};
// let objStudent1=objStudent;
let objStudent1={...objStudent};
console.log("objStudent",objStudent);
console.log("objStudent1",objStudent1);


objStudent1.name="Raj";
console.log("After objStudent1",objStudent1);
