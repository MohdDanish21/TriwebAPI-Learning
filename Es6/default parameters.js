// default parameter
// extended parameter handling


//1 Default parameter
function aadTwoNumber(n1,n2=0){//in default parameter we can add zero when pass 1 arguments
    return n1+n2;
}
let sum1= aadTwoNumber(1,2);
console.log("sum=",sum1);

let sum2= aadTwoNumber(2);
console.log("sum=",sum2);// without default parameter or with parameter

