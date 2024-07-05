//redirect request to particular methods on controller
import express from 'express';
import {getUser,updateUser} from '../controllers/user';
const router = express.Router();




//user should be authenticate
//user should be authorize
//get /user/userId
router.get('/:userId',getUser);



//user should be authenticate
//user should be authorize
//put /user/
router.put('/',updateUser);


export default router;

