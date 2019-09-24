var express = require('express')
var router = express.Router()
var blogCtrl = require('../controllers/blog')


router.get('/posts', blogCtrl.getAllPosts)
router.put('/post/:id', blogCtrl.getOnePost)
router.post('/post', blogCtrl.createPost)
router.delete('/post/:id', blogCtrl.deletePost)

module.exports = router