import {RECEIVE_NEW_POST, RECEIVE_POST, RECEIVE_POSTS} from '../actions/post_actions';

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
    default:
      return state;
  }
};

export default PostsReducer;