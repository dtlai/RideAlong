import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import PostsErrorReducer from './posts_error_reducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  posts: PostsErrorReducer,
});

export default errorsReducer;