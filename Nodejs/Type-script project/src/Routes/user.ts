const express=require('express');
// const userController=require('../Controllers/user');
import {registerUser,checkTypeAndInterface} from'../Controllers/user';
const router=express.Router();

router.post('/register',registerUser);
router.post('/update',checkTypeAndInterface);


export default router;