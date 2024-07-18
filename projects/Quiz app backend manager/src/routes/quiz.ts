import express from 'express';
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from '../controllers/quiz';
import {isAuthenticated} from '../middlewares/isAuth';

const router = express.Router();

//post/quiz
router.post("/",isAuthenticated,createQuiz);


//get/quiz/:quizId
router.get('/:quizId',isAuthenticated,getQuiz);


//update
//put / quiz
router.put("/",isAuthenticated,updateQuiz);

//deleted
//delete  quiz/:quizId
router.delete('/:quizId',isAuthenticated,deleteQuiz);

//publish
//patch quiz/publish
router.patch("/publish",isAuthenticated,publishQuiz);


export default router;