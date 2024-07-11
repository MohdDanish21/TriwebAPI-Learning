
import express from 'express';

import { Request,Response,NextFunction } from "express";
import mongoose from 'mongoose';


import UserRoute from './routes/user';
import authRoute from './routes/auth';
import ProjectError from './helper/error';

const app =express();

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:{}
}

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global{
    namespace Express{
        interface Request{
            userId:String;
            
        }
    }
}

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hi am learner");
    
});



//redirect /user to userRoute
app.use('/user',UserRoute);

// redirect / auth
app.use('/auth',authRoute);

app.use((err:ProjectError, req:Request,res:Response,next:NextFunction)=>{
    
    //logger for error
    //email to corresponding email
    let message:String;
    let statusCode:number;

    
    if(!!err.statusCode && err.statusCode<500){
        message = err.message;
        statusCode = err.statusCode;
    }else{
        message = "something went wrong please try after sometime";
        statusCode = 500;
    }
    let resp:ReturnResponse = {status:"error",message,data:{}}
    if(!!err.data){
        resp.data = err.data;
    }
    console.log(err.statusCode,err.message);
    res.status(statusCode).send(resp);
})

mongoose.connect(connectionString)
 .then((success)=>app.listen(3000))
 .catch((err)=>console.log(err.message));
 




