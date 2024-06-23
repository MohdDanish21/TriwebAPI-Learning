 
 process.on("uncaughtException",(error)=>{
    console.log("controlled",error);
 });
 
 function anotherFunction(){
    throw new Error ("My custom error!");
    // return "code";
}


 function tryCatchExample(){
   
        const value= anotherFunction();
        console.log(value);
    
}
tryCatchExample();

