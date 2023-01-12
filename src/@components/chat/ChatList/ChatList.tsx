import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import CustomScroll from 'react-custom-scroll';
// import { Scrollbars } from 'react-custom-scrollbars';
import { setIndexChat } from 'slice/indexChatSlice';
import { Channel } from 'typings/db';

import ChatBeforeModal2 from '@components/chat/ChatBeforeModal2/ChatBeforeModal2';
import ChatBeforeModal from '@components/chat/ChatBeforeModal/ChatBeforeModal';
import ChatRoom from '@components/chat/ChatRoom/ChatRoom';

import './ChatList.css';
import { ChatBox, Container } from './styles';

const ChatList = () => {
  const dispatcher = useDispatch();
  const ab: Channel = {
    channelHashTags: [{ id: 4, hashTag: { id: 1, tagName: 'hello' } }],
    channelName: '정현님짱',
    currentParticipants: 1,
    users: null,
    id: '624a43d9-7ffc-46dc-a040-b29db7dc5c41',
    limitParticipants: 15,
    timeToLive: 86400,
    channelType: 'chat',
  };
  const [showChatBeforeModal, setShowChatBeforeModal] = useState<boolean>(false);
  const [sendChannelInfo, setSendChannelInfo] = useState<Channel>(ab);
  const onClickChatBeforeModal = useCallback(
    (channel: Channel, i: number) => {
      setShowChatBeforeModal(true);
      setSendChannelInfo(channel);
      dispatcher(setIndexChat({ value: i }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sendChannelInfo],
  );
  const onCloseModal = useCallback(() => {
    setShowChatBeforeModal(false);
  }, []);

  const [test, setTest] = useState(false);
  const [opacity, setOpacity] = useState(100);

  function softRemover() {
    if (opacity > 96) {
      // 초기부터 바로 사라지는게 시작되면 메시지 전달할 시간이 부족할듯하여 초반에는 투명도를 1씩 천천히 변화 시켰다.
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 100);
    } else if (opacity > 5)
      // 초기 약 0.4초후에는 부드럽게 사라지도록 구현했다.
      setTimeout(() => {
        setOpacity(opacity - 8);
      }, 50); // 시간이 짧으수록 부드럽지만 리소스 소모가커지기 때문에 설정할때 고민이 필요한 부분이다.
  }
  useEffect(() => {
    softRemover(); // 해당 컴포넌트가 나타나면 함수가 바로실행됨.
  }, [softRemover]);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <div className="ChatList">
      <Container>
        <ChatBox>
          {/* <button
            onClick={() => {
              setOpacity(100);
              setTest(true);
              softRemover();
            }}>
            ddd
          </button>

          {test && (
            <div className="muteModal" style={{ opacity: `${opacity}%` }}>
              음소거 모드입니다.
            </div>
          )} */}
          <ChatRoom onClickChatBeforeModal={onClickChatBeforeModal}></ChatRoom>
          <ChatBeforeModal
            sendChannelInfo={sendChannelInfo}
            show={showChatBeforeModal}
            onCloseModal={onCloseModal}></ChatBeforeModal>
        </ChatBox>
      </Container>
      <ChatBeforeModal2
        sendChannelInfo={sendChannelInfo}
        show={showChatBeforeModal}
        onCloseModal={onCloseModal}></ChatBeforeModal2>
    </div>
  );
};

export default ChatList;
