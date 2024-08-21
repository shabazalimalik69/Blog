import React from 'react';
import PostForm from '../components/PostForm';
import { createPost } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
const CreatePost = () => {
    const navigate = useNavigate();
  const handleSubmit = async (newPost) => {
    const token = localStorage.getItem('token');
    await createPost(newPost, token);
    navigate('/');  };

  return (
    <div>
      <h1>Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;
