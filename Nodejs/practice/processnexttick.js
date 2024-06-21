function add(callfrom,n1,n2){
    console.log(callfrom,":",n1+n2);
}


setImmediate(()=>{
    add("setImmediate",2,3);         //Direct : 3
                                    // process: 5
                                    //setTimeout : 6  it is in check queue for next cycle.
});                                 //setImmediate:5

process.nextTick(()=>{
    add("process NextTick",2,3);         
});

setTimeout(()=>{
    add("setTimeout",3,3);         // it puts its callback at the front of the event queue.
},0);
add("Direct",1,2);                // executed after the code currently being executed but before IO events, Timers. 