import { createContext, FC, useRef, useState } from 'react';

const ChatContext = createContext({});

export const ChatProvider: FC = ({ children }) => {
  const [publicChats, setPublicChats] = useState([]);
  const [userData, setUserData] = useState({
    username: '',
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
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjU0MzE5MDAwLCJpYXQiOjE2NTQzMDEwMDB9._igiKOGwKJUGbftbgvtPZozF1yvUg9yhAo_YO50cPapk1V0Fj7x9ujNRYMFaKm2nvEFEGij862Sp8RYDC7X26Q',
  );
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
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
