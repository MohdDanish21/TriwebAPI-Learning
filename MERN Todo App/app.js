const express=require("express");
const mongoose=require("mongoose")
const todoRouter = require('./routers/todo');

const app =express();
app.use(express.json());

app.use("/",todoRouter);



const uri=
"mongodb+srv://danishdmseo:Danish123@myfirstproject.flxpytt.mongodb.net/workshop2023?retryWrites=true&w=majority";
mongoose.connect(uri)
.then((success)=> app.listen(3000))
.catch((err)=> console.log(err.message));
   