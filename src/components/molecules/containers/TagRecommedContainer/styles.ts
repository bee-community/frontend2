import styled from '@emotion/styled';

export const StyledTagRecommedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: NotoSansCJKKR;
  font-weight: bold;

  .tag-points {
    color: ${props => props.theme.palette.purple[100]};
    margin-left: 0.3rem;
  }

  button {
    margin-left: 0.3rem;
  }
`;
