import styled from '@emotion/styled';

export const ChatBox = styled.div`
  border-radius: 15px;
  height: 507px;
  width: 360px;
  background-color: white;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;

  @media (max-width: ${props => props.theme.screenSize.md}) {
    width: 100%;
    height: calc(100vh - 200px);
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Scrollbars = styled.div`
  & > div:nth-child(3) {
    width: 5px;
  }
`;
