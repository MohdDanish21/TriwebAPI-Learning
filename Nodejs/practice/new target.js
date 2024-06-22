function demoNewTarget(x){
    if(new.target==undefined){
        console.log("no");
    }else{
        console.log("creating an object");
        this.x=x;
    }
    
    console.log("inside");
}
demoNewTarget(5);

let x = new demoNewTarget(4);// creating an object of type demotarget.
console.log(x);