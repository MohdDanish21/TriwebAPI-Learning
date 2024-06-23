 async function anotherFunction(){
    throw new Error("My custom error");
 }

 function tryCatchExample(){
    anotherFunction()
    .then((data)=>console.log(data))
    .catch((error)=>{
        console.log("Error occurred:",error);
    });
 }

 tryCatchExample();