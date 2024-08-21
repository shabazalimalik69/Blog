// PostForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const PostForm = ({ onSubmit, post = {} }) => {
  const [title, setTitle] = useState(post.title || '');
  const [content, setContent] = useState(post.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        required
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default PostForm;
