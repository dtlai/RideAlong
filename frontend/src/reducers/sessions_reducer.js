import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.currentUser
      }
    default:
      return state;
  }
}