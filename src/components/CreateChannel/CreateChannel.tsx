import xButton from 'assets/chatImages/xbutton.png';
import xx from 'assets/chatImages/xx.png';
import axios from 'axios';
import React, { useEffect, VFC, useCallback, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import useInput from '../../hooks/useInput';
import { Label, Input, Button } from '../Aside/styles';
import './CreateChannel.css';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}

const CreateChannel: VFC<Props> = ({ show, onCloseModal }) => {
  const { JWTtoken } = useSelector((store: any) => store);
  const [newWorkspace, onChangeNewWorkspace] = useInput('');
  const [newHash, onChangeNewHash, setNewHash] = useInput('');
  const [tags, setTags] = useState<any>([]);
  const hashref = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const onKeyKey = (e: any) => {
    // console.log(e.key);
    // console.log(e.keyCode);
    if (e.key === 'Enter' && e.keyCode === 13) {
      // setName(e.target.value);
      setNewHash('');
      setTags([...tags, e.target.value]);
    } else if (newHash == '' && e.key == 'Backspace') {
      let size = tags.length;
      setTags([...tags.slice(0, size - 1)]);
    }
  };

  const deleteClick = (index: number) => {
    // console.log(index);
    // console.log('click delete');
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

      axios
        .post(
          `/api/v1/webrtc/chat/channel`,
          {
            channelName: newWorkspace,
            // limitParticipants: 15,
            hashTags: tags,
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
          console.log(error);
        });
      // if (!newUrl || !newUrl.trim()) return;
      // console.log(newWorkspace)
      // console.log(newUrl)
      // axios
      //     .post(ㄴ
      //         '/api/workspaces',

      //         {
      //             workspace: newWorkspace,
      //         },
      //         {
      //             // 로그인된 상태인 것을 쿠키로 백에 전달
      //             withCredentials: true,
      //         },
      //     )
      //     .then(() => {
      //         revalidate();
      //         setShowCreateWorkspaceModal(false);
      //         // state 값 초기화
      //         setNewWorkspace('');
      //         setNewUrl('');
      //     })
      //     .catch((error) => {
      //         console.dir(error);
      //         toast.error(error.response?.data, { position: 'bottom-center' });
      //     });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newWorkspace, newHash],
  );

  useEffect(() => {
    // console.log('wwww');
    // const DDD = axios
    //   .get<ChannelResponse>('http://192.168.0.39:8080/api/v1/webrtc/channels')
    //   .then(res => {
    //     // console.log(Data.channels);
    //     // // Data.channels.map(v => {
    //     // //   console.log(v);
    //     // // });
    //     // Data.channels.map(v => {
    //     //   console.log(v);
    //     // });
    //     // console.log(`dddd:`);
    //   });
    // return () => disconnect();
  }, []);
  // console.log('ggg');
  if (!show) {
    return null;
  }
  return (
    <div className="createChannel">
      <div className="modal">
        <img
          alt="closeButton"
          role="presentation"
          className="closeButton"
          src={xButton}
          onClick={onCloseModal}></img>
        <Label id="workspace-label">
          <span>채팅방 이름</span>
          <Input
            id="workspace"
            value={newWorkspace}
            onChange={onChangeNewWorkspace}></Input>
        </Label>
        <Label id="workspace-label">
          <span>해쉬태그</span>
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
        </Label>
        <Button onClick={onCreateWorkspace}>채팅방 생성!</Button>
      </div>
      {/* <img className="modalBee" src={cuteBee}></img> */}
    </div>
  );
};

export default CreateChannel;
