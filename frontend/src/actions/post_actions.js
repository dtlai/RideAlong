import { getPost, getPosts, submitPost, deleteCurrentPost, searchPosts, addRequest, editPost, removeRequest } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveRequest = (post, user) => ({
  type: RECEIVE_REQUEST,
  post,
  user
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

export const createPost = (data) => (dispatch) => (
  submitPost(data)
    .then(
      (post) => dispatch(receiveNewPost(post)),
      (err) => {
        dispatch(receivePostErrors(err.response.data))
        throw new Error("Invalid post")
      }
    )
);

export const updatePost = (post) => dispatch => (
  editPost(post)
    .then(post => dispatch(receivePost(post)))
    .catch(err => console.log(err))
);

export const deletePost = (postId) => dispatch => (
  deleteCurrentPost(postId)
    .then(() => dispatch(removePost(postId)))
    .catch(err => console.log(err))
)

export const makeRequest = postId => dispatch => (
  addRequest(postId)
    .then(payload => dispatch(receiveRequest(payload.data)))
    .catch(err => console.log(err))
);

export const cancelRequest = postId => dispatch => (
  removeRequest(postId)
    .then(payload => dispatch(receiveRequest(payload.data)))
    .catch(err => console.log(err))
);

export const queryPosts = (data) => dispatch => (
  searchPosts(data)
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);
