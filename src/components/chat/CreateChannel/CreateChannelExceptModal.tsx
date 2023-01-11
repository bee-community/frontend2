import info from 'assets/chatImages/info.png';
import xButton from 'assets/chatImages/mobileXbutton.png';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCreatePointModalExcept } from 'slice/pointModal';
import styled from 'styled-components';

const CreateChannelExceptModalWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 280px;
  height: 100px;
  background-color: rgba(17, 17, 17, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  z-index: 1000;
`;

const RelativeWrapper = styled.div`
  position: relative;
  display: flex;
`;
const Xbutton = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 5px;
  left: 242px;
  cursor: pointer;
`;
const Img = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  width: 60px;
  height: 60px;
`;

const TextWrapper = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  color: white;
  & > div:nth-child(1) {
    color: #ffe576;
    font-weight: 700;
    font-size: 18px;
  }
  & > div:nth-child(2) {
    margin-top: 2px;
  }
`;

const CreateChannelExceptModal = () => {
  const dispatcher = useDispatch();

  return (
    <CreateChannelExceptModalWrapper>
      <RelativeWrapper>
        <Img src={info} alt=""></Img>
        <Xbutton
          onClick={() => {
            dispatcher(setCreatePointModalExcept({ value: false }));
          }}
          src={xButton}
          alt=""></Xbutton>
        <TextWrapper>
          <div>잠깐!</div>
          <div>포인트를 확인해주세요.</div>
        </TextWrapper>
      </RelativeWrapper>
    </CreateChannelExceptModalWrapper>
  );
};

export default CreateChannelExceptModal;
