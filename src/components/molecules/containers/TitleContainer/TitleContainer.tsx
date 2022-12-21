import Button from 'components/atoms/Button';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavigateFunction } from 'react-router/index.d';
import { resetBeforeBoard } from 'redux/beforeBoardSlice';

import { StyledTitle } from './styles';

export interface TitleContainerProps {
  title: string;
  subTitle: string;
  navigate: string;
}

const cleanBeforeBoard = (dispatch: any) => {
  dispatch(resetBeforeBoard());
  return navigateBoardPage;
};

const navigateBoardPage = (navigate: NavigateFunction, path: string) => navigate(path);

function TitleContainer(props: TitleContainerProps) {
  const title = props.title;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledTitle>
      {props.subTitle && <div className="sub-title">{props.subTitle}</div>}
      <div className="title">
        <span>{title}</span>
        <Button
          onClick={() => {
            if (!!props.navigate) {
              cleanBeforeBoard(dispatch)(navigate, `articles/${props.navigate}`);
            }
          }}
          buttonType="contained"
          color="purple"
          radius="round">
          더보기
        </Button>
      </div>
    </StyledTitle>
  );
}

export default TitleContainer;
