import enter from 'assets/images/icons/enter.png';
import dayjs from 'dayjs';

import * as Styled from './ReplyItem.styles';

export interface ReplyItemProps {
  id: string;
  author: string;
  createAt: string;
  content: string;
}
const ReplyItem = (props: ReplyItemProps) => {
  const { author, createAt, content } = props;
  return (
    <Styled.Reply>
      <div className="nickname-wrap">
        <img src={enter} alt="enter" />
        <div className="nicknameContainer">
          <span className="nickname">{author}</span>
          <div className="date">{dayjs(createAt).format('YYYY.MM.DD HH:mm')}</div>
        </div>
      </div>
      <div className="reply-wrap">
        <div className="reply">{content}</div>
      </div>
    </Styled.Reply>
  );
};

export default ReplyItem;
