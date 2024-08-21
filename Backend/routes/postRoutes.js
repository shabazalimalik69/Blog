const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const auth = require('../middleware/auth');

router.get('/getPosts', getPosts);
router.get('/getPost/:id', getPostById);
router.post('/addPost', auth, createPost);
router.put('/editPost/:id', auth, updatePost);
router.patch('/deletePost/:id', auth, deletePost);

module.exports = router;
