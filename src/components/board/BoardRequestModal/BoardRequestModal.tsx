import Button2 from 'components/@Shared/Button/Button';
import Input from 'components/@Shared/Input';
import Modal from 'components/@Shared/Modal';

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
        <Button2 css={Styled.ExtendedSubmitButton}>요청</Button2>
      </Styled.TextWrapper>
    </Modal>
  );
};

export default BoardRequestModal;
