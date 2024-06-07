let arr =[1,2,3,4];
let [a,b]=arr;

console.log("first element:",a);
console.log("second element:",b); // This is called Destructuring 


// here we can swap an array or reverse an array

[b,a]=[a,b];
console.log("arr is:",arr);
console.log("first element a:",a);
console.log("second element b:",b);


//2 object matching, shorthand matching
function getStudent(){
    let student={
        name:"Azhar",
        age:"31",
        class:"bca"
    }
    return student
}
// console.log(getStudent());
// here i can assign value to variable to get objects value
var{name,age}=getStudent();
console.log(name,age);