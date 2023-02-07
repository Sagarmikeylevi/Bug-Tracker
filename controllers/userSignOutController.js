module.exports.signOut = async (req , res) =>{
    req.logout(function(err) {
        if (err) { return next(err); }
    });
    req.flash('success' , 'You have logged out');
    return res.redirect('/sign-in');
}