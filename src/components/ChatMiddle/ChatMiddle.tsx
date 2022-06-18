import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import ChatContext from '../../context/ChatContext';
import './chatMiddle.css';

interface chatUserProfile {
  user: any;
  index: number;
}

const ChatMiddle = () => {
  const userChatName = useSelector((store: any) => store.userEnterNumber);

  userChatName.userEnterNumber.map(({ user, index }: chatUserProfile) => {});
  return (
    <div className="chatMiddle">
      <div className="wrapper">
        <div className="profileWrapper">
          {userChatName.userEnterNumber.map(
            ({ user: any, index }: chatUserProfile) => {
              return <div key={index} className="userProfile"></div>;
            },
          )}
        </div>
      </div>
      {/* <div className="wrapper">
        <div className="profileWrapper">
      
        </div>
      </div> */}
    </div>
  );
};

export default ChatMiddle;
