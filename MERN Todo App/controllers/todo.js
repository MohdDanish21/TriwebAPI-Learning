const Todo =require ('../models/todo');

const createTodo = async(req,res)=>{  
    try {
        const todo = new Todo(req.body);
        const result = await todo.save();
        // console.log(result);
        res.send({status: "success",message: "Tod Created Successfully",_id: result._id});
    } catch (error) {
        res.send({status: "error",message: "Tod failed",error});
    }
};

const getTodo = async(req,res)=>{

    try {
        const todos = await Todo.find({});
        // console.log(result);
        res.send({status: "success",message: "Tod Get Successfully",data:todos});
    } catch (error) {
        res.send({status: "error",message: "Todo  get failed",error});
    }
    
};


const updateTodo = async(req,res)=>{
    try {
        const id =req.body._id;
        // record find
        const todo = await Todo.findById(id);
        // change set
        todo.userName=req.body.userName;
        todo.mobile=req.body.mobile;

        // save

        await todo.save();
        // console.log(result);
        res.send({status: "success",message: "Todo Update Successfully"});
    } catch (error) {
        res.send({status: "error",message: "Todo  Update failed",error});
    }
};


const deleteTodo = async(req,res)=>{
    try {

        const id = req.body._id;
        const todo = await Todo.findById(id);

        todo.deleteOne();
        
        // console.log(result);
        res.send({status: "success",message: "Todo Delete Successfully"});
    } catch (error) {
        res.send({status: "error",message: "Todo  Delete failed",error});
    }
};


module.exports ={createTodo,getTodo,updateTodo,deleteTodo};