import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts')
};

export const getPost = postId => {
  return axios.get(`/api/posts/${postId}`)
};

export const submitPost = data => {
  return axios.post('/api/posts/create', data)
};

export const deleteCurrentPost = (postId, data) => {
  return axios.delete(`/api/posts/${postId}`, data);
}