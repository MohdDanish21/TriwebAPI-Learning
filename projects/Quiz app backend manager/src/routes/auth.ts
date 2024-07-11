//redirect request to particular methods on controller
import express from 'express';
import {registerUser,loginUser,isUserExist} from '../controllers/auth';
import {body} from 'express-validator';
import ProjectError from '../helper/error';


const router = express.Router();

//post/user/
router.post('/',[
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:4})
        .withMessage("please enter a valid name,minimum 4 character long "),
    body('email')
    .trim()
    .isEmail()
    .custom(emailId =>{
        return isUserExist(emailId)
        .then((status)=>{
            if(status){
                
                return Promise.reject("user already exist!");
            }
            
        })
        .catch((err)=>{
            return Promise.reject(err);
        })
    })
    .normalizeEmail()

],registerUser);

//post/user/login
router.post('/login',loginUser);



export default router;