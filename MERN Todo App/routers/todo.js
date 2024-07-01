const {CreateTodo} = require("../controllers/todo");

const express = require("express");

const router = express.Router();

//POST
router.post("/",(req,res)=>{
    res.send("Post methods called")
});

//GET
router.get("/",(req,res)=>{
    res.send("Get methods called")
});

//PUT

router.put("/",(req,res)=>{
    res.send("Put methods called")
});


//DELETE
router.delete("/",(req,res)=>{
    res.send("delete methods called")
});

module.exports = router;