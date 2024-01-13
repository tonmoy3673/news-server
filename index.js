 const express=require('express');
 const cors=require('cors');
 const categories=require('./Categories.json');
 const app=express();
 const port=5000;
 app.use(cors());
 app.get('/',(req,res)=>{
    res.send('News Server is Running')
 });

 app.listen(port,()=>{
    console.log(`News Server is running on port,{port}`)
 });
 