import egogram from 'assets/images/categoryIcons/egogram.png';
import humor from 'assets/images/categoryIcons/humor.png';
import love from 'assets/images/categoryIcons/love.png';
import pet from 'assets/images/categoryIcons/pet.png';
import review from 'assets/images/categoryIcons/review.png';
import talk from 'assets/images/categoryIcons/talk.png';
import worknet from 'assets/images/categoryIcons/worknet.png';
import Button from 'components/atoms/Button';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavigateFunction } from 'react-router/index.d';
import { setBeforeBoard } from 'redux/beforeBoardSlice';

import { StyledIconWithLinkContainer } from './styles';

const categoryIcons = {
  mbti: egogram,
  big5: egogram,
  '8values': egogram,
  egogram,
  worknet,
  greeting: egogram,
  talk,
  humor,
  pet,
  love,
  travel: egogram,
  ama: egogram,
  self: egogram,
  review,
} as any;

interface IconWithLinkContainerProps {
  name: string;
  id: string;
  link: string;
  icon: string;
  navigate: NavigateFunction;
}

function IconWithLinkContainer(props: IconWithLinkContainerProps) {
  const dispatch = useDispatch();

  return (
    <StyledIconWithLinkContainer>
      <div>
        <Button
          onClick={() => {
            props.navigate(props.link);
            dispatch(
              setBeforeBoard({
                id: props.id,
                path: props.icon,
                name: props.name,
              }),
            );
          }}
          buttonType="iconButton"
          color="yellow"
          radius="circle">
          <img src={categoryIcons[props.icon]} alt="categoryIcon" />
        </Button>
        <span>{props.name}</span>
      </div>
    </StyledIconWithLinkContainer>
  );
}

export default IconWithLinkContainer;
