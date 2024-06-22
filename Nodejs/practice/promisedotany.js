//promise.any(iterable)
// it will wait until one of the promise get fulfilled (means resolved)

function fun1(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("function1");
        }, 1000);
    });
}

function fun2(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("function2");
           
        }, 2000);
    });
}

function fun3(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            // res("function3");
            rej("function3");
        }, 500);
    });
    
}

Promise.any([fun1(),fun2(),fun3()])
.then((result)=>{
    console.log(result);
})

.catch((error)=>{
    console.log(error);
});