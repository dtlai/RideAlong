import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main/mainpage';
import PostIndexMap from './google_maps/post_index_map';

const App = () => (
 <div>
   <Switch>
     <Route exact path="/" component={MainPage}/>
     <Route exact path="/maps" component={PostIndexMap}/>
   </Switch>
 </div>
)

export default App;