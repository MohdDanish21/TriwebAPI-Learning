function multiply(num,callback){
    callback (2*num);
}

multiply(3,(result)=>{
    multiply(result,(result)=>{
        
        multiply(result,(result)=>{
        
            multiply(result,(result)=>{
        
                multiply(result,(result)=>{

                    multiply(result,(result)=>{

                        console.log(result);
                     });
        
        


                    });
                    
            });
        });
    });
    
});