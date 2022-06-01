import styled from '@emotion/styled';

export const StyledTemplate = styled.div`
  margin: 20px 40px 0;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 15px;
    gap: 15px;
  }
`;

export const StyledMain = styled.div`
  background-color: ${props => props.theme.background.white};
  border-radius: 40px;
  display: grid;
  grid-template-columns: 1fr 370px;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  margin: 30px;
  overflow-y: scroll;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    height: auto;
    margin: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledAside = styled.aside`
  height: calc(100vh - 140px);
  background-color: ${props => props.theme.background.gray};
  border-radius: 0 40px 40px 0;
  overflow-y: scroll;
  // padding: 35px;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${props => props.theme.screenSize.lg}) {
    display: none;
    height: auto;
  }
`;
