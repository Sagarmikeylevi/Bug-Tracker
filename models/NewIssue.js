const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewIssueSchema = new Schema({
    issueType: {
        type: String,
        required: true
    },
    title: {
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
    priority: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
},{
    timestamps: true
});

const NewIssue = mongoose.model('NewIssue' , NewIssueSchema);
module.exports = NewIssue;