
const express =require('express');
const expressLayouts = require('express-ejs-layouts');

const db=require('./config/mongoose');
const cookieParser = require('cookie-parser');
const { urlencoded } = require('body-parser');

const port =5000;

const app=express();

// use express router 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));
app.use(express.static('assets'));





app.set('view engine','ejs');
app.set('views','./views');





app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.listen(port,function(err){
    if(err){
        console.log(`there is an error ${err}`);
    }
    console.log(`server is live on port ${port}`);
})