const express =require('express');
const cors= require('cors');
const app = express();
const mongoose=require('mongoose');
const Product=require('./model/product');

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("It is Running");
});

app.post('/product',async(req,res)=>{
    try {
        
       const result=await Product.save(req.body);
       console.log(result);
       res.send(result);
    } catch (error) {
        console.log(error.message);
        res.send({status:'error',message:error.message});
    }
});
mongoose.connect(process.env.connectionString)
.then((success)=>app.listen(3004))
.catch((err)=>console.log(err.message));
