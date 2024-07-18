import express from 'express';
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from '../controllers/quiz';
import {isAuthenticated} from '../middlewares/isAuth';


import {body} from 'express-validator';

const router = express.Router();

//create
//post/quiz
router.post("/",isAuthenticated,[
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:10})
        .withMessage("please enter a valid name,minimum 10 character long "),
    body('questions_list')
        .custom(questions_list=>{
            if(questions_list.length ==0){
                return Promise.reject("Enter atleast 1 question!");
            }
            return true;
        }),
    body('answers')
    .custom(answers=>{
        console.log(answers);
        if(Object.keys(answers).length ==0){
            return Promise.reject("Enter atleast 1 answer!");
        }
        return true;
    })
],createQuiz);


//get/quiz/:quizId
router.get('/:quizId',isAuthenticated,getQuiz);


//update
//put / quiz
router.put("/",isAuthenticated,[
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:10})
        .withMessage("please enter a valid name,minimum 10 character long "),
    body('questions_list')
        .custom(questions_list=>{
            if(questions_list.length ==0){
                return Promise.reject("Enter atleast 1 question!");
            }
            return true;
        }),
    body('answers')
    .custom(answers=>{
        console.log(answers);
        if(Object.keys(answers).length ==0){
            return Promise.reject("Enter atleast 1 answer!");
        }
        return true;
    })
],updateQuiz);

//deleted
//delete  quiz/:quizId
router.delete('/:quizId',isAuthenticated,deleteQuiz);

//publish
//patch quiz/publish
router.patch("/publish",isAuthenticated,publishQuiz);


export default router;