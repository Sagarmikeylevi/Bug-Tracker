const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const projectController = require('../controllers/projectController');

router.get('/' , projectController.details);
module.exports = router;