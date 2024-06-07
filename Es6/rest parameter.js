function addNumbers(num1,num2){
    return(num1+num2);
}

let res=addNumbers(1,2);
console.log(res);



function addTwoNumber(...numbers){
    console.log(numbers)
}

let res1=addTwoNumber(1,2,3,4,5,6);
console.log(res1);

console.log("...............................");

function addTwoNumbers(...numbers){
    let sum=0;
    numbers.forEach((e)=>{
        sum=sum+e;
    })
    return sum;
}

let res2=addTwoNumbers(1,2,3,4,5,6);
console.log(res2);
