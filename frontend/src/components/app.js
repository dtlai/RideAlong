import React from 'react';

import MainPage from './main/mainpage';
import './app.scss';

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
// import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PostsContainer from "./posts/posts_container";
import PostFormContainer from './posts/post_form_container';
import PostItemContainer from './posts/post_item_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <Route exact path="/posts/:postId" component={PostItemContainer} /> */}
      <Route exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/posts/create" component={PostFormContainer} />
    </Switch>
  </div>
);

export default App;