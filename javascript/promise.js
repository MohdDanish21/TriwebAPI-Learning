function validate (name){
    return new Promise((resolve,reject)=>{
        if(name=="abcd"){
            resolve("yes validated");
        }else{
            reject("not validated");
        }
    });
}

// console.log(validate("abcd"));
validate("hi")
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })