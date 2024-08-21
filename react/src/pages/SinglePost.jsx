import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Typography, Container, Paper } from '@mui/material';
import { fetchPostById, deletePost } from '../api';

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await fetchPostById(id);
      setPost(data);
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    await deletePost(id, token);
    navigate('/');
  };

  if (!post) return <p>Loading...</p>;

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h3" gutterBottom>{post.title}</Typography>
        <Typography variant="body1" paragraph>{post.content}</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          <strong>Author:</strong> {post.author}
        </Typography>
        <Button variant="contained" color="error" onClick={handleDelete}>Delete Post</Button>
        <Button variant="contained" color="primary" component={Link} to={`/edit-post/${post._id}`} sx={{ marginLeft: 2 }}>
          Edit Post
        </Button>
      </Paper>
    </Container>
  );
};

export default SinglePost;
