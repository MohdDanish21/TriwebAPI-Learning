import express from 'express';


// import {Request,Response} from 'express';
import userRoute from './Routes/user';

const app= express();


// app.get('/',(req:Request,res:Response)=>{
//     res.send(" i m root of the server");

// });

 app.use('/user',userRoute);
 app.listen(process.env.PORT);
// // app.use(require('./routes/auth'));

