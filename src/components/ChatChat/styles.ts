import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s;
  width: 360px;
  height: 507px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
`;

export const ChatBox = styled.div`
  border-radius: 15px;
  height: 507px;
  width: 360px;
  background-color: white;
  overflow-x: hidden;
  position: relative;
  /* overflow-y: hidden; */
  @media (max-width: ${props => props.theme.screenSize.md}) {
    width: calc(var(--vw) * 100);
    height: calc(var(--vh) * 100);
    border-radius: 0px;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
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
