const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find({isDeleted:false});
  return res.status(200).json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findOne({_id:req.params.id,isDeleted:false});

  if (post) {
    return res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
    author: req.user.name,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

exports.deletePost = async (req, res) => {
  console.log("Triggered")
   const post = await Post.findByIdAndUpdate(req.params.id,{isDeleted:true},{new:true});

  if (!post) {
    return res.json({ message: 'Post not foundd' });
  };
  return res.status(202).json({ message: 'Post deleted' });

};
