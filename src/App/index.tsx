import React from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = loadable(() => import('pages/Home'));
const MyPage = loadable(() => import('pages/MyPage'));
const PostAdd = loadable(() => import('pages/PostAdd'));
const PostDetail = loadable(() => import('pages/PostDetail'));

const App = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path="/home" component={Home} />
    <Route path="/mypage" component={MyPage} />
    <Route path="/postDetail" component={PostDetail} />
    <Route path="/postAdd" component={PostAdd} />
  </Switch>
);

export default App;
