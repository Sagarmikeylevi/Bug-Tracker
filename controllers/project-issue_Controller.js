const CompletedIssue = require("../models/CompletedIssue");
const InProcessIssue = require("../models/InProcessIssue");
const NewIssue = require("../models/NewIssue");
const Project = require("../models/Project");

module.exports.projectIssues = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);
        let newIssue = await NewIssue.find({});
        let ipIssues = await InProcessIssue.find({});
        let completeIssues = await CompletedIssue.find({});

        return res.render('project', {
            title: "PROJECT-ISSUE | BUG TRACKER",
            Project: project,
            NewIssues: newIssue,
            InProcessIssue: ipIssues,
            Completed: completeIssues
        });
    } catch (err) {
        console.log(`Error in project issue controller ${err}`);
        return;
    }
}

module.exports.createIssue = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);
        const issue = new NewIssue({
            issueType: req.body.issueType,
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            priority: req.body.priority,
            project: project.id
        });
        project.newIssues.push(issue);
        project.save();
        await NewIssue.create(issue);
        return res.redirect('back');

    } catch (error) {
        console.log(`Error in creating issues ${err}`);
        return;
    }
}

module.exports.deleteIssue = async (req, res) => {
    try {
        let issue = await NewIssue.findByIdAndDelete(req.params.id);
        await Project.findByIdAndUpdate(issue.project, { $pull: { newIssues: issue.id } });
        return res.redirect('back');
    } catch (err) {
        console.log(`Error in deleting issues ${err}`);
        return;
    }

}

module.exports.MoveToInProcess = async (req, res) => {
    try {
        let issue = await NewIssue.findById(req.params.id);
        const inProcess = new InProcessIssue({
            issueType: issue.issueType,
            title: issue.title,
            author: issue.author,
            description: issue.description,
            priority: issue.priority,
            project: issue.project
        });
        let project = await Project.findById(inProcess.project);
        await Project.findByIdAndUpdate(project, { $pull: { newIssues: issue.id } });
        project.ipIssues.push(inProcess);
        project.save();
        await InProcessIssue.create(inProcess);
        await NewIssue.findByIdAndDelete(req.params.id);
        return res.redirect('back');

    } catch (err) {
        console.log(`Error in inprocess issues ${err}`);
        return;
    }
}

module.exports.IPIsuueDelete = async (req, res) => {

    try {
        let issue = await InProcessIssue.findByIdAndDelete(req.params.id);
        await Project.findByIdAndUpdate(issue.project, { $pull: { ipIssues: issue.id } });
        return res.redirect('back');

    } catch (err) {
        console.log(`Error in deleting inprocess issues ${err}`);
        return;
    }
}

module.exports.MoveToCompleted = async (req, res) => {
    try {
        let issue = await InProcessIssue.findById(req.params.id);
        const completed = new InProcessIssue({
            issueType: issue.issueType,
            title: issue.title,
            author: issue.author,
            description: issue.description,
            priority: issue.priority,
            project: issue.project
        });
        let project = await Project.findById(completed.project);
        await Project.findByIdAndUpdate(project, { $pull: { ipIssues: issue.id } });
        project.completeIssues.push(completed);
        project.save();
        await CompletedIssue.create(completed);
        await InProcessIssue.findByIdAndDelete(req.params.id);
        return res.redirect('back');

    } catch (err) {
        console.log(`Error in completing issues ${err}`);
        return;
    }

}

module.exports.completedDelete = async (req, res) => {
    try {
        let issue = await CompletedIssue.findByIdAndDelete(req.params.id);
        await Project.findByIdAndUpdate(issue.project, { $pull: { completeIssues: issue.id } });
        return res.redirect('back');
    } catch (err) {
        console.log(`Error in deleting the completed issues ${err}`);
        return;
    }
}