import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
 <div>
   <Switch>
     <Route exact path="/" component={MainPage}/>
   </Switch>
 </div>
)