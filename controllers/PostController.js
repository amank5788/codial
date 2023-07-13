const Post =require('../models/postSchema');


module.exports.feed_post = function(req,res){
    if(req.isAuthenticated()){
      Post.create({
        content : req.body.content,
        user : req.user._id
      }).then((pos)=>{
        console.log(`successfully posted yout post${pos}`);
        return res.redirect('back');
      }).catch((err)=>{
        console.log(`error while posting${err}`);
        return res.redirect('back');
      })
    }
    else{
      return res.redirect('/users/signin');
    }
    
  };