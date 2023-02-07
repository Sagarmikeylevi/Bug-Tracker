const User = require("../models/User");

module.exports.signUp = (req , res) =>{
    if(req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('user_signUp' , {
        title: 'BUG TRACKER | SIGN UP'
    });
}

module.exports.create = async (req , res) =>{
    try {
        if(req.body.password != req.body.confirm_password){
            return res.redirect('back');
        }
    
        let user = await User.findOne({email: req.body.email});
    
        if(!user){
            let user = await User.create(req.body);
            return res.redirect('/sign-in');
        }else{
            req.flash('error' , 'Already have an account');
            return res.redirect('back');
        }
    } catch (err) {
        console.log(`Error in signing in ${err}`);
        return;
    }
    

}