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
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUzNzQ0NzE2LCJpYXQiOjE2NTM3MjY3MTZ9.8WrLO9PUhQJo8dwDq6tTbrMzoIc8J21MixHd3HwOt2VvwKaougz4Q2U2Y9ttzqhFkjhhTL5S6amYBmhEpebSKg',
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
