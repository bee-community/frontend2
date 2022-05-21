import arrowDownYellowIcon from 'assets/images/icons/arrow-down-yellow.png';
import officeIcon from 'assets/images/icons/office.png';
import Button from 'components/atoms/Button';
import * as React from 'react';

import { StyledBoardTitleContainer } from './styles';

function BoardTitleContainer() {
  return (
    <StyledBoardTitleContainer>
      <Button buttonType="iconButton" color="yellow" radius="circle">
        <img className="board-icon" src={officeIcon} alt="회사 게시판" />
      </Button>
      <div className="board-name">회사</div>
      <Button buttonType="buttonWithIcon" color="black" radius="round">
        <span>카테고리</span>
        <img
          className="button-with-icon-image"
          src={arrowDownYellowIcon}
          alt="﹀"
        />
      </Button>
    </StyledBoardTitleContainer>
  );
}

export default BoardTitleContainer;
