import React from 'react';

import * as Styled from './styles';

interface IAlert {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  Children: any;
}

const Modal = ({ isOpen, onClose, Children }: IAlert) => {
  return isOpen && (
    <>
      <Styled.BackDrop onClick={() => onClose(!isOpen)} />
      <Styled.Container>
        <Styled.CloseButton onClick={() => onClose(!isOpen)}>
          <Styled.CloseIcon iconName="close"/>
        </Styled.CloseButton>
        {Children}
      </Styled.Container>
    </>
  );
};

export default Modal;