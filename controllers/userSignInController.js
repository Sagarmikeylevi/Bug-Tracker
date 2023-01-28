const User = require("../models/User");

module.exports.signIn = function(req , res){
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('user_signIn' , {
        title: 'BUG TRACKER | SIGN IN'
    });
}

module.exports.createSession = function(req , res){
    return res.redirect('/home');    
}