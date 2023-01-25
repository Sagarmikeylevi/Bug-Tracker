const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const ProjectController = require('../controllers/projectController');

router.get('/' , ProjectController.details);
module.exports = router;