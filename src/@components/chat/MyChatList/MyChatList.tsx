import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// import CustomScroll from 'react-custom-scroll';
// import { Scrollbars } from 'react-custom-scrollbars';
import { setIndexChat } from 'slice/indexChatSlice';
import { Channel } from 'typings/db';

import ChatBeforeModal2 from '@components/chat/ChatBeforeModal2/ChatBeforeModal2';
import ChatBeforeModal from '@components/chat/ChatBeforeModal/ChatBeforeModal';
import '@components/chat/ChatList/ChatList.css';
import ChatRoomMy from '@components/chat/ChatRoomMy/ChatRoomMy';

import { ChatBox, Container } from '../ChatList/styles';

const MyList = () => {
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

  return (
    <div className="ChatList">
      <Container>
        <ChatBox>
          <ChatRoomMy onClickChatBeforeModal={onClickChatBeforeModal}></ChatRoomMy>

          <ChatBeforeModal
            sendChannelInfo={sendChannelInfo}
            show={showChatBeforeModal}
            onCloseModal={onCloseModal}></ChatBeforeModal>
        </ChatBox>
        <ChatBeforeModal2
          sendChannelInfo={sendChannelInfo}
          show={showChatBeforeModal}
          onCloseModal={onCloseModal}></ChatBeforeModal2>
      </Container>
    </div>
  );
};

export default MyList;
