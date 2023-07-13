const express= require('express');
const router=express.Router();

const PostController = require('../controllers/PostController');


router.post('/create', PostController.feed_post);

module.exports =router;