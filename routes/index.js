const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const HomeController = require('../controllers/home_controller');

router.get('/' , HomeController.home);
router.post('/create-project' , HomeController.createProject);
router.get('/delete/:id' , HomeController.deleteProject);
router.post('/update/:id' , HomeController.updateProject);
router.use('/project' , require('./projects'));


console.log("Router Conneted");
module.exports = router
