const express =require('express');

const port =8000;

const app=express();

// use express router 

app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`there is an error ${err}`);
    }
    console.log(`server is live on port ${port}`);
})