import timeIcon from 'assets/chatImages/chat_time_white.png';
import cuteBee from 'assets/chatImages/removebee.png';
import xButton from 'assets/chatImages/xbutton.png';
import React, { useEffect, VFC, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatState } from 'slice/chatStateSlice';
import { setEndTTL } from 'slice/endTTLSlice';
import { setLiveTime } from 'slice/liveTimeSlice';
import { setLogId } from 'slice/logIdSlice';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

import axios from '../../chatApi';
// import { history } from 'utils/history';
// import fetcher2 from 'utils/fetcher2';
import ChatContext from '../../context/ChatContext';
import { DispatchContext } from '../../context/JwtContext';
// import JwtContext from '../../context/JwtContext';
import { pushPublicChats } from '../../slice/publicChats';
import {
  changeUserDataEmail,
  changeUserDataConnected,
} from '../../slice/userDataSlice';
import { setUserEnterNumber } from '../../slice/userEnterNumberSlice';
import { Channel, HashTag } from '../../typings/db';
import './ChatBeforeModal.css';

interface Props {
  sendChannelInfo: Channel;
  show: boolean;
  onCloseModal: () => void;
}
const socketURL = 'http://honeybees.community:8080/ws-stomp';
var stompClient: any = null;
let trick = '';
let avoid = false;
let reEnter = 0;
const ChatBeforeModal: VFC<Props> = ({
  sendChannelInfo,
  show,
  onCloseModal,
}) => {
  const [hash1, setHash] = useState('');
  const [testName, setTestName] = useState('');

  // const [test, setTest] = useState('');
  const { setClient, setChannelInfo, setHappy } = useContext<any>(ChatContext);
  // const { scrollBarRef } = useContext<any>(ScrollContext);

  // const jwt = useContext(JwtStateContext);
  const dispatch = useContext(DispatchContext);
  const userData = useSelector((store: any) => store.userData);
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  // const publicChats = useSelector((store: any) => store.publicChats);
  const liveTime = useSelector((store: any) => store.liveTime);
  const dispatcher = useDispatch();

  const secondsToTime = (seconds: number) => {
    let day = 0;
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    while (hour > 24) {
      hour -= 24;
      day += 1;
    }
    let str = `${day}일 ${hour}시간 ${min}분 후 종료`;
    dispatcher(setLiveTime({ value: str }));
  };

  const renderHash = (ob: HashTag[]) => {
    let hash = '';
    ob.forEach(element => {
      hash += '#' + element.hashTag.tagName + ' ';
    });
    setHash(hash);
  };

  const userJoin = () => {
    let chatMessage = {
      message: '',
    };
    stompClient.send(
      '/pub/chat/room',
      {
        jwt: trick,
        channelId: sendChannelInfo.id,
        type: 'ENTER',
      },
      JSON.stringify(chatMessage),
    );
  };

  const userJoinExcept = () => {
    console.log('재입장');
    let chatMessage = {
      message: '',
    };
    stompClient.send(
      '/pub/chat/room',
      {
        jwt: trick,
        channelId: sendChannelInfo.id,
        type: 'REENTER',
      },
      JSON.stringify(chatMessage),
    );
  };

  const onMessageReceivedExcept = (payload: any) => {
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    dispatcher(setUserEnterNumber({ value: payloadData.users }));
    // console.log(payload);
    switch (payloadData.type) {
      case 'RENEWAL':
        // payloadData['sendTime'] = Date();
        // console.log(payloadData);
        // 뒤로가기를 하고 재입장을 하는 경우 이전 챗로그를 불러오지 못하여
        // 추가하였습니다.
        if (userData.userEmail === payloadData.senderEmail) {
          avoid = false;
        }
        if (!avoid) {
          // console.log('이거이거 고쳐야해');
          dispatcher(setLogId({ value: reEnter }));
          avoid = true;
        }
        // console.log(publicChats);
        // publicChats.push(payloadData);
        dispatcher(pushPublicChats({ value: payloadData }));
        // dispatcher(setPublicChats({ value: publicChats.chat }));
        break;
      case 'CHAT':
        // console.log('2222222222222');'
        console.log(payloadData);
        // payloadData['sendTime'] = Date();
        // console.log(payloadData);
        dispatcher(pushPublicChats({ value: payloadData }));
        break;
      case 'CLOSE':
        console.log('testCLose');
        dispatcher(setEndTTL({ value: true }));
        break;
    }
  };

  const onMessageReceived = (payload: any) => {
    var payloadData = JSON.parse(payload.body);
    // console.log(payloadData.users);
    dispatcher(setUserEnterNumber({ value: payloadData.users }));
    console.log(payloadData);
    // console.log(payload);
    switch (payloadData.type) {
      case 'RENEWAL':
        payloadData['sendTime'] = Date();
        // console.log(payloadData);
        // 뒤로가기를 하고 재입장을 하는 경우 이전 챗로그를 불러오지 못하여
        // 추가하였습니다.
        if (userData.userEmail === payloadData.senderEmail) {
          avoid = false;
        }
        if (!avoid) {
          // console.log('이거이거 고쳐야해');
          dispatcher(setLogId({ value: payloadData.logId }));

          avoid = true;
        }
        dispatcher(pushPublicChats({ value: payloadData }));
        // dispatcher(setPublicChats({ value: publicChats.chat }));
        break;
      case 'CHAT':
        // console.log('2222222222222');'
        // console.log(payloadData);
        // payloadData['sendTime'] = Date();
        // console.log(payloadData);
        dispatcher(pushPublicChats({ value: payloadData }));
        break;
      case 'CLOSE':
        // console.log('2222222222222');
        console.log('testCLose');
        dispatcher(setEndTTL({ value: true }));
        break;
    }
  };
  const onConnectedExcept = () => {
    // setUserData({ ...userData, connected: true });
    dispatcher(changeUserDataConnected({ connected: true }));
    setHappy(
      stompClient.subscribe(
        '/sub/chat/room/' + sendChannelInfo.id,
        onMessageReceivedExcept,
      ),
    );
    // console.log(happy);
    userJoinExcept();
  };
  const onErrorExcept = (err: any) => {
    // console.log('on Error');
    let error = JSON.parse(err.body);
    // console.log(error);
    console.log(error.type);

    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        break;
    }
  };

  const connect_except = async () => {
    let Sock = new SockJS(socketURL);
    stompClient = over(Sock);
    setClient(stompClient);
    stompClient.connect(
      {
        channelId: sendChannelInfo.id,
        jwt: trick,
      },
      onConnectedExcept,
      onErrorExcept,
    );
  };

  const onError = (err: any) => {
    if (err.body === undefined) {
      return;
    }
    let error = JSON.parse(err.body);

    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        connect_except();
        reEnter = error.idx + 1;
        break;
    }
  };

  const onConnected = () => {
    dispatcher(changeUserDataConnected({ connected: true }));
    setHappy(
      stompClient.subscribe(
        '/sub/chat/room/' + sendChannelInfo.id,
        onMessageReceived,
      ),
    );
    userJoin();
  };

  const connect = async () => {
    try {
      trick = JWTtoken.JWTtoken;
      dispatch({ value: trick, type: 'CHANGE' });

      let Sock = new SockJS(socketURL);
      stompClient = over(Sock);
      setClient(stompClient);
      stompClient.connect(
        {
          jwt: trick,
        },
        onConnected,
        onError,
      );
    } catch (err) {
      console.log(err);
    } finally {
      if (sendChannelInfo.channelType === 'TEXT') {
        dispatcher(setChatState({ value: 'chat' }));
      } else if (sendChannelInfo.channelType === 'VOIP') {
        dispatcher(setChatState({ value: 'voicechat' }));
      }
    }
  };

  useEffect(() => {
    secondsToTime(sendChannelInfo.timeToLive);
    renderHash(sendChannelInfo.channelHashTags);
    setChannelInfo(sendChannelInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendChannelInfo, userData]);
  // console.log(sendChannelInfo);
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--deskTopBottomDrawer',
      `385px`,
    );
  }, []);
  const onChangeTestName = (e: any) => {
    // console.log(testName);

    const { value } = e.target;
    setTestName(value);
    // setUserData({ ...userData, userEmail: value });
    dispatcher(changeUserDataEmail({ userEmail: value }));
  };

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
          <img
            alt="closeButton"
            role="presentation"
            className="closeButton"
            src={xButton}
            onClick={onCloseModal}></img>
        </div>
        <div className="textArea">
          <input value={testName} onChange={onChangeTestName}></input>
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
        <div className="yellowButton" onClick={connect}>
          채팅방 참여하기
        </div>
      </div>
      <img
        alt="BeeImage"
        role="presentation"
        className="modalBee"
        src={cuteBee}></img>
    </div>
  );
};

export default ChatBeforeModal;
