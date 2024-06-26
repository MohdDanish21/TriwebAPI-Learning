const express =require('express');
const calculatorRouter=require('./routers/calculator');

const app=express();

app.use(express.json()); // how to use body parse so this the method to parse json body
app.get('/',(req,res)=>{
    // console.log(req);
    res.send("I am response");
});

// app.get('/add',(req,res)=>{
//     let n1=3;
//     let n2 =4;
//     let sum =n1+n2;
//     // res.send("Sum="+sum);
//     res.send(`sum=${sum}`);
// });

// app.post('/add',(req,res)=>{
//     // console.log(req.body);
//     // console.log(req.body.num1);    // if it gives body data then also give number one 
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
//     let sum=n1+n2;
//     // let sum=0;
//     res.send(`sum=${sum}`);
// });

// app.post('/subtract',(req,res)=>{ 
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
//     let diff=n1-n2;
//     res.send(`Difference=${diff}`);
// });

// app.post('/multiply',(req,res)=>{ 
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
//     let product=n1*n2;
//     res.send(`product=${product}`);
// });

// app.post('/divide',(req,res)=>{ 
//     let n1 = req.body.num1;
//     let n2 = req.body.num2;
//     let quotient=n1/n2;
//     res.send(`Quotient=${quotient}`);
// });

app.use('/calculator',calculatorRouter);

app.listen(3000);