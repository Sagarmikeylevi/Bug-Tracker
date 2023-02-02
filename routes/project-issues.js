const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const ProjectIssueController = require('../controllers/project-issue_Controller');
const { route } = require('./home');

router.get('/:id' , ProjectIssueController.projectIssues);
router.post('/create-issue' , ProjectIssueController.createIssue);
router.get('/delete/:id' , ProjectIssueController.deleteIssue);
module.exports = router;