import ChatBeforeModal from 'components/ChatBeforeModal/ChatBeforeModal';
import ChatEndModal from 'components/ChatEndModal/ChatEndModal';
import ChatRoomMy from 'components/ChatRoomMy/ChatRoomMy';
import React, { useCallback, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
// import CustomScroll from 'react-custom-scroll';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Scrollbar } from 'react-scrollbars-custom';
import { setIndexChat } from 'slice/indexChatSlice';

import ChatContext from '../../context/ChatContext';
import { Channel, HashTag, User } from '../../typings/db';
import './ChatList.css';
import { ChatBox, Container } from './styles';

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
  };
  const [showChatBeforeModal, setShowChatBeforeModal] =
    useState<boolean>(false);
  const [sendChannelInfo, setSendChannelInfo] = useState<Channel>(ab);
  const onClickChatBeforeModal = useCallback(
    (channel: Channel, i: number) => {
      setShowChatBeforeModal(true);
      setSendChannelInfo(channel);
      dispatcher(setIndexChat({ value: i }));
    },
    [sendChannelInfo],
  );

  const onCloseModal = useCallback(() => {
    setShowChatBeforeModal(false);
  }, []);

  return (
    <div className="ChatList">
      <Container>
        <ChatBox>
          <ChatRoomMy
            onClickChatBeforeModal={onClickChatBeforeModal}></ChatRoomMy>

          <ChatBeforeModal
            sendChannelInfo={sendChannelInfo}
            show={showChatBeforeModal}
            onCloseModal={onCloseModal}></ChatBeforeModal>
        </ChatBox>
      </Container>
    </div>
  );
};

export default MyList;
