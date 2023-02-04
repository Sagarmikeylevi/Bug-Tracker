const express = require('express');
const { appendFile } = require('fs');
const router = express.Router();

const ProjectIssueController = require('../controllers/project-issue_Controller');
const { route } = require('./home');

router.get('/:id' , ProjectIssueController.projectIssues);
router.post('/create-issue' , ProjectIssueController.createIssue);
router.get('/delete-new/:id' , ProjectIssueController.deleteIssue);
router.get('/move-inprocess/:id' , ProjectIssueController.MoveToInProcess);
router.get('/delete-inprocess/:id' , ProjectIssueController.IPIsuueDelete);
router.get('/move-complete/:id' , ProjectIssueController.MoveToCompleted);
router.get('/delete-completed/:id' , ProjectIssueController.completedDelete);
module.exports = router;