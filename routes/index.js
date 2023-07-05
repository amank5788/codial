const express= require('express');
const router=express.Router();
const HomeController=require('../controllers/HomeController');


router.use('/',HomeController.Home);


console.log("router loaded");

module.exports = router;