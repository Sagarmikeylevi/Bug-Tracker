const Issue = require("../models/Issue");
const Project = require("../models/Project");

module.exports.projectIssues = function(req , res){
    let id = req.params.id;
    Project.findById(id , function(err , project){
        if(err) {console.log(`Error: ${err}`); return;}
        Issue.find({} , function(err , issue){
            if(err) {console.log(`Error: ${err}`); return;}
            return res.render('project' , {
                title: "PROJECT-ISSUE | BUG TRACKER",
                Project: project,
                Issue: issue
            });
        })
        
    });
}

module.exports.createIssue = function(req , res){
    Issue.create(req.body , function(err){
        if(err) {console.log(`Error: ${err}`); return;}
        return res.redirect('back');
    });
}

module.exports.deleteIssue = function(req , res){
    Issue.findByIdAndDelete(req.params.id , function(err){
        if(err) {console.log(`Error: ${err}`); return;}
        return res.redirect('back');
    })
}
