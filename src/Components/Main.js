import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Profile from './Profile';
import Home from './Home';
import About from './About';




const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Landing" component={Landing} />
    <About path='/About' component={About}/>
    <Route path="/Profile" component={Profile}/>   
  </Switch>
)

export default Main;
