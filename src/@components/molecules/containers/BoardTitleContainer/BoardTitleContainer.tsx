import arrowDownYellowIcon from 'assets/images/icons/arrow-down-yellow.png';
import officeIcon from 'assets/images/icons/office.png';
import { useBoardState } from 'context/Board';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setCategoryOpen } from 'redux/openStateSlice';
import theme from 'styles/theme';

import Button from '@components/atoms/Button';

import useBoardActions from '@hooks/useBoardActions';

import { StyledBoardTitleContainer, DropDownMenu } from './styles';

interface BoardTitleContainerProps {
  title?: string;
  refreshBoardArticles?: (board_path: string) => void;
}

export type BoardInfo = {
  id: string;
  name: string;
  path: string;
};

function BoardTitleContainer(props: BoardTitleContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const boardActions = useBoardActions();
  const boards = useSelector((store: any) => store.boards);
  const boardName = boards?.filter((board: BoardInfo) => board.id === props.title)[0]?.name;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonWidth, setButtonWidth] = useState(() => {
    if (window.innerWidth <= 425) return { width: '80px' };
    return { width: '120px' };
  });
  useEffect(() => {
    if (boards?.length === 0) {
      boardActions.getBoards();
    }
  }, [boardActions, boards]);

  const resizeFunc = () => {
    if (window.innerWidth <= 425) setButtonWidth({ width: '80px' });
    else setButtonWidth({ width: '120px' });
  };
  useEffect(() => {
    window.addEventListener('resize', resizeFunc);
    return () => window.removeEventListener('resize', resizeFunc);
  }, []);

  useEffect(() => {
    console.log(buttonWidth);
  }, [buttonWidth]);
  return (
    <StyledBoardTitleContainer>
      <Button buttonType="iconButton" color="yellow" radius="circle">
        <img className="board-icon" src={officeIcon} alt="회사 게시판" />
      </Button>
      <div className="board-name">{boardName}</div>
      <div style={{ display: 'flex' }}>
        <Button
          customCss={{
            display: 'flex',
            marginRight: '10px',
          }}
          buttonType="buttonWithIcon"
          onClick={() => navigate('/article/post')}
          color="black"
          radius="round">
          글쓰기
        </Button>
        <div>
          <Button
            buttonType="buttonWithIcon"
            color="black"
            radius="round"
            customCss={buttonWidth}
            onClick={() => {
              setIsOpen(isOpen => !isOpen);
            }}>
            <span>카테고리</span>
            <img
              className="button-with-icon-image"
              src={arrowDownYellowIcon}
              style={
                isOpen
                  ? { transform: 'rotate(180deg)', transition: '0.3s all ease' }
                  : { marginBottom: '4px', transition: '0.3s all ease' }
              }
              alt={isOpen ? '︿' : '﹀'}
            />
          </Button>
          <DropDownMenu isOpen={isOpen}>
            {boards?.slice(0, 9).map((board: BoardInfo) => (
              <li key={board.id}>
                <Button
                  buttonType="contained"
                  radius="round"
                  color="black"
                  onClick={() => {
                    setIsOpen(isOpen => !isOpen);
                    if (props.refreshBoardArticles) props.refreshBoardArticles(board.id);
                    navigate(board.id);
                  }}
                  customCss={{ fontWeight: 'normal', ...buttonWidth }}>
                  {board.name}
                </Button>
              </li>
            ))}
            <Button
              buttonType="contained"
              radius="round"
              color="purple"
              onClick={() => {
                setIsOpen(isOpen => !isOpen);
                dispatch(setCategoryOpen());
                navigate('/');
              }}
              customCss={{ fontWeight: 'normal', ...buttonWidth }}>
              더보기
            </Button>
          </DropDownMenu>
        </div>
      </div>
    </StyledBoardTitleContainer>
  );
}

export default BoardTitleContainer;
