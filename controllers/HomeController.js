const Post = require('../models/postSchema');

module.exports.Home = function(req, res){
  if(req.isAuthenticated()){
    Post.find().populate('user').exec().then((posts)=>{
      return res.render('home', {
        title: "Home",
        postsl: posts,
        auth: 1
        
    });
     }).catch((err)=>{
      console.log(`err while fatching ${err}`);
      return res.redirect('back');
     });
  }
  else{
    return res.render('home', {
      title: "Home",
      auth: 0
      
  });
  }

 
}

// module.exports.actionName = function(req, res){}