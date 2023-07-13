const express = require('express');
const router = express.Router();
const passport = require('passport');



const UserController = require('../controllers/UserController');




router.get('/profile',passport.checkAuthentication ,UserController.profile);
router.get('/signin', UserController.Signin);
router.get('/signup', UserController.Signup);
router.post('/signup_now', UserController.Signup_now);
router.get('/signout',UserController.destroy_session);


router.post('/create_session',passport.authenticate(
 'local',
 {failureRedirect: '/user/signin'},    
),UserController.createSession);



module.exports =router;
