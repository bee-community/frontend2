import React from 'react';
import styled from 'styled-components';

const Source = styled.video`
  width: 0.5px;
`;

function OpenViduAudioComponent(props: any) {
  const audioRef = React.useRef<any>();

  React.useEffect(() => {
    if (props.streamManager && !!audioRef) {
      props.streamManager.addVideoElement(audioRef.current);
    }
    return () => {};
  }, []);

  return <Source autoPlay={true} ref={audioRef} />;
}

export default OpenViduAudioComponent;
