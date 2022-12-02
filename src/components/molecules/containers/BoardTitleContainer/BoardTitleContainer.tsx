import arrowDownYellowIcon from 'assets/images/icons/arrow-down-yellow.png';
import officeIcon from 'assets/images/icons/office.png';
import Button from 'components/atoms/Button';
import { useBoardState } from 'context/Board';
import useBoardActions from 'hooks/useBoardActions';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { StyledBoardTitleContainer, DropDownMenu } from './styles';

interface BoardTitleContainerProps {
  title?: string;
}

function BoardTitleContainer(props: BoardTitleContainerProps) {
  const { boardName } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const boardActions = useBoardActions();
  const boards = useBoardState();
  const navigate = useNavigate();
  useEffect(() => {
    if (boards.length === 0) {
      boardActions.getBoards();
    }
    setIsOpen(false);
  }, [boardActions, boards, boardName]);

  return (
    <StyledBoardTitleContainer>
      <Button buttonType="iconButton" color="yellow" radius="circle">
        <img className="board-icon" src={officeIcon} alt="회사 게시판" />
      </Button>
      <div className="board-name">{props.title}</div>
      <div style={{ display: 'flex' }}>
        <Button
          css={{ display: 'flex', marginRight: '10px' }}
          buttonType="buttonWithIcon"
          onClick={() => navigate('/article/post')}
          color="black"
          radius="round">
          글쓰기
        </Button>
        <Button
          buttonType="buttonWithIcon"
          color="black"
          radius="round"
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          <span>카테고리</span>
          <img
            className="button-with-icon-image"
            src={arrowDownYellowIcon}
            style={isOpen ? { transform: 'rotate(180deg)' } : {}}
            alt={isOpen ? '︿' : '﹀'}
          />
        </Button>
      </div>
      <DropDownMenu isOpen={isOpen}>
        {boards.map(board => (
          <li key={board.id}>
            <Link to={board.path}>
              <Button
                buttonType="contained"
                radius="round"
                color="black"
                css={{ fontWeight: 'normal' }}>
                {board.name}
              </Button>
            </Link>
          </li>
        ))}
      </DropDownMenu>
    </StyledBoardTitleContainer>
  );
}

export default BoardTitleContainer;
