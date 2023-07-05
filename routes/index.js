const express= require('express');
const router=express.Router();
const HomeController=require('../controllers/HomeController');


router.get('/',HomeController.Home);
router.use('/users',require('./users'));


console.log("router loaded");

module.exports = router;