const Todo =require ('../models/todo');

const CreateTodo = async(req,res)=>{
    res.send("Post method called");
};

module.exports ={CreateTodo};