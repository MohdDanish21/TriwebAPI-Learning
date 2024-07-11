
import express from 'express';

import { Request,Response,NextFunction } from "express";
import mongoose from 'mongoose';


import UserRoute from './routes/user';
import authRoute from './routes/auth';

const app =express();

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

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    
    //logger for error
    //email to corresponding email
    console.log(err);
    res.send("something went wrong please try after sometime");
})

// mongoose.connect(connectionString,(err)=>{
//     console.log(err);
// })

// app.listen(3000);

mongoose.connect(connectionString)
 .then((success)=>app.listen(3000))
 .catch((err)=>console.log(err.message));
 




