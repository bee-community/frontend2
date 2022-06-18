import thumbDown from 'assets/images/icons/thumb-down.png';
import thumbUp from 'assets/images/icons/thumb-up.png';
import Button from 'components/atoms/Button';
import * as React from 'react';

import { StyledTagRecommedContainer } from './styles';

function TagRecommedContainer(props: { tag: string }) {
  return (
    <StyledTagRecommedContainer>
      <span>#{props.tag}</span>
      <span className="tag-points">+2</span>
      <Button
        buttonType="iconButton"
        color="yellow"
        radius="circle"
        css={{ boxShadow: 'none', padding: 0 }}>
        <img width="28px" src={thumbUp} alt="up" />
      </Button>
      <Button
        buttonType="iconButton"
        color="yellow"
        radius="circle"
        css={{ boxShadow: 'none', padding: 0 }}>
        <img width="28px" src={thumbDown} alt="down" />
      </Button>
    </StyledTagRecommedContainer>
  );
}

export default TagRecommedContainer;
