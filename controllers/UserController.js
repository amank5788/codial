const User=require('../models/userSchema');



module.exports.profile =function(req,res){
  if(req.cookies.user_id){
   User.findById(req.cookies.user_id).then((user)=>{
    console.log(`you are logged in: ${user.name}`);
    return res.render('profile',{
      name: user.name

    });
   }).catch((err)=>{
    console.log(`cookies id not found ${err}`);
    return res.redirect('/users/signin');
   }); 
 
}
else{
  console.log('cookies is not there',req.cookies);
  return res.redirect('/users/signin');
}

    
  };

module.exports.post =function(req,res){
    return  res.end("<h1> users profile has posted something</h1>");
  };  
  module.exports.Signin =function(req,res){
    return res.render('sign_in');
  };
  
  module.exports.Signup =function(req,res){
    return res.render('sign_up');
  };
  module.exports.Signup_now =function(req,res){
    if(req.password != req.confirm_password){
      return res.redirect('back');
    }
   User.findOne({email: req.body.email}).then((user)=>{
    if(!user){
      User.create(req.body).then((user)=>{
        console.log(`successsfully cretes user: ${user}`);
        return res.render('sign_in');
      }).catch((err)=>{
        if(err){
          console.log(`error in creating user while signing up: ${err}`);
          return;
        }
      });
    }
   }).catch((err)=>{
    if(err){
      console.log(`error in finding user while signing up: ${err}`); 
      return;
    }
   });
  };

  module.exports.create_session =function(req,res){
    
   User.findOne({email: req.body.email}).then((user)=>{
    if(user && user.password==req.body.password){
      console.log(`you are logged in : ${user.name}`);
      res.cookie(
        'user_id',user._id);
       
      return res.render('profile',{
        name: user.name
      });
    }
    return res.redirect('back');
   }).catch((err)=>{
    if(err){
      console.log(`error in finding user while signing up: ${err}`); 
      return;
    }
   });
  };

  module.exports.Signout=function(req,res){
    
    res.clearCookie('user_id');
    
    return res.redirect('/users/signin');
  }
  