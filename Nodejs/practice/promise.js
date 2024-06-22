// function fun1(){
//     console.log("function1");
// }

// function fun2(){
//   setTimeout(() => {
//     console.log("function2");
//   }, 1000);
// }

// function fun3(){
//     console.log("function3");
// }


// function startCalling(){
//     fun1();
//     fun2();
//     fun3();
// }

// startCalling();

function fun1(){
    return "function1";
}

function fun2(){
    return new Promise((res,rej)=>{
        rej("promise is rejected");
        setTimeout(() => {
            res("function2");
          }, 1000);
    });
  
}

function fun3(){
    return "function3";
}


function startCalling(){
   const res1= fun1();
   console.log(res1);
    fun2()
    .then((result)=>{
        console.log(result);
        const res3=fun3();
        console.log(res3);
    })
    .catch((error)=>{
        console.log("error",error);
    });
   
}

startCalling();