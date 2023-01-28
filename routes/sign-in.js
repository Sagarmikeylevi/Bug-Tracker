const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const SignInController = require('../controllers/userSignInController');

router.get('/' , SignInController.signIn);
module.exports = router;