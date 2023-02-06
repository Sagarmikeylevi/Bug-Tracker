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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    newIssues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'NewIssue'
        }
    ],
    ipIssues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'InProcessIssue'
        }
    ],
    completeIssues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CompletedIssue'
        }
    ],
},{
    timestamps: true
});

const Project = mongoose.model('Project' , projectSchema);
module.exports = Project;
