/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import green from 'assets/chatImages/bigreen.png';
import gotIdea from 'assets/chatImages/got_idea.png';
import muteIcon from 'assets/chatImages/mute.png';
import point from 'assets/chatImages/point.png';
import red from 'assets/chatImages/red.png';
import unvolume from 'assets/chatImages/unVolume.png';
import unmuteIcon from 'assets/chatImages/unmute.png';
import unvoice from 'assets/chatImages/unvoice.png';
import voice from 'assets/chatImages/voice.png';
import volume from 'assets/chatImages/volume.png';
import { OpenVidu } from 'openvidu-browser';
import { useCallback, useEffect, useState, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import { setSessionCheck, setViduVoiceToken } from 'slice/openViduSessionCheckSlice';
import { setPointOpen, setVoiceStateInfoModal, setVoiceStateInfoText } from 'slice/pointModal';
import styled from 'styled-components';

import axios from '../../chatApi';
import ChatContext from '../../context/ChatContext';
import UserAudioComponent from './AudioComponent';
import './voiceChatMiddle.css';

const ModalBackgroundOutEvent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

interface chatUserProfile {
  user: any;
  index: number;
}
const OPENVIDU_SERVER_URL = 'https://sagang3.duckdns.org:8481';
// const OPENVIDU_SERVER_URL = "https://" + window.location.hostname + ":4443";
const OPENVIDU_SERVER_SECRET = 'MY_SECRET';
// const nickname = "Participant" + Math.floor(Math.random() * 100);
// const nickname = 'ksw';
const ChatMiddle = () => {
  // // const userChatName = useSelector((store: any) => store.userEnterNumber);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // userChatName.userEnterNumber.map(({ user, index }: chatUserProfile) => {});
  const pointOpen = useSelector((store: any) => store.pointOpen);
  const dispatcher = useDispatch();
  const { channelInfo, chatList, setChatList } = useContext<any>(ChatContext);
  const [mySessionId, setMySessionId] = useState('ses_I72RytASJy');
  const [session, setSession] = useState<any>(undefined);
  const [mainStreamManager, setMainStreamManager] = useState<any>(undefined);
  const [publisher, setPublisher] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any>([]);
  const [mute, setMute] = useState(false);
  const [sound, setSound] = useState(false);
  const [target, setTarget] = useState<any>(true);
  const [voiceToken, setVoiceToken] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const menuModal = useRef<any>();
  const JWTtoken = useSelector((store: any) => store.JWTtoken);
  const leaveSession = useCallback(() => {
    console.log(session);
    if (target) {
      setTarget(false);
      console.log('오픈비두 세션종료');
      console.log(session);
      if (session) {
        session.disconnect();
        console.log('보내나');
        axios
          .post(
            '/api/v1/webrtc/voice/remove-user',
            {
              channelId: channelInfo.id,
              token: voiceToken,
            },
            {
              headers: {
                Authorization: 'jwt ' + JWTtoken.JWTtoken,
              },
            },
          )
          .then((response: any) => {
            console.log('TOKEN', response);
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
      setSession(undefined);
      setSubscribers([]);
      setMySessionId('');
      setPublisher(undefined);
      setMainStreamManager(undefined);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      deleteSubscriber(mainStreamManager);
      setMute(false);
      setTarget(true);
    }
  }, [target, session, voiceToken]);

  const emergencyLeaveSession = () => {
    axios
      .post('/api/v1/webrtc/voice/remove-user', {
        sessionName: window.localStorage.getItem('voiceSessionId'),
        email: 'ksw3',
        token: window.localStorage.getItem('voiceToken'),
      })
      .then((response: any) => {
        console.log('TOKEN', response);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const alertUser = (e: any) => {
    console.log('새로고침 테스트');
    emergencyLeaveSession();
  };

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
      dispatcher(setVoiceStateInfoModal({ value: false }));
      console.log('탈출');
      console.log(session);
      if (session) {
        session.disconnect();
      }
      emergencyLeaveSession();
    };
  }, [session]);

  useEffect(() => {
    console.log('사람');
    console.log(subscribers);
    console.log(subscribers.length);
    console.log(subscribers[subscribers.length - 1]);
  }, [subscribers]);

  const handleMainVideoStream = (stream: any) => {
    if (mainStreamManager !== stream) {
      setMainStreamManager(stream);
    }
  };

  const deleteSubscriber = (streamManager: any) => {
    console.log('ddddeeeellllltttt');
    let subscriberss = subscribers;
    let index = subscriberss.indexOf(streamManager, 0);
    if (index > -1) {
      subscriberss.splice(index, 1);
      console.log(subscriberss);
      setSubscribers([...subscriberss]);
    }
  };

  const getToken = useCallback(() => {
    // return createSession(mySessionId).then(sessionId => createToken(sessionId));
    return new Promise((resolve, reject) => {
      axios
        .post(
          '/api/v1/webrtc/voice/get-token',
          {
            channelId: channelInfo.id,
            // email: 'ksw',
          },
          {
            headers: {
              Authorization: 'jwt ' + JWTtoken.JWTtoken,
            },
          },
        )
        .then((response: any) => {
          console.log('TOKEN', response);
          resolve(response.data.token);
          setVoiceToken(response.data.token);
          dispatcher(setViduVoiceToken({ value: response.data.token }));
        })
        .catch(error => reject(error));
    });
  }, []);

  //세션 연결 및 커넥트
  const joinSession = useCallback(() => {
    if (target) {
      setTarget(false);
      // window.addEventListener('beforeunload', onbeforeunload);

      const OV = new OpenVidu();
      console.log(OV);
      var mySession = OV.initSession();
      console.log('오픈비두두두', mySession);
      setSession(mySession);
      // dispatcher(setSessionCheck({ value: mySession }));

      mySession.on('streamCreated', event => {
        var subscriberOV = mySession.subscribe(event.stream, 'subscriber');
        console.log(subscriberOV);
        var subscriberList = subscribers;
        subscriberList.push(subscriberOV);
        setTarget(subscriberOV);
        setSubscribers([...subscriberList]);
        // subscriber.subscribeToAudio(true);
      });

      mySession.on('streamDestroyed', event => {
        // Remove the stream from 'subscribers' array
        deleteSubscriber(event.stream.streamManager);
      });

      mySession.on('exception', exception => {
        console.warn(exception);
      });

      getToken().then((tt: any) => {
        console.log(tt);
        console.log(mySession);
        mySession
          // .connect(tt, { clientData: nickname })
          .connect(tt, { clientData: 'ksw3' })
          .then(async () => {
            window.localStorage.setItem('voiceToken', tt);
            window.localStorage.setItem('voiceSessionId', channelInfo.id);
            var devices = await OV.getDevices();
            console.log(devices);
            // var videoDevices = devices.filter(
            //   device => device.kind === 'audioinput',
            // );

            let publisherOV: any = OV.initPublisher('', {
              audioSource: undefined,
              videoSource: false,
              publishAudio: true,
              publishVideo: false,
              resolution: '640x480',
              frameRate: 30,
              insertMode: 'APPEND',
              mirror: false,
            });
            console.log(publisherOV);
            mySession.publish(publisherOV);
            setMainStreamManager(publisherOV);
            setPublisher(publisherOV);
            // publisher.publishAudio(true);
          })
          .catch(err => {
            console.log(err);
            console.log('커넥팅 실패', err.code, err.message);
          });
      });
      setTarget(true);
    }
  }, [session, target]);
  // console.log(subscribers);
  const soundControl = useCallback(() => {
    subscribers.map((el: any) => el.subscribeToAudio(sound));
    if (sound === false) {
      dispatcher(setVoiceStateInfoModal({ value: true }));
      dispatcher(setVoiceStateInfoText({ value: '스피커 사용을 중지합니다.' }));
    } else {
      dispatcher(setVoiceStateInfoModal({ value: true }));
      dispatcher(setVoiceStateInfoText({ value: '스피커를 사용합니다.' }));
    }
    setSound(!sound);
  }, [sound, subscribers]);
  // console.log();
  return (
    <>
      {menuActive && (
        <ModalBackgroundOutEvent
          onClick={() => {
            menuModal.current.click();
          }}></ModalBackgroundOutEvent>
      )}
      <div className="voiceChatMiddle">
        <div className="wrapper">
          <div className="profileWrapper">
            <nav className="menu">
              <input
                type="checkbox"
                className="menu-open"
                name="menu-open"
                id="menu-open"
                onClick={() => {
                  setMenuActive(!menuActive);
                }}
              />
              <label className="menu-open-button" htmlFor="menu-open">
                <img src={gotIdea} style={{ width: '28px;', height: '28px' }} alt="" ref={menuModal} />
              </label>

              {session === undefined ? (
                <a className="menu-item">
                  <img
                    style={{ width: '40px;', height: '40px' }}
                    src={green}
                    alt=""
                    onClick={() => {
                      window.alert('음성채팅이 시작됩니다.');
                      joinSession();
                    }}
                  />
                </a>
              ) : (
                <a className="menu-item">
                  <img style={{ width: '40px;', height: '40px' }} src={red} alt="" onClick={leaveSession} />
                </a>
              )}

              <a className="menu-item">
                <img
                  style={{ width: '25px;', height: '25px' }}
                  src={sound ? unvolume : volume}
                  alt=""
                  onClick={() => {
                    if (typeof publisher == 'undefined') {
                      window.alert('음성채팅중이 아닙니다.');
                    } else {
                      soundControl();
                    }
                  }}
                />
              </a>
              <a className="menu-item">
                <img
                  style={{ width: '40px;', height: '40px' }}
                  src={mute ? unvoice : voice}
                  alt=""
                  onClick={() => {
                    console.log('mute');
                    console.log(typeof publisher);
                    if (typeof publisher == 'undefined') {
                      window.alert('음성채팅중이 아닙니다.');
                    } else {
                      if (mute === false) {
                        dispatcher(setVoiceStateInfoModal({ value: true }));
                        dispatcher(
                          setVoiceStateInfoText({
                            value: '마이크 사용을 중지합니다.',
                          }),
                        );
                      } else {
                        console.log('테스트트트트트트트트ㅡㅌ');
                        dispatcher(setVoiceStateInfoModal({ value: true }));
                        dispatcher(
                          setVoiceStateInfoText({
                            value: '마이크를 사용합니다.',
                          }),
                        );
                      }
                      publisher.publishAudio(mute);
                      setMute(!mute);
                    }
                    // target.subscribeToAudio(mute);
                  }}
                />
              </a>
              <a className="menu-item">
                <img
                  style={{ width: '25px;', height: '25px' }}
                  src={point}
                  alt=""
                  onClick={() => {
                    menuModal.current.click();
                    dispatcher(setPointOpen({ value: 'true' }));
                  }}
                />
              </a>
            </nav>
            <Scrollbar
              style={{ width: '330px', height: '330px' }}
              className="voiceChatMiddleScroll"
              noScrollX={true}
              maximalThumbYSize={95}>
              {session !== undefined ? (
                <div id="session">
                  <div id="session-header"></div>

                  {mainStreamManager !== undefined ? (
                    <div id="main-video" className="col-md-6">
                      {/* <div>mainStreamManager</div> */}
                      {/* <UserVideoComponent
                  streamManager={this.state.mainStreamManager}
                /> */}
                      {/* <input
                  className="btn btn-large btn-success"
                  type="button"
                  id="buttonSwitchCamera"
                  onClick={this.switchCamera}
                  value="Switch Camera"
                /> */}
                    </div>
                  ) : null}
                  <div id="video-container" className="hi">
                    <div className="stream-container" onClick={() => handleMainVideoStream(publisher)}>
                      <UserAudioComponent streamManager={publisher} idx={18} />
                    </div>
                    {/* {publisher !== undefined ? (
                    <div
                      className="stream-container"
                      onClick={() => handleMainVideoStream(publisher)}>
                      <UserAudioComponent streamManager={publisher} idx={18} />
                    </div>
                  ) : null} */}
                    {subscribers.map((sub: any, i: any) => {
                      if (i < 9) {
                        return (
                          <div key={i} onClick={() => handleMainVideoStream(sub)}>
                            {/* <div>ssss</div> */}
                            <UserAudioComponent streamManager={sub} idx={i} />
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              ) : null}
            </Scrollbar>

            {/* <img
            className="mute"
            alt=""
            src={mute ? muteIcon : unmuteIcon}
            onClick={() => {
              console.log('mute');
              console.log(typeof publisher);
              if (typeof publisher == 'undefined') {
                window.alert('음성채팅중이 아닙니다.');
              } else {
                publisher.publishAudio(mute);
                setMute(!mute);
              }
              // target.subscribeToAudio(mute);
            }}></img> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMiddle;
