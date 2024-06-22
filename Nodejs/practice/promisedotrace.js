//promise.race(iterable)
//return first rs and rej promise

function fun1(){
    return new promise((res,rej)=>{
        setTimeout(() => {
            res("function1");
        }, 2000);
    });
}


function fun2(){
    return new promise((res,rej)=>{
        setTimeout(() => {
            res("function2");
        }, 500);
    });
}
function fun3(){
    return new promise((res,rej)=>{
        setTimeout(() => {
            res("function3");
        }, 1000);
    });
}


const listOfPromises=[fun1(),fun2(),fun3()];
promise.race(listOfPromises)
.then((result) => {
    console.log("success",result)
}).catch((err) => {
    console.log("rejected",error);
});