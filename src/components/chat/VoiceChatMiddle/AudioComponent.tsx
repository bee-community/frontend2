import bg1 from 'assets/chatImages/bg1.png';
import bg2 from 'assets/chatImages/bg2.png';
import bg3 from 'assets/chatImages/bg3.png';
import bg4 from 'assets/chatImages/bg4.png';
import bg5 from 'assets/chatImages/bg5.png';
import bg6 from 'assets/chatImages/bg6.png';
import bg7 from 'assets/chatImages/bg7.png';
import bg8 from 'assets/chatImages/bg8.png';
import bg9 from 'assets/chatImages/bg9.png';
import bg10 from 'assets/chatImages/bg10.png';
import bg11 from 'assets/chatImages/bg11.png';
import bg12 from 'assets/chatImages/bg12.png';
import bg13 from 'assets/chatImages/bg13.png';
import bg14 from 'assets/chatImages/bg14.png';
import bg15 from 'assets/chatImages/bg15.png';
import bg16 from 'assets/chatImages/bg16.png';
import bg17 from 'assets/chatImages/bg17.png';
import bg18 from 'assets/chatImages/bg18.png';
import bg19 from 'assets/chatImages/bg19.png';
import React, { Component } from 'react';
import styled from 'styled-components';

import OpenViduAudioComponent from './OvVideo';

const bgList = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  bg13,
  bg14,
  bg15,
  bg16,
  bg17,
  bg18,
  bg19,
];
const OuterCircle = styled.div`
  /* --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #948a9e;
  background-color: #fff;
  position: relative; */
  /* width: 80px;
  height: 80px;
  margin: 10px 5px 0px 5px;
  background-color: #ffe576;
  border-radius: 100%; */
  position: relative;
  width: 90px;
  height: 105px;
  margin: 10px 10px 5px 0px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 0 0 rgb(0 0 0 / 14%);
  @media (max-width: 776px) {
    width: calc(var(--vw) * 24);
    height: 105px;
    margin: calc(var(--vh) * 3) calc(var(--vw) * 9) 5px 0px;
  }
`;

const InnerCircle = styled.div`
  top: 0px;
  left: 10px;
  width: 60px;
  height: 60px;
  margin: 10px 5px 0px 5px;
  /* background-color: #ffe576; */

  border-radius: 25px;
  position: absolute;
`;

const Test = styled.img`
  width: 60px;
  height: 60px;
  background-color: #ffe576;
  border-radius: 25px;
  @media (max-width: 776px) {
    width: calc(var(--vw) * 17);
    height: 60px;
  }
`;
function UserAudioComponent(props: any) {
  console.log('유저 비디오 프롭스', props);
  // const randomNumber = Math.floor(Math.random() * 19);
  return (
    <div>
      {props.streamManager !== undefined ? (
        <OuterCircle>
          <InnerCircle>
            <Test src={bgList[props.idx]}></Test>
            <OpenViduAudioComponent streamManager={props.streamManager} />
          </InnerCircle>
        </OuterCircle>
      ) : null}
    </div>
  );
}

export default UserAudioComponent;
