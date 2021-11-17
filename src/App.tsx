import BoardLayout from 'layouts/BoardLayout';
import MainLayout from 'layouts/MainLayout';
import ArticleDetail from 'pages/ArticleDetail';
import ArticlePost from 'pages/ArticlePost';
import Board from 'pages/Board';
import LogIn from 'pages/LogIn';
import Main from 'pages/Main';
import SignUp from 'pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="board" element={<BoardLayout />}>
        <Route path=":boardId" element={<Board />} />
      </Route>
      <Route path="article/post" element={<ArticlePost />} />
      <Route path="article/:articleId" element={<ArticleDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
