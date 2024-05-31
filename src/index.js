const express = require('express');
const app = express();

app.get('/healthcheck',(req,res)=>{

    res.send("connected successfully on server 3001.")
    //test
})

app.listen(3001,()=>{
    console.log("server is running on 3001");
})
