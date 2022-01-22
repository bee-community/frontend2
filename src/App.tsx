import Layout from 'layouts/Layout';
import ArticleDetail from 'pages/ArticleDetail';
import ArticlePost from 'pages/ArticlePost';
import Board from 'pages/Board';
import EditPrivacy from 'pages/EditPrivacy';
import FAQ from 'pages/FAQ';
import LogIn from 'pages/LogIn';
import Main from 'pages/Main';
import Mypage from 'pages/Mypage';
import Question from 'pages/Question';
import Report from 'pages/Report';
import RequestBoard from 'pages/RequestBoard';
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
          <Route path="mypage/edit-privacy" element={<EditPrivacy />} />
          <Route path="mypage/FAQ" element={<FAQ />} />
          <Route path="mypage/question" element={<Question />} />
          <Route path="mypage/report" element={<Report />} />
          <Route path="mypage/request-board" element={<RequestBoard />} />
        </Route>

        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
