import { getPost, getPosts, submitPost, deleteCurrentPost } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveNewPost = post => ({
  type: RECEIVE_NEW_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => dispatch => (
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);

export const fetchPost = postId => dispatch => (
  getPost(postId)
    .then(post => dispatch(receivePost(post)))
    .catch(err => console.log(err))
);

export const createPost = data => dispatch => (
  submitPost(data)
    .then(post => dispatch(receiveNewPost(post)))
    .catch(err => dispatch(err))
);

export const deletePost = (postId, data) => dispatch => (
  deleteCurrentPost(postId, data)
    .then(() => dispatch(removePost(postId)))
    .catch(err => console.log(err))
)
