/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import green from 'assets/chatImages/bigreen.png';
import gotIdea from 'assets/chatImages/got_idea.png';
import muteIcon from 'assets/chatImages/mute.png';
import point from 'assets/chatImages/point.png';
import red from 'assets/chatImages/red.png';
import unmuteIcon from 'assets/chatImages/unmute.png';
import unvoice from 'assets/chatImages/unvoice.png';
import voice from 'assets/chatImages/voice.png';
import volume from 'assets/chatImages/volume.png';
import axios from 'axios';
import { OpenVidu } from 'openvidu-browser';
import { useCallback, useEffect, useState, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbar } from 'react-scrollbars-custom';
import {
  setSessionCheck,
  setViduVoiceToken,
} from 'slice/openViduSessionCheckSlice';
import { setPointOpen } from 'slice/pointModal';

import ChatContext from '../../context/ChatContext';
import UserAudioComponent from './AudioComponent';
import './voiceChatMiddle.css';

interface chatUserProfile {
  user: any;
  index: number;
}
const OPENVIDU_SERVER_URL = 'https://sagang3.duckdns.org';
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
  const [target, setTarget] = useState<any>(true);
  const [voiceToken, setVoiceToken] = useState('');
  const menuModal = useRef<any>();
  const leaveSession = useCallback(() => {
    if (target) {
      setTarget(false);
      console.log('오픈비두 세션종료');
      console.log(session);
      if (session) {
        session.disconnect();
        console.log('보내나');
        axios
          .post('/api/v1/webrtc/voice/remove-user', {
            sessionName: channelInfo.id,
            email: 'ksw',
            token: voiceToken,
          })
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

  const onbeforeunload = (event: any) => {
    console.log('ttt*************************');
    leaveSession();
  };

  useEffect(() => {
    return () => {
      console.log('이거거거거걱거거거');
      if (session) {
        session.disconnect();
        axios
          .post('/api/v1/webrtc/voice/remove-user', {
            sessionName: channelInfo.id,
            email: 'ksw',
            token: voiceToken,
          })
          .then((response: any) => {
            console.log('TOKEN', response);
          })
          .catch();
      }
    };
  }, []);

  // const handleChangeSessionId = e => {
  //   this.setState({
  //     mySessionId: e.target.value,
  //   });
  // };

  // const handleChangeUserName = e => {
  //   this.setState({
  //     myUserName: e.target.value,
  //   });
  // };

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

  const createSession = (sessionId: any) => {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: sessionId });
      console.log(data);
      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/sessions', data, {
          headers: {
            Authorization:
              'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then((response: any) => {
          console.log('CREATE SESION', response);
          resolve(response.data.id);
        })
        .catch(response => {
          var error = Object.assign({}, response);
          if (error?.response?.status === 409) {
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn(
              'No connection to OpenVidu Server. This may be a certificate error at ' +
                OPENVIDU_SERVER_URL,
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                  OPENVIDU_SERVER_URL +
                  '"\n\nClick OK to navigate and accept it. ' +
                  'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                  OPENVIDU_SERVER_URL +
                  '"',
              )
            ) {
              window.location.assign(
                OPENVIDU_SERVER_URL + '/accept-certificate',
              );
            }
          }
        });
    });
  };

  const createToken = (sessionId: any) => {
    return new Promise((resolve, reject) => {
      var data = {};
      axios
        .post(
          OPENVIDU_SERVER_URL +
            '/openvidu/api/sessions/' +
            sessionId +
            '/connection',
          data,
          {
            headers: {
              Authorization:
                'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response: any) => {
          console.log('TOKEN', response);
          resolve(response.data.token);
        })
        .catch(error => reject(error));
    });
  };

  const getToken = useCallback(() => {
    // return createSession(mySessionId).then(sessionId => createToken(sessionId));
    return new Promise((resolve, reject) => {
      axios
        .post('/api/v1/webrtc/voice/get-token', {
          sessionName: channelInfo.id,
          email: 'ksw',
        })
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
      window.addEventListener('beforeunload', onbeforeunload);

      const OV = new OpenVidu();

      var mySession = OV.initSession();
      console.log('오픈비두두두', mySession);
      setSession(mySession);
      dispatcher(setSessionCheck({ value: mySession }));

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
        mySession
          // .connect(tt, { clientData: nickname })
          .connect(tt, { clientData: 'ksw' })
          .then(async () => {
            var devices = await OV.getDevices();
            var videoDevices = devices.filter(
              device => device.kind === 'videoinput',
            );

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

  return (
    <div className="voiceChatMiddle">
      <div className="wrapper">
        <div className="profileWrapper">
          <nav className="menu">
            <input
              type="checkbox"
              className="menu-open"
              name="menu-open"
              id="menu-open"
            />
            <label className="menu-open-button" htmlFor="menu-open">
              <img
                src={gotIdea}
                style={{ width: '28px;', height: '28px' }}
                alt=""
                onClick={() => console.log('dad')}
                ref={menuModal}
              />
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
                <img
                  style={{ width: '40px;', height: '40px' }}
                  src={red}
                  alt=""
                  onClick={leaveSession}
                />
              </a>
            )}

            <a className="menu-item">
              <img
                style={{ width: '25px;', height: '25px' }}
                src={volume}
                alt=""
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
          {/* {userChatName.userEnterNumber.map(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ({ user: any, index }: chatUserProfile) => {
              return <div key={index} className="userProfile"></div>;
            },
          )} */}
          {/* <div className="wrapper">
        <div className="profileWrapper">
      
        </div>
      </div> */}

          {/* {session === undefined ? (
            <img
              className="greenbutton"
              alt=""
              src={green}
              onClick={() => {
                window.alert('음성채팅이 시작됩니다.');
                joinSession();
              }}></img>
          ) : (
            <img
              className="greenbutton"
              alt=""
              src={red}
              onClick={leaveSession}></img>
          )} */}
          <Scrollbar
            style={{ width: '330px', height: '330px' }}
            noScrollX={true}
            maximalThumbYSize={95}>
            {session !== undefined ? (
              <div id="session">
                <div id="session-header">
                  {/* <h1 id="session-title">{mySessionId}</h1> */}
                  {/* <div>session</div> */}
                  {/* <input
                className="btn btn-large btn-danger"
                type="button"
                id="buttonLeaveSession"
                onClick={this.leaveSession}
                value="Leave sessionsss"
              /> */}
                </div>

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
                  {publisher !== undefined ? (
                    <div
                      className="stream-container"
                      onClick={() => handleMainVideoStream(publisher)}>
                      <UserAudioComponent streamManager={publisher} />
                    </div>
                  ) : null}
                  {subscribers.map((sub: any, i: any) => {
                    if (i < 9) {
                      return (
                        <div key={i} onClick={() => handleMainVideoStream(sub)}>
                          {/* <div>ssss</div> */}
                          <UserAudioComponent streamManager={sub} />
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
  );
};

export default ChatMiddle;
