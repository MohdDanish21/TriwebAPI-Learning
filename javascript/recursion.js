//When a function calling it self is called Recursion

function printNumSeriesRecursion(num){
    if(num==0){
        return 0;
    }
    console.log(num);
    num--
    printNumSeriesRecursion(num);
}
printNumSeriesRecursion(5);




console.log("........................")

function printNumSeries(num){
    for(let i =1; i<=num; i++){
        console.log(i);
    }
}
printNumSeries(5);

console.log("...............")

function printNumSeries1(num){
    for(let i =num; i>0; i--){
        console.log(i);
    }
}
printNumSeries1(5);