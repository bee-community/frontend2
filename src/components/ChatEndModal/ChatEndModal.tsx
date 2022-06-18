import timeIcon from 'assets/chatImages/chat_time_white.png';
import cuteBee from 'assets/chatImages/wink.png';
import xButton from 'assets/chatImages/xbutton.png';
import axios from 'axios';
import { JwtStateContext, DispatchContext } from 'context/JwtContext';
import React, { useEffect, VFC, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setChatState } from 'slice/chatStateSlice';
import { setEndTTL } from 'slice/endTTLSlice';
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
  const endTTL = useSelector((store: any) => store.endTTL);
  const dispatcher = useDispatch();
  const [hash1, setHash] = useState('');
  const [testName, setTestName] = useState('');
  // const [test, setTest] = useState('');

  if (!endTTL.endTTL) {
    return null;
  }
  return (
    <div className="ChatEndModal">
      <div className="modal">
        {/* <img className="closeButton" src={xButton}></img> */}
        <div className="textArea">
          <div className="modalTag">#다음에 또 만나요</div>
          <div className="modalTitle">종료된 채팅방입니다.</div>
        </div>
        <div
          className="yellowButton"
          onClick={() => {
            dispatcher(setEndTTL({ value: false }));
            dispatcher(setChatState({ value: 'chatList' }));
          }}>
          채팅방 종료하기
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

export default ChatEndModal;
