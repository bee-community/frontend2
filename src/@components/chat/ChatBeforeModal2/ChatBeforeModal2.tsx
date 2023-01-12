import timeIcon from 'assets/chatImages/chat_time_white.png';
import mobileBee from 'assets/chatImages/mobileBee.png';
import xButton from 'assets/chatImages/mobileXbutton.png';
import ChatContext from 'context/ChatContext';
import React, { useEffect, VFC, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatState } from 'slice/chatStateSlice';
import { setEndTTL } from 'slice/endTTLSlice';
import { setLiveTime } from 'slice/liveTimeSlice';
import { setLogId } from 'slice/logIdSlice';
import { pushPublicChats } from 'slice/publicChats';
import { changeUserDataEmail, changeUserDataConnected } from 'slice/userDataSlice';
import { setUserEnterNumber } from 'slice/userEnterNumberSlice';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { Channel, HashTag } from 'typings/db';

import './ChatBeforeModal2.css';

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
  const [testName, setTestName] = useState('');

  // const [test, setTest] = useState('');
  const { setClient, setChannelInfo, setStompSubscribe } = useContext<any>(ChatContext);
  // const { scrollBarRef } = useContext<any>(ScrollContext);

  // const jwt = useContext(JwtStateContext);
  const userData = useSelector((store: any) => store.userData);
  const { JWTtoken } = useSelector((store: any) => store.JWTtoken);
  // const publicChats = useSelector((store: any) => store.publicChats);
  const liveTime = useSelector((store: any) => store.liveTime);
  const dispatcher = useDispatch();

  const secondsToTime = (seconds: number) => {
    let day = 0;
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    // var sec = seconds % 60;
    while (hour > 24) {
      hour -= 24;
      day += 1;
    }
    // return `${day}일 ${hour}시간 ${min}분 후 종료`;
    let str = `${day}일 ${hour}시간 ${min}분 후 종료`;
    // setLivetime(str);
    dispatcher(setLiveTime({ value: str }));
  };

  const renderHash = (ob: HashTag[]) => {
    let hash = '';
    // console.log(ob);
    ob.forEach(element => {
      hash += '#' + element.hashTag.tagName + ' ';
    });
    // console.log(hash);
    setHash(hash);
    // console.log(hash1);
  };

  const userJoin = () => {
    let chatMessage = {
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

  const userJoinExcept = () => {
    console.log('재입장');
    let chatMessage = {
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

  const onMessageReceivedExcept = (payload: any) => {
    var payloadData = JSON.parse(payload.body);
    // console.log(payloadData.users);
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
        // console.log(payloadData);
        // payloadData['sendTime'] = Date();
        // console.log(payloadData);
        dispatcher(pushPublicChats({ value: payloadData }));

        // dispatcher(setPublicChats({ value: publicChats.chat }));
        // console.log('스크롤아래');
        // scrollBarRef.current.scrollToBottom();
        break;
      case 'CLOSE':
        // console.log('2222222222222');
        console.log('testCLose');
        dispatcher(setEndTTL({ value: true }));
        break;
    }
  };

  const onMessageReceived = (payload: any) => {
    var payloadData = JSON.parse(payload.body);
    // console.log(payloadData.users);
    dispatcher(setUserEnterNumber({ value: payloadData.users }));

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

        // dispatcher(setPublicChats({ value: publicChats.chat }));
        // console.log('스크롤아래');
        // scrollBarRef.current.scrollToBottom();
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
    setStompSubscribe(stompClient.subscribe('/sub/chat/room/' + sendChannelInfo.id, onMessageReceivedExcept));
    // console.log(happy);
    userJoinExcept();
  };
  const onErrorExcept = (err: any) => {
    // console.log('on Error');
    let error = JSON.parse(err.body);
    // console.log(error);
    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        // console.log('beHappy');
        // if (stompClient !== null) {
        //   const headers = {
        //     // disconnect에 쓰이는 headers
        //   };
        //   stompClient.disconnect(function () {
        //     // disconnect 후 실행하는 곳
        //   }, headers);
        // }
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
        jwt: JWTtoken,
        // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
        // username: 'user',
      },
      onConnectedExcept,
      onErrorExcept,
    );
  };

  const onError = (err: any) => {
    // console.log('on Error');
    if (err.body === undefined) {
      return;
    }
    // console.log(err.body);
    let error = JSON.parse(err.body);

    // console.log(error);
    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        // console.log('beHappy');
        connect_except();
        reEnter = error.idx + 1;
        // console.log(reEnter);
        // if (stompClient !== null) {
        //   const headers = {
        //     // disconnect에 쓰이는 headers
        //   };
        //   stompClient.disconnect(function () {
        //     // disconnect 후 실행하는 곳
        //   }, headers);
        // }
        break;
    }
  };

  const onConnected = () => {
    dispatcher(changeUserDataConnected({ connected: true }));
    setStompSubscribe(stompClient.subscribe('/sub/chat/room/' + sendChannelInfo.id, onMessageReceived));
    userJoin();
  };

  const connect = async () => {
    // dispatch({ value: 'dada', type: 'CHANGE' });

    // setJwt('2222test');
    // setJwt(
    //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
    // );
    // setTest('hello');
    // console.log(testName);
    // try {
    //   await axios.post('/api/v1/webrtc/register', {
    //     // nickname: 'user',
    //     email: testName,
    //     password: 'user',
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      // var ress: any = await axios.post('/api/v1/webrtc/chat/authenticate', {
      //   // nickname: 'user',
      //   email: testName,
      //   password: 'user',
      // });
      // console.log(ress.data.jwttoken);

      let Sock = new SockJS(socketURL);
      stompClient = over(Sock);
      setClient(stompClient);
      stompClient.connect(
        {
          channelId: sendChannelInfo.id,
          jwt: JWTtoken,
          // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
          // username: 'user',
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

  // console.log('jwt : ', jwt);

  // useEffect(() => {
  //   // console.log('count-------------------');
  //   console.log(jwt);
  //   if (!jwt) {
  //     // console.log('hhap');
  //     console.log(jwt);
  //     return;
  //   }
  //   // console.log('bbbbbobbbbbbb');
  //   let Sock = new SockJS('http://localhost:8080/ws-stomp');
  //   stompClient = over(Sock);
  //   setClient(stompClient);
  //   stompClient.connect(
  //     {
  //       jwt,
  //       // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
  //       // username: 'user',
  //       username: testName,
  //     },
  //     onConnected,
  //     onError,
  //   );
  // }, [JWTtoken]);
  // useEffect(() => {
  //   console.log(test);
  //   console.log('teststetstststsrtste');
  // }, [test]);
  useEffect(() => {
    // console.log(userData);

    secondsToTime(sendChannelInfo.timeToLive);
    renderHash(sendChannelInfo.channelHashTags);
    setChannelInfo(sendChannelInfo);
    // const DDD = axios
    //   .get<ChannelResponse>('http://192.168.0.39:8080/api/v1/webrtc/channels')
    //   .then(res => {
    //     // console.log(Data.channels);
    //     // // Data.channels.map(v => {
    //     // //   console.log(v);
    //     // // });
    //     // Data.channels.map(v => {
    //     //   console.log(v);
    //     // });
    //     console.log(`dddd:`);
    //   });

    // axios
    //   .post(
    //     `http://192.168.0.39:8080/api/v1/webrtc/channel/enter/3657abe2-3975-43dd-880d-1ad4525e3149`,
    //     { id: 1 },
    //   )
    //   .then(res => {
    //     // if (res.status === 200) {
    //     //   if (res.data[0].type === 'SUCCESS') {
    //     //     setCurrentUser({
    //     //       userId: res.data[0].userId,
    //     //       userName: res.data[0].userName,
    //     //     });
    //     //     connect({
    //     //       userId: res.data[0].userId,
    //     //       userName: res.data[0].userName,
    //     //     });
    //     //   } else {
    //     //     router.back();
    //     //   }
    //     // }
    //     console.log(res);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
    // return () => disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendChannelInfo, userData]);
  // console.log(sendChannelInfo);

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

  if (screen.width > 776) {
    return null;
  }
  return (
    <div className="ChatBeforeModal2">
      <div className="modal ">
        <div className="closeButtonWrapper">
          <img alt="closeButton" role="presentation" className="closeButton" src={xButton} onClick={onCloseModal}></img>
        </div>
        <div className="textArea">
          <input style={{ fontSize: '18px' }} value={testName} onChange={onChangeTestName}></input>
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
        <img alt="BeeImage" role="presentation" className="modalBee" src={mobileBee}></img>
        <div className="centerBee">
          <div className="yellowButton" onClick={connect}>
            채팅방 참여하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBeforeModal;
