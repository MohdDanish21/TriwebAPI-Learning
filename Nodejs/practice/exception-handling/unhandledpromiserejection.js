process.on("unhandledRejection",(reason,promise)=>{
    console.log("controlled",reason);
 });
 
//   async function anotherFunction(){
//     throw new Error ("My custom error!");
//     // return "code";
// }


 function promiseRejectHandle(){
   
    Promise.reject(new Error("My promise rejected"));
    
}
promiseRejectHandle();