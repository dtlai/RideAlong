import {
  RECEIVE_NEW_POST,
  RECEIVE_POST_ERRORS,
} from "../actions/post_actions";

const _nullErrors = [];

const PostsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case RECEIVE_NEW_POST:
      return _nullErrors;
    default:
      return state;
  }
};

export default PostsErrorsReducer;
