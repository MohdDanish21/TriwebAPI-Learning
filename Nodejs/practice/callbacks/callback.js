// function multiply(num){
//     return 2*num;
// }

// result=multiply(3);
// console.log(result);

function multiply(num,callback){
    callback (2*num);
}

multiply(3,(result)=>{console.log(result);});
