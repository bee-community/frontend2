import timeIcon from 'assets/chatImages/chat_time_white.png';
import cuteBee from 'assets/chatImages/wink.png';
import xButton from 'assets/chatImages/xbutton.png';
import axios from 'axios';
import { JwtStateContext, DispatchContext } from 'context/JwtContext';
import React, { useEffect, VFC, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

import ChatContext from '../../context/ChatContext';
// import JwtContext from '../../context/JwtContext';
import useInput from '../../hooks/useInput';
import { IChannel, Channel, ChannelResponse, HashTag } from '../../typings/db';
import './ChatBeforeModal.css';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

var stompClient: any = null;
let trick = '';
// onCloseModal={onCloseModal}
const ChatEndModal: VFC = ({}) => {
  const [hash1, setHash] = useState('');
  const [testName, setTestName] = useState('');
  // const [test, setTest] = useState('');
  const {
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
    endTTL,
    setEndTTL,
  } = useContext<any>(ChatContext);
  // const jwt = useContext(JwtStateContext);
  // const dispatch = useContext(DispatchContext);
  // // const { jwt, setJwt } = useContext<any>(JwtContext);
  // const secondsToTime = (seconds: number) => {
  //   let day = 0;
  //   var hour = Math.floor(seconds / 3600);
  //   var min = Math.floor((seconds % 3600) / 60);
  //   // var sec = seconds % 60;
  //   while (hour > 24) {
  //     hour -= 24;
  //     day += 1;
  //   }
  //   // return `${day}일 ${hour}시간 ${min}분 후 종료`;
  //   let str = `${day}일 ${hour}시간 ${min}분 후 종료`;
  //   setLivetime(str);
  // };

  // const renderHash = (ob: HashTag[]) => {
  //   let hash = '';
  //   // console.log(ob);
  //   ob.forEach(element => {
  //     hash += '#' + element.hashTag.tagName + ' ';
  //   });
  //   // console.log(hash);
  //   setHash(hash);
  //   // console.log(hash1);
  // };

  // const userJoin = () => {
  //   var chatMessage = {
  //     type: 'ENTER',
  //     channelId: sendChannelInfo.id,
  //     // senderName: userData.username,
  //     message: 'message',
  //   };
  //   stompClient.send(
  //     '/pub/chat/room',
  //     {
  //       jwt: trick,
  //       // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
  //       // username: userData.username,
  //       channelId: sendChannelInfo.id,
  //     },
  //     JSON.stringify(chatMessage),
  //   );
  // };

  // const onMessageReceived = (payload: any) => {
  //   var payloadData = JSON.parse(payload.body);
  //   console.log(payloadData.users);
  //   setUsersChatName(payloadData.users);
  //   // console.log(payload);
  //   switch (payloadData.type) {
  //     case 'RENEWAL':
  //       // console.log('1111111111111111');
  //       publicChats.push(payloadData);
  //       setPublicChats([...publicChats]);
  //       break;
  //     case 'CHAT':
  //       // console.log('2222222222222');
  //       publicChats.push(payloadData);
  //       setPublicChats([...publicChats]);
  //       break;
  //     case 'CLOSE':
  //       // console.log('2222222222222');
  //       console.log('testCLose');
  //       break;
  //   }
  // };

  // const onError = (err: any) => {
  //   if (stompClient !== null) {
  //     const headers = {
  //       // disconnect에 쓰이는 headers
  //     };
  //     stompClient.disconnect(function () {
  //       // disconnect 후 실행하는 곳
  //     }, headers);
  //   }
  // };

  // const onConnected = () => {
  //   setUserData({ ...userData, connected: true });
  //   stompClient.subscribe(
  //     '/sub/chat/room/' + sendChannelInfo.id,
  //     onMessageReceived,
  //   );
  //   userJoin();
  // };

  // const connect = async () => {
  //   // dispatch({ value: 'dada', type: 'CHANGE' });

  //   // setJwt('2222test');
  //   // setJwt(
  //   //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
  //   // );
  //   // setTest('hello');
  //   // console.log(testName);
  //   console.log('ㅇㅇㅇㅇㅇ');
  //   try {
  //     console.log('testName', testName);
  //     await axios.post('http://localhost:8080/api/v1/webrtc/register', {
  //       // nickname: 'user',
  //       nickname: testName,
  //       password: 'user',
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   try {
  //     var ress: any = await axios.post(
  //       'http://localhost:8080/api/v1/webrtc/authenticate',
  //       {
  //         // nickname: 'user',
  //         nickname: testName,
  //         password: 'user',
  //       },
  //     );
  //     console.log('????: ', ress.data.jwttoken);
  //     dispatch({ value: ress.data.jwttoken, type: 'CHANGE' });
  //     console.log(jwt);
  //     // setJwt(ress.data.twttoken);
  //     trick = ress.data.jwttoken;
  //     // console.log(trick);
  //     // setTestName(ress.data.jwttoken);
  //     //1 setJwt('test');
  //     // console.log('type', typeof res.data.jwttoken);
  //     let Sock = new SockJS('http://localhost:8080/ws-stomp');
  //     stompClient = over(Sock);
  //     setClient(stompClient);
  //     stompClient.connect(
  //       {
  //         channelId: sendChannelInfo.id,
  //         jwt: trick,
  //         // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
  //         // username: 'user',
  //       },
  //       onConnected,
  //       onError,
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   console.log(ress.data.jwttoken);
  //   // setJwt(ress.data.jwttoken);
  //   console.log('backkkk');
  //   // setTest('hello22222222222222');
  //   // setJwt('test');
  // };

  // // console.log('jwt : ', jwt);

  // // useEffect(() => {
  // //   // console.log('count-------------------');
  // //   console.log(jwt);
  // //   if (!jwt) {
  // //     // console.log('hhap');
  // //     console.log(jwt);
  // //     return;
  // //   }
  // //   // console.log('bbbbbobbbbbbb');
  // //   let Sock = new SockJS('http://localhost:8080/ws-stomp');
  // //   stompClient = over(Sock);
  // //   setClient(stompClient);
  // //   stompClient.connect(
  // //     {
  // //       jwt,
  // //       // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
  // //       // username: 'user',
  // //       username: testName,
  // //     },
  // //     onConnected,
  // //     onError,
  // //   );
  // // }, [trick]);
  // // useEffect(() => {
  // //   console.log(test);
  // //   console.log('teststetstststsrtste');
  // // }, [test]);
  // useEffect(() => {
  //   // console.log(userData);

  //   secondsToTime(sendChannelInfo.timeToLive);
  //   renderHash(sendChannelInfo.channelHashTags);
  //   setChannelID(sendChannelInfo.id);
  //   // const DDD = axios
  //   //   .get<ChannelResponse>('http://192.168.0.39:8080/api/v1/webrtc/channels')
  //   //   .then(res => {
  //   //     // console.log(Data.channels);
  //   //     // // Data.channels.map(v => {
  //   //     // //   console.log(v);
  //   //     // // });
  //   //     // Data.channels.map(v => {
  //   //     //   console.log(v);
  //   //     // });
  //   //     console.log(`dddd:`);
  //   //   });

  //   // axios
  //   //   .post(
  //   //     `http://192.168.0.39:8080/api/v1/webrtc/channel/enter/3657abe2-3975-43dd-880d-1ad4525e3149`,
  //   //     { id: 1 },
  //   //   )
  //   //   .then(res => {
  //   //     // if (res.status === 200) {
  //   //     //   if (res.data[0].type === 'SUCCESS') {
  //   //     //     setCurrentUser({
  //   //     //       userId: res.data[0].userId,
  //   //     //       userName: res.data[0].userName,
  //   //     //     });
  //   //     //     connect({
  //   //     //       userId: res.data[0].userId,
  //   //     //       userName: res.data[0].userName,
  //   //     //     });
  //   //     //   } else {
  //   //     //     router.back();
  //   //     //   }
  //   //     // }
  //   //     console.log(res);
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //   //   });
  //   // return () => disconnect();
  // }, [sendChannelInfo, userData]);
  // // console.log(sendChannelInfo);

  // const onChangeTestName = (e: any) => {
  //   // console.log(testName);

  //   const { value } = e.target;
  //   setTestName(value);
  //   setUserData({ ...userData, username: value });
  // };

  if (!endTTL) {
    return null;
  }
  return (
    <div className="ChatEndModal">
      <div className="modal">
        {/* <img className="closeButton" src={xButton}></img> */}
        <div className="textArea">
          <div className="modalTag">#다음에 또 만나요</div>
          <div className="modalTitle">종료된 채팅방입니다.</div>
          {/* <div className="modalTimeLimit">
            <img src={timeIcon} />
            <span>&nbsp; {liveTime}</span>
          </div> */}
        </div>
        <NavLink
          to={'/chat/chatList'}
          className="yellowButton"
          onClick={() => setEndTTL(false)}>
          채팅방 종료하기
        </NavLink>
      </div>
      <img
        alt="BeeImage"
        role="presentation"
        className="modalBee"
        src={cuteBee}></img>
    </div>
  );
};

export default ChatEndModal;
