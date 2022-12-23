import xButton from 'assets/chatImages/xbutton.png';
import ChatContext from 'context/ChatContext';
import React, { useCallback, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPointOpen,
  setRemainPoint,
  setUsePoint,
  setRemainOpen,
  setCreatePointModalExcept,
  setUsePointExcept,
} from 'slice/pointModal';
import styled from 'styled-components';

import axios from '../../chatApi';
import './pointModal.css';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const PointModal = () => {
  const { channelInfo } = useContext<any>(ChatContext);
  const [TTL, setTTL] = useState('');
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const dispatcher = useDispatch();
  const onChangeRadio = (e: any) => {
    setTTL(e.target.value);
  };
  const getPoint = useCallback(() => {
    axios
      .get(`/api/v1/webrtc/chat/point/${channelInfo.id}`, {
        headers: {
          Authorization: 'jwt ' + JWTtoken.JWTtoken,
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((res: any) => {
        dispatcher(setRemainPoint({ value: res.data.point }));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        dispatcher(setRemainOpen({ value: true }));
      });
  }, []);
  const addTTL = useCallback(() => {
    axios
      .post(
        `/api/v1/webrtc/chat/extension/${channelInfo.id}`,
        {
          requestTTL: TTL,
        },
        {
          headers: {
            Authorization: 'jwt ' + JWTtoken.JWTtoken,
          },
        },
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(res => {
        console.log(res);
        dispatcher(setUsePoint({ value: Number(TTL) * 100 }));
        dispatcher(setPointOpen({ value: false }));
        getPoint();
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 409) {
          dispatcher(setUsePointExcept({ value: true }));
        }
      })
      .finally(() => {});
  }, [TTL]);

  return (
    <div className="PointModal">
      <ModalBackground
        onClick={() => {
          dispatcher(setPointOpen({ value: false }));
        }}></ModalBackground>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="showOverlay" htmlFor="check"></label>
      <input id="check" className="check" type="checkbox" />
      <div className="containerOuter">
        {/* <div style="display: flex; justify-content: center">
          <img style="width: 40px; height: 40px" src="./fanfare.png" />
        </div> */}
        <div className="hhh">채팅방 시간연장</div>
        {/* <div className="closeButtonWrapper">
          <img
            alt="closeButton"
            role="presentation"
            className="closeButton"
            onClick={() => {
              console.log('open');
              dispatcher(setPointOpen({ value: false }));
            }}
            src={xButton}></img>
        </div> */}
        <div className="container">
          <input type="radio" className="hidden" id="input1" value="1" name="inputs" onChange={onChangeRadio} />
          <label className="entry" htmlFor="input1">
            <div className="circle"></div>
            <div className="entry-label">
              30분 <span className="point1">100 Point</span>
            </div>
          </label>
          <input onChange={onChangeRadio} value="2" type="radio" className="hidden" id="input2" name="inputs" />
          <label className="entry" htmlFor="input2">
            <div className="circle"></div>
            <div className="entry-label">
              1시간
              <span style={{ marginLeft: '32px' }} className="point">
                200 Point
              </span>
            </div>
          </label>
          <input onChange={onChangeRadio} value="4" type="radio" className="hidden" id="input3" name="inputs" />
          <label className="entry" htmlFor="input3">
            <div className="circle"></div>
            <div className="entry-label">
              2시간
              <span className="point">400 Point</span>
            </div>
          </label>
          <input onChange={onChangeRadio} value="8" type="radio" className="hidden" id="input4" name="inputs" />
          <label className="entry" htmlFor="input4">
            <div className="circle"></div>
            <div className="entry-label">
              4시간
              <span className="point">800 Point</span>
            </div>
          </label>
          <input onChange={onChangeRadio} value="16" type="radio" className="hidden" id="input5" name="inputs" />
          <label className="entry" htmlFor="input5">
            <div className="circle"></div>
            <div className="entry-label">
              8시간 <span className="point">1600 Point</span>
            </div>
          </label>
          <div className="highlight"></div>
          <button onClick={addTTL} className="pointButton">
            포인트 사용
          </button>
        </div>
      </div>
      {/* <defs>
        <mask id="holes">
          <rect x="0" y="0" width="100" height="190" fill="white" />
          <circle r="12" cx="20" cy="20" fill="black" />
          <circle r="12" cx="20" cy="70" fill="black" />
          <circle r="12" cx="20" cy="120" fill="black" />
          <circle r="12" cx="20" cy="170" fill="black" />
        </mask>
      </defs> */}
    </div>
  );
};
export default PointModal;
