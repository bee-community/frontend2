import Dimmed from 'components/@Shared/Dimmed';
import { PropsWithChildren, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import * as Styled from './Modal.styles';

export interface ModalProps {
  closeModal: () => void;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { closeModal, children } = props;

  const onClickDimmed = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return createPortal(
    <Dimmed onClick={onClickDimmed}>
      <Styled.root>{children}</Styled.root>
    </Dimmed>,
    document.querySelector('#root') as Element,
  );
};

export default Modal;
