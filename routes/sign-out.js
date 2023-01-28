const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const SignOutController = require('../controllers/userSignOutController');

router.get('/' , SignOutController.signOut);
module.exports = router;