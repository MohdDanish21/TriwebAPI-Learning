//it also take iterable
//but it wait until promises has settled

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
            // res("function2");
            rej("function3");  //
        }, 1000);
    });
}

function fun3(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("function3");
        }, 1000);
    });
}

Promise.allSettled([fun1(),fun2(),fun3()])
.then((results)=>{
    console.log(results);
});