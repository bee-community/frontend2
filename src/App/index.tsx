import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import PostAdd from '../pages/PostAdd';
import PostDetail from '../pages/PostDetail';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={Home} />
    <Route path="/mypage" component={MyPage} />
    <Route path="/postDetail" component={PostDetail} />
    <Route path="/postAdd" component={PostAdd} />
  </Switch>
);

export default App;
