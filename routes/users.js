const express = require('express');
const router = express.Router();



const UserController = require('../controllers/UserController');




router.get('/profile',UserController.profile);
router.get('/post',UserController.post);
router.get('/signin', UserController.Signin);
router.get('/signup', UserController.Signup);
router.post('/signup_now', UserController.Signup_now);



module.exports =router;
