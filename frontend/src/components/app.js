import React from 'react';

import './app.scss';
import MainPageContainer from './main/mainpage_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PostsContainer from "./posts/posts_container";
import PostFormContainer from './posts/post_form_container';
import PostShowContainer from './posts/post_show_container';
import AboutUs from './about_us/about_us';
import UserProfContainer from './user_prof/user_prof_container'
import Footer from './footer/footer';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer}></Route>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={UserProfContainer} />
      <Route exact path="/posts" component={PostsContainer} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/" component={MainPageContainer} />
      <ProtectedRoute
        exact
        path="/posts/create"
        component={PostFormContainer}
      />
      <Route exact path="/posts/:postId" component={PostShowContainer} />
    </Switch>
    <Route path="/" component={Footer}></Route>
  </div>
);

export default App;