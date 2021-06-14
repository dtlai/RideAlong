import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main/mainpage';
import './app.scss';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainPage}/>
    </Switch>
  </div>
)

export default App;