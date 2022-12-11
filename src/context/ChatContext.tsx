import { createContext, FC, useRef, useState } from 'react';

const ChatContext = createContext({});

export const ChatProvider: FC = ({ children }) => {
  const [client, setClient] = useState({});
  const [stompSubscribe, setStompSubscribe] = useState({});

  const scrollBarRef = useRef<any>(null);
  const [channelInfo, setChannelInfo] = useState({});

  // const [jwt, setJwt] = useState<string>('');
  const [chatList, setChatList] = useState<any>([]);

  return (
    <ChatContext.Provider
      value={{
        client,
        setClient,
        stompSubscribe,
        setStompSubscribe,
        scrollBarRef,
        channelInfo,
        setChannelInfo,
        chatList,
        setChatList,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
