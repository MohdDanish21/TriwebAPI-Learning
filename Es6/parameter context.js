// parameter context matching

function printDataType1([name,age]){ // using array
    console.log("Name is", name);
    console.log("Age is", age);
}
printDataType1("Azhar",31);




console.log("..........................");

function printDataType2({name,age}){ // using array
    console.log("Name is", name);
    console.log("Age is", age);
}
printDataType2({name:"Azhar",age:31});

console.log(".............3.............");

function printDataType3({}){ // using array
    console.log("Name is", ename);
    console.log("Age is", eage);
}
printDataType2({name:"Azhar",age:31})