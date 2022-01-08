import styled from '@emotion/styled';

export const LayoutWrap = styled.div`
  margin: 34px 40px 0;
  display: grid;
  grid-template-rows: 64px 1fr;

  @media (max-width: ${props => props.theme.size.lg}) {
    margin: 20px 15px;
  }
`;

// NOTE: Layout
export const Wrap = styled.div`
  background-color: ${props => props.theme.palette.background.white};
  border-radius: 40px;
  display: grid;
  grid-template-columns: 1fr 370px;

  @media (max-width: ${props => props.theme.size.lg}) {
    grid-template-columns: 1fr;
  }
`;

// NOTE: PageWrap
export const PageWrap = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: ${props => props.theme.size.lg}) {
    height: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
