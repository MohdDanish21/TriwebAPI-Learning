
// send/ receive data to/from database via model  
// import { Request,Response,NextFunction,} from "express";
import {RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";

import User from "../models/user";
import projectError from '../helper/error';

import { ReturnResponse } from "../utils/interface";



//in this file we r using RequestHandler in other files we using Request,Response, NextFunction
//const registerUser = async(req:Request,res:Response,next:NextFunction)=>{}
const registerUser:RequestHandler = async(req,res,next)=>{

    let resp:ReturnResponse;
    try {
        //validation
        const validationError = validationResult(req);
        if(!validationError.isEmpty()){
           const err = new projectError("validation failed");
           err.statusCode = 422;
           err.data = validationError.array();
           throw err;
        }
        
        //validation end
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

const loginUser:RequestHandler = async (req,res,next)=>{
    let resp:ReturnResponse;
   try {
    const email= req.body.email;
    const password = req.body.password;

    //find user with email
    const user = await User.findOne({email});
    if (!user) {
        const err = new projectError("No user Exist");
        err.statusCode = 401;
        throw err;
        
    }

    // verify password using bcrypt
    const status = await bcrypt.compare(password,user.password);

    //then decide
    if(status){
        const token = jwt.sign({userId:user._id},"secretmyversecretkey",{expiresIn:'1h'});


        resp = { status: "success", message: "Logged In", data: {token} };
        res.send(resp);
    }else{
        
        const err = new projectError("Credential mismatch");
        err.statusCode = 401;
        throw err;
    }
   } catch (error) {
        next(error);
   }
        
}

const isUserExist = async (email:String)=>{   
   const user = await User.findOne({email});
    if (!user) {
        return false;
        
    }
    return true;
}

export {registerUser, loginUser,isUserExist}