const { serializeUser } = require("passport");
const CompletedIssue = require("../models/CompletedIssue");
const InProcessIssue = require("../models/InProcessIssue");
const NewIssue = require("../models/NewIssue");
const Project = require("../models/Project");

module.exports.home = async (req, res) => {
    try {
        if (!req.isAuthenticated()) {
            return res.redirect('/sign-in');
        }

        let project = await Project.find({});
        return res.render('home', {
            title: 'HOME | BUG TRACKER',
            projects: project
        });
    } catch (err) {
        console.log(`Error in home controller ${err}`);
        return;
    }

}

module.exports.createProject = async (req, res) => {

    try {
        const newProject = new Project({
            title: req.body.title,
            titleColor: req.body.titleColor,
            author: req.body.author,
            description: req.body.description,
            projectTypes: req.body.projectTypes,
            priority: req.body.priority,
            user: req.user._id
        });
        await Project.create(newProject);
        return res.redirect('/home');

    } catch (err) {
        console.log(`Error in creating the project ${err}`);
        return;
    }
}

module.exports.deleteProject = async (req, res) => {

    try {
        let project = await Project.findById(req.params.id);
        if (project.id == req.params.id) {
            project.remove();
            await NewIssue.deleteMany({ project: req.params.id });
            await InProcessIssue.deleteMany({ project: req.params.id });
            await CompletedIssue.deleteMany({ project: req.params.id });
        }
        return res.redirect('/home');

    } catch (err) {
        console.log(`Error in deleting the project ${err}`);
        return;
    }
}

module.exports.updateProject = async (req, res) => {
    try {
        await Project.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                titleColor: req.body.titleColor,
                author: req.body.author,
                description: req.body.description,
                projectTypes: req.body.projectTypes,
                priority: req.body.priority
            }
        });
        return res.redirect('/home');
    } catch (err) {
        console.log(`Error in updating the project ${err}`);
        return;
    }
}
