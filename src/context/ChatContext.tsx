import { createContext, FC, useRef, useState } from 'react';

const ChatContext = createContext({});

export const ChatProvider: FC = ({ children }) => {
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    username: '',
    userEmail: '',
    receivername: '',
    connected: false,
    message: '',
  });
  const [userChatName, setUsersChatName] = useState([]);
  const [client, setClient] = useState({});
  const [happy, setHappy] = useState({});
  const [liveTime, setLivetime] = useState('');
  const [indexChat, setIndexChat] = useState(0);
  const [endTTL, setEndTTL] = useState(false);
  const [chatcount, setChatcount] = useState(0);
  const scrollBarRef = useRef<any>(null);
  const [logId, setLogId] = useState(0);
  const [channelInfo, setChannelInfo] = useState({});
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZHkiLCJleHAiOjE2NTQ1MTE0NDAsImlhdCI6MTY1NDQ5MzQ0MH0.pt0MsoYNmLQ7JC0UxuQPvTWUHwVzajxDmuWftnhK1KPxLdoSSwieZj-L0tQ7sg0RbabU7DWiPnVgMv-Eoiga6A',
  );
  const [chatState, setChatState] = useState('chatList');
  // const [jwt, setJwt] = useState<string>('');
  return (
    <ChatContext.Provider
      value={{
        userData,
        setUserData,
        publicChats,
        setPublicChats,
        client,
        setClient,
        userChatName,
        setUsersChatName,
        liveTime,
        setLivetime,
        indexChat,
        setIndexChat,
        endTTL,
        setEndTTL,
        scrollBarRef,
        chatcount,
        setChatcount,
        logId,
        setLogId,
        channelInfo,
        setChannelInfo,
        happy,
        setHappy,
        token,
        setToken,
        chatState,
        setChatState,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
