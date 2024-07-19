import mongoose from "mongoose";

const schema =mongoose.Schema;

const resultSchema= new schema(
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


const Result =mongoose.model("Result",resultSchema);

export default Result;