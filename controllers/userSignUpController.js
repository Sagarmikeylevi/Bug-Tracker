const User = require("../models/User");

module.exports.signUp = function(req , res){
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('user_signUp' , {
        title: 'BUG TRACKER | SIGN UP'
    });
}

module.exports.create = function(req , res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email} , function(err , user){
        if(err) {console.log('error'); return;}

        if(!user){
            User.create(req.body , function(err , user){
                if(err) {console.log('error'); return;}

                return res.redirect('/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}