import styled from '@emotion/styled';

export const ChatBox = styled.div`
  border-radius: 15px;
  height: 507px;
  width: 360px;
  background-color: white;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
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
