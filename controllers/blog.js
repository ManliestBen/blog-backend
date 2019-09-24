const Blog = require('../models/blog')

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost
}

function getOnePost(req, res) {
    Blog.findById(req.params.id).then(post =>{
      res.status(200).json(post);
    });
}

function deletePost(req, res) {
    Blog.findByIdAndRemove(req.params.id).then(blog => {
        res.status(200).json(blog);
    })
}

function getAllPosts(req, res) {
    Blog.find({}).then(posts => {
        res.status(200).json(posts);
    });
}

function createPost(req, res) {
    Blog.create(req.body).then(post=> {
      res.status(201).json(post);
    });
}