import styled from '@emotion/styled';

export const ChatBox = styled.div`
  border-radius: 10px;
  display: flex;
  height: 507px;
  width: 330px;
  background-color: white;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${props => props.theme.screenSize.md}) {
    width: 100%;
    height: calc(85vh - 200px);
    border-radius: 15px;
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
