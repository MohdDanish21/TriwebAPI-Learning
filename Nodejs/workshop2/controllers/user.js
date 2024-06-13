
const userModel =require('../models/user');

//register

module.exports.register=async(req,res)=>{
   let insertedId=await userModel.insert(req.body);
   if(insertedId>0){
        res.send({status:"success",data:{id:insertedId}});
   }else{
        res.send({status:"error",message:"user registration failed"});
   }
    
}

//get

module.exports.get=async(req,res)=>{
    let data=await userModel.get(req.body);
    if(data){
         res.send({status:"success",data:data});
    }else{
         res.send({status:"error",message:"user not found"});
    }
}


//update
module.exports.update=async(req,res)=>{
    let status=await userModel.update(req.body);
    if(status){
         res.send({status:"success",message:"user data updated"});
    }else{
         res.send({status:"error",message:"user not updated"});
    }
}

//delete
module.exports.delete=async(req,res)=>{
    let status=await userModel.delete(req.body);
    if(status){
         res.send({status:"success",message:"user deleted"});
    }else{
         res.send({status:"error",message:"user not deleted"});
    }
}