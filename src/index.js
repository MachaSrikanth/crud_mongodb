const express = require('express');
const app = express();

app.get('/healthcheck',(req,res)=>{

    res.send("connected successfully.")
})

app.listen(3000,()=>{
    console.log("server is running on 3000");
})