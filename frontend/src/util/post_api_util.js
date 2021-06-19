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

export const editPost = (post) => {
  return axios.put(`/api/posts/edit`, post)
};

export const deleteCurrentPost = (postId) => {
  return axios.delete(`/api/posts/${postId}`);
}

export const addRequest = postId => {
  return axios.put(`/api/posts/${postId}/request`)
};

export const removeRequest = postId => {
  return axios.put(`/api/posts/${postId}/cancel`)
};
export const searchPosts = (data) => {
  return axios.get(`/api/posts/search?startLocation=${data.startLocation}&endLocation=${data.endLocation}`)
}
