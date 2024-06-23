// function multiply(num,callback){
//     return new Promise((resolve, reject) => {
//         resolve(num*2);
//     });
// }

// async function awaitExample(){
//     const result =await multiply(3);
//     console.log(result);
// }
// awaitExample()
// .catch((err)=>console.log(err));

function multiply(num){
    return new Promise((resolve, reject) => {
        resolve(num*2);
    });
}

async function awaitExample(){
    const result1 =await multiply(3);
    const result2 =await multiply(result1);
    const result3 =await multiply(result2);
    const result4 =await multiply(result3);
    const result5 =await multiply(result4);
    const finalresult =await multiply(result5);
    console.log(finalresult);
}
awaitExample()
.catch((err)=>console.log(err));