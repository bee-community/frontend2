import xButton from 'assets/chatImages/xbutton.png';
import xx from 'assets/chatImages/xx.png';
import axios from 'chatApi';
import React, { useEffect, VFC, useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreatePointModalExcept } from 'slice/pointModal';

import { Label2, Label, Input, Button } from '@components/chat/Aside/styles';

import useInput from '@hooks/useInput';

import './CreateChannel.css';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const CreateChannel: VFC<Props> = ({ show, onCloseModal }) => {
  const dispatcher = useDispatch();
  const { JWTtoken } = useSelector((store: any) => store);
  const [newWorkspace, onChangeNewWorkspace] = useInput('');
  const [newHash, onChangeNewHash, setNewHash] = useInput('');
  const [tags, setTags] = useState<any>([]);
  const hashref = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const [chatType, setChatType] = useState('TEXT');
  const onChangeRadio = (e: any) => {
    setChatType(e.target.value);
  };

  const onKeyKey = (e: any) => {
    if (e.key === 'Enter' && e.keyCode === 13) {
      setNewHash('');
      setTags([...tags, e.target.value]);
    } else if (newHash == '' && e.key == 'Backspace') {
      let size = tags.length;
      setTags([...tags.slice(0, size - 1)]);
    }
  };
  const deleteClick = (index: number) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)]);
  };

  const onCreateWorkspace = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    e => {
      // e.preventDefault();
      {
        /* https://ehddud100677.tistory.com/350 */
      }
      if (!newWorkspace || !newWorkspace.trim()) return;
      if (tags.length < 1) {
      }
      axios
        .post(
          `/api/v1/webrtc/chat/channel`,
          {
            channelName: newWorkspace,
            hashTags: tags,
            channelType: chatType,
          },
          {
            headers: {
              Authorization: 'jwt ' + JWTtoken.JWTtoken,
            },
          },
        )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(res => {
          // console.log(res);
          onCloseModal();
          location.reload();
        })
        .catch(function (error) {
          // handle error
          if (error.response.status === 409) {
            dispatcher(setCreatePointModalExcept({ value: true }));
          }
        })
        .finally(() => {
          // console.log(chatType);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newWorkspace, newHash, chatType],
  );

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.add('scrollLock');

    // return () => body.classList.remove('scrollLock');
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="createChannel">
      <div className="modal">
        <img alt="closeButton" role="presentation" className="closeButton" src={xButton} onClick={onCloseModal}></img>
        <div className="mobile">
          <Label2 id="workspace-label">
            <div>
              <span>채팅방 이름</span>
              {!newWorkspace && <span className="warning trickWarning">이름을 입력해주세요.</span>}
            </div>
            <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace}></Input>
          </Label2>
          <Label2 id="workspace-label">
            <div>
              <span>해쉬태그</span>
              {tags.length === 0 && <span className="warning">태그를 작성한 후 엔터를 입력해주세요.</span>}
            </div>
            {/* <Input
            id="workspace"
            value={newHash}
            onChange={onChangeNewHash}></Input> */}
            <div className={active ? 'hashWrapperActive' : 'hashWrapper'}>
              {tags.map((tag: any, index: number) => {
                return (
                  <div className="testWrapper" key={index}>
                    <div className="tag">
                      <div className="test">{tag}</div>
                      <img
                        alt="hashTagDelete"
                        role="presentation"
                        onClick={() => deleteClick(index)}
                        src={xx}
                        className="material-icons"
                      />
                    </div>
                  </div>
                );
              })}
              <input
                className="hashInput"
                value={newHash}
                ref={hashref}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                onChange={onChangeNewHash}
                onKeyDown={onKeyKey}></input>
            </div>
          </Label2>
          <Label2 id="workspace-label">
            <div>
              <span>채팅방 종류</span>
            </div>
            <div className="radio">
              <label className="custom-radio-btn">
                <span onClick={() => setChatType('TEXT')} className="label">
                  문자
                </span>
                <input
                  onChange={onChangeRadio}
                  value="TEXT"
                  type="radio"
                  name="sample"
                  checked={chatType === 'TEXT' ? true : false}></input>
                <span
                  onClick={() => setChatType('TEXT')}
                  style={{
                    borderColor: chatType === 'TEXT' ? '#ffe576' : 'white',
                  }}
                  className="checkmark"></span>
              </label>
              <label className="custom-radio-btn">
                <span onClick={() => setChatType('VOIP')} className="label">
                  음성
                </span>
                <input
                  onChange={onChangeRadio}
                  value="VOIP"
                  type="radio"
                  name="sample"
                  checked={chatType === 'TEXT' ? false : true}></input>
                <span
                  onClick={() => setChatType('VOIP')}
                  style={{
                    borderColor: chatType === 'TEXT' ? 'white' : '#ffe576',
                  }}
                  className="checkmark"></span>
              </label>
            </div>
          </Label2>
          <Button onClick={onCreateWorkspace}>채팅방 생성!</Button>
        </div>
      </div>
      {/* <img className="modalBee" src={cuteBee}></img> */}
    </div>
  );
};

export default CreateChannel;
