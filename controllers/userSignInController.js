const User = require("../models/User");

module.exports.signIn = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/home');
    }
    return res.render('user_signIn', {
        title: 'BUG TRACKER | SIGN IN'
    });
}

module.exports.createSession = async (req, res) => {
    req.flash('success' , 'Logged in Successfully');
    return res.redirect('/home');
}