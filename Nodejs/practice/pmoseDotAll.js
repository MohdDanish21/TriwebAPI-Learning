// multiple promise 
// wait-> wait to resolve all the promise
//or to reject one
// promise.all takes iterable([])

// function function1(){
//     return new Promise((res,rej)=>{
//         res("function1");
//     })
// }


// function function2(){
//     return new Promise((res,rej)=>{
//         // res("function2");
//         rej("function rejected");
//     })
// }

// function function3(){
//     return new Promise((res,rej)=>{
//         res("function3");
//     })
// }

// Promise.all([function1(),function2(),function3()])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });

function function1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("function1");
        },2000);
    });
}


function function2(){
    return new Promise((res,rej)=>{
        // res("function2");
        setTimeout(()=>{
            rej("function2 rejected");
        },1000);
        
    });
}

function function3(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("function3");
        }, 2000);
    })
}

Promise.all([function1(),function2(),function3()])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});