// send/ receive data to/from database via model  
import { Request,Response,NextFunction } from "express";
import User from "../models/user";

const registerUser=(req:Request,res:Response, next:NextFunction)=>{
    const user = new User(req.body);
    user.save();
     res.send("Registration Done");
}


// module.exports.registerUser=registerUser;
export {registerUser}