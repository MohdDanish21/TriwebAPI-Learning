const express=require("express");
const mongoose=require("mongoose")
const todoRouter = require('./routers/todo');
const cors = require('cors');
const app =express();
app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use("/",todoRouter);





const uri=
"mongodb+srv://danishdmseo:Danish123@myfirstproject.flxpytt.mongodb.net/workshop2023?retryWrites=true&w=majority";
mongoose.connect(uri)
.then((success)=> app.listen(3002))
.catch((err)=> console.log(err.message));
   