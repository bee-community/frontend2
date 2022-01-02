import Layout from 'layouts/Layout';
import ArticleDetail from 'pages/ArticleDetail';
import ArticlePost from 'pages/ArticlePost';
import Board from 'pages/Board';
import LogIn from 'pages/LogIn';
import Main from 'pages/Main';
import Mypage from 'pages/Mypage';
import SignUp from 'pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="board/:boardId" element={<Board />} />
          <Route path="article/post" element={<ArticlePost />} />
          <Route path="article/:articleId" element={<ArticleDetail />} />
          <Route path="mypage" element={<Mypage />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
