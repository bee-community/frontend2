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
  background: rgba(0, 0, 0, 0.7);
`;

export const ChatBox = styled.div`
  border-radius: 15px;
  height: 507px;
  width: 360px;
  background-color: white;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
  @media (max-width: ${props => props.theme.screenSize.md}) {
    width: calc(var(--vw) * 100);
    height: calc(var(--vh) * 100);
    border-radius: 0px;
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

export const PPointModal2 = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 115px);
  background-color: rgba(17, 17, 17, 0.9);
  border-radius: 20px;
  width: 230px;
  height: 100px;

  & > .yellowArea {
    width: 100%;
    height: 20%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    /* border-bottom: 1px solid #ffe576; */
    margin-top: 20px;
    color: #ffe576;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
  }
  & > div:nth-child(2) {
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 200px;
  }
  & > .textArea {
    margin-top: 10px;
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
    line-height: 22px;
    & > div:nth-child(1) {
      & > span:nth-child(1) {
        font-weight: 700;
        color: rgb(82, 6, 185);
      }
    }
    & > div:nth-child(2) {
      & > span:nth-child(1) {
        font-weight: 700;
      }
    }
  }
  & > .confirmButton {
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 45px;
      border-radius: 10px;
      background-color: #ffe576;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`;

export const ModalBackgroundOutEvent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
