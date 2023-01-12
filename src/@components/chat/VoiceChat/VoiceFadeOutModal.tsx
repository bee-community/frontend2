import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVoiceStateInfoModal } from 'slice/pointModal';
import styled from 'styled-components';

const VoiceFadeOutModalWrapper = styled.div`
  position: absolute;
  width: 230px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  z-index: 10;
  top: calc(50% - 20px);
  left: calc(50% - 115px);
`;

const VoiceFadeOutModal = () => {
  const dispatcher = useDispatch();
  const fadeOutRef = useRef<any>(null);
  const [count, setCount] = useState(1);
  const voiceStateInfoText = useSelector((store: any) => store.pointOpen.voiceStateInfoText);
  const voiceStateInfoModal = useSelector((store: any) => store.pointOpen.voiceStateInfoModal);
  const fadeOutEffect = () => {
    let fadeTarget = fadeOutRef.current;
    let minusOpacity = count;
    let fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        console.log('opacity 0');
        fadeTarget.style.opacity = 1;
      }
      if (minusOpacity > 0.8) {
        minusOpacity -= 0.01;
      } else if (minusOpacity <= 0.8 && minusOpacity >= 0) {
        fadeTarget.style.opacity -= 0.4;
        minusOpacity -= 0.4;
      } else {
        fadeTarget.style.opacity = 0;
        clearInterval(fadeEffect);
      }
    }, 100);
  };

  useEffect(() => {
    console.log('hhhhhhhhhhhhhhh');
    setCount(1);
    fadeOutRef.current.style.opacity = 1;
    fadeOutEffect();
  }, [voiceStateInfoText]);

  return <VoiceFadeOutModalWrapper ref={fadeOutRef}>{voiceStateInfoText}</VoiceFadeOutModalWrapper>;
};

export default VoiceFadeOutModal;
