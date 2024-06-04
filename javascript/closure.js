// A closure must preserve the arguments and variables in all scopes it references.
//A new closure is created for each call too outside.

function getProductFunction(multiplier){
    return function(num){
        return(multiplier*num);
    }
}

const double =getProductFunction(2);
let res =double(4);
console.log(res);


const triple =getProductFunction(3);
let res1 =triple(4);
console.log(res1);