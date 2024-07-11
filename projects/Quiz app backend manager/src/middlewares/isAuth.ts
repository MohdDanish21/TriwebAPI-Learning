
import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
import projectError from '../helper/error';
const isAuthenticated = (req:Request,res:Response,next:NextFunction)=>{

    // let isUserAuthenticated=false;
    // header -----> token
   try {
    const authHeader=req.get('Authorization');
    if(!authHeader){
        const err = new projectError("Not authenticated");
        err.statusCode = 401;
        throw err;
        // res.status(401).send("not authenticated");
    }
   
     // jwt-> decode using sign "secretmyversecretkey"
    const token = authHeader.split(' ')[1];
    let decodedToken:{userId:String, iat:Number, exp:Number};
    try {
         decodedToken= <any>jwt.verify(token,"secretmyversecretkey");
        
        
    } catch (error) {
        const err = new projectError("Not authenticated");
        err.statusCode = 401;
        throw err;
        
    }

    if(!decodedToken){
        const err = new projectError("Not authenticated");
        err.statusCode = 401;
        throw err;
    }

    //userId
        req.userId =   decodedToken.userId; 
        console.log(req.userId);
        // console.log(decodedToken);
        // if in next code you needed user then here, fetch the user from user model via user controller.  
        next();
   } catch (error) {
        next(error);
   }
    
}

export {isAuthenticated};