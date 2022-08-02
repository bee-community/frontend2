import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s;
  height: calc(var(--vh) * 100 - var(--stretch) + 71px);
  background: rgba(0, 0, 0, 0.8);
`;

export const Wrapper = styled.div`
  position: relative;
  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;
    height: 300px;
  }
`;
export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 58px;
`;

export const BottomDrawerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  & > div > img {
    width: 40px;
    height: 40px;
  }

  & > div > div {
    line-height: 30px;
    font-weight: 700;
  }

  & > div:nth-child(1) > img {
    width: 44px;
    height: 44px;
  }

  & > div:nth-child(1) > div {
    line-height: 20px;
  }

  & > div:nth-child(1) {
    margin-bottom: 4px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const PlusButton = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;

export const TextArea = styled(TextareaAutosize)`
  display: flex;
  align-items: center;
  width: 220px;
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #f4f4f4;
  border-radius: 40px;
  resize: none;
  overflow: hidden;
  border: 0px;

  @media (max-width: 776px) {
    width: calc(var(--vw) * 70);
    border-radius: 8px;
    font-size: 16px;
  }
`;

export const SendButton = styled.button`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  width: 47px;
  height: 38px;
  border-radius: 22px;
  background-color: #ffe576;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  border: none;

  @media (max-width: 776px) {
    border-radius: 10px;
    color: black;
    height: 42px;
  }
`;

export const HideDrawer = styled.div`
  position: absolute;
  width: 100%;
  top: 80px;
  display: flex;
  justify-content: space-around;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(1) > img {
    width: 50px;
    height: 50px;
  }

  & > div:nth-child(1) > div {
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(2) > img {
    width: 45px;
    height: 45px;
  }

  & > div:nth-child(2) > div {
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
  }

  & > div:nth-child(3) > img {
    width: 45px;
    height: 45px;
  }

  & > div:nth-child(3) > div {
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
  }
`;
