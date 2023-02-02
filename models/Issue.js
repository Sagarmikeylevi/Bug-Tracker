const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
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
},{
    timestamps: true
});

const Issue = mongoose.model('Issue' , issueSchema);
module.exports = Issue;