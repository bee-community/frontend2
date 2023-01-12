import Button from '@components/@Shared/Button';
import Input from '@components/@Shared/Input';
import Modal from '@components/@Shared/Modal';

import * as Styled from './BoardRequestModal.styles';

export interface BoardRequestModalProps {
  closeModal: () => void;
}

const BoardRequestModal = (props: BoardRequestModalProps) => {
  const { closeModal } = props;
  return (
    <Modal closeModal={closeModal}>
      <Styled.Title>새로운 게시판 요청</Styled.Title>
      <Styled.TextWrapper>
        <Input.Gray customCss={Styled.DicideSizeInput} />
        <Button customCss={Styled.ExtendedSubmitButton}>요청</Button>
      </Styled.TextWrapper>
    </Modal>
  );
};

export default BoardRequestModal;
