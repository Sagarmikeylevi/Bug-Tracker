const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();
const passport = require('passport');

const HomeController = require('../controllers/home_controller');

router.get('/' , passport.checkAuthentication , HomeController.home);
router.post('/create-project' , HomeController.createProject);
router.get('/delete/:id' , HomeController.deleteProject);
router.post('/update/:id' , HomeController.updateProject);
module.exports = router;