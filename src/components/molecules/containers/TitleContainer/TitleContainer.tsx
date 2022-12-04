import Button from 'components/atoms/Button';
import * as React from 'react';
import { useNavigate } from 'react-router';

import { StyledTitle } from './styles';

export interface TitleContainerProps {
  title: string;
  subTitle: string;
  navigate: string;
}

function TitleContainer(props: TitleContainerProps) {
  const title = props.title;
  const navigate = useNavigate();
  return (
    <StyledTitle>
      {props.subTitle && <div className="sub-title">{props.subTitle}</div>}
      <div className="title">
        <span>{title}</span>
        <Button
          onClick={() => {
            if (!!props.navigate) navigate(`articles/${props.navigate}`);
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
