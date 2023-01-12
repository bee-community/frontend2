import { QueryClient, QueryClientProvider } from 'react-query';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Article from '@pages/Article/Article';
import ArticlePost from '@pages/ArticlePost';
import Board from '@pages/Board';
import EditPrivacy from '@pages/EditPrivacy';
import FAQ from '@pages/FAQ';
import LogIn from '@pages/LogIn';
import Main from '@pages/Main';
import Category from '@pages/Mobile/Category/Category';
import Mypage from '@pages/Mypage';
import Question from '@pages/Question';
import Report from '@pages/Report';
import RequestBoard from '@pages/RequestBoard';
import SignUp from '@pages/SignUp';
import Today from '@pages/Today';

import BottomNav from '@components/BottomNav/BottomNav';
import Template from '@components/Templates';
import Chat from '@components/chat/Aside/Chat';

const queryClient = new QueryClient();
function App() {
  const chatState = useSelector((store: any) => store.chatState.chatState);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Main />} />
            <Route path="board" element={<Board />}>
              <Route path=":boardName" element={<Board />} />
            </Route>

            <Route path="article/post" element={<ArticlePost />} />
            <Route path="article/:articleId" element={<Article />} />
            <Route path="articles/:type" element={<Today />} />

            <Route path="mypage" element={<Mypage />} />
            <Route path="mypage/edit-privacy" element={<EditPrivacy />} />
            <Route path="mypage/FAQ" element={<FAQ />} />
            <Route path="mypage/question" element={<Question />} />
            <Route path="mypage/report" element={<Report />} />
            <Route path="mypage/request-board" element={<RequestBoard />} />
          </Route>

          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="chat" element={<Chat />} />
          <Route path="menu" element={<Category />} />
        </Routes>
        {chatState !== 'chat' && chatState !== 'voicechat' && <BottomNav></BottomNav>}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
