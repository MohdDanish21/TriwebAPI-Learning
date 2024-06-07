function updateAge(age){
    return new Promise((resolve,reject)=>{
        if (age>=0){
            age=age+1;
            resolve(age);
        }else{
            // reject ("invalid age");
            throw new Error("invalid age");
        }
            
 
    })
}

updateAge(-8)
    .then((updateAge)=>{
        console.log("update Age is", updateAge);
    })
    .catch((err)=>{
        console.log("err: Age not updated");
    })