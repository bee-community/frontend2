import * as React from 'react';
import { useState } from 'react';

import RequestBox from '@components/RequestBox';
import { ShadowBox } from '@components/ShadowBox';
import Button from '@components/atoms/Button';
import BoardRequestModal from '@components/board/BoardRequestModal';

import { useModal } from '@hooks/@common/useModal';

import { Title, RequestBoxsWrap } from './styles';

function RequestBoard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const {
    state: { isShowModal },
    handler: { openModal, closeModal },
  } = useModal();
  return (
    <>
      <Title>
        <span>게시판 추가요청</span>
        <Button
          buttonType="contained"
          onClick={openModal}
          color="yellow"
          radius="round"
          customCss={{
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

      {isShowModal && <BoardRequestModal closeModal={closeModal}></BoardRequestModal>}
    </>
  );
}

export default RequestBoard;
