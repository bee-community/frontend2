import Button from 'components/@Shared/Button';
import dayjs from 'dayjs';

import * as Styled from './CommentItem.styles';

export interface CommentItemProps {
  id: 'string';
  author: 'string';
  createAt: 'string';
  content: 'string';
  onClickReplyButton: () => void;
}

const CommentItem = (props: CommentItemProps) => {
  const { id, author, createAt, content, onClickReplyButton } = props;
  return (
    <Styled.Comment key={id}>
      <div className="comment-info">
        <span className="nick-name">{author}</span>
        <span className="date">{dayjs(createAt).format('YYYY.MM.DD HH:mm')}</span>
      </div>
      <div className="comment">{content}</div>
      <div className="comment-response">
        <Button.Outline onClick={onClickReplyButton} customCss={Styled.ExtendedOutlineButton}>
          답글
        </Button.Outline>
      </div>
    </Styled.Comment>
  );
};

export default CommentItem;
