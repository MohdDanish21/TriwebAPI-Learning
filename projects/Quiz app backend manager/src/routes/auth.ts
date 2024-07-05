//redirect request to particular methods on controller
import express from 'express';
import {registerUser,loginUser} from '../controllers/auth';
const router = express.Router();

//post/user/
router.post('/',registerUser);

//post/user/login
router.post('/login',loginUser);



export default router;