import Report from "../models/report";
import { Request,Response,NextFunction } from "express";
import ProjectError from "../helper/error";

interface ReturnResponse{
    status:"success"|"error",
    message:String,
    data:{} | []
}

const getReport = async(req:Request,res:Response,next:NextFunction)=>{
   
    try {
        const report =await Report.findById(req.params.reportId);
        if(!report){
            const err = new ProjectError("Report not found");
            err.statusCode = 404;
            throw err;
        }

        if(report.userId.toString() !==req.userId){
            const err = new ProjectError("You are not allowed");
            err.statusCode=405;
            throw err;
        }

        let resp:ReturnResponse ={status:"success",message:"Report!",data:report};
        res.send(resp);
    } catch (error) {
        next(error);
    }
    
}


export {getReport};