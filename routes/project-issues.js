const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const ProjectIssueController = require('../controllers/project-issue_Controller');

router.get('/' , ProjectIssueController.details);
module.exports = router;