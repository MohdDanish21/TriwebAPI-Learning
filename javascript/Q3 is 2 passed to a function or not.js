//How do you check that 2 is passed to a function or not?

function isTwoPassed(){
//return Array.from(arguments).indexOf(2)>=0;
    if(Array.from(arguments).indexOf(2)>=0){
        console.log("yes 2 is passed to this function");
    }else{
        console.log("no 2 is not passed to this function");
    }
}
isTwoPassed(3);