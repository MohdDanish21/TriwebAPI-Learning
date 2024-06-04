function addTwoNumber(){
    let sum=0;

    let arr=Array.from(arguments);
    arr.forEach(Element=>{
        sum=sum+Element;
    });
    console.log(sum);
}
addTwoNumber(5,5)