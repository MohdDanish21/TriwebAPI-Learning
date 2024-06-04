function addTwoNumber(num1,num2,num3){
    console.log(arguments);
}
addTwoNumber(2,5,3);
addTwoNumber(2,5,3,4,5);



function addTwoNumbers(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum=sum+element;
        
    }
    console.log(sum);
}
addTwoNumbers(2,3,4,5);
addTwoNumbers(2,3);