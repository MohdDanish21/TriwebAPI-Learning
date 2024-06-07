// use to handle string
function printData(name,age){
    // let toPrint="student's name is " +name+ "and age is "+age;// for line change can use \n
    let toPrint=`student's ${name} is name and age is ${age}`; // if enter b/w line ,line break .
    console.log(toPrint);
}


let name ="Azhar";
let age ="30";
printData(name,age);
