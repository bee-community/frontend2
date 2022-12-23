import cuteBee from 'assets/chatImages/wink.png';
import React, { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatState } from 'slice/chatStateSlice';
import { setEndTTL } from 'slice/endTTLSlice';

import './ChatBeforeModal.css';

// interface Props {
//   show: boolean;
//   onCloseModal: () => void;
// }

const ChatEndModal: VFC = ({}) => {
  const endTTL = useSelector((store: any) => store.endTTL);
  const dispatcher = useDispatch();

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
      <img alt="BeeImage" role="presentation" className="modalBee" src={cuteBee}></img>
    </div>
  );
};

export default ChatEndModal;
