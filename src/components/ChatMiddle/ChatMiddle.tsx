import { useSelector } from 'react-redux';

import './chatMiddle.css';

interface chatUserProfile {
  user: any;
  index: number;
}

const ChatMiddle = () => {
  const userChatName = useSelector((store: any) => store.userEnterNumber);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userChatName.userEnterNumber.map(({ user, index }: chatUserProfile) => {});
  return (
    <div className="chatMiddle">
      <div className="wrapper">
        <div className="profileWrapper">
          {userChatName.userEnterNumber.map(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
