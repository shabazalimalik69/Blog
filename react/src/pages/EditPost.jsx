import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { fetchPostById, updatePost } from '../api';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const getPost = async () => {
      const { data } = await fetchPostById(id);
      setPost(data);
    };
    getPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await updatePost(id, post, token);
      navigate('/');
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Edit Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            fullWidth
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Update Post
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditPost;
