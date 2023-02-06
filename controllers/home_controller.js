const { serializeUser } = require("passport");
const CompletedIssue = require("../models/CompletedIssue");
const InProcessIssue = require("../models/InProcessIssue");
const NewIssue = require("../models/NewIssue");
const Project = require("../models/Project");
module.exports.home = function(req , res){
    if(!req.isAuthenticated()){
        return res.redirect('/sign-in');
    }
    Project.find({} , function(err , project){
        if(err) {console.log(`Error: ${err}`); return;}
        return res.render('home', { 
            title: 'HOME | BUG TRACKER',
            projects: project
         });
    });
}



module.exports.createProject = function(req , res){
    const newProject = new Project({
        title: req.body.title,
        titleColor: req.body.titleColor,
        author: req.body.author,
        description: req.body.description,
        projectTypes: req.body.projectTypes,
        priority: req.body.priority,
        user: req.user._id
    });
    Project.create(newProject , function(err , project){
        if(err) {console.log(`Error: ${err}`); return;}
        return res.redirect('/home');
    });
}

module.exports.deleteProject = function(req , res){
    Project.findById(req.params.id , function(err , project){
        if(err) {console.log(`Error: ${err}`); return;}
        project.remove();
        NewIssue.deleteMany({project: req.params.id} , function(err){
            if(err) {console.log(`Error: ${err}`); return;}
            InProcessIssue.deleteMany({project: req.params.id} , function(err){
                if(err) {console.log(`Error: ${err}`); return;}
                CompletedIssue.deleteMany({project: req.params.id} , function(err){
                    if(err) {console.log(`Error: ${err}`); return;}
                });
            });
        });
        return res.redirect('/home');
    });
}

module.exports.updateProject = function(req , res){
    console.log(req.params.id);
    Project.findByIdAndUpdate({_id: req.params.id} , {
        $set:{
            title: req.body.title,
            titleColor: req.body.titleColor,
            author: req.body.author,
            description: req.body.description,
            projectTypes: req.body.projectTypes,
            priority: req.body.priority
        }
    }, function(err){
        if(err) {console.log(`Error: ${err}`); return;}
        return res.redirect('/home');
    })
    
}