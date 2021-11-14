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
      <Route path="/" element={<Main />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="board/:board_id" element={<Board />} />
      <Route path="article/post" element={<ArticlePost />} />
      <Route path="article/:article_id" element={<ArticleDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
