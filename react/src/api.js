import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);

export const fetchPosts = () => API.get('/posts/getPosts');
export const fetchPostById = (id) => API.get(`/posts/getPost/${id}`);
export const createPost = (newPost, token) => API.post('/posts/addPost', newPost, {
  headers: { authorization: `Bearer ${token}` },
});
export const updatePost = (id, updatedPost, token) => API.put(`/posts/editPost/${id}`, updatedPost, {
  headers: { authorization: `Bearer ${token}` },
});
export const deletePost = (id, token) => API.patch(`/posts/deletePost/${id}`,{}, {
  headers: { authorization: `Bearer ${token}` },
});
