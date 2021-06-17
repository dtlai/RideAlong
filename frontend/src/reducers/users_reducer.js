import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_REQUEST} from '../actions/post_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign(newState, action.user.data);
    case RECEIVE_REQUEST:
      return Object.assign(newState, action.post.user);
    default:
      return state;
  }
};

export default UsersReducer;