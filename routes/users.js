const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/profile',UserController.profile);
router.get('/post',UserController.post);

module.exports =router;
