module.exports.signIn = function(req , res){
    return res.render('user_signIn' , {
        title: 'BUG TRACKER | SIGN IN'
    });
}