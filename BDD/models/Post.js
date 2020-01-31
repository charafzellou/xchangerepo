const db = require('../db');
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
        title: String,
        type: String 
});

const Post = db.model('Post', PostSchema);

module.exports = Post;
