const express = require("express");
const userRoute=require('./Routes/user');

const app= express();


app.get('/',(req,res)=>{
    res.send(" i m root of the server");

});

app.use('/user',userRoute);
   



app.listen(process.env.PORT);