import styled from '@emotion/styled';
import theme from 'styles/theme';

export const ContentZone = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px 28px;
  align-items: stretch;
  align-content: start;
  overflow: scroll;

  >* {
    /* background: #dddddd; */
  }

  ${(props) => props.theme.mq.mobile}{
    gap: 10px 10px;
  }
`;
