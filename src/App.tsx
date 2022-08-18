import Test from 'components/Aside/Test';
import BottomNav from 'components/BottomNav/BottomNav';
import Template from 'components/Templates';
import Article from 'pages/Article';
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
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const chatState = useSelector((store: any) => store.chatState.chatState);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Main />} />
          <Route path="board" element={<Board />}>
            <Route path=":boardName" element={<Board />} />
          </Route>

          <Route path="article/post" element={<ArticlePost />} />
          <Route path="article/:articleId" element={<Article />} />

          <Route path="mypage" element={<Mypage />} />
          <Route path="mypage/edit-privacy" element={<EditPrivacy />} />
          <Route path="mypage/FAQ" element={<FAQ />} />
          <Route path="mypage/question" element={<Question />} />
          <Route path="mypage/report" element={<Report />} />
          <Route path="mypage/request-board" element={<RequestBoard />} />
        </Route>

        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="chat" element={<Test />} />
      </Routes>
      {chatState !== 'chat' && chatState !== 'voicechat' && (
        <BottomNav></BottomNav>
      )}
    </BrowserRouter>
  );
}

export default App;
