const CompletedIssue = require("../models/CompletedIssue");
const InProcessIssue = require("../models/InProcessIssue");
const NewIssue = require("../models/NewIssue");
const Project = require("../models/Project");

module.exports.projectIssues = function (req, res) {
    let id = req.params.id;
    Project.findById(id, function (err, project) {
        if (err) { console.log(`Error: ${err}`); return; }
        NewIssue.find({}, function (err, newissue) {
            if (err) { console.log(`Error: ${err}`); return; }
            InProcessIssue.find({}, function (err, inprocess) {
                if (err) { console.log(`Error2: ${err}`); return; }
                CompletedIssue.find({}, function (err, completed) {
                    if (err) { console.log(`Error2: ${err}`); return; }
                    return res.render('project', {
                        title: "PROJECT-ISSUE | BUG TRACKER",
                        Project: project,
                        NewIssues: newissue,
                        InProcessIssue: inprocess,
                        Completed: completed
                    });

                })

            })

        })

    })

}

module.exports.createIssue = function (req, res) {
    Project.findById(req.params.id , function(err , project){
        const issue = new NewIssue({
            issueType: req.body.issueType,
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            priority: req.body.priority,
            project: project.id
        });
        NewIssue.create(issue, function (err) {
            if (err) { console.log(`Error: ${err}`); return; }
            return res.redirect('back');
        });
    })
    
   
}

module.exports.deleteIssue = function (req, res) {
    NewIssue.findByIdAndDelete(req.params.id, function (err) {
        if (err) { console.log(`Error: ${err}`); return; }
        return res.redirect('back');
    })
}


module.exports.MoveToInProcess = function (req, res) {
    NewIssue.findById(req.params.id, function (err, issue) {
        if (err) { console.log(`Error: ${err}`); return; }
        const inProcess = new InProcessIssue({
            issueType: issue.issueType,
            title: issue.title,
            author: issue.author,
            description: issue.description,
            priority: issue.priority,
            project: issue.project
        });

        InProcessIssue.create(inProcess, function (err) {
            if (err) { console.log(`Error: ${err}`); return; }
            NewIssue.findByIdAndDelete(req.params.id, function (err) {
                if (err) { console.log(`Error: ${err}`); return; }
                return res.redirect('back');
            })
        });


    })
}

module.exports.IPIsuueDelete = function (req, res) {
    InProcessIssue.findByIdAndDelete(req.params.id, function (err) {
        if (err) { console.log(`Error: ${err}`); return; }
        return res.redirect('back');
    })
}

module.exports.MoveToCompleted = function (req, res) {
    InProcessIssue.findById(req.params.id, function (err, issue) {
        if (err) { console.log(`Error: ${err}`); return; }
        const completed = new InProcessIssue({
            issueType: issue.issueType,
            title: issue.title,
            author: issue.author,
            description: issue.description,
            priority: issue.priority,
            project: issue.project
        });

        CompletedIssue.create(completed, function (err) {
            if (err) { console.log(`Error: ${err}`); return; }
            InProcessIssue.findByIdAndDelete(req.params.id, function (err) {
                if (err) { console.log(`Error: ${err}`); return; }
                return res.redirect('back');
            });
        });
    });
}

module.exports.completedDelete = function(req , res){
    CompletedIssue.findByIdAndDelete(req.params.id, function (err) {
        if (err) { console.log(`Error: ${err}`); return; }
        return res.redirect('back');
    })
}