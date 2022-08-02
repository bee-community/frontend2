import mobileAddImge from 'assets/chatImages/mobileAddImage.png';
import mobileAddTime from 'assets/chatImages/mobileAddTime.png';
import mobileAddVideo from 'assets/chatImages/mobileAddVideo.png';
import plusButton from 'assets/chatImages/plusButton.png';
import React, { VFC, useState, useEffect } from 'react';
import Drawer from 'react-modern-drawer';
import TextareaAutosize from 'react-textarea-autosize';

import {
  ModalBackground,
  Wrapper,
  ChatInput,
  TextArea,
  PlusButton,
  SendButton,
} from './style';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
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
      <div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            top: '80px',
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <div>
            <img
              style={{
                width: '50px',
                height: '50px',
              }}
              alt=""
              src={mobileAddTime}></img>
            <div
              style={{
                display: 'flex',
                fontWeight: '700',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              시간 추가
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              style={{ width: '45px', height: '45px' }}
              alt=""
              src={mobileAddImge}></img>
            <div
              style={{
                marginTop: '9px',
                fontWeight: '700',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              사진
            </div>
          </div>
          <div>
            <img
              style={{ width: '45px', height: '45px' }}
              alt=""
              src={mobileAddVideo}></img>
            <div
              style={{
                display: 'flex',
                marginTop: '4px',
                fontWeight: '700',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              동영상
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ChatBox;
