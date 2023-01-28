const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const passport = require('passport');

const SignInController = require('../controllers/userSignInController');

router.get('/' , SignInController.signIn);
router.post('/create-session' , passport.authenticate(
    'local',
    {failureRedirect: '/sign-in'},
) , SignInController.createSession);
module.exports = router;