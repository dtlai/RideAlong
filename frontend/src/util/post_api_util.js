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

export const deleteCurrentPost = (postId) => {
  return axios.delete(`/api/posts/${postId}`);
}

export const searchPosts = (data) => {
  return axios.get(`/api/posts/search?startLocation=${data.startLocation}&endLocation=${data.endLocation}`)
}