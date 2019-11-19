import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../src/pages/login/index'
import Profile from '../src/pages/profile/index'
import Register from '../src/pages/register/index'
// import { Container } from './styles';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
         <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} /> 
      </Switch>
    </BrowserRouter>
  );
}
