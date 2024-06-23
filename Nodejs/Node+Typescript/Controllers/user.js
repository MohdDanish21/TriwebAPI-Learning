const {addUserToDB}=require('../Models/user')


const registerUser=(req,res)=>{



    const userName="Azhar";
    const password="password";

    const result=addUserToDB(userName,password);
    res.send(result);
}

module.exports={registerUser}