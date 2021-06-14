// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import MainPage from './main/mainpage';

// const App = () => (
//  <div>
//    <Switch>
//      <Route exact path="/" component={MainPage}/>
//    </Switch>
//  </div>
// )

// export default App;

import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/mainpage";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;