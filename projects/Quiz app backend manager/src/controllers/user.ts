// send/ receive data to/from database via model  
import { Request,Response,NextFunction } from "express";

const registerUser=(req:Request,res:Response, next:NextFunction)=>{
    console.log(req.body);
    console.log("Registration Done");
    res.send("Registration Done");
}


// module.exports.registerUser=registerUser;
export {registerUser}