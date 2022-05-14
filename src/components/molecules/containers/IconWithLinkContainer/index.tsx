import egogram from 'assets/images/categoryIcons/egogram.png';
import humor from 'assets/images/categoryIcons/humor.png';
import love from 'assets/images/categoryIcons/love.png';
import pet from 'assets/images/categoryIcons/pet.png';
import review from 'assets/images/categoryIcons/review.png';
import talk from 'assets/images/categoryIcons/talk.png';
import worknet from 'assets/images/categoryIcons/worknet.png';
import Button from 'components/atoms/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';

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
  link: string;
}

function IconWithLinkContainer(props: IconWithLinkContainerProps) {
  return (
    <StyledIconWithLinkContainer>
      <Link to={props.link}>
        <Button buttonType="iconButton" color="yellow" radius="circle">
          <img src={categoryIcons[props.link]} alt="categoryIcon" />
        </Button>
        <span>{props.name}</span>
      </Link>
    </StyledIconWithLinkContainer>
  );
}

export default IconWithLinkContainer;
