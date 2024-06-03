const printSeries = function printNumSeriesRecursion(num){
    if(num==0){
        return 0;
    }
    console.log(num);
    num--
    //method 2
    // printNumSeriesRecursion(num);


    //method 3
    // arguments.callee(num);

    //method 4
    printSeries(num);
}
// printNumSeriesRecursion(5);//ReferenceError: printNumSeriesRecursion is not defined
printSeries(5);