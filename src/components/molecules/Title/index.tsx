import Button from 'components/atoms/Button';
import * as React from 'react';

import { StyledTitle } from './styles';

export interface TitleProps {
  title: string;
  subTitle: string;
}

function Title(props: TitleProps) {
  const title = props.title;

  return (
    <StyledTitle>
      {props.subTitle && <div className="sub-title">{props.subTitle}</div>}
      <div className="title">
        <span>{title}</span>
        <Button buttonType="contained" color="purple" radius="round">
          더보기
        </Button>
      </div>
    </StyledTitle>
  );
}

export default Title;
