const express = require('express')

const app = express();
const port = 8000;

app.use("/",(req,res)=>{
    res.json({message:"Hello From Express App"});
})

app.listen(port,()=>{
    console.log("starting ")
})