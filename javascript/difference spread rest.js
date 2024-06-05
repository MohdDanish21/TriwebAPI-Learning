function printData(a,b){
    console.log(a);
    console.log(b);
}
printData(1,2,3,4,5,6,7,8,9,10);// here it will take only two arguments


function  printData1(...rest){
    console.log(rest);
}

printData1(1,2,3,4,5,6,7,8,9,10);

console.log("..............................");

// here i will run foreach loop
function  printData2(...rest){
    rest.forEach((elem)=>{
        console.log(elem);
    })

    const[firstElement]=[...rest];
    console.log("first element:",firstElement);
}

printData2(1,2,3,4,5,6,7,8,9,10);