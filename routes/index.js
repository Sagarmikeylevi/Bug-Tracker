const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

router.get('/' , function(req , res){
    return res.redirect('/home');
})
router.use('/home' , require('./home'));
router.use('/project-issue' , require('./project-issues'));
router.use('/sign-in' , require('./sign-in'));
router.use('/sign-up' , require('./sign-up'));


console.log("Router Conneted");
module.exports = router
