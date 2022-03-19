import RequestBox from 'components/RequestBox';
import { ShadowBox } from 'components/ShadowBox';
import * as React from 'react';
import { useState } from 'react';

import { Title, RequestBoxsWrap } from './styles';

function RequestBoard() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  return (
    <>
      <Title>
        <span>게시판 추가요청</span>
        <button className="new-board-request">새로운 게시판 요청</button>
      </Title>
      <ShadowBox>
        <RequestBoxsWrap>
          <RequestBox isDetailsOpen={isDetailsOpen} />
          <RequestBox isDetailsOpen={isDetailsOpen} />
          <RequestBox isDetailsOpen={isDetailsOpen} />
        </RequestBoxsWrap>
      </ShadowBox>
    </>
  );
}

export default RequestBoard;
