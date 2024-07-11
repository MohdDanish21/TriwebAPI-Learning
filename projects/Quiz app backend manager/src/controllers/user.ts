// send/ receive data to/from database via model  
import { Request,Response,NextFunction } from "express";
import User from "../models/user";

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:any,
}



const getUser = async (req:Request,res:Response,next:NextFunction)=>{

let resp:ReturnResponse;
    
     try {
             const userId=req.params.userId;
            //  console.log(userId,"1");
            //  console.log(req.userId,"2");
             if(req.userId !=req.params.userId){
                const err = new Error("You are not authorized!");
                throw err;
             }
             const user =  await User.findById(userId,{name:1, email:1})
             
             if(!user){
                resp={status:"error",message:"no user found",data:{}};
                
                res.send(resp);
             }
               else{
                resp={status:"success",message:"User found",data:{user:user}};
                
                res.send(resp);
            }
        } catch (error) {

            next(error);
        }
     // // console.log("body",req.body);
    // console.log("query",req.query);
    // console.log("params",req.params.userId);
    // res.send("done");
}


// const updateUser= async (req:Request,res:Response)=>{

//     let resp:ReturnResponse;
//     try {
//          const userId=req.body._id;
//          const user = await User.findById(userId);
//          if(!user){
//             resp={status:"error",message:"no user found",data:{}};
//             res.send(resp);
//         }
//         user.name= req.body.name;
//          await user.save()

//     } catch (error) {
//         console.log(error);
//         resp={status:"error",message:"something went wrong",data:{}};
//         res.status(500).send(resp);
//     }
// }


const updateUser = async (req: Request, res: Response, next:NextFunction) => {
    let resp:ReturnResponse;
    // console.log("hi");
    try {
        if(req.userId !=req.body._id){
            const err = new Error("You are not authorized!");
            throw err;
         }

        const userId = req.body._id;
        // Check if userId is present in the request body
        if (!userId) {
            
            resp={status:"error",message:"User _id is required",data:{}};
            res.send(resp);
        }

        // Find user by _id
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            resp = { status: "error", message: "User not found", data: {} };
            return res.status(404).send(resp);
            
        }

        // Update user name
        user.name = req.body.name;
        await user.save();

        // Send success response
        resp = { status: "success", message: "User updated", data: {} };
        res.send(resp);

    } catch (error) {
        // console.error("Error in updateUser:", error);
        // resp = { status: "error", message: "Something went wrong", data: {} };
        // res.status(500).send(resp);
        next(error);
    }
};

// module.exports.registerUser=registerUser;
export {getUser ,updateUser}