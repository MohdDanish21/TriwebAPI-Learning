import mongoose from "mongoose";

const schema =mongoose.Schema;

const reportSchema= new schema(
    {
        userId:{
            type:mongoose.Types.ObjectId,
            required:true
        },
       
        quizId:{
            type:mongoose.Types.ObjectId,
            required:true
        },
        Score:{

            type:Number,
            required:true
        },
        total:{
            type:Number,
            required:true
        }

    },
    {
        timestamps:true      // it will handle created app and updated app  
    }
);


const Report =mongoose.model("Report",reportSchema);

export default Report;