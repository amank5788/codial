const express = require('express');
const router = express.Router();



const UserController = require('../controllers/UserController');




router.get('/profile',UserController.profile);
router.get('/post',UserController.post);
router.get('/signin', UserController.Signin);
router.get('/signup', UserController.Signup);
router.get('/signout',UserController.Signout);
router.post('/signup_now', UserController.Signup_now);
router.post('/create_session', UserController.create_session);


module.exports =router;
