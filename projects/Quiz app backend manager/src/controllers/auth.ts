
// send/ receive data to/from database via model  
import { Request,Response,NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from "../models/user";

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:{}
}


const registerUser = async(req:Request,res:Response,next:NextFunction)=>{

    let resp:ReturnResponse;
    try {
        
        const email = req.body.email;
        const name = req.body.name;
        let  password=await bcrypt.hash(req.body.password,12);

       
        

        const user = new User({email,name,password});
        const result =await user.save();
        if(!result){
            resp={status:"error",message:"no result found",data:{}};
            res.send(resp);
        }else{
            resp={status:"success",message:"Registration done!",data:{userId:result._id}}
            res.send(resp);
        }
    } catch (error) {
        // console.log(error);
           next(error);
    }
     
}

const loginUser = async (req:Request,res:Response, next:NextFunction)=>{
    let resp:ReturnResponse;
   try {
    const email= req.body.email;
    const password = req.body.password;

    //find user with email
    const user = await User.findOne({email});
    if (!user) {
        resp = { status: "error", message: "User not found", data: {} };
        return res.status(401).send(resp);
        
    }

    // verify password using bcrypt
    const status = await bcrypt.compare(password,user.password);

    //then decide
    if(status){
        const token = jwt.sign({userId:user._id},"secretmyversecretkey",{expiresIn:'1h'});


        resp = { status: "success", message: "Logged In", data: {token} };
        res.send(resp);
    }else{
        resp = { status: "error", message: "Credentials mismatch", data: {} };
        return res.status(401).send(resp);
    }
    res.send(resp);
    
   } catch (error) {
        next(error);
   }
        
}

export {registerUser, loginUser}