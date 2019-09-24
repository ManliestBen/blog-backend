const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var blogSchema = new Schema({
    author: {type: String},
    post: {type: String},
    title: {type: String}
})



module.exports = mongoose.model('Blog', blogSchema);