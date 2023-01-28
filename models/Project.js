const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    titleColor: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectTypes: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

const Project = mongoose.model('Project' , projectSchema);
module.exports = Project;
