import categoryIcon from 'assets/images/icons/category.png';
import Button from 'components/atoms/Button';
import * as React from 'react';

import { StyledIconWithLinkContainer } from './styles';

function IconWithLinkContainer(props: { name: string }) {
  return (
    <StyledIconWithLinkContainer>
      <Button buttonType="iconButton" color="yellow" radius="circle">
        <img src={categoryIcon} alt="categoryIcon" />
      </Button>
      <span>{props.name}</span>
    </StyledIconWithLinkContainer>
  );
}

export default IconWithLinkContainer;
