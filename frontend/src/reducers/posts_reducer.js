import {RECEIVE_NEW_POST, RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST, RECEIVE_REQUEST} from '../actions/post_actions';

const PostsReducer = (state = {all:{}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_POST:
      newState.post = action.post.data;
      return newState;
    case RECEIVE_NEW_POST:
      newState.new = action.post.data;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    case RECEIVE_REQUEST:
      newState.post = action.post.post;
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;