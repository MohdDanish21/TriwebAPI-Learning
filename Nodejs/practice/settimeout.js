function add(callby,n1,n2){
    console.log(callby,":",n1+n2);
}


setImmediate(()=>{
    add("setImmediate",2,3);         //Direct : 3
                                    //setImmediate : 5  it is in check queue for next cycle.
})

setTimeout(()=>{
    add("setTimeout",3,3);         //Direct : 3, set Timeout:6, setImmediate :5
                                    //setTimeout : 6  it is in Timer queue for next cycle.
},0);
add("Direct",1,2);