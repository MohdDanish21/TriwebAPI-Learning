function printData( string,name,age){
    console.log("String",string);
    console.log("name",name);
    console.log("age",age);
}

let name ="Azhar";
let age ="30";
// printData("student's name is '' and age is' ",name,age);

printData`student's name is ${name} and age is ${age}`;