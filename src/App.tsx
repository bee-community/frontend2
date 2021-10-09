import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const App = () => (
  <Switch>
    <Redirect exact path="/" to="/login" />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
  </Switch>
);

export default App;
