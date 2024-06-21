//not  immediate as its name
// its callback is place in the check queue of the next cycle of the event loop.
//check queue,occurs later than timer queue.


let  a =1;
let b=2;
function addTwoNumber(n1,n2){
    console.log(n1+n2)
}

setImmediate(()=>{
    addTwoNumber(a,b)
});

console.log("Inside event loop 1");