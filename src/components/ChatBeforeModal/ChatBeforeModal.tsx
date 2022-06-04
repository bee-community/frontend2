import timeIcon from 'assets/chatImages/chat_time_white.png';
import cuteBee from 'assets/chatImages/removebee.png';
import xButton from 'assets/chatImages/xbutton.png';
import axios from 'axios';
import React, { useEffect, VFC, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import useSWR, { useSWRInfinite } from 'swr';

// import fetcher2 from 'utils/fetcher2';
import ChatContext from '../../context/ChatContext';
import { JwtStateContext, DispatchContext } from '../../context/JwtContext';
import ScrollContext from '../../context/ScrollContext';
// import JwtContext from '../../context/JwtContext';
import useInput from '../../hooks/useInput';
import { IChannel, Channel, ChannelResponse, HashTag } from '../../typings/db';
import './ChatBeforeModal.css';

interface Props {
  sendChannelInfo: Channel;
  show: boolean;
  onCloseModal: () => void;
}

var stompClient: any = null;
let trick = '';
let avoid = false;
const ChatBeforeModal: VFC<Props> = ({
  sendChannelInfo,
  show,
  onCloseModal,
}) => {
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
    logId,
    setLogId,
    channelInfo,
    setChannelInfo,
    happy,
    setHappy,
    endTTL,
    setEndTTL,
  } = useContext<any>(ChatContext);
  const { scrollBarRef } = useContext<any>(ScrollContext);

  const jwt = useContext(JwtStateContext);
  const dispatch = useContext(DispatchContext);
  // const { jwt, setJwt } = useContext<any>(JwtContext);
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
    setLivetime(str);
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
    var chatMessage = {
      type: 'ENTER',
      channelId: sendChannelInfo.id,
      // senderName: userData.username,
      message: 'message',
    };
    stompClient.send(
      '/pub/chat/room',
      {
        jwt: trick,
        // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
        // username: userData.username,
        channelId: sendChannelInfo.id,
      },
      JSON.stringify(chatMessage),
    );
  };

  const onMessageReceived = (payload: any) => {
    var payloadData = JSON.parse(payload.body);
    // console.log(payloadData.users);
    setUsersChatName(payloadData.users);

    // console.log(payload);
    switch (payloadData.type) {
      case 'RENEWAL':
        payloadData['sendTime'] = Date();
        console.log(payloadData);

        // payloadData.users.forEach((user: any) => {
        //   if (user.nickname === testName) {
        //     // console.log(user.nickname);
        //     console.log(testName);
        //     sameNameCheck += 1;
        //   }
        // });
        // console.log(sameNameCheck);

        // 뒤로가기를 하고 재입장을 하는 경우 이전 챗로그를 불러오지 못하여
        // 추가하였습니다.
        if (userData.username === payloadData.senderName) {
          avoid = false;
        }
        if (!avoid) {
          console.log('이거이거 고쳐야해');
          setLogId(payloadData.logId);
          avoid = true;
        }
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        // publicChats.push(payloadData);
        // setLogId(payloadData.logId);
        // // revalidate();
        // setPublicChats([...publicChats]);
        // console.log('스크롤아래');
        // scrollBarRef.current.scrollToBottom();

        break;
      case 'CHAT':
        // console.log('2222222222222');'
        console.log(payloadData);
        payloadData['sendTime'] = Date();
        // console.log(payloadData);
        publicChats.push(payloadData);

        setPublicChats([...publicChats]);
        // console.log('스크롤아래');
        // scrollBarRef.current.scrollToBottom();
        break;
      case 'CLOSE':
        // console.log('2222222222222');
        console.log('testCLose');
        setEndTTL(true);
        break;
    }
  };

  const onError = (err: any) => {
    console.log('on Error');
    let error = JSON.parse(err.body);
    console.log(error);
    switch (error.type) {
      case 'ALREADY_USER_IN_CHANNEL':
        console.log('beHappy');
        if (stompClient !== null) {
          const headers = {
            // disconnect에 쓰이는 headers
          };
          stompClient.disconnect(function () {
            // disconnect 후 실행하는 곳
          }, headers);
        }
        break;
    }
    // 에러가 나면 soket 연결을 끊음
    // if (stompClient !== null) {
    //   const headers = {
    //     // disconnect에 쓰이는 headers
    //   };
    //   stompClient.disconnect(function () {
    //     // disconnect 후 실행하는 곳
    //   }, headers);
    // }
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    setHappy(
      stompClient.subscribe(
        '/sub/chat/room/' + sendChannelInfo.id,
        onMessageReceived,
      ),
    );
    console.log(happy);
    userJoin();
  };
  // test
  const connect = async () => {
    // dispatch({ value: 'dada', type: 'CHANGE' });

    // setJwt('2222test');
    // setJwt(
    //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
    // );
    // setTest('hello');
    // console.log(testName);
    try {
      await axios.post('http://localhost:8080/api/v1/webrtc/register', {
        // nickname: 'user',
        nickname: testName,
        password: 'user',
      });
    } catch (err) {
      console.log(err);
    }
    try {
      var ress: any = await axios.post(
        'http://localhost:8080/api/v1/webrtc/authenticate',
        {
          // nickname: 'user',
          nickname: testName,
          password: 'user',
        },
      );
      dispatch({ value: ress.data.jwttoken, type: 'CHANGE' });
      // setJwt(ress.data.twttoken);
      trick = ress.data.jwttoken;
      // console.log(trick);
      // setTestName(ress.data.jwttoken);
      //1 setJwt('test');
      // console.log('type', typeof res.data.jwttoken);
      let Sock = new SockJS('http://localhost:8080/ws-stomp');
      stompClient = over(Sock);
      setClient(stompClient);
      stompClient.connect(
        {
          channelId: sendChannelInfo.id,
          jwt: trick,
          // jwt: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTE0NjY3LCJpYXQiOjE2NTE0OTY2Njd9.I3Wlq_f7elhOsJ9wP07-YCRba9ITlyI7BbQyqXWjmB5ClkQ5iqOsNdNUqpX2BG2BgCrHwvsujA6O15ojMmAI2Q',
          // username: 'user',
        },
        onConnected,
        onError,
      );
    } catch (err) {
      console.log(err);
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
  // }, [trick]);
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
  }, [sendChannelInfo, userData]);
  // console.log(sendChannelInfo);

  const onChangeTestName = (e: any) => {
    // console.log(testName);

    const { value } = e.target;
    setTestName(value);
    setUserData({ ...userData, username: value });
  };

  if (!show) {
    return null;
  }
  return (
    <div className="ChatBeforeModal">
      <div className="modal">
        <img
          alt="closeButton"
          role="presentation"
          className="closeButton"
          src={xButton}
          onClick={onCloseModal}></img>
        <div className="textArea">
          <input value={testName} onChange={onChangeTestName}></input>
          <div className="modalTag">{hash1}</div>
          <div className="modalTitle">{sendChannelInfo.channelName}</div>
          <div className="modalTimeLimit">
            <div className="imgWrapper">
              <img alt="timeIcon" role="presentation" src={timeIcon} />
            </div>
            <span>&nbsp; {liveTime}</span>
          </div>
          <div className="modalDate">
            <span>{sendChannelInfo.currentParticipants}</span>
            <span>{`/${sendChannelInfo.limitParticipants}`}</span>
          </div>
        </div>
        <NavLink
          to={'/chat/chatList/1'}
          className="yellowButton"
          onClick={connect}>
          채팅방 참여하기
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

export default ChatBeforeModal;
