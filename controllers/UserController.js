const User=require('../models/userSchema');



module.exports.profile =function(req,res){
    return  res.end("<h1> users profile</h1>");
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


  