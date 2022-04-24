import RequestBox from 'components/RequestBox';
import { ShadowBox } from 'components/ShadowBox';
import Button from 'components/atoms/Button';
import * as React from 'react';
import { useState } from 'react';

import { Title, RequestBoxsWrap } from './styles';

function RequestBoard() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  return (
    <>
      <Title>
        <span>게시판 추가요청</span>
        <Button
          buttonType="contained"
          color="yellow"
          radius="round"
          css={{
            padding: '12px 28px 11px',
          }}>
          새로운 게시판 요청
        </Button>
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
