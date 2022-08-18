import mobileAddImge from 'assets/chatImages/mobileAddImage.png';
import mobileAddTime from 'assets/chatImages/mobileAddTime.png';
import mobileAddVideo from 'assets/chatImages/mobileAddVideo.png';
import plusButton from 'assets/chatImages/plusButton.png';
import React, { VFC, useState, useEffect } from 'react';
import Drawer from 'react-modern-drawer';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { setPointOpen, setWaitOpen } from 'slice/pointModal';

import {
  ModalBackground,
  Wrapper,
  ChatInput,
  TextArea,
  PlusButton,
  SendButton,
  HideDrawer,
} from './style';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const dispatcher = useDispatch();

  const onKeydownChat = (e: any) => {
    if (e.key === 'Enter' && e.keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        if (chat?.trim() !== '') {
          onSubmitForm(e);
        }
      }
    }
  };
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  const setOpenDrawer = () => {
    document.documentElement.style.setProperty('--stretch', `248px`);
  };

  const setCloseDrawer = () => {
    document.documentElement.style.setProperty('--stretch', `128px`);
  };
  return (
    <Wrapper>
      {active && (
        <ModalBackground
          onClick={() => {
            setCloseDrawer();
            setActive(false);
          }}></ModalBackground>
      )}
      <ChatInput>
        {/* <Drawer
        open={isOpen}
        overlayOpacity={0.7}
        onClose={toggleDrawer}
        direction="bottom"
        className="bla bla bla">
        dada
      </Drawer> */}
        <div
          onClick={() => {
            toggleDrawer();
            setOpenDrawer();
            setTimeout(() => {
              setActive(true);
            }, 250);
          }}>
          <PlusButton
            alt="chatPlusButton"
            role="presentation"
            className="plusButton"
            src={plusButton}></PlusButton>
        </div>
        <TextArea
          minRows={2}
          maxRows={3}
          className="iinput"
          value={chat}
          onChange={onChangeChat}
          onKeyDown={onKeydownChat}></TextArea>
        <SendButton onClick={onSubmitForm}>전송</SendButton>
      </ChatInput>
      <HideDrawer>
        <div
          onClick={() => {
            dispatcher(setPointOpen({ value: true }));
            setActive(false);
            setCloseDrawer();
          }}>
          <img alt="" src={mobileAddTime}></img>
          <div>시간 추가</div>
        </div>
        <div
          onClick={() => {
            dispatcher(setWaitOpen({ value: true }));
            setActive(false);
            setCloseDrawer();
          }}>
          <img alt="" src={mobileAddImge}></img>
          <div>사진</div>
        </div>
        <div
          onClick={() => {
            dispatcher(setWaitOpen({ value: true }));
            setActive(false);
            setCloseDrawer();
          }}>
          <img alt="" src={mobileAddVideo}></img>
          <div>동영상</div>
        </div>
      </HideDrawer>
    </Wrapper>
  );
};

export default ChatBox;
