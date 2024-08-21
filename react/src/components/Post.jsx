// Post.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Post = ({ post }) => (
  <Card sx={{ marginBottom: 2, width: '100%' }}>
    <CardContent>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
        {post.content.substring(0, 100)}...
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <strong>Author:</strong> {post.author}
      </Typography>
      <Button sx={{ marginTop: 1 }} variant="contained"  component={Link} to={`/posts/${post._id}`} color="primary">
        Action
      </Button>
    </CardContent>
  </Card>
);

export default Post;
