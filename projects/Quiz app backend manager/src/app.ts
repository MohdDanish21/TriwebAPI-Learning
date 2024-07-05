
import express from 'express';
import mongoose from 'mongoose';


import UserRoute from './routes/user';
import authRoute from './routes/auth';

const app =express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hi am learner");
    
});



//redirect /user to userRoute
app.use('/user',UserRoute);

// redirect / auth
app.use('/auth',authRoute);

// mongoose.connect(connectionString,(err)=>{
//     console.log(err);
// })

// app.listen(3000);

mongoose.connect(connectionString)
 .then((success)=>app.listen(3000))
 .catch((err)=>console.log(err.message));
 




