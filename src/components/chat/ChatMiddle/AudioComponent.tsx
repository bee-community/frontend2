import React, { Component } from 'react';
import styled from 'styled-components';

import OpenViduAudioComponent from './OvVideo';

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
  width: 40px;
  height: 40px;
  margin: 10px 5px 0px 5px;
  background-color: #ffe576;
  border-radius: 100%;
`;

const InnerCircle = styled.div`
  --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  position: absolute;
`;

function UserAudioComponent(props: any) {
  console.log('유저 비디오 프롭스', props);
  // const getNicknameTag = () => {
  //   // Gets the nickName of the user
  //   return JSON.parse(props.streamManager.stream.connection.data).clientData;
  // };
  return (
    <div>
      {props.streamManager !== undefined ? (
        <OuterCircle>
          <OpenViduAudioComponent streamManager={props.streamManager} />
        </OuterCircle>
      ) : null}
    </div>
  );
}

export default UserAudioComponent;
