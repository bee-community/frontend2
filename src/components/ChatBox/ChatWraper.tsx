import mobileAddImge from 'assets/chatImages/mobileAddImage.png';
import mobileAddTime from 'assets/chatImages/mobileAddTime.png';
import mobileAddVideo from 'assets/chatImages/mobileAddVideo.png';
import plusButton from 'assets/chatImages/plusButton.png';
import React, { useState, VFC } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import {
  setDesktopBottomDrawerOpen,
  setPointOpen,
  setWaitOpen,
} from 'slice/pointModal';

import './ChatWraper.css';
import { HideDrawer2 } from './style';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const dispatcher = useDispatch();

  const setOpenDrawer = () => {
    document.documentElement.style.setProperty(
      '--deskTopBottomDrawer',
      `309px`,
    );
    document.documentElement.style.setProperty(
      '--deskTopBottomDrawerZindex',
      `1001`,
    );
  };
  const setCloseDrawer = () => {
    document.documentElement.style.setProperty(
      '--deskTopBottomDrawer',
      `385px`,
    );
    document.documentElement.style.setProperty(
      '--deskTopBottomDrawerZindex',
      `0`,
    );
  };
  const onKeydownChat = (e: any) => {
    // console.log(e)
    // console.log(chat)
    // console.log(e);
    if (e.key === 'Enter' && e.keyCode === 13) {
      // console.log(chat.trim());
      if (!e.shiftKey) {
        e.preventDefault();
        if (chat?.trim() !== '') {
          onSubmitForm(e);
        }
      }
    }
  };
  return (
    <div className="chatWrapper">
      <div className="chatInput">
        <img
          onClick={() => {
            setOpenDrawer();
            dispatcher(setDesktopBottomDrawerOpen({ value: true }));
          }}
          alt="chatPlusButton"
          role="presentation"
          className="plusButton"
          src={plusButton}></img>
        <TextareaAutosize
          minRows={2}
          maxRows={3}
          className="iinput"
          value={chat}
          onChange={onChangeChat}
          onKeyDown={onKeydownChat}></TextareaAutosize>
        <button className="submit" onClick={onSubmitForm}>
          전송
        </button>
      </div>
      <HideDrawer2>
        <div
          onClick={() => {
            dispatcher(setPointOpen({ value: true }));
            setActive(false);
            setCloseDrawer();
            dispatcher(setDesktopBottomDrawerOpen({ value: false }));
          }}>
          <img alt="" src={mobileAddTime}></img>
          <div>시간 추가</div>
        </div>
        <div
          onClick={() => {
            dispatcher(setWaitOpen({ value: true }));
            setActive(false);
            setCloseDrawer();
            dispatcher(setDesktopBottomDrawerOpen({ value: false }));
          }}>
          <img alt="" src={mobileAddImge}></img>
          <div>사진</div>
        </div>
        <div
          onClick={() => {
            dispatcher(setWaitOpen({ value: true }));
            setActive(false);
            setCloseDrawer();
            dispatcher(setDesktopBottomDrawerOpen({ value: false }));
          }}>
          <img alt="" src={mobileAddVideo}></img>
          <div>동영상</div>
        </div>
      </HideDrawer2>
    </div>
  );
};

export default ChatBox;
