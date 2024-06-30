const express=require('express');

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






app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server started");
});