const express = require('express');
const app = express();

app.get('/healthcheck',(req,res)=>{

    res.send("connected successfully on server....")
    //testing update 123

})

app.listen(3001,()=>{
    console.log("server is running on 3001");
})
