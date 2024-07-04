
import express from 'express';
import UserRoute from './routes/user'

const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hi am learner");
    
});



//redirect /user to userRoute
app.use('/user',UserRoute);
app.listen(3000);
