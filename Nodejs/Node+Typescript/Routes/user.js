const express=require('express');
// const userController=require('../Controllers/user');
const {registerUser}=require('../Controllers/user');
const router=express.Router();

router.post('/register',registerUser);


module.exports=router;