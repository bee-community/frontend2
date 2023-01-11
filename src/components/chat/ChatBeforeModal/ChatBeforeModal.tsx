import timeIcon from 'assets/chatImages/chat_time_white.png';
import cuteBee from 'assets/chatImages/removebee.png';
import xButton from 'assets/chatImages/xbutton.png';
import ChatContext from 'context/ChatContext';
import { useEffect, VFC, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatState } from 'slice/chatStateSlice';
import { setEndTTL } from 'slice/endTTLSlice';
import { setLiveTime } from 'slice/liveTimeSlice';
import { setLogId } from 'slice/logIdSlice';
import { pushPublicChats } from 'slice/publicChats';
import { setUserEnterNumber } from 'slice/userEnterNumberSlice';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { Channel, HashTag } from 'typings/db';

import './ChatBeforeModal.css';

interface Props {
  sendChannelInfo: Channel;
  show: boolean;
  onCloseModal: () => void;
}
const socketURL = 'http://honeybees.community:8080/ws-stomp';

var stompClient: any = null;
let avoid = false;
let reEnter = 0;
const ChatBeforeModal: VFC<Props> = ({ sendChannelInfo, show, onCloseModal }) => {
  const [hash1, setHash] = useState('');

  const { setClient, setChannelInfo, setStompSubscribe } = useContext<any>(ChatContext);
  const user = useSelector((store: any) => store.user);
  const { JWTtoken } = useSelector((store: any) => store.JWTtoken);
  const liveTime = useSelector((store: any) => store.liveTime);
  const dispatch = useDispatch();

  const secondsToTime = (seconds: number) => {
    let day = 0;
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    while (hour > 24) {
      hour -= 24;
      day += 1;
    }
    const liveTimeString = `${day}일 ${hour}시간 ${min}분 후 종료`;
    dispatch(setLiveTime({ value: liveTimeString }));
  };

  const renderHash = (hashTagArray: HashTag[]) => {
    let hash = '';
    hashTagArray.forEach(element => {
      hash += '#' + element.hashTag.tagName + ' ';
    });
    setHash(hash);
  };

  const enterChatRoom = async () => {
    try {
      const Sock = new SockJS(socketURL);
      stompClient = over(Sock);
      setClient(stompClient);
      stompClient.connect(
        {
          jwt: JWTtoken,
        },
        onConnected,
        onError,
      );
    } catch (err) {
    } finally {
      if (sendChannelInfo.channelType === 'TEXT') dispatch(setChatState({ value: 'chat' }));
      if (sendChannelInfo.channelType === 'VOIP') dispatch(setChatState({ value: 'voicechat' }));
    }
  };

  const onConnected = () => {
    setStompSubscribe(stompClient.subscribe('/sub/chat/room/' + sendChannelInfo.id, onMessageReceived));
    userJoin();
  };

  const onMessageReceived = (payload: any) => {
    var payloadData = JSON.parse(payload.body);
    console.log('************** onMessageReceived');
    dispatch(setUserEnterNumber({ value: payloadData.users }));
    switch (payloadData.type) {
      case 'RENEWAL':
        payloadData['sendTime'] = Date();
        // 뒤로가기를 하고 재입장을 하는 경우 이전 챗로그를 불러오지 못하여
        // 추가하였습니다.
        // if (user.email === payloadData.senderEmail) {
        //   avoid = false;
        // }
        // if (!avoid) {
        //   avoid = true;
        // }
        dispatch(setLogId({ value: payloadData.logId }));
        dispatch(pushPublicChats({ value: payloadData }));
        break;
      case 'CHAT':
        dispatch(pushPublicChats({ value: payloadData }));
        break;
      case 'CLOSE':
        dispatch(setEndTTL({ value: true }));
        break;
    }
  };

  const userJoin = () => {
    console.log('userJoin');
    const chatMessage = {
      message: '',
    };
    stompClient.send(
      '/pub/chat/room',
      {
        jwt: JWTtoken,
        channelId: sendChannelInfo.id,
        type: 'ENTER',
      },
      JSON.stringify(chatMessage),
    );
  };

  const onError = (err: any) => {
    console.log('************** onError');
    if (err.body === undefined) {
      return;
    }
    const error = JSON.parse(err.body);

    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        connectReEnter();
        reEnter = error.idx + 1;
        break;
    }
  };

  const connectReEnter = async () => {
    console.log('************** connectReEnter');
    let Sock = new SockJS(socketURL);
    stompClient = over(Sock);
    setClient(stompClient);
    stompClient.connect(
      {
        channelId: sendChannelInfo.id,
        jwt: JWTtoken,
      },
      onConnectedReEnter,
      onErrorReEnter,
    );
  };

  const onConnectedReEnter = () => {
    console.log('************** onConnectedReEnter');

    setStompSubscribe(stompClient.subscribe('/sub/chat/room/' + sendChannelInfo.id, onMessageReceivedReEnter));
    userJoinExcept();
  };

  const userJoinExcept = () => {
    const chatMessage = {
      message: '',
    };
    stompClient.send(
      '/pub/chat/room',
      {
        jwt: JWTtoken,
        channelId: sendChannelInfo.id,
        type: 'REENTER',
      },
      JSON.stringify(chatMessage),
    );
  };

  const onMessageReceivedReEnter = (payload: any) => {
    console.log('************** onMessageReceivedReEnter');

    let payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    dispatch(setUserEnterNumber({ value: payloadData.users }));
    switch (payloadData.type) {
      case 'RENEWAL':
        // 뒤로가기를 하고 재입장을 하는 경우 이전 챗로그를 불러오지 못하여
        // 추가하였습니다.
        // if (user.email === payloadData.senderEmail) {
        //   avoid = false;
        // }
        // if (!avoid) {
        //   dispatch(setLogId({ value: reEnter }));
        //   avoid = true;
        // }
        dispatch(setLogId({ value: reEnter }));
        // avoid = true;
        dispatch(pushPublicChats({ value: payloadData }));
        break;
      case 'CHAT':
        dispatch(pushPublicChats({ value: payloadData }));
        break;
      case 'CLOSE':
        dispatch(setEndTTL({ value: true }));
        break;
    }
  };

  const onErrorReEnter = (err: any) => {
    console.log('************** onErrorReEnter');

    const error = JSON.parse(err.body);

    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        break;
    }
  };

  useEffect(() => {
    secondsToTime(sendChannelInfo.timeToLive);
    renderHash(sendChannelInfo.channelHashTags);
    setChannelInfo(sendChannelInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendChannelInfo, user]);

  useEffect(() => {
    document.documentElement.style.setProperty('--deskTopBottomDrawer', `385px`);
  }, []);

  if (!show) {
    return null;
  }

  if (screen.width < 776) {
    return null;
  }
  return (
    <div className="ChatBeforeModal">
      <div className="modal ">
        <div className="closeButtonWrapper">
          <img alt="closeButton" role="presentation" className="closeButton" src={xButton} onClick={onCloseModal}></img>
        </div>
        <div className="textArea">
          <div className="modalTag">{hash1}</div>
          <div className="modalTitle">{sendChannelInfo.channelName}</div>
          <div className="modalTimeLimit">
            <div className="imgWrapper">
              <img alt="timeIcon" role="presentation" src={timeIcon} />
            </div>
            <span>&nbsp; {liveTime.liveTime}</span>
          </div>
          <div className="modalDate">
            <span>{sendChannelInfo.currentParticipants}</span>
            <span>{`/${sendChannelInfo.limitParticipants}`}</span>
          </div>
        </div>
        <div className="yellowButton" onClick={enterChatRoom}>
          채팅방 참여하기
        </div>
      </div>
      <img alt="BeeImage" role="presentation" className="modalBee" src={cuteBee}></img>
    </div>
  );
};

export default ChatBeforeModal;
