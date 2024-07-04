
import express from 'express';
import mongoose from 'mongoose';


import UserRoute from './routes/user'

const app =express();

const connectionString = "mongodb+srv://danishdmseo:Danish123@myfirstproject.flxpytt.mongodb.net/QuizApp?retryWrites=true&w=majority";

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hi am learner");
    
});



//redirect /user to userRoute
app.use('/user',UserRoute);


// mongoose.connect(connectionString,(err)=>{
//     console.log(err);
// })

// app.listen(3000);

mongoose.connect(connectionString)
 .then((success)=>app.listen(3000))
 .catch((err)=>console.log(err.message));
 




