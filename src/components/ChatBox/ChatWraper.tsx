import plusButton from 'assets/chatImages/plusButton.png';
import React, { VFC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './ChatChat.css';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}
const chatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  // const textareaRef = useRef<initialValue: HTMLInputElement | null>(null);
  // useEffect(() => {
  //     if (textareaRef.current) {
  //         autosize(textareaRef.current)
  //         console.log(textareaRef.current)
  //     }
  // }, [])

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

  // const onKeydownChat = useCallback(
  //   (e: any) => {
  //     // console.log(e)
  //     // console.log(chat)
  //     if (e.key === 'Enter' && e.keyCode === 13) {
  //       console.log(e);
  //       if (!e.shiftKey) {
  //         e.preventDefault();
  //         onSubmitForm(e);
  //       }
  //     }
  //   },
  //   [onSubmitForm],
  // );
  return (
    <div className="chatInput">
      <img
        alt="chatPlusButton"
        role="presentation"
        className="plusButton"
        src={plusButton}></img>

      {/* <TextareaAutosize
                minRows={3}
                maxRows={6}
                defaultValue="Just a single line..."
            /> */}
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

export default chatBox;
