//redirect request to particular methods on controller
import express from 'express';
import {registerUser} from '../controllers/user';
const router = express.Router();

//post/user/
router.post('/',registerUser)

export default router;

