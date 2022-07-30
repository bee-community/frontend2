import plusButton from 'assets/chatImages/plusButton.png';
import React, { VFC, useState } from 'react';
import Drawer from 'react-modern-drawer';
import TextareaAutosize from 'react-textarea-autosize';

import './ChatWraper.css';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="chatInput">
      <Drawer
        open={isOpen}
        overlayOpacity={0.7}
        onClose={toggleDrawer}
        direction="bottom"
        className="bla bla bla">
        dada
      </Drawer>
      <div
        onClick={() => {
          toggleDrawer();
          console.log('dd');
        }}>
        <img
          alt="chatPlusButton"
          role="presentation"
          className="plusButton"
          src={plusButton}></img>
      </div>

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
  );
};

export default ChatBox;
