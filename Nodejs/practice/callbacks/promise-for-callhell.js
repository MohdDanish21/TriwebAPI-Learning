// function multiply(num,callback){
//     return new Promise((resolve, reject) => {
//         resolve(num*2);
//     })
// }

// multiply(3)
// .then((result)=>console.log(result));

function multiply(num,callback){
    return new Promise((resolve, reject) => {
        resolve(num*2);
    });
}

multiply(3)
.then(multiply)
.then((finalSum)=>console.log(finalSum));
    