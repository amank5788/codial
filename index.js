const express =require('express');
const port =80;

const app=express();



app.listen(port,function(err){
    if(err){
        console.log(`there is an error ${err}`);
    }
    console.log(`server is live on port ${port}`);
})