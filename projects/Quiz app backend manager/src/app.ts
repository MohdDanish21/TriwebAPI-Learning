
import express from 'express';

const app =express();

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hi am learner");
    
});

app.listen(3000);
