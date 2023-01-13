import arrowDown from 'assets/images/icons/arrow-down.png';
import arrowUp from 'assets/images/icons/arrow-up.png';

import * as Styled from './CommentOpenButton.styles';

export interface CommentOpenButtonProps {
  onClick: () => void;
  isDetailsOpen: boolean;
}
const CommentOpenButton = (props: CommentOpenButtonProps) => {
  const { onClick, isDetailsOpen } = props;
  return (
    <Styled.CommentsOpenButton>
      <span>댓글</span>
      <span style={{ display: 'flex' }} onClick={onClick} className="arrow-down-button">
        {isDetailsOpen ? (
          <img style={{ marginTop: '5px' }} src={arrowUp} alt="up" />
        ) : (
          <img src={arrowDown} alt="down" />
        )}
      </span>
    </Styled.CommentsOpenButton>
  );
};

export default CommentOpenButton;
