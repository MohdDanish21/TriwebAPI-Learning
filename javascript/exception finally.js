function validateUser(name,password){

    try{
        if(name.length<4){
            throw new error("username is too short");
        }
        if(password.length<6){
            throw new error("password is invalid");
        }
        console.log("working");
        return "in try";



    }
    catch(error){
        //console.log(error);
        return "fall in catch";
    }
    finally{
        console.log("inside finally block");
        return "from finally";
    }
}

let name = "Danish";
let password=12345678;
let msg =validateUser(name,password);
// console.log(user,msg);