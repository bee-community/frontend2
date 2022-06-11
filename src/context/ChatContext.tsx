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
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZHkiLCJleHAiOjE2NTQ5MzM5NDUsImlhdCI6MTY1NDkxNTk0NX0.mAjma7CAkBG3HkV1RUb3sJlMtNH9HidmBy7rYEvkyJAD21lUQ4mWuyIAJkJIt8asyfIUgDtObX5dmA7UgNgTtQ',
  );
  const [chatState, setChatState] = useState('chatList');
  const [chatColor, setChatColor] = useState('chatList');
  // const [jwt, setJwt] = useState<string>('');
  const [chatList, setChatList] = useState<any>([]);

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
        chatColor,
        setChatColor,
        chatList,
        setChatList,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
