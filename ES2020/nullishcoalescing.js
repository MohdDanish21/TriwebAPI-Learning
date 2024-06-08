//nullish coalescing?? vs OR||     // it will check nullish value or undefined value

function printSomething(name){
    printThis=name||"Not found";//printThis=name??"Not found";
    console.log("printThis is",printThis);
}
printSomething("Azhar");


//false .. boolean operator   // if i send value to function null or false it will give not found
// falsy...undefined, null, empty string  // if let var1; declare it will undefined
