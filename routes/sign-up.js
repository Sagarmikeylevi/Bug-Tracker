const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const SignUpController = require('../controllers/userSignUpController');

router.get('/' , SignUpController.signUp);
module.exports = router;