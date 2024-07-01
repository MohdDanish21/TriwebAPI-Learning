const express=require("express");
const mongoose=require("mongoose")

const app =express();

//POST
app.post("/",(req,res)=>{
    res.send("Post methods called")
});

//GET
app.get("/",(req,res)=>{
    res.send("Get methods called")
});

//PUT

app.put("/",(req,res)=>{
    res.send("Put methods called")
});


//DELETE
app.delete("/",(req,res)=>{
    res.send("delete methods called")
});



const uri=
"mongodb+srv://danishdmseo:Danish123@myfirstproject.flxpytt.mongodb.net/workshop2023?retryWrites=true&w=majority";
mongoose.connect(uri)
.then((success)=> app.listen(3000))
.catch((err)=> console.log(err.message));
   