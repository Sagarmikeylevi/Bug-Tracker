const Project = require("../models/Project");


module.exports.details = function(req , res){
    res.render('project', { 
        title: 'PROJECT | BUG TRACKER'
     });
}
